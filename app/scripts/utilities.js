function log(message) {
  document.write(message);
}

function globalVariableCount() {
  var count = 0;
  for (p in window) {
    count++;
  }
  return count;
}
