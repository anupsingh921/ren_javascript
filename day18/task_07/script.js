
class PasswordGenerator {
  // constructor(password) {
  //   this.password = password;
  // }

  generateStrongPassword(length) {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * chars.length)
      pass += chars.substring(index, index + 1)
    }
    this.password = pass;
  }

  generateWeakPassword(length) {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    let pass = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * chars.length)
      pass += chars.substring(index, index + 1)
    }
    this.password = pass;
  }

  generateSuperStrongPassword(length) {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%?/>.<,:;}]{[+-=_\|^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * chars.length)
      pass += chars.substring(index, index + 1)
    }
    this.password = pass;
  }

  generateFunnyPassword() {
    let fun = ["funny","password","qwerty","123456","LOL","boiled-egg","single","lmao","funny-emoji","no-password","try-again","halwa","guess-it","free"];
    let random = Math.floor(Math.random() * fun.length)
    this.password = fun[random];
  }
}

let pwdbox = document.getElementById('pwd-textbox');

strongPass.addEventListener('click',()=>{
  let len = parseInt(document.getElementById('length').value);
  let passw = new PasswordGenerator();
  passw.generateStrongPassword(len);
  pwdbox.value = passw.password;
})
superPass.addEventListener('click',()=>{
  let len = parseInt(document.getElementById('length').value);
  let passw = new PasswordGenerator();
  passw.generateSuperStrongPassword(len);
  pwdbox.value = passw.password;
})
weakPass.addEventListener('click',()=>{
  let len = parseInt(document.getElementById('length').value);
  let passw = new PasswordGenerator();
  passw.generateWeakPassword(len);
  pwdbox.value = passw.password;
})
funnyPass.addEventListener('click',()=>{
  let len = parseInt(document.getElementById('length').value);
  let passw = new PasswordGenerator();
  passw.generateFunnyPassword();
  console.log(passw);
  pwdbox.value = passw.password;
})