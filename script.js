var app = new Vue({
    el: "#vueContainer",
    data: {
        width: 10,
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
        ]
    },
    mounted(){
        checkCookie();
        setDark(dark);
    },
    methods: {
        showMenu(){
            this.menuIsVisible = !this.menuIsVisible;
        },
        showText(index){
            this.news[index].show = !this.news[index].show;
        },
        easterEgg(){
            alert(42);
        },
        language(){
            this.ita=!this.ita;
        },
        changeTheme(){
            if(dark){
                setDark(false);
            }else{
                setDark(true);
            }
            
        }
    }
});