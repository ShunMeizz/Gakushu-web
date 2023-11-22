function Multiply() {
    const num1 = parseFloat(document.getElementById("firstNumber").value);
    const num2 = parseFloat(document.getElementById("secondNumber").value);
    const result = document.getElementById("result");
    result.textContent = "The Result is "+num1*num2;
}

function Divide() {
    const num1 = parseFloat(document.getElementById("firstNumber").value);
    const num2 = parseFloat(document.getElementById("secondNumber").value);
    const result = document.getElementById("result");
    if (num2 === 0) {
        result.textContent = "Cannot divide by zero!";
    } else {
        result.textContent = "The Result is "+num1/num2;
    }
}
function EnterRandom() {
    const num = parseInt(document.getElementById("randomnum").value, 10);
    const randomNumber = Math.round(Math.random() * 10);
    const result2 = document.getElementById("result2");
    if (num === randomNumber) {
        result2.textContent = "GOOD WORK! Random Number is "+randomNumber;
    } else {
        result2.textContent = "NOT MATCHED. Random Number is "+randomNumber;
    }
}
function Largest() {
    const num1 = parseFloat(document.getElementById("firstNum").value);
    const num2 = parseFloat(document.getElementById("secondNum").value);
    const num3 = parseFloat(document.getElementById("thirdNum").value);
    const result3 = document.getElementById("result3");
    if (num1>=num2 && num1>=num3) {
        result3.textContent = "The largest is "+num1;
    } else if(num2>=num1 && num2>=num3) {
        result3.textContent = "The largest is "+num2;
    }else if(num3>=num2 && num3>=num1){
        result3.textContent = "The largest is "+num3;
    }
}
function ThreeSameorNot(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const result4 = document.getElementById("result4");
    if(num1===num2 && num1===num3){
        result4.textContent = "30"; 
    }else if(num1===num2 || num1===num3 || num2===num3){
        result4.textContent = "40"; 
    }else{
        result4.textContent = "20"; 
    }
}
function reverseString(){
    const text = document.getElementById("entertext").value;
    const reversedText = text.split('').reverse().join('');
    document.getElementById("result5").textContent = "Reversed String: " + reversedText;
}
function CheckPalindrome() {
    const inputText = document.getElementById("yourtext").value;
    const cleanedText = inputText.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedText = cleanedText.split('').reverse().join('');

    if (cleanedText === reversedText) {
        document.getElementById("result6").textContent = "The entered string is a palindrome!";
    } else {
        document.getElementById("result6").textContent = "The entered string is not a palindrome.";
    }
}
function TypeofAngle(){
    const angle = parseFloat(document.getElementById("inputAngle").value);
    const result7 = document.getElementById("result7");
    if(angle>0 && angle<90){
        result7.textContent = "Acute Angle";
    }else if(angle===90){
        result7.textContent = "Right Angle";
    }else if(angle>90 && angle<180){
        result7.textContent = "Obtuse Angle";
    }else if(angle==180){
        result7.textContent = "Straight Angle";
    }
}