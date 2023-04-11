let _span1 = document.querySelector("span:nth-of-type(1)");
let _span2 = document.querySelector("span:nth-of-type(2)")
let _btn = document.querySelector("button");
let num;
function _login() {
  let _flag = 0;
  let _email = document.forms["form"]["email"].value
  let _password = document.forms["form"]["password"].value
  let _space = _email.match(/\s/g);
  _span1.innerHTML = "";
  if (
    _email == null ||
    _email == "" ||
    _email.length < 10 ||
    _email.match(/@/g).length != 1 ||
    _email.search(/@/) < 3 ||
    _email.search(/<script/) >= 0 ||
    _email.search(/~`!@#$%^&*()-+=/) >= 0 ||
    _space != null
  ) {
    _span1.innerHTML = "Your Email in invalid";
    _flag++;
  }
  if (_flag > 0 || num < 5) {
    return false;
  }
}

document.getElementById("pass").addEventListener("keyup", function () {
  let temp = this.value;
  document.querySelector("span:nth-of-type(2)").textContent = "";
  num = 0;
  let txt = "";
  if (temp.search(/[0-9]/) >= 0) {
    num++;
  }
  if (temp.search(/[a-z]/) >= 0) {
    num++;
  }
  if (temp.search(/[A-Z]/) >= 0) {
    num++;
  }
  if (temp.search(/[~!@#$%^&*()]/) >= 0) {
    num++;
  }
  if (temp.length > 8) {
    num++;
  }
  switch (num) {
    case 0:
      txt = "Very Weak☺";
      break;
    case 1:
      txt = "Weak☻";
      break;
    case 2:
      txt = "Normal♦";
      break;
    case 3:
      txt = "Medium♣";
      break;
    case 4:
      txt = "Strong♠";
      break;
    case 5:
      txt = "Very Strong ♥";
      break;
  }

  if (num == 0) {
    document.querySelector("span:nth-of-type(2)").style.color = "red";
  }
  if (num == 1) {
    document.querySelector("span:nth-of-type(2)").style.color =
      "rgb(238, 80, 80)";
  }
  if (num == 2) {
    document.querySelector("span:nth-of-type(2)").style.color = "orange";
  }
  if (num == 3) {
    document.querySelector("span:nth-of-type(2)").style.color =
      "rgb(252, 203, 113)";
  }
  if (num == 4) {
    document.querySelector("span:nth-of-type(2)").style.color =
      "#57643c";
  }
  if (num == 5) {
    document.querySelector("span:nth-of-type(2)").style.color = "green";
  }

  document.querySelector("span:nth-of-type(2)").textContent = txt;
});