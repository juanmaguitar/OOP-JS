function log(str){
	var node = document.createElement("code");
	node.appendChild(document.createTextNode('\n'+str));
	document.getElementById("myLog").appendChild(node);
}

function logTimer(number){
	var node = document.createElement("code");
  node.appendChild(document.createTextNode('\n'+'.'));
  node.id = +new Date()
  document.getElementById("myLog").appendChild(node);
  let secondsLapsed = number*1000-1000
  const interval = setInterval( () => {
    if (secondsLapsed === 0) clearInterval(interval)
    else {
      node.innerHTML = node.innerHTML + '.'
      secondsLapsed -= 1000
    }
  }, 1000)
}