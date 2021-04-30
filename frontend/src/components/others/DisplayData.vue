
<template>
<body>
<div>
<p>Display data</p>
</div>

  <b-container>
    <b-row v-for="trans in transactions" :key = "trans.id">
      <b-col>{{trans.desc}}</b-col>
      <b-col>{{trans.time}}</b-col>
    </b-row>

    <b-row v-for="payment in trans.payments" :key = "payment.id">
      <b-col>{{payment.username}}</b-col>
      <b-col>{{payment.amount}}</b-col>
    </b-row>

    <b-row v-for="am in amounts" :key = "am.id">
      <b-col>{{am.amount}}</b-col>
    </b-row>
  <b-container>
</body>
</template>


<script>
import axios from "axios";
export default {
  name: 'DisplayData',
  data() {
    return {
      transactions: [],
      amounts: []
    };
  },
  methods: {
    get_transactions() {
      axios.get("http://127.0.0.1:5000/api/get-transactions").then(res => console.log(res.data.transactions))
    },
    get_amounts() {
      axios.get("http://127.0.0.1:5000/api/get-amounts").then(res => console.log(res.data.amounts))
    }
  },
};

</script>