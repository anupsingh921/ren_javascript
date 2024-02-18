//index.html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hacker Simulation </title>
<link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="console"></div>

  <script src="script.js"></script>
</body>
</html>

//style.css
html {
  height: 100%;
  width: 100%;
}

body {
  font-family: 'Courier New', Courier, monospace;
  color: #15032b;
  background-image: url("https://rsk-cyber-security.com/wp-content/uploads/2022/11/Untitled-design.png");
  background-repeat:no-repeat ;
  background-size: cover;
  text-align: center;
  padding: 16px 320px 18px 4px;
}

#console div{
  font-weight: bolder;
  margin:10px;
  font-size:24px;
}
.blink {
  animation: blink-animation 1s steps(5, start) infinite;
  -webkit-animation: blink-animation 1s steps(5, start) infinite;
}

@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}

@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</meta>

//stle.js
async function hack() {
  const consoleElement = document.getElementById('console');
  const log = (text) => {
    consoleElement.innerHTML += `<div>${text}</div>`;
  };

  log('Initializing Hack Program...');
  await sleep(1000);
  log('Hacking into the mainframe...');
  await sleep(1500);
  log('Bypassing firewall...');
  await sleep(2000);
  log('Accessing encrypted data...');
  await sleep(3000);
  log('Cracking security protocols...');
  await sleep(1500);
  log('Gaining root access...');
  await sleep(3000);
  log('Extracting sensitive information...');
  await sleep(2000);
  log('Encrypting data transmission...');
  await sleep(1800);
  log('Covering tracks...');
  await sleep(3000);
  log('Initiating cyber attack...');
  await sleep(4000);
  log('Uploading malware payload...');
  await sleep(1500);
  log('Hacking successful!');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

hack();
</head>