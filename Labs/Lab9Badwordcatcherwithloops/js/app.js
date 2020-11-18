let badwords = ["clear","water","tires"];
        let count;

        function myevaluate(){

            count = 0;

            let text = "";

            text = document.getElementById("sent").value;

            let words = [];

            words = text.split(" ");

            for(let i = 0; i < badwords.length; i++) {

                for(let j = 0; j < words.length; j++){

                    if(words[j] == badwords[i]) {

                        count++;

                    }

                }

            }

            if (count == 0) {

                document.querySelector(".message").innerHTML = "No bad word found";
            }

            else {

                document.querySelector(".message").innerHTML = "Bad word found<br>Total bad words : " + count;

            }

            document.getElementById("sent").value = "";

        };
