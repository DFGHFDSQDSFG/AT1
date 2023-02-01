
function moyen(a,b){
    var Moy = (a+b)/2;
    if (Moy>=10 && Moy<12)window.alert("Admi :"+Moy);
    if (Moy>=12 && Moy<14)window.alert("Asser Bien : "+Moy);
    if (Moy>=14 && Moy<16)window.alert("Bien : "+Moy);
    if (Moy>=16)window.alert("Tres Bien : "+Moy);
    else{window.alert("Kassol : "+Moy);}

}

function get_result(){
    var x = parseFloat(document.getElementById("Maths_txt").value);
    var y = parseFloat(document.getElementById("Info_txt").value);
    moyen(x,y)

}