document.addEventListener('DOMContentLoaded', () => {
    // Task Management Section
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    const createButton = (iconClass, onClick) => {
        const button = document.createElement('button');
        button.innerHTML = `<i class="${iconClass}"></i>`;
        button.addEventListener('click', onClick);
        return button;
    };

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task-text');
        taskSpan.textContent = taskText;

        const taskActions = document.createElement('div');
        taskActions.classList.add('task-actions');

        taskActions.appendChild(createButton('fas fa-edit', () => editTask(taskSpan)));
        taskActions.appendChild(createButton('fas fa-trash', () => deleteTask(taskItem)));
        taskActions.appendChild(createButton('fas fa-check', () => completeTask(taskItem)));

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(taskActions);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    };

    const editTask = (taskSpan) => {
        const newTaskText = prompt('Edit your task:', taskSpan.textContent);
        if (newTaskText?.trim()) {
            taskSpan.textContent = newTaskText.trim();
        }
    };

    const deleteTask = (taskItem) => taskList.removeChild(taskItem);
    const completeTask = (taskItem) => taskItem.classList.toggle('task-completed');

    addTaskBtn.addEventListener('click', addTask);

    // Weather Search Section
    const weatherApiKey = '728f4c373210d96b512a0f9ef6e681f3';
    const cityInput = document.getElementById('city-input');
    const searchWeatherBtn = document.getElementById('search-weather-btn');
    const weatherResult = document.getElementById('weather-result');

    searchWeatherBtn.addEventListener('click', searchWeather);

    function searchWeather() {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        }
    }

    function fetchWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayWeather(data, city))
            .catch(error => console.error('Error fetching weather data:', error));
    }

    function displayWeather(data, city) {
        if (data.cod === '404') {
            weatherResult.innerHTML = '<p>City not found. Please try again.</p>';
            return;
        }

        const { name, main, weather, wind } = data;
        const weatherHtml = `
            <h3>${name}</h3>
            <p>${weather[0].description}</p>
            <p>Temperature: ${main.temp}°C</p>
            <p>Min: ${main.temp_min}°C, Max: ${main.temp_max}°C</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Wind Speed: ${wind.speed} m/s</p>
        `;
        weatherResult.innerHTML = weatherHtml;

        fetchForecast(city);
    }

    function fetchForecast(city) {
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}&units=metric`;

        fetch(forecastUrl)
            .then(response => response.json())
            .then(data => displayForecast(data))
            .catch(error => console.error('Error fetching forecast data:', error));
    }

    function displayForecast(data) {
        const dailyForecasts = {};

        data.list.forEach(item => {
            const date = new Date(item.dt_txt).toLocaleDateString();
            if (!dailyForecasts[date]) {
                dailyForecasts[date] = item;
            }
        });

        const forecastHtml = Object.values(dailyForecasts).slice(0, 5).map(item => {
            const date = new Date(item.dt_txt).toLocaleDateString();
            return `
                <div class="forecast-item">
                    <h4>${date}</h4>
                    <p>${item.weather[0].description}</p>
                    <p>Temp: ${item.main.temp}°C</p>
                    <p>Min: ${item.main.temp_min}°C, Max: ${item.main.temp_max}°C</p>
                </div>
            `;
        }).join('');

        const forecastContainer = document.createElement('div');
        forecastContainer.classList.add('forecast');
        forecastContainer.innerHTML = forecastHtml;

        weatherResult.appendChild(forecastContainer);
    }
});
