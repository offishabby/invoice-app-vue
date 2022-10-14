<template>
  <div class="invoice-view my-12 max-w-[1000px] w-[75%] mx-auto text-neutral-600">
    <router-link
      class="nav-link no-underline flex mb-8 items-center text-lg"
      :to="{ name: 'Home' }"
    >
      <img
        class="mr-2 w-[10px] h-[14px]"
        src="../assets/icon-arrow-left.svg"
        alt=""
      />
      Go Back
    </router-link>

    <!-- Header -->
    <div
      class="header flex items-center rounded px-6 py-8 text-base rounded border-2 border-neutral-500 shadow-2xl bg-neutral-200 mb-4"
    >
      <div class="left flex items-center">
        <span>Status</span>
        <div
          class="status-button opacity-80 rounded-full p-2 text-white shadow-md flex ml-4"
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
      <div class="right flex flex-1 justify-end">
        <button
          @click="toggleEditInvoice"
          class="min-w-[70px] bg-blue-500 ml-4 rounded opacity-80 hover:opacity-100 duration-300 text-white p-2 shadow-md"
        >
          Edit
        </button>
        <button
          @click="deleteInvoice(currentInvoice.docId)"
          class="min-w-[70px] bg-red-500 ml-4 rounded opacity-80 hover:opacity-100 duration-300 text-white p-2 shadow-md"
        >
          Delete
        </button>
        <button
          v-if="currentInvoice.invoiceDraft || currentInvoice.invoicePaid"
          @click="updateStatusToPending(currentInvoice.docId)"
          class="min-w-[70px] bg-yellow-500 ml-4 rounded opacity-80 hover:opacity-100 duration-300 text-white p-2 shadow-md"
        >
          Mark as Pending
        </button>
        <button
          v-if="currentInvoice.invoicePending"
          @click="updateStatusToPaid(currentInvoice.docId)"
          class="min-w-[70px] bg-green-500 ml-4 rounded opacity-80 hover:opacity-100 duration-300 text-white p-2 shadow-md"
        >
          Mark as Paid
        </button>
      </div>
    </div>

    <!-- Invoice Details -->
    <div
      class="invoice-details p-12 flex flex-col rounded border-2 border-neutral-500 shadow-2xl bg-neutral-200"
    >
      <div class="top flex">
        <div class="left flex flex-col flex-1">
          <p class="uppercase underline text-lg font-bold mb-2">
            <span>#</span> {{ currentInvoice.invoiceId }}
          </p>
          <p class="text-base mb-2">{{ currentInvoice.productDescription }}</p>
        </div>
        <div class="right flex flex-col flex-0 items-start">
          <p>{{ currentInvoice.billerStreetAddress }}</p>
          <p>{{ currentInvoice.billerCity }}</p>
          <p>{{ currentInvoice.billerZipCode }}</p>
          <p>{{ currentInvoice.billerCountry }}</p>
        </div>
      </div>

      <div class="middle flex mt-12 gap-5">
        <div class="payment flex flex-col flex-1 justify-between">
          <div>
            <h4 class="font-bold mb-1">Invoice Date</h4>
            <p class="text-lg font-medium" >
              {{ currentInvoice.invoiceDate }}
            </p>
          </div>
          <div>
            <h4 class="font-bold mb-1">Payment Date</h4>
            <p class="text-lg font-medium" >
              {{ currentInvoice.paymentDueDate }}
            </p>
          </div>
        </div>
        <div class="bill flex flex-col flex-1">
          <h4 class="font-bold mb-1">Bill To</h4>
          <p class="text-lg font-medium">{{ currentInvoice.clientName }}</p>
          <p class="mt-2" >{{ currentInvoice.clientStreetAddress }}</p>
          <p>{{ currentInvoice.clientCity }}</p>
          <p>{{ currentInvoice.clientZipCode }}</p>
          <p>{{ currentInvoice.clientCountry }}</p>
        </div>
        <div class="send-to flex flex-col flex-1">
          <h4 class="font-bold mb-1">Send To</h4>
          <p>{{ currentInvoice.clientEmail }}</p>
        </div>
      </div>

      <div class="bottom flex flex-col mt-10">
        <div class="billing-items p-8 rounded border-2 border-neutral-500 bg-neutral-300">
          <div class="heading mb-4 grid grid-cols-[3fr_1fr_1fr_1fr] font-semibold">
            <p class="text-left">Item name</p>
            <p class="text-right" >Quantity</p>
            <p class="text-right" >Price</p>
            <p class="text-right" >Total</p>
          </div>
          <div
            v-for="(item, idx) in currentInvoice.invoiceItemList"
            :key="idx"
            class="item grid grid-cols-[3fr_1fr_1fr_1fr] mb-4 border-b-2 border-neutral-500 text-sm last:mb-0"
          >
            <p class="text-left" >{{ item.itemName }}</p>
            <p class="text-right" >{{ item.qty }}</p>
            <p class="text-right" >{{ item.price }}</p>
            <p class="text-right" >{{ item.total }}</p>
          </div>
        </div>
        <div class="total flex p-6 justify-between">
          <p>Amount Due</p>
          <p class="text-xl font-bold text-right" >${{ currentInvoice.invoiceTotal }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "invoiceView",

  data() {
    return {};
  },

  created() {
    this.getCurrentInvoice();
  },

  methods: {
    ...mapMutations(["SET_CURRENT_INVOICE", "TOGGLE_INVOICE", "SET_EDIT_INVOICE"]),
    ...mapActions(["DELETE_INVOICE"]),

    getCurrentInvoice() {
      this.SET_CURRENT_INVOICE(this.$route.params.invoiceId);
    },

    toggleEditInvoice() {
      this.SET_EDIT_INVOICE(true)
      this.TOGGLE_INVOICE()
    },

    async deleteInvoice(docId) {
      await this.DELETE_INVOICE(docId)
      this.$router.push({name: 'Home'})
    }
  },

  computed: {
    ...mapState(["currentInvoice"]),
  },
};
</script>

<style lang="css" scoped></style>
