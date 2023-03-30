var themeChanger = document.querySelector(".themeChanger");

var body = document.querySelector(".body");

themeChanger.onclick = function()
{
    if(body.classList.contains != "dark")
    {
        body.classList.toggle("dark");//adds dark mode 
    }
    else{
        body.classList.remove("dark");//removes dark mode 
    }
}