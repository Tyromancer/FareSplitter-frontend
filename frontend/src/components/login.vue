<template>
    <html lang="en">
        <head>
        <title>User Login Page</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="index.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <!--
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
        -->
        </head>
        <body>

            <div class="jumbotron text-center">
            <h1>User Login</h1>
            </div>
        
            <div id="app-6" class = "container">
                <p>{{ message }}</p>
                <p><input v-model="empty"></p>
                <button v-on:click="save_username">Submit</button>
            </div>
            
            <!--
            <script src="index.js"></script>
            -->

        </body>
    </html>
</template>

<script>

import axios from "axios";
export default {
    name: 'login',
    data() {
        return {
            message: 'Please input your username here:',
            empty: ''
            }
    },
    methods: {
        save_username: function (username_d) {
            var username_data = {username: username_d};
            axios.post("http://127.0.0.1:5000/api/add-user", username_data).then(res => console.log(res.data.msg))
        }
    }
  }
</script>
