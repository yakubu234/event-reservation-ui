function getWithExpiry(key) {
	
	const itemStr = localStorage.getItem(key)
	
	if (!itemStr) {// if the item doesn't exist, return null
		return null
	}

	const item = JSON.parse(itemStr)
	const now = new Date()
	
	if (now.getTime() > item.expiry) {// compare the expiry time of the item with the current time
		localStorage.removeItem(key)// If the item is expired, delete the item from storage and will return null
		return null
	}

	return item.value
}

function setWithExpiry(key, value, ttl) {

	const now = new Date()

	const item = {
		value: value,
		expiry: now.getTime() + (ttl * 60000),
	}
	localStorage.setItem(key, JSON.stringify(item))
}

// the above is local storage


function getSessionWithExpiry(key) {
	
	const itemStr = sessionStorage.getItem(key)
	
	if (!itemStr) {// if the item doesn't exist, return null
		return null
	}

	const item = JSON.parse(itemStr)
	const now = new Date()
	
	if (now.getTime() > item.expiry) {// compare the expiry time of the item with the current time
		sessionStorage.removeItem(key)// If the item is expired, delete the item from storage and will return null
		return null
	}

	return item.value
}

function setSessionWithExpiry(key, value, ttl) {

	const now = new Date()

	const item = {
		value: value,
		expiry: now.getTime() + (ttl * 60000),
	}
	sessionStorage.setItem(key, JSON.stringify(item))
}
// session storage


/** the below code is to set wait period i.e set timeout (: */
function wait(ms){
	var start = new Date().getTime();
	var end = start;
	while(end < start + ms) {
	  end = new Date().getTime();
   }
 }
// token
// uid