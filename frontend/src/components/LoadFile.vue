<template>
  <html lang="en">
    <head>
      <title>Load Data</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="index.css" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
    </head>
    <body>
      <div class="jumbotron text-center">
        <h1>Load Data</h1>
      </div>

      <div id="app-6" class="container">
        <input type="file" id="data_file" name="filename" />
        <button type="Load" @click="load_data()">Select File</button>
      </div>
    </body>
  </html>
</template>

<script>
import axios from "axios";
export default {
  name: "LoadData",
  data() {
    return ;
  },
  methods: {
    load_data: function(){
      var file_name = document.getElementById('data_file')
      const fs = require('fs')

      fs.readFile('Input.txt', (err, data) => {
        if (err) throw err;
      }
      data = data.toString()
      data_a = data.split("\n")
      axios.get("http://127.0.0.1:5000/api/username").then(res => console.log(data_a[0]))
      transactions = []
      trans_data = data_a[1].split(" ")
      for(var i = 0; i<trans_data.length; i++)
      {
        transactions.push(trans_data[i])
      }
      axios.get("http://127.0.0.1:5000/api/get-transactions").then(res => console.log(transactions))

      amounts = []
      amounts_data = data_a[2].split(" ")
      for(var i = 0; i<amounts_data.length; i++)
      {
        transactions.push(amounts_data[i])
      }
      axios.get("http://127.0.0.1:5000/api/get-amounts").then(res => console.log(res.data.amounts))

    }
  }
};
</script>
