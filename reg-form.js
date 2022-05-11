console.log("Page is ready!!");
console.log(localStorage);
let fName, lName, age, gender, num, address, email, uName, psw, pName, pNum;

function getData() {
  try {
    const dataOutput = document.getElementById("data_output");
    for (let i = 0; i <= localStorage.length - 1; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);

      dataOutput.innerHTML += `${key} : ${value}<br />`;
    }
  } catch (err) {
    console.log(err);
  }
}

function saveData() {
  try {
    console.log("in function");
    fName = document.getElementById("firstName").value;
    lName = document.getElementById("lastName").value;
    age = document.getElementById("age").value;
    // gender = document.getElementById("gender").value;
    num = document.getElementById("phNum").value;
    address = document.getElementById("address").value;
    email = document.getElementById("email").value;
    uName = document.getElementById("userName").value;
    psw = document.getElementById("pass").value;
    pName = document.getElementById("parentName").value;
    pNum = document.getElementById("parentNum").value;

    localStorage.setItem("fName", fName);
    localStorage.setItem("lName", lName);
    localStorage.setItem("age", age);
    // localStorage.setItem("gender", gender);
    localStorage.setItem("num", num);
    localStorage.setItem("address", address);
    localStorage.setItem("email", email);
    localStorage.setItem("uName", uName);
    localStorage.setItem("password", psw);
    localStorage.setItem("pName", pName);
    localStorage.setItem("pNum", pNum);

    window.location.href = "data.html";
  } catch (err) {
    console.log(err);
  }
}
