<template>
   <div class="bg-neutral-100">
      <div
         v-if="!isMobile"
         class="min-h-screen flex flex-col md:flex-row md:min-width-screen"
      >
         <Navigation />
         <div class="flex flex-col px-16 relative flex-1">
            <Transition name="invoice">
               <InvoiceModal v-if="this.invoiceModal" />
            </Transition>
            <router-view />
         </div>
      </div>
      <div
         v-else
         class="flex flex-col h-screen justify-center align-middle text-center mx-4"
      >
         <h2 class="text-2xl font-bold">
            Unfortunately, this app is not supported on mobile devices
         </h2>
         <p class="mt-4 text-1xl">Try to open on computer or tablet</p>
      </div>
   </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import InvoiceModal from "./components/InvoiceModal.vue";

import { mapState } from "vuex";

export default {
   components: { Navigation, InvoiceModal },
   data() {
      return {
         isMobile: null,
      };
   },
   created() {
      this.checkMobile();
      window.addEventListener("resize", this.checkMobile);
   },
   methods: {
      checkMobile: function () {
         const screenWidth = window.innerWidth;
         if (screenWidth <= 750) {
            this.isMobile = true;
            return;
         }
         this.isMobile = false;
      },
   },
   computed: {
      ...mapState(["invoiceModal"]),
   },
};
</script>

<style>
/* classes for animation */
.invoice-enter-active,
.invoice-leave-active {
   transition: opacity 0.5s ease;
}

.invoice-enter-from,
.invoice-leave-to {
   opacity: 0;
}
</style>
