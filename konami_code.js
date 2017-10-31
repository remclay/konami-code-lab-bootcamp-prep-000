const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var body = document.getElementsByTagName('body');
  let i = 0;

  document.addEventListener('keydown', keydownTracker);
  function keydownTracker(e){
    const keyValue = parseInt(e.which || e.detail);
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
