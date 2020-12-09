var CardArr = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
var CardValues = [];
var CardIds = [];
var Card_flipped = 0;

Array.prototype.Card_Random = function()
{

    var i = this.length, j, temp;

    while(--i > 0)
    {

    j = Math.floor(Math.random() * (i+1));

    temp = this[j];

    this[j] = this[i];

    this[i] = temp;

    }

}



function CardFlip(cardTile, val)
{debugger;

    if(cardTile.innerHTML == "" && memoryValues.length < 2)
    {

        cardTile.innerHTML = val;

        if(memoryValues.length == 0)
        {   
            CardValues.push(val);

            CardIds.push(cardTile.id);

        }else if(CardValues.length == 1)
        
        {

            CardValues.push(val);

            CardIds.push(cardTile.id);

            if(CardValues[0] == CardValues[1])
            {
                tiles_flipped += 2;

                CardValues = [];

                CardIds = [];

                if(tiles_flipped == CardArr.length)
                {

                alert("WINNIER CHIKEN DINNER!");

                }
            
} else 
    {

        function CardflipBack() 
        {

        var Square_1 = document.getElementById(memoryCardIds[0]);

        var Square_2 = document.getElementById(memoryCardIds[1]);

        Square_1.innerHTML = "";

        Square_2.innerHTML = "";

        CardValues = [];

        CardIds = [];

        }

        setTimeout(CardflipBack, 700);

    }

}

}

}



function LoadElements()

    {

        CardArr.Card_Random();

        var FACECARD = document.querySelectorAll(".FACECARD");

        for(var i = 0; i < card.length; i++) 
        {

        FACECARD[i].setAttribute("id", "FACECARD_" + i + "_" + memoryArr[i]);

        }

    }



document.addEventListener('DOMContentLoaded', function() {

document.body.addEventListener('click', function (event) {

if(event.srcElement.className == 'FACECARD' ) {

var idElement = event.srcElement.id.split("_");

flipCard(event.srcElement, idElement[2]);

};

});

});