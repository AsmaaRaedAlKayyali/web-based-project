function nameone()
{
    var n=document.getElementById("name1").value;
    if(n.length<1)
    {document.getElementById("na").innerHTML="enter your name";
    return false}
    else
    {document.getElementById("na").innerHTML=" ";
    return true}
}

function numberone()
{
    var n=document.getElementById("numb1").value;
    if(n.length==10)
    {document.getElementById("nam").innerHTML=" ";
    return true}
    else
    {document.getElementById("nam").innerHTML="entter your number";
    return false;}

}


function Address() {
     var n=document.getElementById("name2").value;
     if(n.length<1){
     document.getElementById("adrs").innerHTML="enter your address"; 
     return false}
     else{
     document.getElementById("adrs").innerHTML=" "; 
     return true}
    }
 function pieces()
 {
     var n=document.getElementById("numb2").value;
     if(n<1)
     {document.getElementById("pcs").innerHTML="entter the number of pieces";
    return false}
    else
    {document.getElementById("pcs").innerHTML=" ";
    return true}
 }

 function theRedios(){
    var r=document.getElementsByName("pay");
    for(var i=0; i<r.length;i++){
        var isDone=0;
        if(r[i].checked){
            document.getElementById("check").innerHTML=" ";
            isDone=1;
            break;
        }
        else{
            document.getElementById("check").innerHTML="check one";
        }
    }
    return isDone;
 }
 function theCheckbox(){
    var C=document.getElementsByName("c");
    for(var i=0; i<C.length;i++){
        var isDone=0;
        if(C[i].checked){
            isDone=1;
                document.getElementById("box").innerHTML=" ";
                break;
        }
        else{
            document.getElementById("box").innerHTML="check one";
    }
 }
return isDone;
}
 function allFun(){
    if(numberone() & nameone() & Address() & pieces()==true & theCheckbox()&theRedios()==1){
        var theName=document.getElementById("name1").value;
        var theNumber=document.getElementById("numb1").value;
        var theAdress=document.getElementById("name2").value;
        var thePieces=document.getElementById("numb2").value;
        var tax=document.getElementById("numb2").value;
        var doneTax=tax*0.10;
        var r=document.getElementsByName("pay");
       for(var i=0; i<r.length;i++){
        if(r[i].checked){
            var done =r[i].value;
            break;}}
        var C=document.getElementsByName("c");
        var doneCheck="\n";
        for(var i=0; i<C.length;i++){
        if(C[i].checked){
            doneCheck+=" you are : "+C[i].value+"\n";
        }}
var output="The Name : "+theName + "\n" +"The Number : "+theNumber+"\n"+" The Adress : "+theAdress+"\n"+"The number of Pieces : "+thePieces+"\n"+"How to pay : "+done+doneCheck+" The Tax : "+doneTax;
    document.getElementById("ooo").innerHTML=output;
    document.getElementById("oo").innerHTML="Your tax is : "+doneTax+", It will be added to the amount";}
    else{
    numberone();
    nameone();
    Address();
    pieces();
    theRedios();
    theCheckbox();
    }}
