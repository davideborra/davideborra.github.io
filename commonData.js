pages = [
    {
        name: "Appunti",
        pageSrc: "appunti"
    },
    {
        name: "LaTeX",
        pageSrc: "LaTeX"
    },
    {
        name: "Informatica",
        pageSrc: "informatica"
    },
    {
        name: "Slides",
        pageSrc: "slides"
    }
]

var dark = false;

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
function checkCookie() {
    let darkTheme = getCookie("darkTheme");
    if (darkTheme == "true") {
        setDark(true, level);
    } else if (darkTheme == "false") {
        setDark(false, level);
    } else {
        dark=false;
        setCookie("darkTheme", "false", 30);
        //alert("Questo sito utilizza un cookie per mantenere in memoria il tema scuro. Spero non dia fastidio a nessuno.")
        console.log("pippo");
        return true;
    }
    return false;
  }

function setDark(toDark,level){
    var theme = document.getElementsByTagName('link')[1];
    if (toDark==true) {
        path=''
        for(var i=0; i<level; i++){
            path+="../";
        }
        theme.setAttribute('href', path+'dark.css');
        dark=true;
        setCookie("darkTheme", "true", 30);
    } else if (toDark==false) {
        theme.setAttribute('href', '');
        dark=false;
        setCookie("darkTheme", "false", 30);
    }
}

function loadLinks(level){
    var result = [
        {
            name: "",
            pageSrc: ""
        }
    ];
    var j=1;
    var path=''
    for(var i=0; i<level; i++){
        path+="../";
    }
    for (const page of pages){
        result.push(page);
        result[j].pageSrc=path+result[j].pageSrc;
        j++;
    }
    result.shift();
    return result;
}