function getParameter(key){ 
    address = window.location.search 
    parameterList = new URLSearchParams(address) 
    return parameterList.get(key) 
}
function getAllParameters(key){ 
    address = window.location.search 
    parameterList = new URLSearchParams(address) 
    return parameterList.getAll(key) 
}

node =  document.getElementById('cardsContainer');
tagslistnode = document.getElementById('tagsContainer');
currentTags=getAllParameters("tag")
allTags =[]

function loadNotes(notes){
    for ([index, note] of notes.entries()){
        var div=document.createElement('div');
        div.setAttribute('class', "card overflow-hidden shadow-clickable rounded-4 border-0 mb-5");
        if(note.free == "page"){
            div.setAttribute('onclick', `location.href='${note.link}';`);
        }else{
            div.setAttribute('onclick', `location.href='?index=${index}';`);
        }
        div.setAttribute("style", "cursor: pointer;");
        div.innerHTML = `<div class="card-body p-0">
                    <div class="d-flex align-items-center">
                        <div class="p-5">
                            <h2 class="fw-bolder">${note.title}</h2>
                            <p>
                                ${note.text}
                            </p>
                        </div>
                    </div>
                </div>`
        flag = true;
        for(tag of currentTags){
            if(!note.tags.includes(tag)){
                flag = false;
                break;
            }
        }
        if(flag){
            node.appendChild(div);
        }
        for (tag of note.tags){
            if(!allTags.includes(tag)){
                allTags.push(tag);
            }
        }
    }
    // <button class="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder activeTag" onclick="addTag('prova');">#prova</buttonm>
    for(tag of currentTags){
        var btn = document.createElement('button');
        btn.setAttribute('class', 'btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder activeTag');
        btn.setAttribute('onclick', `removeTag('${tag}')`);
        btn.innerHTML="#"+tag;
        tagslistnode.appendChild(btn);
    }
    for(tag of allTags){
        if(!currentTags.includes(tag)){
            var btn = document.createElement('button');
            btn.setAttribute('class', 'btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder tag');
            btn.setAttribute('onclick', `addTag('${tag}')`);
            btn.innerHTML="#"+tag;
            tagslistnode.appendChild(btn);
        }
    }
}

function loadSingleNote(notes, index){
    note = notes[index];
    var div=document.createElement('div');
    div.setAttribute('class', "card overflow-hidden shadow rounded-4 border-0 mb-5");
    string  = "";
    for (tag of note.tags){
        if(tag!="Free")
        string += `<a href = "?tag=` + tag+ `"> #` + tag + `</a> `;
    }
    div.innerHTML = `<div class="card-body p-0">
                <div class="d-flex align-items-center">
                    <div class="p-5" style="width:100%;">
                        <div class="d-flex align-items-center justify-content-between mb-4 d-flex-scale" style="margin: 0 !important;">
                            <h2 class="fw-bolder mb-0">${note.title}</h2>
                            <a class="btn btn-primary px-4 py-3" href="${note.link}">
                                <div class="d-inline-block bi bi-download me-2"></div>
                                    Download ${note.free=='true'?'Notes':"Preview"}
                            </a>
                            </div>
                        <div class="badge bg-gradient-primary-to-secondary text-white mb-4" style="margin: 1rem 2rem !important;"><div class="text-uppercase">${note.lang}</div></div>
                        <b class="text-secondary fw-bolder mb-2">${note.date}</b> 
                        <div class="bg-light p-4 rounded-4">
                        ${note.text}
                        </div>
                        <p class="p-2">
                            ${string}
                        </p>
                    </div>
                </div>
            </div>`
    node.appendChild(div);
}


// MAIN
fetch("notes.json")
    .then((response) => response.json())
        .then((json) => notes = json)
            .then(
                (notes)=>{
                    index = getParameter("index");
                    if(index==null){
                        loadNotes(notes);
                    }else{
                        loadSingleNote(notes, index);
                    }
                }
            )

string = "";

function addTag(tagname){
    currentTags.push(tagname);
    goToTags();
}
function removeTag(tagname){
    index = currentTags.indexOf(tagname);
    if (index > -1) {
        currentTags.splice(index, 1);
    }
    goToTags()
}
function goToTags(){
    string="?";
    for([index,tag] of currentTags.entries()){
        if(index != 0){
            string += "&";
        }
        string += "tag=";
        string += tag;
    }
    location.href=string;
}
