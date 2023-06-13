
function start() {
	ok();
	check();
}



function ok() {
	var elements = document.getElementsByClassName("number");
	for(const element of elements) {
		element.onmouseover = function()  {
			if (element.getAttribute('readonly') == null) {
				element.type = "number";
			}
		}
		element.onmouseout  = function() { 
			if (element.getAttribute('readonly') == null) {
				element.type = "text";
			}
		}
	}
}


function check() {
	const elements = document.getElementsByClassName("number");
	var alreadySeen = [];
	var array = [];
	var array2 = [];
	var ok = true;
	array =  Array.from(elements);
	array.forEach(ss);
	function ss(item) {
		item.style.backgroundColor  = "rgb(0, 0, 0)";
	}
	for (var i=0;i<81;i+=9) {
		alreadySeen.length = 0;
		array.length = 0;
		array2.length = 0;
		ok = true;
		array =  Array.from(elements).slice(i, i+9);
		
		array.forEach(myFunction);
	
		function myFunction(item) {
			array2.push(item.value);
		}
		
	
		array2.forEach(function(str) {
		if (alreadySeen[str] || str == 0) {
			ok = false;
		} else {
			alreadySeen[str] = true;
		}
		});
		
		if (ok) {
			array.forEach(color);
			function color(item) {
				const array = item.style.backgroundColor.match(/, \d+,/);
				var kolorInt = parseInt(array[0].slice(2, -1));
				kolorInt++;
				item.style.backgroundColor  = "rgb(0, "+kolorInt+", 0)";
				
			}
		}
	}
	
	for (var x=0;x<9;x++) {
		alreadySeen.length = 0;
		array.length = 0;
		array2.length = 0;
		ok = true;
		
		for (var i=x;i<81;i+=9) {
			array.push(elements[i]);
		}
		
		
		array.forEach(myFunction);
	
		function myFunction(item) {
			array2.push(item.value);
		}
		
	
		array2.forEach(function(str) {
		if (alreadySeen[str] || str == 0) {
			ok = false;
		} else {
			alreadySeen[str] = true;
		}
		});
		
		if (ok) {

			array.forEach(color);
			function color(item) {
				const array = item.style.backgroundColor.match(/, \d+,/);
				var kolorInt = parseInt(array[0].slice(2, -1));
				kolorInt++;
				item.style.backgroundColor  = "rgb(0, "+kolorInt+", 0)";
				
			}
		}
	}
	
	for (var z=0;z<9;z+=3) {
		for (var x=z;x<81;x+=27) {
			alreadySeen.length = 0;
			array.length = 0;
			array2.length = 0;
			ok = true;
			for (var i=x;i<x+20;i+=9) {
				for (var j=i;j<3+i;j++) {
					array.push(elements[j]);
				}
			}

			
			array.forEach(myFunction);
		
			function myFunction(item) {
				array2.push(item.value);
			}
			
		
			array2.forEach(function(str) {
			if (alreadySeen[str] || str == 0) {;
				ok = false;
			} else {
				alreadySeen[str] = true;
			}
			});
			
			if (ok) {
				array.forEach(color);
				function color(item) {
					const array = item.style.backgroundColor.match(/, \d+,/);
					var kolorInt = parseInt(array[0].slice(2, -1));
					kolorInt++;
					item.style.backgroundColor  = "rgb(0, "+kolorInt+", 0)";
					
				}
			}
		}
	}
	
	array =  Array.from(elements);
	array.forEach(sx);
	function sx(item) {
		const array = item.style.backgroundColor.match(/, \d+,/);
		var kolorInt = parseInt(array[0].slice(2, -1));
		if (kolorInt == 0) {item.style.backgroundColor  = "rgb(255, 255, 255)"; }
		if (kolorInt == 1) {item.style.backgroundColor  = "rgb(0, 245, 0)"; }
		if (kolorInt == 2) {item.style.backgroundColor  = "rgb(0, 190, 0)"; }
		if (kolorInt == 3) {item.style.backgroundColor  = "rgb(0, 140, 0)"; }
	}
	
}


window.onload = start();
setInterval(ok, 1000);
