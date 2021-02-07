new Vue({
  el: '#root',
  data:{
  emailGenerata: [],
},
  mounted() {
    for (var i = 0; i < 11; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(response => {
        this.emailGenerata.push(response.data.response);
      });
    }

  },
})
Vue.config.devtools = true
