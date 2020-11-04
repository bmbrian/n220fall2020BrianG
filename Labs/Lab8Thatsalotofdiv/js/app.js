var divsCollection;

for (var i = 1; i <= 100; i++) {

    var div = document.createElement("div");
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    div.style.width="50px";
    div.style.height="50px";
    div.style.float = "left";

    div.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    document.body.appendChild(div);

}