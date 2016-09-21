var Resource = function (obj) {
  Task.call(this);
  this.type = obj.type;
  this.name = obj.name;
  this.img = obj.img;
  this.text = obj.text;
};

Resource.prototype = Object.create(Task.prototype);
Resource.prototype.constructor = Resource;

Resource.prototype.annoy = function(time) {
  $('.piece[data-name="' + this.name + '"]').toggleClass('annoy-scale');
};
