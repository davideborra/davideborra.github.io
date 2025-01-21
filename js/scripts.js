/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function getParameter(key){ 
    address = window.location.search 
    parameterList = new URLSearchParams(address) 
    return parameterList.get(key) 
}

param = getParameter("r")
if(param != null){
    fetch("redirect.json")
    .then((response) => response.json())
        .then((json) => redirects = json)
            .then(
                (redirects)=>{
                    for (element of redirects){
                        if(element.name == param){
                            location.href = element.url;
                            break;
                        }
                    }
                }
            )
}
