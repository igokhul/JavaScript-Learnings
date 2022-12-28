//This way we can write a comment
document.write("<h1>Checking a number is even or odd</h1>");
let x = 3;
let $xamp = 20;
//Checking if variable name is valid
document.write($xamp);
if (x % 2 === 0)
    document.write("<br>Even number");
else
    document.write(`<br> ${$xamp} is even number<br><br>`);



//Checking the usability of button to make a change once clicked
function clickMe() {
    // document.write("<h1>Changing content in the html element</h1>");
    document.getElementById("ChangingText").innerHTML = "Text Changed";
}


//Showing a simple alert using the value got from the input field
function showAlert() {
    let name = document.getElementById("name").value;
    alert(`Hello ` + name);
}


//Checking both value matches
function validatingData() {
    let username = document.getElementById("username").value;
    let userpass = document.getElementById("userpass").value;

    if (username === userpass)
        alert("Username and password matched");
    else
        alert("Username and password does not match")
}

//Getting value from radio button
function radioInput() {
    let Value1 = document.getElementById("Value1");
    let Value2 = document.getElementById("Value2");

    if (Value1.checked == true)
        alert("The selected radio button is " + Value1.value);
    else if (Value2.checked == true)
        alert("The selected radio button is " + Value2.value);
    else
        alert("Nothing selected");
}

//Getting value from dropdown list
function dropdownInput() {
    // Method 1
    // let dropDownValue = document.getElementById("SelectBoxId").value;
    // alert(`Value selected is ${dropDownValue}`);

    // Method 2
    let dropDownValue = document.getElementById("SelectBoxId");
    alert(dropDownValue.options[dropDownValue.selectedIndex].value);
}


//Getting value from tag element
function tagInput() {
    let paraArray = document.getElementsByTagName("p");
    for (let i = 0; i < paraArray.length; i++) {
        paraArray[i].style.fontSize = "50px";
        paraArray[i].style.color = "red";
        paraArray[i].style.fontFamily = "Arial";
        //The below donesn't seems to work idk why
        paraArray[i].style.fontStretch = "expanded";
    }
}