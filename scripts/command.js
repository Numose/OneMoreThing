var Command = function (obj) {
  Task.call(this);
  this.type = obj.type;
  this.name = obj.name;
  this.img = obj.img;
  this.text = obj.text;
};

Command.prototype = Object.create(Task.prototype);
Command.prototype.constructor = Command;
