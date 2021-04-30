<template>
  <div>
    <p v-for="user in users" :key="user.username">{{ user.username }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ViewAllUsers",
  data() {
    return {
      users: [],
      poll: null
    };
  },
  methods: {
    poll_all_users() {
      axios.get("http://localhost:5000/api/get-all-users").then(res => {
        console.log(res.data);
        this.users = res.data["users"];
      });
    }
  },
  created() {
    this.poll = setInterval(this.poll_all_users, 10000);
  },
  unmounted() {
    clearInterval(this.poll);
  }
};
</script>
