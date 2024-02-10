//Q1
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
  <nav>

    <li>Home</li>
    <li>About</li>
    <li>Projects</li>
    <li>ContactInfo</li>

  </nav>
  <script src="script.js"></script>
</body>

</html>

style.css
html, body {
  height: 100%;
  width: 100%;

}

nav{
  display: flex;
  background: #13bebe;
  height:25px;
}

nav li{
  list-style: none;
  padding: 0 28px;
}

script.js
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

//Q2
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
  <table>
    <td>Data1</td>
    <tr>Data2</tr>
    <tr>Data3</tr>
    <tr>Data4</tr>
    <tr>Data5</tr>
  </table>
  <p>Thus we see that "view source button" doesn't has a tbody present</p>
  <script src="script.js"></script>
</body>

</html>

style.css
html {
  height: 100%;
  width: 100%;
}

//Q3
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
  <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </nav>
  <script src="script.js"></script>
</body>

</html>


style.css
html {
  height: 100%;
  width: 100%;
}

nav{
  display: flex;
  background: #e3d8e9;
  height:30px;
}

nav li{
  list-style: none;
  padding: 0 26px;
}

script.js
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

//Q4
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
  <nav>
    <li>Home</li>
    <li>About</li>
    <li>Projects</li>
    <li>Contact</li>
  </nav>
  <script src="script.js"></script>
</body>

</html>


style.css
html {
  height: 100%;
  width: 100%;
}
nav{
  display: flex;
  background: #d0af6c;
}

nav li{
  list-style: none;
  padding: 0 25px;
}

script.js
Array.from(document.getElementsByTagName("li")).forEach((element) =>{
  element.style.background = "cyan";
})    


//Q5
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <p>OPTION D IS CORRECT.</p>
  <script src="script.js"></script>
</body>

</html></head>





