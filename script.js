var level = 0;

Vue.component("modal", {
    template: "#modal-template"
  });

var app = new Vue({
    el: "#vueContainer",
    data: {
        menuIsVisible: false,
        ita: true,
        showModal: false,
        showCookies: false,
        menuItems: [
            {
                name: "",
                pageSrc: ""
            }
        ],
        quote: "42",
    },
    mounted(){
        this.showCookies=checkCookie();
        setDark(dark, level);
        this.menuItems=loadLinks(0);
        this.loadQuote();
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
        },
        loadQuote(){
            if (Math.floor(Math.random() * 2)==0){
                var string = "http://numbersapi.com/42";

            }else{
                var string = "http://numbersapi.com/random/math"
            }
            axios.get(string, {
            }).then(function(risultato) {
                value = risultato.data;
                //value = "\\sum_{i=0}^ni=\\frac{n(n+1)}{2}";
                while(value.includes(" ")){
                    value = value.replace(" ", "~")
                }
                value = "\\textstyle\\allowbreak\\mathsf{" + value + "}";
                app.quote = katex.renderToString(value,{displayMode: true, output: 'html',});
                quote.innerHTML = app.quote;
            });
        }
    }
});