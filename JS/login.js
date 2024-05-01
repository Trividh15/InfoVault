function Redirect(event) {
  event.preventDefault();
  const Email = document.getElementById("email").value;
  const Password = document.getElementById("password").value;

  if (Email === "" && Password === "") {
    window.prompt("Email and Password is empty");
  } else {
    window.location.href = "Home.html";
  }
}


function popup() {
  var form = document.querySelector('.wrapper');
  form.style.display = 'flex'; 
 
 
  var welcomeMsg = document.getElementById('welcomeMsg');
  welcomeMsg.style.display = 'none';
 }
 