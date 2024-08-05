const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function emailSend() {
  var username = document.getElementById('username').value;
  var  email= document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  var messagebody = "Name:"+ username +
  "<br> Phone:" + phone +
  "<br> Email:" + email +
  "<br> Message:" + message;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "saisharvesh.2003@gmail.com",
    Password : "8F937F522A9B6AAEC91CDEA0CF7586AD6B2E",
    To : 'saisharvesh.2003@gmail.com',
     
    From : document.getElementById('email').value,
    Subject : "From ADAM Webstie",
    Body : messagebody
}).then(
  message => {
    if(message=='OK'){
      swal("Secussful", "You clicked the button!", "success");
    }
    else{
      swal("Error", "You clicked the button!", "error");
    }
  }
);

}
