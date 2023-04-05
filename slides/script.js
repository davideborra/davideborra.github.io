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
            if (!this.topics.includes(note.topic)){
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
