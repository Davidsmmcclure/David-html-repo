require(
    [],
    function () {

                console.log("yo");

                var doitButton = document.getElementsById("doitButton");

                doitButton.addEventListener("click", function(ev){
                    alert("I got a click!!!");
                });

    }
);