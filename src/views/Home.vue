<template>
  <div class="home font-normal max-w-[1000px] w-[80%] mx-auto text-neutral-600">
    <!-- header -->
    <div class="header my-12 flex justify-center">
      <div class="flex flex-col flex-1">
        <h1 class="text-2xl font-bold">Invoices</h1>
        <span>You have {{ invoiceData.length }} invoices total</span>
      </div>
      <!-- Right side -->
      <div class="flex flex-row justify-end align-middle">
        <div
          class="flex filter mr-10 relative items-center cursor-pointer"
          @click="toggleFilterMenu"
        >
          <span class="text-sm">Filter by status</span>
          <span
            class="text-sm"
            v-if="invoiceFilterStatus"
            >: {{ invoiceFilterStatus }}
          </span>
          <img
            src="../assets/icon-arrow-down.svg"
            alt="arrow down"
            class="ml-1 w-9px h-5px"
          />
          <ul
            v-show="filterMenu"
            class="filter-menu rounded absolute min-w-[100px] top-10 list-none shadow-md bg-neutral-300"
          >
            <li
              @click="setInvoiceFilterStatus"
              class="text-sm py-1 hover:bg-neutral-200 duration-300 px-2 cursor-pointer"
            >
              Draft
            </li>
            <li
              @click="setInvoiceFilterStatus"
              class="text-sm py-1 hover:bg-neutral-200 duration-300 px-2 cursor-pointer"
            >
              Pending
            </li>
            <li
              @click="setInvoiceFilterStatus"
              class="text-sm py-1 hover:bg-neutral-200 duration-300 px-2 cursor-pointer"
            >
              Paid
            </li>
            <li
              @click="setInvoiceFilterStatus"
              class="text-sm py-1 hover:bg-neutral-200 duration-300 px-2 cursor-pointer"
            >
              Clear filter
            </li>
          </ul>
        </div>
        <div
          @click="newInvoice"
          class="flex flex-1 text-white items-center rounded hover:bg-neutral-600 duration-300 bg-neutral-500 px-3 py-2 text-sm"
        >
          <div
            class="flex p-2 mr-2 rounded justify-center items-center bg-white"
          >
            <img
              src="../assets/icon-plus.svg"
              alt=""
              class="w-2.5 h-2.5"
            />
          </div>
          <span>New Invoice</span>
        </div>
      </div>
    </div>

    <!-- invoices -->
    <div v-if="invoiceData.length">
      <Invoice
        v-for="(invoice, idx) in filteredInvoices"
        :invoice="invoice"
        :key="idx"
      />
    </div>

    <div
      v-else
      class="flex flex-col items-center mt-[100px]"
    >
      <img
        class="w-[214px] h-[200px]"
        src="../assets/illustration-empty.svg"
        alt=""
      />
      <h3 class="text-2xl mt-10 font-bold">You have no Invoices</h3>
      <p class="text-center text-sm font-light mt-2 mw-[300px]">
        You can create new Invoice by clicking New Invoice button
      </p>
    </div>

    <div
      v-if="!filteredInvoices.length"
      class="flex flex-col items-center mt-[100px]"
    >
      <img
        class="w-[214px] h-[200px]"
        src="../assets/illustration-empty.svg"
        alt=""
      />
      <h3 class="text-2xl mt-10 font-bold">You have no Invoices with such status</h3>
    </div>
  </div>
</template>

<script>
import Invoice from "../components/Invoice.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Home",
  components: { Invoice },
  data() {
    return {
      filterMenu: false,
      invoiceFilterStatus: null,
    };
  },
  methods: {
    ...mapMutations(["TOGGLE_INVOICE", "SET_EDIT_INVOICE"]),

    newInvoice() {
      this.SET_EDIT_INVOICE(false);
      this.TOGGLE_INVOICE();
    },

    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },

    setInvoiceFilterStatus(event) {
      if (event.target.innerText === "Clear filter") {
        this.invoiceFilterStatus = null;
        return;
      }

      this.invoiceFilterStatus = event.target.innerText;
    },
  },
  computed: {
    ...mapState(["invoiceData"]),

    filteredInvoices() {

      // return this.invoiceData.filter(invoice => {
      //   if (this.invoiceFilterStatus === 'Draft') {
      //     return invoice.invoiceDraft === true
      //   }
      //   if (this.invoiceFilterStatus === 'Pending') {
      //     return invoice.invoicePending === true
      //   }
      //   if (this.invoiceFilterStatus === 'Paid') {
      //     return invoice.invoicePaid === true
      //   }
      //   return true
      // })

      switch(this.invoiceFilterStatus){
        case "Draft":
          return this.invoiceData.filter(invoice => invoice.invoiceDraft)
        case "Pending":
          return this.invoiceData.filter(invoice => invoice.invoicePending)
        case "Paid":
          return this.invoiceData.filter(invoice => invoice.invoicePaid)
        default:
          return this.invoiceData
      }
    }
  },
};
</script>

<style></style>
