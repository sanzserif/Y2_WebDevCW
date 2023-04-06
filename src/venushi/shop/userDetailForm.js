document.getElementsByClassName('btn-purchase')[0].addEventListener('click',checkMyCart)
                //Checking whether cart is empty or not
                function checkMyCart(){
                    var total = document.getElementsByClassName('cart-total-price')[0].innerText
                    var finaltot = parseFloat(total.replace('$', ''))
                    console.log(finaltot)
                    if (finaltot <=0 ){
                        var alertBox = document.createElement("div");
                        alertBox.innerHTML = "Sorry.. Your cart is empty! &#128533" ;
                        alertBox.style.backgroundColor = '#CB9A9F';
                        alertBox.style.padding = "20px";
                        alertBox.style.border = "3px solid black";
                        alertBox.style.position = "fixed";
                        alertBox.style.top = "50px";
                        alertBox.style.right = "40%";
                        alertBox.style.borderRadius = "30px";
                        alertBox.style.background = "linear-gradient(#E5AA70,#E97451)";
                        document.body.appendChild(alertBox);
  
    setTimeout(function() {
      document.body.removeChild(alertBox);
    }, 1000);
                    }
                    else{
                        window.location.replace("PaymentGateway.html")
                        runModel()  //proceeding to the next function
                    }
                }

                //assigning variables
                const openModelButtons = document.querySelectorAll('[data-model-target]') //assigning the submit button to a variable
                const closeModelButtons = document.querySelectorAll('[data-close-button]') //assigning the close button to a variable
                const overlay = document.getElementById("overlay") //assigning the the div tag which has id='overlay' to a variable
                
                function runModel(){
                    openModelButtons.forEach(button=>{
                        const model = document.querySelector(button.dataset.modelTarget)
                        openModel(model) //sending the 'model' parameter to the next function to display the user detail form
                        })
                    }
                

                closeModelButtons.forEach(button=>{
                        button.addEventListener('click', () => {
                            const model = button.closest(".model")
                            closeModel(model) //sending the 'model' parameter to close the user detail form
                        })
                    })

                function openModel(model)  //displaying user detail form
                    {
                        if (model ==null) return
                        model.classList.add("active")
                        overlay.classList.add("active")
                    }

                function closeModel(model) //closing user detail form
                    {
                        if (model == null) return
                        model.classList.remove("active")
                        overlay.classList.remove("active")
                    } 