var HttpClient = function() {
    this.get = function(aUrl, cSrf=null, token=null, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && (anHttpRequest.status >= 200 && anHttpRequest.status <= 299))
                aCallback(JSON.parse(anHttpRequest.responseText));

            if (anHttpRequest.readyState == 4 && (anHttpRequest.status >= 400 && anHttpRequest.status <= 499))
                aCallback(JSON.parse(anHttpRequest.responseText));

            if (anHttpRequest.readyState == 4 && (anHttpRequest.status >= 500 && anHttpRequest.status <= 599))
                aCallback(JSON.parse(anHttpRequest.responseText));

        }

        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.setRequestHeader('x-csrf-token', cSrf);       
        anHttpRequest.setRequestHeader('Access-Control-Allow-Origin', '*');       
        anHttpRequest.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        anHttpRequest.setRequestHeader("Accept", "application/json");
        anHttpRequest.setRequestHeader('Authorization', 'Bearer ' + token);
        anHttpRequest.send(null);
        
    }
}

var HttpClientPost = function() {
    this.get = function(aUrl,data, cSrf,token=null, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && (anHttpRequest.status >= 200 && anHttpRequest.status <= 299))
                aCallback(JSON.parse(anHttpRequest.responseText));

            if (anHttpRequest.readyState == 4 && (anHttpRequest.status >= 400 && anHttpRequest.status <= 499))
                aCallback(JSON.parse(anHttpRequest.responseText));
            
            if (anHttpRequest.readyState == 4 && (anHttpRequest.status >= 500 && anHttpRequest.status <= 599))
                aCallback(JSON.parse(anHttpRequest.responseText));
        }

        anHttpRequest.open("POST", aUrl, true);
        anHttpRequest.setRequestHeader('x-csrf-token', cSrf);  
        anHttpRequest.setRequestHeader('Access-Control-Allow-Origin', '*');          
        anHttpRequest.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        anHttpRequest.setRequestHeader("Accept", "application/json");
        anHttpRequest.setRequestHeader('Authorization', 'Bearer ' + token);
        anHttpRequest.send(data);
    }
}

function serializeForm(form)
{
    let rawData = new FormData(form);
    let data = {};

   for(let pair of rawData.entries()) {
     data[pair[0]] = pair[1]; 
    }
    return JSON.stringify(data);
}


// window.onload = function() {
        
    
// document.getElementById('inputform').onsubmit = function() {
            // let data = new FormData(document.getElementById("inputform"));
            // var input = document.getElementById("url").value;
    
                    // var encodedUrl = btoa(unescape(encodeURIComponent(input)))
                    // var client = new HttpClient();
    
                    // $('#status').fadeIn(); // will first fade out the loading animation 
                    // $('#preloader').delay(350).fadeIn('slow'); // will fade out the white DIV that covers the website.
    
                    // client.get('./csrf_scraper.php?url=' + encodedUrl, function(response) {
                    //     // alert('completed')
                    //     let obj = JSON.parse(response)
                    //     console.log(response)
                        // document.getElementById('token').innerHTML = obj.token
                        // document.getElementById('status-js').innerHTML = obj.message
    
                    // $('#status').fadeOut(); // will first fade out the loading animation 
                    // $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
                    // $('body').delay(550).css({'overflow':'visible'});
    
            //         });
    
            //     return false;
            //     }
            // }