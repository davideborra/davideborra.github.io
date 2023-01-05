const pages = [
    {
        name: "Appunti",
        pageSrc: "../appunti"
    },
    {
        name: "LaTeX",
        pageSrc: "../LaTeX"
    },
    {
        name: "Informatica",
        pageSrc: "../informatica"
    }
]


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
        console.log("true");
    } else if (darkTheme == "false") {
        console.log("false");
    } else {
        dark=false;
        setCookie("darkTheme", "false", 30);
        console.log("pippo");
    }
  }

function setDark(toDark){
    var theme = document.getElementsByTagName('link')[1];
    if (toDark) {
        theme.setAttribute('href', 'dark.css');
        dark=true;
        setCookie("darkTheme", "true", 30);
    } else {
        theme.setAttribute('href', '');
        dark=false;
        setCookie("darkTheme", "false", 30);
    }
}