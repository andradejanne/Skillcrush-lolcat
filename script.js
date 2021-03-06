var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();

var updateClock = function(){

  var message = document.getElementById('timeEvent');
  var lolcat = document.getElementById('lolcat');
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

  if (time == partyTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
  } else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
  } else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "TYME TO EAT";
  } else if (time == wakeupTime) {
	image = "https://www.catster.com/wp-content/uploads/2018/01/Orange-tabby-cat-sleeping-with-eyes-closed.jpg";
    messageText = "Not ready yet, sleep more.";
  } else if (time < noon) {
    messageText = "Good morning!";
  } else if (time > evening) {
    messageText = "Good Evening!";
  } else {
    messageText = "Hi Everyone!!";
  }

  message.innerText = messageText;
  lolcat.src = image;

  showCurrentTime();

};

var showCurrentTime = function() {
    // display the string on the webpage
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

   // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }

    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) { seconds = "0" + seconds;}

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;

setInterval( updateClock, oneSecond);

var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText ="Party Over";
      partyTimeButton.style.backgroundColor ="#2980B9";
      // text in the button should read "Party Over"
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PAWTY TIME!";
      partyTimeButton.style.backgroundColor = "#76448A";
      // text in the button should read "PARTY TIME!"
   }
};

var wakeUpEvent = function(){
  wakeUpTime = wakeUpTimeSelector.value
};

var lunchTimeEvent =function(){
  lunchTime = lunchTimeSelector.value
};

var napTimeEvent = function(){
  napTime = napTimeSelector.value
};


partyTimeButton.addEventListener("click",partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change',lunchTimeEvent);
napTimeSelector.addEventListener('chnage',napTimeEvent);
