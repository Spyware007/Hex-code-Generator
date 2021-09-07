alert("To be honest, I took a little help of Youtube to make this code. Hope you Like it")
var body = document.getElementsByTagName('body');
var btn = document.getElementById('change');
var text = document.getElementById('colour');
var generate = function(){
  newColor = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
  var anas = newColor.length;
  if (newColor.length < 7){
    generate();
  }
}

btn.addEventListener('click', function(){
  generate();
  body[0].style.background=newColor;
  btn.style.color=newColor;
  text.innerText=newColor;
  
});