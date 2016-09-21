var Person = function (obj) {
  Task.call(this);
  this.type = obj.type;
  this.name = obj.name;
  this.img = obj.img;
  this.text = obj.text;
};

Person.prototype = Object.create(Task.prototype);
Person.prototype.constructor = Person;
Person.prototype.annoy = function() {
  var randomPerson = _.sample(taskDB.people, 1)[0].img;
  $('.piece[data-name="' + this.name + '"] img').attr('src', randomPerson);
};
