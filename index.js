var icon=document.getElementById("icon");



if(localStorage.getItem("theme")==null){
    localStorage.setItem("theme", "light")
}

var localData1=localStorage.getItem("theme")

if(localData1=="light"){
        icon.src="portfolio_site_img/moon.png"
        document.body.classList.remove("dark-them");
}
else if(localData1=="dark"){
        icon.src="portfolio_site_img/sun.png"
        document.body.classList.add("dark-them");
}


icon.onclick=function(){
    document.body.classList.toggle("dark-them");

    if(document.body.classList.contains("dark-them")){
            icon.src="portfolio_site_img/sun.png";
            localStorage.setItem("theme", "dark")
    }else{
            icon.src="portfolio_site_img/moon.png"
            localStorage.setItem("theme", "light")

    }
}