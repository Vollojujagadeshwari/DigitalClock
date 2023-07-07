function clock(){
    var date =new Date()
    var hh =date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var day=date.getDay()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()


    var am_pm="AM"
    if(hh>=12){
    am_pm="PM"
    }
    if(hh==0)
    {
        hh=12;
    }
    if(mo==0)
    {
        m0="JAN"
    }
    else if(mo==1)
    {
        m0="FEB"
    }
      
    else if(mo==2)
    {
        m0="MAR"
    }
    
    else if(mo==3)
    {
        m0="APR"
    }
    
    else if(mo==4)
    {
        m0="MAY"
    }
    
    else if(mo==5)
    {
        m0="JUNE"
    }
   
    else if(mo==6)
    {
        m0="JULY"
    }
    
    else if(mo==7)
    {
        m0="AUG"
    }
    
    else if(mo==8)
    {
        m0="SEP"
    }
   
    else if(mo==9)
    {
        m0="OCT"
    }
    
    else if(mo==10)
    {
        m0="NOV"
    }
   
    else (mo==10)
    {
        m0="DEC"
    }

    switch(day)
    {
        case 0:day="Sunday"
        document.body.style.backgroundImage="url(./0.jpg)"
        break;
        case 1:day="Monday"
        document.body.style.backgroundImage="url(./1.jpg)"
        break;
        case 2:day="Tuesday"
        document.body.style.backgroundImage="url(./2.jpg)"
        break;
        case 3:day="wednesday"
        document.body.style.backgroundImage="url(./3.jpg)"
        break;
        case 4:day="Thursday"
        document.body.style.backgroundImage="url(./0.jpg)"
        break;
        case 5:day="Friday"
        document.body.style.backgroundImage="url(./1.jpg)"
        break;
        case 6:day="Saturday"
        document.body.style.backgroundImage="url(./2.jpg)"
    }
    console.log(day)
    document.getElementById("time").innerHTML=`${hh}:${mm}:${am_pm}`
    document.getElementById("date").innerHTML=`${dd}/${mo}/${yy}`
    document.getElementById("day").innerHTML=day
    document.getElementById("sec").innerHTML=ss
    setTimeout(clock,1000)
}
clock()
    
    var audio=new Audio()
    audio.src="./alarm.wav"
    
  function alarmfunction(){
    var date =new Date()
    var hh =date.getHours()
    var mm=date.getMinutes()
     var am_pm="AM"
     if(hh>=12){
        am_pm="PM"
     if(hh>12){
        hh=hh-12
     }
    }
     if(hh==0){
        hh=12
     }
     var usergivenhh=document.getElementById("userhours").value
     var usergivenmm=document.getElementById("userminutes").value
     var usergivenam_pm=document.getElementById("useram_pm").value
      if(hh==usergivenhh && mm==usergivenmm && am_pm==usergivenam_pm){
          audio.play()
          audio.loop=Infinity

      }
      else{
        audio.pause()
      }
      setTimeout(alarmFunction,1000)

  }
  function closewindow()
  {
    document.getElementById("alarmcontainer").style.display="none"
  }
  function openwindow()
  {
    document.getElementById("alarmcontainer").style.display="flex"
  }

  
