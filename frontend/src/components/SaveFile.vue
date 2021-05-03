<template>
  <html lang="en">
    <head>
      <title>Save Data</title>
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
        <h1>Save Data Locally</h1>
      </div>

      <div id="app-6" class="container">
        <p>
          <input v-model="username" />
        </p>
        <button type="Save to local" @click="save_local()">Submit</button>
      </div>
    </body>
  </html>
</template>

<script>
import axios from "axios";
export default {
  name: "SaveLocal",
  data() {
    return ;
  },
  methods: {
    save_local: function() {
        var username_data = { username: this.username };
        axios.get("http://127.0.0.1:5000/api/get-all-transactions").then(res => {
        console.log(res.data1);
        axios.get("http://127.0.0.1:5000/api/get-amounts-due").then(res => {
        console.log(res.data2);
        var transactions = res.data1["transactions"];
        var transaction_data = "";
        for(var i = 0; i<transactions.length; i++)
        {
            transaction_data += transactions[i].toString();
            transaction_data += " ";
        }

        var amounts = res.data2["amounts"];
        var amount_data = " ";
        for(var i = 0; i<amounts.length; i++)
        {
            amount_data += amounts[i].toString();
            amount_data += " ";
        }

        var fso = new ActiveXObject("Scripting.FileSystemObject");
        fso.CreateFolder("Local_data");

        const fs = require('fs')
        fs.writeFile('SaveData_username.txt', username, (err) => {
            if (err) throw err;
        })

        fs.writeFile('SaveData_transactions.txt', transaction_data, (err) => {
            if (err) throw err;
        })

        fs.writeFile('SaveData_amounts.txt', amount_data, (err) => {
            if (err) throw err;
        })

    }
  }
};
</script>
