// == == == == game board and pieces functionality == == == ==

// set up board template engine
_.templateSettings.variable = 'piece';
var template = _.template(
  $('script.template').html()
);

// create game pieces using subclass constructors
var createGamePieces = function() {
  var arr = [];
  for (var key in taskDB) {
    _.each(taskDB[key], function(item) {
      if (key === 'people') {
        arr.push(new Person(item));
      } else if (key === 'resources') {
        arr.push(new Resource(item));
      } else if (key === 'commands') {
        arr.push(new Command(item));
      }
    });
  }
  return arr;
};
var gamePieces = createGamePieces();

// populate game pieces to game board in a random order

var populatePieces = function() {
  _.each((_.shuffle(gamePieces)), function(piece) { piece.insertOnBoard(); });
};
populatePieces();

// == == == == prompts functionality == == == ==

var prompts = [];

//initial Prompt that appears on page
var initializePrompt = function () {
  var promptCount = 1;

  var tempArr = [];

  for (var key in taskDB) {
    var rand = Math.floor(Math.random() * taskDB[key].length);
    tempArr.push(taskDB[key][rand]);
  }

  var promptObject = {};
  var promptId = Math.random() * 1000000000000000000;
  promptObject[tempArr[0].type] = tempArr[0].name;
  promptObject[tempArr[1].type] = tempArr[1].name;
  promptObject[tempArr[2].type] = tempArr[2].name;
  promptObject.id = promptId;
  new Audio('RobinOneMoreThing.mp3').play();
  prompts.push(promptObject);
  $('#prompts').prepend('<div class="prompt" data-prompt-id="' + promptId + '"><strong>' + tempArr[0].text + '</strong> wants you to <strong>' + tempArr[2].text + '</strong>' + tempArr[1].text + '</div>');
};

// == == == == gameplay functionality == == == ==

//starts games after clicking 'Start Game' button
$('#startButton').on('click', function() {
  $('#startButton').hide();
  initializePrompt();
  var promptCountdown = 5000;

  //every minute, level gets harder
  window.setInterval(function() {
    promptCountdown = promptCountdown - 10000;
  }, 60000);

  //initialize a new prompt every x minutes
  window.setInterval(function() {
    if (prompts.length < 5) {
      initializePrompt();
    } else {
      $('#you_lose').show();
      $('#restartButton').show();
    }
  }, promptCountdown);

});

//restarts game - janky forced reload
$('.restartButton').on('click', function() {
  location.reload();
});

//initial score for player to be displayed
var score = 0;

// scan prompts array for correct answers
var compareAnswerToPromptsArr = function(answer) {
  var isCorrectAnswer = false;
  _.each(prompts, function(prompt) {
    if (prompt.name === answer.name && prompt.resource === answer.resource && prompt.command === answer.command) {
      isCorrectAnswer = true;
      $('.prompt[data-prompt-id="' + prompt.id + '"').remove(); // move this down later
      prompts = _.filter(prompts, function(test) { // todo: fix this cheesey crap
        return test !== prompt;
      });
    }
  });
  return isCorrectAnswer;
};

// 
var updatePromptsViewOnAnswer = function(answer) {
  if (compareAnswerToPromptsArr(answer)) {
    score++;
    $('#scoreText').text(score);
  }
};

// keep track of picks and submit answer to checkPrompts
var saveAnswers = function() {
  var answer = {};
  return function(pickType, pickName) {
    answer[pickType] = pickName;
    if (Object.keys(answer).length >= 3) { // used Object.keys instead of a counter variable in case they select the same type more than once
      updatePromptsViewOnAnswer(answer);
      answer = {};
    }
  };
};

var saveAnswersInstance = saveAnswers();

// piece click event handler
$('.piece').on('click', function() {
  saveAnswersInstance( $(this).data('type'), $(this).data('name'));
});

// hard mode: random game piece does annoy
$('button#hard_mode').on('click', function() {
  setInterval(function() {
    _.sample(gamePieces, 1)[0].annoy();
  }, 500);
  setInterval(function() {
    $('#board').html('');
    populatePieces();
  }, 8000);
});
