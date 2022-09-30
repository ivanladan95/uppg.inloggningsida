const username = "Sara" /*Deklarerar const till usernamn och sätter värdet Sara */ 
const password = "qwe123" /*Deklarerar const password och sätter värdet qwe123 */ 


function startlog(){ /*Skapar en funktion som namnges startlog */ 
    let user = document.getElementById('namn').value; /*Hämtar värdet från fältet med id=namn och sparar det i user*/ 
    let pass = document.getElementById('losenord').value; /*Hämtar värdet från fältet med id=password och sparar det i pass*/ 
   

    if (user === username && pass === password ){ /*Om detta villkor stämmer så kommer jag in i if satsen på raden nedanför */ 
    localStorage.setItem('isloggedin', true) /*Sätter min local storage till true så det sparar undan information*/ 
    document.getElementById("loggUt").style.display = "block" /*Visar loggUt knappen*/ 
    document.getElementById("loggIn").style.display = "none" /*Visar inte loggIn knappen*/ 
   
    var logakses = document.getElementById('akses').innerHTML = 'Välkommen, du är nu inloggad!'; /*Hämtar mitt id "akses" från html och skriver ett meddelande när man loggar in*/ 
    }
    else { /*Om inte mitt villkor är sant så kommer jag hit*/ 
        localStorage.setItem('isloggedin', false) /*Sätter min local storage till false och sparar inte undan information*/ 
        var logakses = document.getElementById('akses').innerHTML = 'Inloggning misslyckades, försök igen!'; /*Hämtar id akses från html och skriver ut ett meddelande*/ 
    }
    
    };

    function startloggout (){/*Skapat en funktion och namger den startloggout*/ 
       localStorage.setItem("isloggedin", false) /*Informationen sparas inte i localstorage om det är false*/ 
       document.getElementById("namn").value = "" /*Hämtat id namn och tilldelat det ett tomt värde*/ 
       document.getElementById("losenord").value = "" /*Hämtat id losenord och tilldelat det ett tomt värde*/ 
       document.getElementById('akses').innerHTML = 'Du är nu utloggad!'; /* */
       document.getElementById("loggUt").style.display = "none" /*Visar inte loggUt knappen*/ 
       document.getElementById("loggIn").style.display = "block" /*Visar loggIn knappen*/ 
   
       

    }


    window.onload = function isloggedin(){ /*Så fort man laddar webbläsaren, så körs funktionen isloggedin*/ 
       let isloggedin = localStorage.getItem("isloggedin") /*Här deklarerar jag variabeln let och hämtar min local storage från isloggedin*/ 
       if(isloggedin === "true") { /*Här kontrollerar jag om is loggedin är sann*/ 
       document.getElementById('akses').innerHTML = 'Välkommen, du är nu inloggad!'; /*Hämtar id från acess och får meddelande att jag är inloggad*/ 
       document.getElementById('namn') /*Hämtar id namn*/ 
        
    }
}

    