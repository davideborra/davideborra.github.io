node =  document.getElementById('cardsContainer');

tautoNum = 0

function renderTex(){
    renderMathInElement(document.body, {
    // customised options
    // • auto-render specific keys, e.g.:
    delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true}
    ],
    // • rendering keys, e.g.:
    throwOnError : false
    });
}

function tauto_div(note){
    var div=document.createElement('div');
    div.setAttribute('class', "card overflow-hidden rounded-4 border-0 mb-5");
    printDate = "";
    if (note.date == ""){}
    else{
        date = note.date.split("-");
        printDate = date[2]+"/"+date[1]+"/"+date[0];
    }
    div.innerHTML = `<div class="card-body p-0">
            <div class="d-flex align-items-center">
                <div class="p-5" style="width:100%;">
                    <div class="bg-light p-4 rounded-4">
                    ${note.text}
                    </div>
                    <div class="d-flex-scale">
                    <div class="p-2">
                        ${note.author}
                    </div>
                    <div>
                    <i class="text-secondary fw-bolder date"> ${printDate} &emsp;</i> 
                    <i class="bi ${logicSymb(note.type)}"></i>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>`
    return div;
}

function logicSymb(id){
    if (id=="i") 
        return "bi-info-circle-fill"; 
    else if (id=="c")
        return "bi-c-circle-fill";
    else 
        return "bi-question-circle-fill"
}

selType = "i"

function switchType(){
    if (selType == "i"){
        selType = "c"
        console.log(selType);
    } else {
        selType = "i"
        console.log(selType);
    }
    document.getElementById("switcher").innerHTML = `<i class="bi ${logicSymb(selType)}"></i>`
}

function loadNotes(notes){
    for (note of notes){
        node.appendChild(tauto_div(note));
    }
    tautoNum = notes.length;
    document.getElementById("number").innerHTML= tautoNum+ " tautologie"
    renderTex();
}

function add_tauto(){
    new_tauto = {
        text: document.getElementById("new_text").value,
        author: document.getElementById("new_author").value,
        date: document.getElementById("new_date").value,
        type: selType
    }

    node.appendChild(tauto_div(new_tauto));
    
    document.getElementById("new_text").value = "";
    document.getElementById("new_author").value = ""
    document.getElementById("new_date").value=today();

    document.getElementById("number").innerHTML= ++tautoNum + " tautologie"

    renderTex();
    // notifyNewTauto(new_tauto);
}

function today(){
    date = new Date()
    month = date.getMonth()+1
    if (month < 10) {month = "0"+month;}
    day = date.getDate();
    if (day < 10) {day = "0"+day;}
    return date.getFullYear()+"-"+month+"-"+day;
}

// MAIN

fetch("tautologie.json")
    .then((response) => response.json())
        .then((json) => notes = json)
            .then(
                (notes)=>{
                    loadNotes(notes);
                }
            )

string = "";

document.getElementById("new_date").value=today();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js');
  });
}

async function notifyNewTauto(tauto){
    console.log("new")
    // create and show the notification
    const showNotification = () => {
        // create a new notification
        const notification = new Notification('Nuova tautologia!', {
            body: tauto.author+' ha detto '+'\"'+tauto.text+'\"',
            icon: 'src/icon.png'
        });

        // close the notification after 10 seconds

        // navigate to a URL when clicked
        // notification.addEventListener('click', () => {
        //     window.open('https://www.javascripttutorial.net/web-apis/javascript-notification/', '_blank');
        // });
    }

    // show an error message
    const showError = () => {
        const error = document.querySelector('.error');
        error.style.display = 'block';
        error.textContent = 'You blocked the notifications';
        console.log("error");
    }

    // check notification permission
    let granted = false;

    if (Notification.permission === 'granted') {
        granted = true;
    } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
    }

    // show notification or error
    granted ? showNotification() : showError();
}


// Aggiungi un modo di esportare in TeX