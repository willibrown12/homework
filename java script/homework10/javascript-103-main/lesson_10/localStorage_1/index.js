function init() {
  localStorage.setItem("counter", 1); // set a specific key value in my LS
  const counter = localStorage.getItem("counter"); // get a specific key from my LS
  console.log(counter);
  localStorage.removeItem("counter"); // delete a specific key from my LS
  localStorage.setItem("something_to_delete0", "delete_me");
  localStorage.setItem("something_to_delete1", "delete_me");
  localStorage.setItem("something_to_delete2", "delete_me");
  localStorage.setItem("something_to_delete3", "delete_me");
  localStorage.clear(); // clear ALL local storage data ( object )
}

init();
