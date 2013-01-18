var findLastName = function(firstName, callback) {
  var lastName = 'Yoder';
  callback(lastName); 
}

var Person = function(name) {
  this.firstName = name;
  this.sayYourName = function() {
    var self = this;
    findLastName(this.firstName, function(lastName) {
      log('my name is ' + self.firstName + ' ' + lastName);
    });
  };
}

var me = new Person('Paul');
me.sayYourName();
