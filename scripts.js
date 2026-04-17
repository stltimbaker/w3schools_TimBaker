function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkMinutes(m);
  s = checkSeconds(s);
  document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkMinutes(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function checkSeconds(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10

    // if (i == 15) {document.getElementById('clock').style.backgroundColor="yellow"}
    if (i == 15 || i == 30 || i == 45 || i == 0) {document.getElementById('clock').style.backgroundColor="yellow"}
    //else if (i == 45) {document.getElementById('clock').style.backgroundColor="green"}
    //else if (i == 59) {document.getElementById('clock').style.backgroundColor="red"}
    else {document.getElementById('clock').style.backgroundColor="white"};

    return i;
}