require(
	[],
	function () {

		console.log("yo");

		var

		var box = document.getElementsById("colourSpec")
		var colourBox =document.getElementsById("colourDisplay");

		box.innerHTML="Yeehaw!";
		

		// colourBox.style.backgroundColor="green"
        // colourBox.style.backgroundColor="#FF0000"
        // colourBox.style.backgroundColor="rgb(100,0, 200)";
        // colourBox.style.backgroundColor="hsl(40, 50%, 50%)";

        var makeColorString = function(ir, ig, ib){
        	var colorString = "rgb("+ ir + "%, " +  ig + "%, " + ib + "%)";
        }

        colourBox.style.backgroundColor =makeColorString(0, 50, 100);

	}

	);