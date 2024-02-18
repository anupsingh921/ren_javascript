//Q1-3
index.html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <button onclick="alert('System error warning 1!!!')"> Error1 </button>
  <button onclick="alert('System error warning 2!!!')"> Error2 </button>
  <button onclick="alert('System error warning 3!!!')"> Error3 </button>
  <br>
  <br>
  <br>
  <h1>BOOKMARKS</h1>
  <a href="https://google.com/"><button id="google">Google</button></a>
  <a href="https://cricbuzz.com"><button id="cricbuzz">Cricbuzz</button></a>
  <a href="https://leetcode.com"><button id="leetcode">Leetcode</button></a>
  <script src="script.js"></script>
</body>

</html>

style.css
html {
  height: 100%;
  width: 100%;
}
body{
  background-color: #7c61bd;
  font-family: Arial, Helvetica, sans-serif;
}
h1{
  padding: 6px 56px;
}
button{
  margin: 34px;
  padding: 8px 18px;
  border-radius: 5px;
  font-weight: bolder;
  box-align:center;
  border: 5px solid red;
  background-color: yellow;
  
}

script.js
document.getElementById("google").addEventListener("click",function(){
  window.location="https://www.google.com";
  win.focus();
})
document.getElementById("cricbuzz").addEventListener("click",function(){
  window.location="https://www.cricbuzz.com";
  win.focus();
})
document.getElementById("leetcode").addEventListener("click",function(){
  window.location="https://www.leetcode.com";
  win.focus();
})

//Q4
index.html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Website Content Fetcher</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Website Content Fetcher</h1>
  <div id="content"></div>

  <script src="script.js"></script>
</body>
</html>


style.css
html {
  height: 100%;
  width: 100%;
}
body {
  font-family: Arial, sans-serif;
  background-color: antiquewhite;
}
h1{
  background-color: cyan;
  border:2 px solid black;
  padding:16px 4px;
}





script.js
function fetchContent() {
  fetch('https://jsonplaceholder.typicode.com/todos/1') 
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('content').innerText = data;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}


fetchContent();
setInterval(fetchContent, 5000);

//Q5
index.html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div id="bulb" class="box bulb">
    <img src="https://th.bing.com/th/id/OIP.XYMLmRFj1CkjoCFfHzthQAHaFj?rs=1&pid=ImgDetMain">
  </div>
  <script src="script.js"></script>
</body>

</html>

style.css
html {
  height: 100%;
  width: 100%;
}

body {
  background-color: darkviolet;
}

.bulb {
  width: 57%;
  height: 86%;
  background-color: #d6d912;
  padding: 45px;

}

img {
  width: 55%;
  height: 50%;
  padding: 43px;
}

.box {
  height: 86%;
  width: 57%;
  padding: 45px;

}
script.js
setInterval(async function(){
  document.querySelector("#bulb").classList.toggle("bulb")
},300)    







