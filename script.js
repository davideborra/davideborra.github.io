var app = new Vue({
    el: "#vueContainer",
    data: {
        width: 10,
        bigScreen: true,
        menuIsVisible: false,
        ita: true,
        menuItems: [
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
            }
        ],
        news: [
        	{
                title: "",
                date: "",
                text: "",
                link: "",
                linkText: "",
                show: false
            },
        ]
    },
    mounted(){
    },
    methods: {
        showMenu(){
            this.menuIsVisible = !this.menuIsVisible && !this.bigScreen;
        },
        showText(index){
            this.news[index].show = !this.news[index].show;
        },
        easterEgg(){
            alert(42);
        },
        language(){
            this.ita=!this.ita;
        }
    }
});