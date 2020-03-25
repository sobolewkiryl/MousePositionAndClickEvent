	let value = 0;

window.onclick = function(e){
	
	let parameters = {
		
		x: e.clientX,
		
		y: e.clientY
		
	}
	
	let colorsArr = ['red' , 'black' , 'yellow' , 'orange' , 'pink' , '#1AFCAA' , '#73FC1A' , '#FC841A' , '#DE2DF3'];

    let randomColor = Math.floor(Math.random()*colorsArr.length)
	
	value++;
	
	console.log(parameters);
	
	insertInto(parameters , value , colorsArr , randomColor);
	
}




function insertInto(parameters , value  , colorsArr , randomColor){
	
	let number = document.createElement('p');
	
	let insideText = document.createTextNode(value);
	
	number.appendChild(insideText);
	
	number.className = 'click-event';
	
	number.style.top = parameters.y + 'px';
	
	number.style.left = parameters.x + 'px';
	
	number.style.color = colorsArr[randomColor];
	
    document.body.appendChild(number);	
}