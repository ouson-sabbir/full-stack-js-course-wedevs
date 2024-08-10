document.addEventListener("DOMContentLoaded", () => {
  const selectEl = document.getElementById("select-btn");
  const modifyEl = document.getElementById("modify-btn");
  const fetchEl = document.getElementById("fetch-btn");

  //console log from Input Event
  const inputEl = document.querySelector("input");
  inputEl.addEventListener("keyup", (event) => {
    console.log(event.target.value);
  });

  // Select all elements on click on "selectEl" and console log them
  selectEl.addEventListener("click", () => {
    const boxEl = document.getElementsByClassName("box");

    for (const iterator of boxEl) {
      console.log(iterator.textContent);
      //set border color for selected box
      iterator.style.border = "5px solid black";
    }
  });

  // Modify any content on click on "modifyEl" button
  modifyEl.addEventListener("click", () => {
    const box1El = document.getElementById("box1");
    const box2El = document.getElementById("box2");
    const box3El = document.getElementById("box3");

    box1El.innerText = "Modified";
    box2El.style.backgroundColor = "black";
    box3El.innerHTML = `<strong>Box</strong>`;
  });

  // Fetch data from jsonplaceholder on click on "fetchEl" button and log the data
  fetchEl.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const tenPost = data.splice(0, 10);
        tenPost?.forEach((post) => {
          console.log(`Post Title-${post?.id}: ${post?.title}`);
        });
      });
  });
});