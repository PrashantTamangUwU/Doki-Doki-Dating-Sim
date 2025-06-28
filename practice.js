const posMessage = [
  "Ah.. Are you free these days ?",
  "Can you go out with me in carnival ?",
  "Miss Alia told me that i'm stuck with you bozo ! be... greatfull /[shys/]",
  "Great ! i'll meet you at the station, bye.. ! ;>",
  "Oh. class has start see you next time bye !!"
];

const posReply = [
  "Who is this ?",
  "what's the rukus.. ?",
  "ahh...",
  "yes",
  ".sigh...",
  "Finish :D"
];


const negMessage = [
  "soob... you so mean ..sob...sob..",
  "why are you still playing games these days ?",
  "I'm not ! i just want you to go out with me.",
  "No ! i'will follow you till the end ! hmmm.",
  "Wait akuto !!!"
];

const negReply = [
  "no thanks..",
  "sorry i am busy.",
  "don't waste my time",
  "sighh.. leave me in peace",
  "/[Action/]: runs away from her",
  "Finish :D"
];


let clickCount = 0;
let i=0;

document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("yes").innerText = posReply[i];
  document.getElementById("message").innerText = "Hey there stop for a sec.. -[breaths heavly] ?";
  document.getElementById("yes").addEventListener("click", function() {
    
    i = clickCount % posMessage.length;


    if(clickCount<5){
      document.getElementById("reply").innerText = posReply[i];

      document.getElementById("yes").disabled = true;
      document.getElementById("no").disabled = true;
      document.getElementById("no").style.opacity = "0.2";


      document.getElementById("optionNo").style.opacity = "0";
    
      setTimeout(()=>{

        document.getElementById("yes").disabled = false;
        document.getElementById("yes").innerText = posReply[i+1];
        document.getElementById("no").innerText = negReply[i+1];
        document.getElementById("message").innerText = posMessage[i];
        document.getElementById("no").disabled = false;
        document.getElementById("no").style.opacity = "1";

        document.getElementById("optionNo").style.opacity = "1";
      }, 2000);
    }
    clickCount++;
  });
});

document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("no").innerText = negReply[i];
  document.getElementById("no").addEventListener("click", function() {
   
    if(clickCount<5){
      i = clickCount % posMessage.length;
      document.getElementById("reply").innerText = negReply[i];

      document.getElementById("no").disabled = true;
      document.getElementById("yes").disabled = true;
      document.getElementById("yes").style.opacity = "0.2";

      document.getElementById("optionYes").style.opacity = "0";
 
      setTimeout(()=>{

      document.getElementById("no").disabled = false;
        document.getElementById("no").innerText = negReply[i+1];
        document.getElementById("yes").innerText = posReply[i+1];
        document.getElementById("message").innerText = negMessage[i];
        document.getElementById("yes").disabled = false;
        document.getElementById("yes").style.opacity = "1";

        document.getElementById("optionYes").style.opacity = "1";
      }, 2000);
    }

    clickCount++;
  });
});

