<template>
  <div class="invoice-view container">
    <router-link
      class="no-underline flex"
      :to="{ name: 'Home' }"
    >
      <img
        src="../assets/icon-arrow-left.svg"
        alt=""
      />
      Go Back
    </router-link>

    <!-- Header -->
    <div class="header flex">
      <div class="left flex">
        <span>Status</span>
        <div
          class="status-button opacity-80 rounded p-2 text-white shadow-md flex"
          :class="{
            'bg-green-400': currentInvoice.invoicePaid,
            'bg-blue-400': currentInvoice.invoiceDraft,
            'bg-yellow-400': currentInvoice.invoicePending,
          }"
        >
          <span v-if="currentInvoice.invoicePaid">Paid</span>
          <span v-if="currentInvoice.invoiceDraft">Draft</span>
          <span v-if="currentInvoice.invoicePending">Pending</span>
        </div>
      </div>
      <div class="right flex">
        <button
          @click="toggleEditInvoice(currentInvoice.docId)"
          class="bg-blue-500 rounded opacity-80 hover:opacity-100 duration-300 text-white p-2 shadow-md"
        >
          Edit
        </button>
        <button
          @click="deleteInvoice(currentInvoice.docId)"
          class="bg-red-500 rounded opacity-80 hover:opacity-100 duration-300 text-white p-2 shadow-md"
        >
          Delete
        </button>
        <button
          v-if="currentInvoice.invoiceDraft || currentInvoice.invoicePaid"
          @click="updateStatusToPending(currentInvoice.docId)"
          class="bg-yellow-500 rounded opacity-80 hover:opacity-100 duration-300 text-white p-2 shadow-md"
        >
          Mark as Pending
        </button>
        <button
          v-if="currentInvoice.invoicePending"
          @click="updateStatusToPaid(currentInvoice.docId)"
          class="bg-green-500 rounded opacity-80 hover:opacity-100 duration-300 text-white p-2 shadow-md"
        >
          Mark as Paid
        </button>
      </div>
    </div>

    <!-- Invoice Details -->
    <div class="invoice-details flex flex-col">
      <div class="top flex">
        <div class="left flex">
          <p><span>#</span> {{ currentInvoice.invoiceId }}</p>
          <p>{{ currentInvoice.ProductDescription }}</p>
        </div>
        <div class="right flex flex-col">
          <p>{{ currentInvoice.billerStreetAddress }}</p>
          <p>{{ currentInvoice.billerCity }}</p>
          <p>{{ currentInvoice.billerZipCode }}</p>
          <p>{{ currentInvoice.billerCountry }}</p>
        </div>
      </div>

      <div class="middle flex">
        <div class="payment flex flex-col">
          <h4>Invoice Date</h4>
          <p>
            {{ currentInvoice.invoiceDate }}
          </p>
          <h4>Payment Date</h4>
          <p>
            {{ currentInvoice.paymentDueDate }}
          </p>
        </div>
        <div class="bill flex flex-col">
          <h4>Bill To</h4>
          <p>{{ currentInvoice.clientName }}</p>
          <p>{{ currentInvoice.clientStreetAddress }}</p>
          <p>{{ currentInvoice.clientCity }}</p>
          <p>{{ currentInvoice.clientZipCode }}</p>
          <p>{{ currentInvoice.clientCountry }}</p>
        </div>
        <div class="send-to flex flex-col">
          <h4>Send To</h4>
          <p> {{ currentInvoice.clientEmail }}</p> 
        </div>
      </div>

      <div class="bottom flex flex-col">
        <div class="billing-items">
          <div class="heading flex">
            <p>Item name</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Total Price</p>
          </div>
          <div v-for="(item, idx) in currentInvoice.invoiceItemList" :key="idx" class="item flex">
            <p> {{ item.itemName }} </p>
            <p> {{ item.qty }} </p>
            <p> {{ item.price }} </p>
            <p> {{ item.total }} </p>
          </div>
        </div>
        <div class="total flex">
          <p>Amount Due</p>
          <p>{{ currentInvoice.invoiceTotal }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "invoiceView",

  data() {
    return {};
  },

  created() {
    this.getCurrnetInvoice();
  },

  methods: {
    ...mapMutations(["SET_CURRENT_INVOICE"]),

    getCurrnetInvoice() {
      this.SET_CURRENT_INVOICE(this.$route.params.invoiceId);
    },
  },

  computed: {
    ...mapState(["currentInvoice"]),
  },
};
</script>

<style lang="css" scoped></style>
