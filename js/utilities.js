function log(message) {
  $(function() {
    $('body').append(message + '<br />').
      effect('highlight', { color: 'yellow'} , 1000);
      
  });
}

function globalVariableCount() {
  var count = 0;
  for (p in window) {
    count++;
  }
  return count;
}
