function validateLog() {
  //login.html
  var usr = document.getElementById("un").value;
  var pass = document.getElementById("pwd").value;
  if (usr === '' || pass === '')
  {
    alert('cannot be empty!');
    return false;
  }
}
function validateReg()
{
  //Reg.html
  var name = document.getElementById("nm").value;
  var eml = document.getElementById("em").value;
  var pass = document.getElementById("pwd").value;
  var pass1 = document.getElementById("pwd1").value;
if (name === '' || eml=== ''|| pass === ''|| pass1 === '')
  {
    alert('cannot be empty!');
    return false;
  }
  
  if(pwd!==pwd1)
  {
    alert('password does not matching!');
    return false;
  }
}
function validatefrt()
{
  //forgt.html
  var eml = document.getElementById("em").value;
  if (eml === '')
  {
    alert('cannot be empty!');
    return false;
  }
}
//add more validations if needed