//  js1 change link (some problem)
  function changeLink() {
var nav = document.querySelector("nav")
var node = document.createElement("a")
var textNode = document.querySelectorAll("span");
node.appendChild(textNode);
node.setAttribute('href', 'http://www.google.com')
nav.appendChild(node); 
  }
//    js2 change header 
  var cn = document.querySelector("h1");
  function ChangeColorHeader(){
     cn.classList.add("cn")
  }
//   js 3 change bg 
function changeBackground() {
    document.body.style.background = "#DCDCDC"
    alert("bg color changed!")
 }
//   js4 remove 50 character

function RemoveP(){
    var rm = document.getElementsByClassName("rm")
    for (let i = 0; i < rm.length; i++) {
    let mr = rm[i]
     mr.lastChild(49)
     
        
    }
}
 