function msg(txt)
{  
  if (undefined === txt)
    txt = "Hello Welt!";
  
    alert(txt);
  
}  

function f1(o) 
{
  //o = document.getElementById(id); 
  if(o)
  {
    o.innerHTML =  String(o.id).concat(": Erfolgreich!");
  }
  else
    msg('Fehler: Id nicht gefunden')
}


