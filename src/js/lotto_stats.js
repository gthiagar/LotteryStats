
function readFile(fileName){
	var file = new XMLHttpRequest();
	file.open('GET', fileName, true);
	file.onreadystatechange = function ()	{
		if(file.readyState === 4){
			if(file.status === 200 || file.status === 0){
				// Store the response text 
				var text = file.responseText;
				var array = text.split("\n");
				var arrLength = array.length;
				for(var i = 1; i < arrLength; i++){
					var lotteryInfo = array[i].split(",");
					for(var j = 4; j <= 10; j++){
						occurences[lotteryInfo[j]-1]++; 
					}
				}
				console.log(occurences);
			}
			//console.log(text);
		}
	}
	file.send(null);	
}

window.occurences = new Array(49);
for(var i = 0; i < 49; i++){
	window.occurences[i] = 0;
}
readFile('./649.csv');
