document.querySelector('emoji-picker').addEventListener('emoji-click', event => document.getElementById('inputEmoji').value = (event.detail.unicode));

function clipboardBtn() {
  var txtCopied = document.getElementById("inputEmoji"); 
  if ( txtCopied.value != ""){
    txtCopied.select();
    txtCopied.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(txtCopied.value);
    alert("Emoji Copied!")
  } else{
    alert("pick an emoji!")
  }
}

function Refresh(){
  window.location.reload();
}
