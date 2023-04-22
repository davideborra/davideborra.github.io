var app = new Vue({
    el: "#vueContainer",
    data: {
        current: {
            name: "",
            level: 0,
            school: "",
            manual: "Manuale del Giocatore",
            time: "",
            range: "",
            components: "",
            duration: "",
            damage: "",
            description: "",
            higher_lv: "",
        },
        spells: []
    },
    mounted(){
    },
    methods: {
        addSpell(){
            this.spells.push(this.current);
            this.current = {
                name: "",
                level: 0,
                school: "",
                manual: "Manuale del Giocatore",
                time: "",
                range: "",
                components: "",
                duration: "",
                damage: "",
                description: "",
                higher_lv: "",
            };
        }
    }
});