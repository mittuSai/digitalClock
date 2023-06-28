function digiclock()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var dt=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();
    var am_pm="AM";
if (hh>12){
    am_pm="PM"
    if (hh>12){
        hh-=12;
    }
}
if(hh==0)
{hh=12;}
if (mo==0){
    mo="jan";
}
else if(mo==1){
    mo="feb";
}
else if(mo==2){
    mo="march";
}
else if(mo==3){
    mo="apr";
}
else if(mo==4){
    mo="may"
}
else if(mo==5){
    mo="june"
}
else if(mo==6){
    mo="july"
}
else if(mo==7){
    mo="aug"
}
else if(mo==8){
    mo="sept"
}
else if(mo==9){
    mo="oct"
}
else if(mo==10){
    mo="nov"
}
else
{
    mo="dec"
}
switch(day)
{

    case 0:day="sunday"
   
    break;
    case 1:day="Monday"
    
    break;
    case 2:day="Tuesday"
   
    break;
    case 3:day="wednesday"
   
    break;
    case 4:day="Thursday"
    
    break;
    case 5:day="Friday"
   
    break;
    case 6:day="Suterday"
   
    break;
}
document.getElementById("DATE").innerHTML=`${dt}/${mo}/${yy}`;
document.getElementById("TIME").innerHTML=`${hh}:${mm} ${am_pm}`;
document.getElementById("DAY").innerHTML=day;
document.getElementById("SEC").innerHTML=ss;
setTimeout(digiclock,1000)

}
digiclock()