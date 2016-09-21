var Task = function() {
  this.type = 'default';
  this.name = 'default';
  this.img = 'default';
  this.text = 'default';
};

Task.prototype.insertOnBoard = function () {
  $('#board').append(template(this));
};

Task.prototype.annoy = function(time) {
  $('.piece[data-name="' + this.name + '"]').toggleClass('annoy-rotate');
};