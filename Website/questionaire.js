function check(){
let count=0;
var ele1 = document.getElementsByName('question1');
var ele2 = document.getElementsByName('question2');
var ele3 = document.getElementsByName('question3');
var ele4 = document.getElementsByName('question4');
var ele5 = document.getElementsByName('question5');
var ele6 = document.getElementsByName('question6');
var ele7 = document.getElementsByName('question7');
var ele8 = document.getElementsByName('question8');
    for (i = 0; i <4; i++) {
    if (ele1[i].checked && ele1[i].value=="correct"){count++;}
    if (ele2[i].checked && ele2[i].value=="correct"){count++;}
    if (ele3[i].checked && ele3[i].value=="correct"){count++;}
    if (ele4[i].checked && ele4[i].value=="correct"){count++;}
    if (ele5[i].checked && ele5[i].value=="correct"){count++;}
    if (ele6[i].checked && ele6[i].value=="correct"){count++;}
    if (ele7[i].checked && ele7[i].value=="correct"){count++;}
    if (ele8[i].checked && ele8[i].value=="correct"){count++;}
}
alert(`You got ${count} out of 8 right`);}