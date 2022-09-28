<template>
  <div class="home font-normal max-w-xl mx-auto text-neutral-600">
    <div class="header my-12 flex justify-center">
      <div class="flex flex-col flex-1">
        <h1 class="text-2xl font-bold">Invoices</h1>
        <span>You have 4 invoices total</span>
      </div>
      <!-- Right side -->
      <div class="flex flex-row justify-end align-middle">
        <div
          class="flex filter mr-10 relative items-center cursor-pointer"
          @click="toggleFilterMenu"
        >
          <span class="text-sm ">Filter by status</span>
          <img
            src="../assets/icon-arrow-down.svg"
            alt="arrow down"
            class=" ml-1 w-9px h-5px"
          />
          <ul
            v-show="filterMenu"
            class="filter-menu absolute w-30 top-10  list-none shadow-md bg-emerald-300"
          >
            <li
              class="text-sm py-1 hover:bg-emerald-100 duration-300 duration-300 px-2 cursor-pointer"
            >
              Draft
            </li>
            <li
              class="text-sm py-1 hover:bg-emerald-100 duration-300 px-2 cursor-pointer"
            >
              Pending
            </li>
            <li
              class="text-sm py-1 hover:bg-emerald-100 duration-300 px-2 cursor-pointer"
            >
              Paid
            </li>
            <li
              class="text-sm py-1 hover:bg-emerald-100 duration-300 px-2 cursor-pointer"
            >
              Clear filter
            </li>
          </ul>
        </div>
        <div
          @click="newInvoice"
          class="flex flex-1 text-white items-center rounded hover:bg-neutral-600 duration-300 bg-neutral-500 px-3 py-2  text-sm"
        >
          <div class="flex p-2 mr-2 rounded justify-center items-center bg-white ">
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
    <div>
      //// test text <br />
      Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Aliquid ut
      ipsam consequuntur iste quam amet magnam consequatur ad sapiente illum cum
      culpa quo, voluptas vel numquam fuga recusandae omnis adipisci?
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "Home",
  components: {},
  data() {
    return {
      filterMenu: false,
    };
  },
  methods: {
    ...mapMutations(['TOGGLE_INVOICE']),

    newInvoice() {
      this.TOGGLE_INVOICE()
    },

    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    }
  }
};
</script>

<style></style>
