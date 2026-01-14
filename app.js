

function add(){
    let Fn=document.getElementById("fn").value
    let Sn=document.getElementById("sn").value
    let result=parseFloat(Fn)+parseFloat(Sn)
    document.getElementById("output").innerHTML=result
}
function sub(){
    let Fn=document.getElementById("fn").value
    let Sn=document.getElementById("sn").value
    let result=parseFloat(Fn)-parseFloat(Sn)
    document.getElementById("output").innerHTML=result
}
function mul(){
    let Fn=document.getElementById("fn").value
    let Sn=document.getElementById("sn").value
    let result=parseFloat(Fn)*parseFloat(Sn)
    document.getElementById("output").innerHTML=result
}
function div(){
    let Fn=document.getElementById("fn").value
    let Sn=document.getElementById("sn").value
    let result=parseFloat(Fn)/parseFloat(Sn)
    document.getElementById("output").innerHTML=result
}
