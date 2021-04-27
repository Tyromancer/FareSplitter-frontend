<template>
  <div>
    <b-form>
      <b-form-group label="Description:" label-for="desc">
        <b-form-input
          id="desc"
          v-model="description"
          type="text"
          placeholder="e.g.: Pizza"
          required
        ></b-form-input>
      </b-form-group>
      <!-- <label for="desc">Description</label>
      <input type="text" v-model="description" required id="desc">
      <br>-->

      <b-button @click="add_payment" variant="outline-primary">Add another payment</b-button>

      <div v-for="(payment, counter) in this.payments" :key="counter">
        <b-button variant="outline-danger" @click="delete_payment(counter)">x</b-button>
        <b-form-group :label="counter + ': Username'" :label-for="'username_'+counter">
          <b-form-input :id="'username_'+counter" v-model="payment.username" type="text" required></b-form-input>
        </b-form-group>
        <!-- <label :for="'username_' + counter">{{ counter + 1 }}: Username</label>
        <input type="text" v-model="payment.username" :id="'username_' + counter" required>-->
        <!-- <label :for="'amount_' + counter">Amount</label>
        <input type="text" v-model="payment.amount" :id="'amount_' + counter" required>-->
        <b-form-group label="Amount" :label-for="'amount_'+counter">
          <b-form-input :id="'amount_'+counter" v-model="payment.amount" type="text" required></b-form-input>
        </b-form-group>
      </div>

      <button type="submit" @click="submit">Submit</button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddTransaction",
  data() {
    return {
      description: "",
      payments: [
        {
          username: "",
          amount: 0.0
        }
      ]
    };
  },
  methods: {
    add_payment() {
      this.payments.push({
        username: "",
        amount: 0.0
      });
    },
    delete_payment(idx) {
      this.payments.splice(idx, 1);
    },
    submit() {
      // TODO: add user input sanity check
      axios
        .post("http://127.0.0.1:5000/api/add-transaction", {
          description: this.description,
          payments: this.payments
        })
        .then(res => {
          console.log(res.data);
        });
    }
  }
};
</script>
