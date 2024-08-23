var n = sessionStorage.getItem("on_load_counter");

if (n === null) {
  n = 0;
}
n++;

console.log(n);

sessionStorage.setItem("on_load_counter", n);

function updateHTML(elmId, value) {
    var elem = document.getElementById(elmId);
    if(typeof elem !== 'undefined' && elem !== null) {
      elem.innerHTML = value;
    }
  }

document.getElementById("counter").innerHTML = n;