var level = 1;

Vue.component("modal", {
    template: "#modal-template"
  });

var app = new Vue({
    el: "#vueContainer",
    data: {
        menuIsVisible: false,
        showModal: false,
        showCookies: false,
        schoolQuery: "0",
        topicQuery: "0",
        topics: [],
        menuItems: [
            {
                name: "",
                pageSrc: ""
            }
        ],
        notes: []
    },
    mounted(){
        this.showCookies=checkCookie();
        setDark(dark, level);
        this.menuItems=loadLinks(level);
        this.notes = notes
        for (note of this.notes){
            if (!this.topics.includes(note.topic) && note.topic != "0"){
                this.topics.push(note.topic);   //append
            }
        };
    },
    methods: {
        showMenu(){
            this.menuIsVisible = !this.menuIsVisible;
        },
        showText(index){
            this.notes[index].showDetails = !this.notes[index].showDetails;
        },
        easterEgg(){
            alert(42);
        },
        applyFilters(){
            for (var index in this.notes){
                if (
                    (this.notes[index].topic == this.topicQuery || this.topicQuery == "0")
                    &&
                    (this.notes[index].school == this.schoolQuery || this.schoolQuery == "0")
                    ){
                        this.notes[index].show = true;
                    }else{
                        this.notes[index].show = false;
                    }
            }
        },
        changeTheme(){
            if(dark){
                setDark(false, level);
            }else{
                setDark(true, level);
            }
        }
    }
});


/*APPUNTI CON COLLEGAMENTI TOLTI
            {
                title: "Fisica gen. 1 - mod 1",
                date: "17/01/23",
                text: "Note prodotte in preparazione all'esame basate sul materiale fornito dalla prof.ssa Dolesi",
                link: "https://github.com/davideborra/appunti-uni/raw/main/Anno%201/Fisica-generale-1-(mod1)/main.pdf",
                linkText: "Fisica",
                topic: "Fisica",
                school: "Uni",
                showDetails: false,
                show: true,
            },
            {
                title: "Geometria A - mod 2",
                date: "04/04/23",
                text: "Appunti del corso di Geometria A - mod 1 tenuto dal prof. M. Andreatta",
                link: "https://github.com/davideborra/appunti-uni/raw/main/Anno%201/Geometria-A-(mod2)%20/main.pdf",
                linkText: "Geometria A",
                topic: "Geometria",
                school: "Uni",
                showDetails: false,
                show: true,
            },{
                title: "Algebra A - Provetta",
                date: "06/06/23",
                text: "Esercizi del corso di Algebra A in preparazione alla seconda prova intermedia",
                link: "https://github.com/davideborra/appunti-uni/raw/main/Anno%201/seconda-provetta-algebra/spi%20algebra%20-%20soluzioni.pdf",
                linkText: "Algebra A - SPI con solizioni",
                topic: "Algebra",
                school: "Uni",
                showDetails: false,
                show: true,
            }
*/