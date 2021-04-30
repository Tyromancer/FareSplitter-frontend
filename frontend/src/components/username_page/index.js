import axios from "axios";
var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Please input your username here:',
      empty: ''
    },
    methods: {
      save_username: function() {
        var username_data = { username: this.username };
        axios
          .post("http://127.0.0.1:5000/api/add-user", username_data)
          .then(res => {
            if (res.data["msg"] === "ok") {
              alert("Success!");
            }
          });
      }
    }
  })