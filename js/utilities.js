function log(message) {
  var logger = _.isObject(message) ? logObject : logValue;
  var logMessage = logger(message);
  $(function() {
    $('body').append(logMessage + '<br /><br />');
  });
}

function logValue(value) {
  return _.isFunction(value) ? 'function()' : value;
}

function logObject(objectValue) {
  if (isDate(objectValue)) {
    return logDate(objectValue);
  }
  var keys = _.keys(objectValue);
  if (keys.length === 0) {
    return 'the object has no properties';
  }
  var message = '';
  for (i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    message = message + key + ' = ' + logValue(objectValue[key]) + '<br />';
  }
  return message;
}

function isDate(object) {
  return object.getMonth;
}

function logDate(date) {
  return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds();
}

$(function() {
  $('body').effect('highlight', { color: 'yellow' }, 1000);
});

function wait(timeoutSeconds, func) {
  setTimeout(func, timeoutSeconds * 1000);
}

function globalVariableCount() {
  var count = 0;
  for (p in window) {
    count++;
  }
  return count;
}
