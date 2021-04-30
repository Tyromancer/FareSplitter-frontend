<template>
  <div>
    <h3>
      <b-badge variant="primary">Add new user</b-badge>
    </h3>

    <p>{{ message }}</p>
    <p>
      <input v-model="username">
    </p>
    <button type="submit" @click="save_username()">Submit</button>
  </div>
  <!--
            <script src="index.js"></script>
  -->
</template>

<script>
import axios from "axios";
export default {
  name: "AddUser",
  data() {
    return {
      message: "Please input your username here:",
      username: ""
    };
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
      this.username = "";
    }
  }
};
</script>
