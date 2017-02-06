
function draw(){
	var ctx = document.getElementById("chart").getContext("2d");
	var labels = new Array(49);
	var backgroundColors = new Array(49);
	var borderColors = new Array(49);
	for(var i = 0; i < 49; i++){
		labels[i] = i+1;
		backgroundColors[i] = 'rgba(255, 99, 132, 0.2)';
		borderColors[i] = 'rgba(255,99,132,1)';
	}
	console.log(window.occurences);
	var data = {
   		labels: labels,
   		datasets: [
       		{
           		label: "Number of Occurences",
           		backgroundColor: backgroundColors,
           		borderColor: borderColors,
           		borderWidth: 1,
           		data: window.occurences
       		}
    	]
	};
	var chart = new Chart(ctx, {
		type: 'bar',
		data: data,
		options: []/*{
       		scales: {
           		xAxes: [{
               		type: 'linear',
               		position: 'bottom'
           		}]
        	}
    	}*/
	});
}

draw();
