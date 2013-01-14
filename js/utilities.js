function log(message) {
  var logger = _.isObject(message) ? logObject : logValue;
  $(function() {
    logger(message);
  });
}

function logValue(value) {
  $('body').append(value + '<br />');
}

function logObject(objectValue) {
  var keys = _.keys(objectValue);
  if (keys.length === 0) {
    $('body').append('the object has no properties' + '<br /><br />');
    return;
  }
  var message = '';
  for (i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    message = message + key + ' = ' + objectValue[key].toString() + '<br />';
  }
  $('body').append(message + '<br /><br />');
}

$(function() {
  $('body').effect('highlight', { color: 'yellow' }, 1000);
});

function globalVariableCount() {
  var count = 0;
  for (p in window) {
    count++;
  }
  return count;
}
