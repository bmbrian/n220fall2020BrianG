var CardArr = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8'];
var CardValues = [];
var CardIds = [];
var flips = 0;

Array.prototype.random = function () {

    var i = this.length, j, temp;

    while (--i > 0) {

        j = Math.floor(Math.random() * (i + 1));

        temp = this[j];

        this[j] = this[i];

        this[i] = temp;

    }

}

function firstflip(CardSquare, val) {
    debugger;

    if (CardSquare.innerHTML == "" && CardValues.length < 2) {

        CardSquare.innerHTML = val;

        if (CardValues.length == 0) {

            CardValues.push(val);

            CardIds.push(CardSquare.id);

        } else if (CardValues.length == 1) {

            CardValues.push(val);

            CardIds.push(CardSquare.id);

            if (CardValues[0] == CardValues[1]) {

                flips += 2;

                CardValues = [];

                CardIds = [];

                if (flips == CardArr.length) {

                    alert("WINNER WINNER CHICKEN DINNER!!!!");

                }

            } else {

                function Secondflip() {

                    var Cardone = document.getElementById(CardIds[0]);

                    var Cardtwo = document.getElementById(CardIds[1]);

                    Cardone.innerHTML = "";

                    Cardtwo.innerHTML = "";

                    CardValues = [];

                    CardIds = [];

                }

                setTimeout(Secondflip, 700);

            }

        }

    }

}

function Load() {

    CardArr.random();

    var card = document.querySelectorAll(".FACECARD");

    for (var i = 0; i < card.length; i++) {

        card[i].setAttribute("id", "FACECARD_" + i + "_" + CardArr[i]);

    }

}

document.addEventListener('DOMContentLoaded', function () {

    document.body.addEventListener('click', function (click) {

        if (click.srcElement.className == 'FACECARD') {

            var idElement = click.srcElement.id.split("_");

            firstflip(click.srcElement, idElement[2]);

        };

    });

});