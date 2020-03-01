window.addEventListener('load',(event)=>{
	let x = document.createElement("input");
	x.setAttribute("type", "text");
	document.body.appendChild(x);
	
	let button = document.createElement("button");
	button.textContent = "Посчитать";
	button.className = "btn";
	document.body.appendChild(button);
	
	let y = document.createElement("input");
	y.setAttribute("type", "text");
	document.body.appendChild(y);	
	
	let head = window.document.getElementsByTagName('head')[0];
	includeCSS('style.css');
	
	button.onclick = function(event){
	
		let elems = document.querySelectorAll('.error-message');
		for(let i of elems){
			i.remove();
		}
		if(document.getElementById('result') !== null){document.getElementById('result').remove();}
	
		if(isNaN(x.value)){
			let error1 = document.createElement("div");
			error1.className = "error-message";
			error1.textContent = "Это не число";
			document.body.insertBefore(error1,button);
		}
		if(isNaN(y.value)){
			let error2 = document.createElement("div");
			error2.className = "error-message";
			error2.textContent = "Это не число";
			document.body.appendChild(error2);
		}
		
		if((isFinite(x.value))&&(isFinite(y.value))){
			if((x.value !== "")&&(y.value !== "")){
				let result = document.createElement("div");
				result.id = 'result';
				result.style.margin = '20px';
				result.style.fontSize = '24px';
				result.textContent = Number(x.value) + Number(y.value);
				document.body.appendChild(result);	
			}
		}
	}
	
	function includeCSS(aFile, aRel){
		let style = window.document.createElement('link');
		style.href = aFile;
		style.rel = aRel || 'stylesheet';
		head.appendChild(style);
	}
})