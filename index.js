let length = 15
function generatePassword() {
  
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

 
  let password1 = '';
  let password2 = '';


  for (let i = 0; i < length; i++) {
    password1 += characters[Math.floor(Math.random() * characters.length)];
    password2 += characters[Math.floor(Math.random() * characters.length)];
  }


  document.getElementById('password1').textContent = password1;
  document.getElementById('password2').textContent = password2;
}
