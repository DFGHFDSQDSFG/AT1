function test(){
    //Get Info from input
    var x = document.getElementById("Id_txt").value;
    var y = document.getElementById("pass_txt").value;

    if (x=="id" && y=="mdps"){
        window.location.href = "index2.html"
    }

    // document.getElementById("demo1").innerHTML = x;//Output
    // document.getElementById("demo2").innerHTML = y;//Output
}