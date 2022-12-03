var app = new Vue({
    el: "#vueContainer",
    data: {
        width: 10,
        bigScreen: true,
        menuIsVisible: false,
        menuItems: [
            {
                name: "Appunti",
                pageSrc: "/appunti"
            },
            {
                name: "LaTeX",
                pageSrc: "../latex"
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
        this.width = window.innerWidth;
        if (this.width < 800){
            this.bigScreen=false;
        };
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
        }
    }
});