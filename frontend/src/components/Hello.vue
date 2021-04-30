<template>
  <div>
    <h1>{{ msg }}</h1>
    <view-all-users/>
  </div>
</template>

<script>
import axios from "axios";
import ViewAllUsers from "./ViewAllUsers.vue";
export default {
  name: "Hello",
  components: {
    ViewAllUsers
  },
  data() {
    return {
      msg: ""
    };
  },
  created() {
    axios.get("http://127.0.0.1:5000/api/hello-world").then(res => {
      console.log(res);
      this.msg = res.data.msg;
    });
  }
};
</script>
