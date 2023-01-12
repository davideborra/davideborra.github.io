var level = 1;

Vue.component("modal", {
    template: "#modal-template"
  });

var app = new Vue({
    el: "#vueContainer",
    data: {
        menuIsVisible: false,
        showModal: false,
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
        app.dark = dark;
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
            app.dark = dark;
        }
    }
});