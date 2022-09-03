function getPassword() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]_-=";
  var passwordLength = Number(document.getElementById("passLenght").value);
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}

function clipboardBtn() {
  var txtCopied = document.getElementById("password"); 
    txtCopied.select();
    txtCopied.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(txtCopied.value);
    alert("Copied!")
}

function Refresh(){
  window.location.reload();
}

