//index.html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Digital Clock</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="clock">
    <div id="time"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>

  
  //style.css
  html {
    height: 100%;
    width: 100%;
  }
  body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-image: url("https://files.123freevectors.com/wp-content/original/107765-royal-blue-abstract.jpg");
  }
  
  .clock { 
    color: #480545;
    font-weight:780;
    font-size:60px;
    background-color: #e9f1e9;
    padding:46px;
    border:23px solid red;
    border-radius: 34px;
  }
  
  //script.js
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').innerText = timeString;
  }
  
  updateClock();
  setInterval(updateClock, 1000);
  