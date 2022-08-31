
var links = document.querySelectorAll('a[href*=".html"]');
    for(var i = 0; i < links.length; i++) {
        links[i].setAttribute("href", links[i].getAttribute("href")+"?val="+url_val);
    }

var remove_links = document.querySelectorAll('a[href*="index.html#"]');
    for(var i = 0; i < remove_links.length; i++) {
        remove_links[i].setAttribute("href", (remove_links[i].getAttribute("href").split('?')[0]));
    }

$('#status-loader').fadeOut(); 
$('#preloader').delay(350).fadeOut('slow');