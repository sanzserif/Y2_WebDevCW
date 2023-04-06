if(document.readyState=="loading"){     //checking to make sure that this document is loaded
    document.addEventListener("DOMContentLoaded",ready)
}else{
    ready()
}

var nme = document.getElementById("name");
var email = document.getElementById("email");
var address = document.getElementById("address");
var expYear = document.getElementById("expYear");
var cvv = document.getElementById("city");
var cardName = document.getElementById("cardName");
var cardNo = document.getElementById("cardNo");
var expYear = document.getElementById("expYear");

function checkExpYear(){
    const form = document.getElementById("userForm");
    const inputs = form.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
        if (!(inputs[i].value === "")) {
            if(!(cvv <= 999 && cvv >=100)){
                alert("please  ");
            }

        }
    }
}

    




