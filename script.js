function checkMathQuiz(){
    let score=0;
    
   if(document.querySelector('input[name="q1"]:checked')?.value=="correct")score++;
   if(document.querySelector('input[name="q2"]:checked')?.value=="correct")score++;
   if(document.querySelector('input[name="q3"]:checked')?.value=="correct")score++;
   if(document.querySelector('input[name="q4"]:checked')?.value=="correct")score++;
   if(document.querySelector('input[name="q5"]:checked')?.value=="correct")score++;
    
    
    
    
    
   document.getElementById("result").innerHTML=
   "Your Score:"+ score+"/5";
}
function checkScienceQuiz(){

    let score = 0;
    
    if(document.querySelector('input[name="q1"]:checked')?.value=="B") score++;
    if(document.querySelector('input[name="q2"]:checked')?.value=="C") score++;
    if(document.querySelector('input[name="q3"]:checked')?.value=="B") score++;
    if(document.querySelector('input[name="q4"]:checked')?.value=="A") score++;
    if(document.querySelector('input[name="q5"]:checked')?.value=="A") score++;
    
    document.getElementById("result").innerHTML =
    "Your Score: " + score + " / 5";
    
    }
    function checkSocialQuiz() {

        let score = 0;
        
        if(document.querySelector('input[name="q1"]:checked')?.value=="B") score++;
        if(document.querySelector('input[name="q2"]:checked')?.value=="B") score++;
        if(document.querySelector('input[name="q3"]:checked')?.value=="B") score++;
        if(document.querySelector('input[name="q4"]:checked')?.value=="B") score++;
        if(document.querySelector('input[name="q5"]:checked')?.value=="B") score++;
        
        document.getElementById("result").innerHTML =
        "🎉 Your Score: " + score + " / 5";
        
        }