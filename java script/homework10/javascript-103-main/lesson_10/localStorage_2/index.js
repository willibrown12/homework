function init() {
  

  const color= document.getElementById("color")
  color.addEventListener("change",() =>{
  const color1= document.getElementById("color").value
  localStorage.setItem("backroundcolor",color1)
  draw(localStorage.getItem("currentUserName"))
})
  loadUserFromLS();
  const setUserNameButton = document.getElementById("setUserNameButton");
  setUserNameButton.addEventListener("click", () => {
    const inputUserName = document.getElementById("userName").value;
    if (inputUserName) {
      localStorage.setItem("currentUserName", inputUserName);
      draw(inputUserName);
    }
  });
}
function loadUserFromLS() {
  const currentUserName = localStorage.getItem("currentUserName");
  if (currentUserName) {
    draw(currentUserName);
  }
}

function draw(userName) {
  const helloUserHeader = document.getElementById("hiUserNameHeader");
  helloUserHeader.innerText = `Hello ${userName}`;
  const body=document.getElementById("backround")
  body.style.background=localStorage.getItem("backroundcolor")
}
init();
