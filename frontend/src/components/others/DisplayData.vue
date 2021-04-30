
<template>
<body>
<div>
<p>Display data</p>
</div>
<div>
<table id="transaction_table">
  <tbody>
    <li v-for="trans in transactions" :key = "trans.id">
      <td>{{trans.desc}}</td>
      <td>{{trans.time}}</td>
    </li>
  </tbody>
</table>

<table id="payment_table">
  <tbody>
    <li v-for="payment in trans.payments" :key = "payment.id">
      <td>{{payment.username}}</td>
      <td>{{payment.amount}}</td>
    </li>
  </tbody>
</table>

<table id="amount_table">
  <tbody>
    <li v-for="am in amounts" :key = "am.id">
      <td>{{am.amount}}</td>
    </li>
  </tbody>
</table>
</div>
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