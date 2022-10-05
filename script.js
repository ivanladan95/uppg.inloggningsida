const username = "Sara" 
const password = "qwe123" 


function startlog(){  
    let user = document.getElementById('namn').value;  
    let pass = document.getElementById('losenord').value;  
   

    if (user === username && pass === password ){ 
    localStorage.setItem('isloggedin', true) 
    document.getElementById("loggUt").style.display = "block" 
    document.getElementById("loggIn").style.display = "none"  
   
    var logakses = document.getElementById('akses').innerHTML = 'Välkommen, du är nu inloggad!'; 
    }
    else { /*Om inte mitt villkor är sant så kommer jag hit 
        localStorage.setItem('isloggedin', false)  
        var logakses = document.getElementById('akses').innerHTML = 'Inloggning misslyckades, försök igen!'; 
    }
    
    };

    function startloggout (){
       localStorage.setItem("isloggedin", false)  
       document.getElementById("namn").value = "" 
       document.getElementById("losenord").value = ""  
       document.getElementById('akses').innerHTML = 'Du är nu utloggad!'; 
       document.getElementById("loggUt").style.display = "none"  
       document.getElementById("loggIn").style.display = "block"  
   
       

    }


    window.onload = function isloggedin(){ 
       let isloggedin = localStorage.getItem("isloggedin")  
       if(isloggedin === "true") { 
       document.getElementById('akses').innerHTML = 'Välkommen, du är nu inloggad!'; 
       document.getElementById('namn') 
        
    }
}

    
