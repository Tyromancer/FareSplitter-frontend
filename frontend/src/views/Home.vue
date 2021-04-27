<template>
  <b-container fluid>
    <b-jumbotron header="FareSplitter"></b-jumbotron>
    <b-row>
      <b-col cols="8">
        <view-all-transactions/>
      </b-col>
      <b-col cols="4" fluid>
        <b-row>
          <add-user/>
        </b-row>
        <br>
        <b-row>
          <add-transaction/>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Hello from "@/components/Hello.vue";
import ViewAllTransactions from "@/components/ViewAllTransactions.vue";
import AddUser from "@/components/AddUser.vue";
import AddTransaction from "@/components/AddTransaction.vue";
// ("");
export default {
  name: "Home",
  components: {
    // HelloWorld
    // Hello
    ViewAllTransactions,
    AddUser,
    AddTransaction
  }
};
</script>
