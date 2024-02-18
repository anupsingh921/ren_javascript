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
  Hello world
  <script src="script.js"></script>
</body>

</html>

style.css
html {
  height: 100%;
  width: 100%;
}

script.js
function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;

    script.onload = () => {
      resolve();
    };

    script.onerror = (error) => {
      reject(error);
    };

    document.head.appendChild(script);
  });
}

const scriptUrl = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js';
loadScript(scriptUrl)
  .then(() => {
    alert('Script loaded successfully');
  })
  .catch((error) => {
    console.error('Error loading script:', error);
  });


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
  Hello world
  <script src="script.js"></script>
</body>

</html>


style.css
html {
  height: 100%;
  width: 100%;
}




script.js
async function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    
    script.onload = () => {
      resolve();
    };
    script.onerror = (error) => {
      reject(error);
    };
    document.head.appendChild(script);
  });
}

async function main2() {
  try {
    const scriptUrl = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js'; 
    await loadScript(scriptUrl);
    alert('Script loaded successfully');
  } catch (error) {
    console.error('Error loading script:', error);
  }
}

main2();


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
  Hello world
  <script src="script.js"></script>
</body>

</html>

style.css
html {
  height: 100%;
  width: 100%;
}
script.js
async function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;

    script.onload = () => {
      resolve();
    };
    script.onerror = (error) => {
      reject(error);
    };
    document.head.appendChild(script);
  });
}

function delayedReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise is been rejected after 3 seconds'));
    }, 3000);
  });
}

async function getValue() {
  try {
    const result = await delayedReject();
    console.log('Promise is resolved:', result);
  } catch (error) {
    console.error('Error been occurred:', error.message);
  }
}

getValue();

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
  Hello world
  <script src="script.js"></script>
</body>

</html>

style.css
html {
  height: 100%;
  width: 100%;
}

script.js
let promise1 = async () => {
  return new Promise((resolve, reject) => {
          setTimeout(() => {
                  resolve(10)
          }, 2000)
  })
}
let promise2 = async () => {
  return new Promise((resolve, reject) => {
          setTimeout(() => {
                  resolve(20)
          }, 1000)
  })
}
let promise3 = async () => {
  return new Promise((resolve, reject) => {
          setTimeout(() => {
                  resolve(30)
          }, 3000)
  })
}

const execute = async () => {
  console.time("execute")
  //let result1 = await promise1() 
  //let result2 = await promise2() 
  //let result3 = await promise3() 
   //It takes 6 seconds to execute all the promises.

   let result1 = promise1() 
   let result2 = promise2() 
   let result3 = promise3() 
   let combinedResults = await Promise.all([result1, result2, result3])
   console.log(combinedResults)
  //It takes only 3 seconds to execute all the promises.Thus it is faster
  console.log(result1, result2, result3)
  console.timeEnd("execute")
}

execute()
</head>






