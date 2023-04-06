var seconds=4
            function displaySeconds()
            {
                seconds -=1
                document.getElementById("displaySeconds").innerText="You will be redirected to the home page in "+seconds+" Seconds"
            }
            setInterval(displaySeconds,1000)
            setTimeout ("redirectpage()",5000)