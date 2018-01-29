var one,two,total;

function setValues(){
  one = document.getElementById('a').value;
  two = document.getElementById('b').value;
}

function sum() {
  setValues();
  total = one + two;
  alert(total);
}
