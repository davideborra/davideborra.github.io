var level = 1;
var app = new Vue({
    el: "#vueContainer",
    data: {
        menuIsVisible: false,
        dark: false,
        menuItems: [
            {
                name: "",
                pageSrc: ""
            }
        ],
        level: 1,
    },
    mounted(){
        checkCookie();
        setDark(dark, level);
        this.menuItems=loadLinks(level);
    },
    methods: {
        showMenu(){
            this.menuIsVisible = !this.menuIsVisible;
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