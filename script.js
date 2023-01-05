var level = 1;
var app = new Vue({
    el: "#vueContainer",
    data: {
        menuIsVisible: false,
        ita: true,
        menuItems: [
            {
                name: "",
                pageSrc: ""
            }
        ],
    },
    mounted(){
        checkCookie();
        setDark(dark, level);
        this.menuItems=loadLinks(0);
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
                setDark(false, level);
            }else{
                setDark(true, level);
            }
        }
    }
});