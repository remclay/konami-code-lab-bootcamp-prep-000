const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var body = document.getElementsByTagName('body');
  let i = 0;

  body.addEventListener('keydown', (event));
  function keydownTracker(e){
    const keyValue = parseInt(event.key);
    debugger
    if (key === code[i]) {
      i++;
      if (i === code.length) {
        alert("Congratulations!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
