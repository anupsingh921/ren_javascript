//index.html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  Hello world
  <script src="script.js"></script>
</body>

</html>

//style.css
html {
  height: 100%;
  width: 100%;
}



//Q1-Q3
let repeatAction = true;

const eligibleToDrive = (age) => {
  return age >= 18 ? true : false;
}

while (repeatAction) {
  let age = prompt("Enter your age");
  age = Number.parseInt(age);

  //q3logicpart
  if (age < 0) {
    console.error("Please enter a valid age");
    break;
  }

  if (eligibleToDrive(age)) {
    alert("Yes, you are eligible to drive");
  } else {
    alert("No,You are not eligible to drive");
  }

  repeatAction = confirm("Do you want to perform the action again?");
}


//Q4
let number = prompt("Enter your number : ")
number = Number.parseInt(number)

if (number > 4) {
  location.href = "https://google.com"
}

//Q5
let color = prompt("Enter the page background color which you like : ")
document.body.style.background = color

//Task_2

let userChoice = prompt("Enter Snake, Water, or Gun : ");
let cpuIndex = Math.floor(Math.random() * 3);
let cpuChoice = ["Snake", "Water", "Gun"][cpuIndex];

const determineWinner = (cpu, user) => {
  if (cpu === user) {
    return "Nobody";
  } else if (cpu === "Snake" && user === "Water") {
    return "CPU";
  } else if (cpu === "Snake" && user === "Gun") {
    return "User";
  } else if (cpu === "Gun" && user === "Water") {
    return "User";
  } else if (cpu === "Gun" && user === "Snake") {
    return "CPU";
  } else if (cpu === "Water" && user === "Snake") {
    return "User";
  } else if (cpu === "Water" && user === "Gun") {
    return "CPU";
  }
};

let gameResult = determineWinner(cpuChoice, userChoice);
document.write(`CPU: ${cpuChoice} <br> User: ${userChoice} <br>The winner is: ${gameResult.toUpperCase()}`);


