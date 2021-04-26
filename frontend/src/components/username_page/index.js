
var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Please input your username here:',
      empty: ''
    },
    methods: {
        save_username: function (username) {
            username_data = {name: username};
            axios.post("frontend/src/components", username_data)
        }
    }
  })