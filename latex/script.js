var app = new Vue({
    el: "#vueContainer",
    data: {
        width: 10,
        bigScreen: true,
        menuIsVisible: false,
        menuItems: [
            {
                name: "Gare",
                pageSrc: "../gare"
            },
            {
                name: "Esercizi",
                pageSrc: "../esercizi"
            },
            {
                name: "Scuola",
                pageSrc: "https://www.galileicrema.edu.it"
            },
            {
                name: "Informatica",
                pageSrc: "../informatica"
            }
        ],
    },
    mounted(){
        this.width = window.innerWidth;
        if (this.width < 800){
            this.bigScreen=false;
        }
    },
    methods: {
        showMenu(){
            this.menuIsVisible = !this.menuIsVisible && !this.bigScreen;
        }
    }
});