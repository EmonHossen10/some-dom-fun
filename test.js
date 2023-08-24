// **************** Counter function
function increaseNumber() {
  const stringField = document.getElementById("number");
  const string = stringField.innerText;
  const number = parseInt(string);
  const newValue = number + 1;
  stringField.innerText = newValue;
}
function decreaseNumber() {
  const stringField = document.getElementById("number");
  const string = stringField.innerText;
  const number = parseInt(string);
  const newValue = number - 1;
  stringField.innerText = newValue;
}
function reset() {
  const stringField = document.getElementById("number");
  stringField.innerText = "00";
}
// 2- toggle string

function toggle() {
  const textAreaField = document.getElementById("textArea");
  const textAreaValue = textAreaField.value;

  const textAreaField2 = document.getElementById("textArea2");
  const textAreaValue2 = textAreaField2.value;
  console.log(textAreaValue);
  if (textAreaValue === "Hello") {
    textAreaField2.innerText = "World";
  } else {
    alert("Write the work correctly");
  }
}
// 3- password

function password(length) {
  const field = document.getElementById("password");
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result =
      result + characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  field.innerText = result;
  console.log(result);
}
// 4- List Manipulation
function add() {
  let parent = document.getElementById("parent");
  const li = document.createElement("li");
  li.innerText = "This is new list item";
  parent.appendChild(li);
}
function remove() {
  const lastChilde = document.querySelector("li:last-child");
  lastChilde.parentElement.removeChild(lastChilde);
}
//  5. tab details

function tab1() {
  const parent = document.querySelector("#tab-1").parentNode;
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  h2.innerText = "Content for Tab 1";
  p.innerText = "This is the content for Tab 1.";
  parent.appendChild(h2);
  parent.appendChild(p);
  h2.style.fontSize = "40px";
  h2.style.fontWeight = "bold";
  p.style.fontSize = "20px";
  console.log(parent);
}
function tab2() {
  const parent = document.querySelector("#tab-1").parentNode;
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  h2.innerText = "Content for Tab 2";
  p.innerText = "This is the content for Tab 2.";
  parent.appendChild(h2);
  parent.appendChild(p);
  h2.style.fontSize = "40px";
  h2.style.fontWeight = "bold";
  p.style.fontSize = "20px";
  console.log(parent);
}
function tab3() {
  const parent = document.querySelector("#tab-1").parentNode;
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  h2.innerText = "Content for Tab 3";
  p.innerText = "This is the content for Tab 3.";
  parent.appendChild(h2);
  parent.appendChild(p);
  h2.style.fontSize = "40px";
  h2.style.fontWeight = "bold";
  p.style.fontSize = "20px";
  console.log(parent);
}
//  6. hide and show
function show() {
  const pass = document.getElementById("password-show");
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}
