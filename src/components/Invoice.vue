<template>
	<router-link
		class="flex items-center no-underline cursor-pointer gap-4 mb-4 rounded py-7 px-8 border-2 border-neutral-500 shadow-2xl bg-neutral-200"
		:to="{ name: 'Invoice', params: { invoiceId: invoice.invoiceId } }"
	>
		<div class="left flex basis-3/5 items-center gap-4">
			<span class="uppercase grow">#{{ invoice.invoiceId }}</span>
			<span class="grow">{{ invoice.paymentDueDate }}</span>
			<span class="grow">{{ invoice.clientName }}</span>
		</div>

		<div class="flex basis-2/5 items-center">
			<span class="grow text-base font-semibold"
				>${{ invoice.invoiceTotal }}</span
			>
			<div
				class="status-button opacity-80 border-2 inline-flex justify-center rounded-full p-3 min-w-[60px] text-white shadow-md flex"
				:class="{
					'bg-green-400 border-green-600': invoice.invoicePaid,
					'bg-blue-400 border-blue-600': invoice.invoiceDraft,
					'bg-yellow-500 border-yellow-600': invoice.invoicePending,
				}"
			>
				<span v-if="invoice.invoicePaid">Paid</span>
				<span v-if="invoice.invoiceDraft">Draft</span>
				<span v-if="invoice.invoicePending">Pending</span>
			</div>
		</div>

		<div>
			<img
				src="../assets/icon-arrow-right.svg"
				alt=""
			/>
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
