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

// token
// uid