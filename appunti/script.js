var app = new Vue({
    el: "#vueContainer",
    data: {
        width: 10,
        bigScreen: true,
        menuIsVisible: false,
        schoolQuery: "0",
        topicQuery: "0",
        topics: [],
        menuItems: [
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
        ],
        notes: [
        	{
                title: "Geometria A - mod 1",
                date: "29/11/22",
                text: "Appunti del corso di Geometria A - mod 1 tenuto dal prof. L.E. Sola Conde",
                link: "https://davideborra.notion.site/Geometria-A-f587dd8f407f40cf8c3097028891a791",
                linkText: "Geometria A",
                topic: "Geometria",
                school: "Uni",
                showDetails: false,
                show: true,
            },
            {
                title: "Analisi Matematica A - mod 1",
                date: "9/12/22",
                text: "Trascrizioni delle esercitazioni di Analisi tenute da S. Vercellesi",
                link: "https://github.com/dborra03/esercitazione-analisi-A-2022-23",
                linkText: "Analisi A - GitHub",
                topic: "Analisi",
                school: "Uni",
                showDetails: false,
                show: true,
            },
            {
                title: "Funzioni ℝ → ℝ",
                date: "26/12/22",
                text: "Riassunto prodotto da me.",
                link: "https://github.com/davideborra/appunti-liceo/raw/main/funzioni/main.pdf",
                linkText: "Funzioni",
                topic: "Analisi",
                school: "Liceo",
                showDetails: false,
                show: true,
            },
            
        ]
    },
    mounted(){
        this.width = window.innerWidth;
        if (this.width < 800){
            this.bigScreen=false;
        };
        for (note of this.notes){
            if (!this.topics.includes(note.topic)){
                this.topics.push(note.topic);   //append
            }
        };
    },
    methods: {
        showMenu(){
            this.menuIsVisible = !this.menuIsVisible && !this.bigScreen;
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
        }
    }
});
