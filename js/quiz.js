function check(){

    var c = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var result = document.getElementById("result");
    var quiz = document.getElementById("quiz");
    if(q1=="JAVASCRIPT"){c++}
    if(q2=="RUSSIA"){c++}
    if(q3=="islamabad"){c++}
    if(q4=="JDIGITAL COMPUTER ACADEMY"){c++}
    quiz.style.display="none";
    if(c<3){

        result.textContent=`your result is ${c}.it is not good plz try again`
        // alert("your result is" + c + " try a better performence");
    }
    else
    {

        result.textContent=`your result is ${c}.it is awsome keep it`

        // alert("your result is" + c + " good performence");




    }
    



}