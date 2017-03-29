/* global $*/
$(document).ready(function() {


var ScriptEders = [
    "Usman",
    "Barry",
    "David",
    "Aldair",
    "Nat",
    'Taeiq',
    'Kaysten',
    'Jason',
];

var ScriptEducators = [
  'Micheal',
  'Thai',
  'Josh',
  'David',
];

      $("#child").click(function(){
          
          $('#student').append(ScriptEders[Math.floor(Math.random()*8)] + ', ANSWER MY QUESTIONS!!!!');
          
      });
 
 
      $("#adult").click(function(){
        
          $('#teacher').append(ScriptEducators[Math.floor(Math.random()*4)] + ', ANSWER MY QUESTIONS!!!!');
    
      });
});