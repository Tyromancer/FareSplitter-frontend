<template>
  <b-container fluid>
    <b-row v-for="transaction in transactions" :key="transaction.id">
      <b-col>{{ transaction.desc }}</b-col>
      <b-col>{{ transaction.time }}</b-col>

      <b-col v-for="payment in transaction.payments" :key="payment.username">
        <p>{{ payment.username }}: {{ payment.amount }}</p>
      </b-col>
    </b-row>
    <b-row>Total amount due:</b-row>
    <b-row v-for="(a, counter) in this.amounts" :key="counter">
      <p>{{ a.username }}: {{ a.amount }}</p>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "ViewAllTransactions",
  data() {
    return {
      transactions: [],
      amounts: [],
      poll1: null,
      poll2: null
    };
  },
  methods: {
    get_all_transactions() {
      axios.get("http://127.0.0.1:5000/api/get-all-transactions").then(res => {
        console.log(res.data);
        this.transactions = res.data["transactions"];
      });
    },
    get_amounts_due() {
      axios.get("http://127.0.0.1:5000/api/get-amounts-due").then(res => {
        this.amounts = res.data["amounts"];
      });
    }
  },
  created() {
    // this.get_all_transactions();
    // this.get_amounts_due();
    this.poll1 = setInterval(this.get_all_transactions, 5000);
    this.poll2 = setInterval(this.get_amounts_due, 5000);
  },
  unmounted() {
    clearInterval(this.poll1);
    clearInterval(this.poll2);
  }
};
</script>
