var p, q;
q = 0;
function load() {
  p = prompt("Enter your name");
  document.getElementById("any").innerHTML = "Hello " + p;
}
var a,
  b,
  c = false,
  d,
  e = false;
function GenRad() {
  if (q == 0) {
    a = Math.floor(Math.random() * 10);
    document.getElementById("gen").innerHTML = "Random number generated";

    q = 1;
  } else {
    alert("Random value has been generated already");
  }
}

function wr(b) {
  document.getElementById("emp").innerHTML = b;
  d = b;
  c = true;
  console.log(b);
}

function su() {
  if (c == false) alert("Please enter a number");
  else {
    if (confirm("Are you sure that you want to lock the number " + d + " ?")) {
      document.getElementById("hi").style.display = "none";
      document.getElementById("emp").innerHTML =
        "The number " + d + " is locked.";
      e = true;
    }
  }
}

function reveal() {
  if (q == 1 && e == true) {
    if (a == d) {
      alert("Hurray you guessed right!!!!");
    } else alert("Oops, the number was " + a + " better luck next time :(");
    // document.location.reload(true) --> this is to refresh the page
    q = 0;
    document.getElementById("gen").innerHTML = "Generate Random Number";
    c = false;
    document.getElementById("hi").style.display = "block";
    document.getElementById("emp").innerHTML = "X";
    e = false;
  } else if (q == 1 && e != true) {
    alert("please choose a number.");
  } else if (q != 1 && e == true) {
    alert("please generate a number.");
  } else {
    alert("please generate and choose a number ");
  }
}
