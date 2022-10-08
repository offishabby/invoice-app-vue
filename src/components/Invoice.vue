<template>
	<router-link
		class="invoice flex items-center no-underline cursor-pointer gap-4 mb-4 rounded py-7 px-8 border-2 border-neutral-500 shadow-2xl"
		:to="{ name: 'Invoice', params: { invoiceId: invoice.invoiceId } }"
	>
		<div class="left flex basis-3/5 items-center gap-4">
			<span class="tracking-number uppercase grow">#{{ invoice.invoiceId }}</span>
			<span class="due-date grow">{{ invoice.paymentDueDate }}</span>
			<span class="person grow">{{ invoice.clientName }}</span>
		</div>

		<div class="right flex basis-2/5 items-center">
			<span class="price grow text-base font-semibold">#{{ invoice.invoiceTotal }}</span>
			<div
				class="status-button rounded p-1 text-white shadow-md flex"
				:class="{
					paid: invoice.invoicePaid,
					draft: invoice.invoiceDraft,
					'bg-yellow-400': invoice.invoicePending,
				}"
			>
				<span v-if="invoice.invoicePaid">Paid</span>
				<span v-if="invoice.invoiceDraft">Draft</span>
				<span v-if="invoice.invoicePending">Pending</span>
			</div>
		</div>

		<div class="icon">
			<img src="../assets/icon-arrow-right.svg" alt="">
		</div>
	</router-link>
</template>

<script>
export default {
	name: "invoice",

	props: ["invoice"],

	data() {
		return {};
	},
};
</script>

<style lang="css" scoped></style>
