const { createApp }= Vue;
createApp({
    data(){
        return{
            basePath: 'https://flynn.boolean.careers/exercises/api',
            emails: []
        }
    },
    methods: {
        getEmail(){
            this.emails = [];
            for (let i = 0; i < 10; i++){
                axios.get(`${this.basePath}/random/mail`).then((result)=> {
                    this.emails.push(result.data.response);
                }) 
            }
        }
    }
}).mount('#app')