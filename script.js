var app = new Vue({
    el: "#vueContainer",
    data: {
        width: 10,
        menuIsVisible: false,
        ita: true,
        dark: false,
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
            var theme = document.getElementsByTagName('link')[1];
            if (theme.getAttribute('href') == 'dark.css') {
                theme.setAttribute('href', '');
            } else {
                theme.setAttribute('href', 'dark.css');
            }
            this.dark=!this.dark;
        }
    }
});