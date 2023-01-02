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
        notes: []
    },
    mounted(){
        this.notes = notes
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
