const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase= "abcdefghijklmnopqrstuvwxyz"
const numberSet = "0123456789"
const symbolSet = "~!@#$%^&*()_+-="

const passBox = document.getElementById("pass-box")
const totalChar =  document.getElementById("total-char")
const upperCheck = document.getElementById("upper-case")
const lowerCheck = document.getElementById("lower-case")
const numberCheck = document.getElementById("numbers")
const symbolCheck = document.getElementById("symbols")

const getRandomData =(dataSet)=>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]

}

const passwordGenerate = (password="")=>{
    if(upperCheck.checked){
        password += getRandomData(upperCase)
    }
    if(lowerCheck.checked){
        password += getRandomData(lowerCase)
    }
    if(numberCheck.checked){
        password += getRandomData(numberSet)
    }
    if(symbolCheck.checked){
        password += getRandomData(symbolSet)
    }
    // looping the function till the totalchar
    if(password.length <totalChar.value){
        return passwordGenerate(password)
    }

    // triming the extra values
   finalPass = truncateString(password, totalChar.value)
    // adding dynamically the generated pass in the ui
   passBox.innerHTML = finalPass
}



document.getElementById("btn").addEventListener(
    "click",
    function(){
       passwordGenerate(); 
    }
)

function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomBackgroundColor() {
    const mainElement = document.querySelector(".main");
    mainElement.style.backgroundColor = getRandomColor();
}

// Call the function to set the random background color on page load
setRandomBackgroundColor();