const app = Vue.createApp({
    data() {
        return {
            firstName: 'Adam',
            lastName: 'PM',
            email: 'adam.pm77@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/60.jpg',
        }
    },
    methods: {
        async getUsers() {
            const res = await fetch('https://randomuser.me/api');
            const {
                results
            } = await res.json();

            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
        },
    },
});

app.mount('#app');