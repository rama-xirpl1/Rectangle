var PanjangInput = document.querySelector(".panjang");
var LebarInput = document.querySelector(".Lebar")
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var Rectangle, Panjang, Lebar

function myFunction(){
    Panjang = PanjangInput.value;
    Lebar = LebarInput.value;
    Rectangle = Panjang*Lebar
    alert("The rectangle is :" + Rectangle);
}