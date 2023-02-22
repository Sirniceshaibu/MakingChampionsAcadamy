document.getElementById("science").style.display="none"
document.getElementById("socialscience").style.display="none"
document.getElementById("art").style.display="none"


function showOrHide(){
    var department=document.getElementById("discipline").value
    if(department == "sciences"){
        document.getElementById("science").style.display= "block"
        document.getElementById("socialscience").style.display= "none"
        document.getElementById("art").style.display= "none"

    }else if(department == "socialsciences"){
        document.getElementById("socialscience").style.display= "block"
        document.getElementById("science").style.display= "none"
        document.getElementById("art").style.display= "none"
        
        
    }else if(department =="arts"){
        document.getElementById("art").style.display ="block"
        document.getElementById("science").style.display ="none"
        document.getElementById("socialscience").style.display ="none"
    }
    
}
function showLga(){
    var science = document.getElementById("science").value
    if(science == "physics"){
        window.location.href = "physics.html";
    }
    else if(science == "chemistry"){
        window.location.href = "chemistry.html";
    }else if(science =="biology"){
        window.location.href = "biology.html";
    }
    
}

function showLfoo(){
    var art = document.getElementById("arts").value
    if(art == "commerce"){
        window.location.href = "commerce.html";
    }
    else if(art == "accounts"){
        window.location.href = "account.html";
    }else if(art =="litrature"){
        window.location.href = "litrature.html";
    }
    
}

function showFo(){
    var socials  = document.getElementById("socials").value
    if(socials== "goverment"){
        window.location.href = "goverment.html";
    }
    else if(socials == "geography"){
        window.location.href = "geography.html";
    }else if(socials =="economics"){
        window.location.href = "economics.html";
    }
    
}








