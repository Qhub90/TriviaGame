var number=90
var timer;
$("#startBtn").on("click",run)
    
function run(){
  timer = setInterval(decrease, 1000);
}

function decrease(){
    number--;
   $("#countDown").html("<h2> Time Remaining: " + number + " Seconds <h2>");

   if(number === 0) {
       stop();
       alert("Times up!!")
   
   }
}
function stop(){
    clearInterval(timer);
}


function score(){
    var question1 = document.questions.questions1.value;
    var question2 = document.questions.question2.value;
    var question3 = document.questions.questions3.value;
    var question4 = document.questions.questions4.value;
    var question5 = document.questions.question5.value;
    var question6 = document.questions.question6.value;
    var question7 = document.questions.question7.value;
    var correct = 0
    var wrong = 0


    if(question1 === "Pride"){
        correct++;
    }    
    if(question2 === "Platypus"){
        correct++;
    }
    if(question3 === "Blue Whale"){
        correct++;
    }
    if(question4 === "Woof"){
        correct++;
    }
    if(question5 === "Giant Tortoise"){
        correct++;
    }
    if(question6 === True){
        correct++;
    }
    if(question7 === "Jellystone Park"){
        correct++;
    }
    else{
        wrong++;
    }
//  I could not get my code to check my values
    console.log($( "input[type=radio][name=question1]:checked" ).val())
    console.log(wrong);
    // $(<body>).text
}


// Display stats