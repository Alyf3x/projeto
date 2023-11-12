var header = document.getElementById ("header");
var navegacao_header = document.getElementById ("navegacao-header");
var content = document.getElementById ("content");
var showSidebar = false;



function toogleSidebar() {
    
    showSidebar = !showSidebar;
    
    if (showSidebar) {
        navegacao_header.style.marginLeft= '-10vw';
        navegacao_header.style.animationName= 'showSidebar';
        content.style.filter= 'blur(2px)';
    }

    else {
        navegacao_header.style.marginLeft= '-100vw';
        navegacao_header.style.animationName='';
        content.style.filter='';
    }

}

function closeSidebar() 
{
    if (showSidebar) {
        toogleSidebar();
    
}
}


function login(){
    window.location.href="login-cadastro.html"
}

