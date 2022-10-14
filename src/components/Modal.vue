<template>
	<div class="modal z-30 flex items-center h-screen w-full fixed justify-center">
		<div class="modal-content rounded py-12 px-8 bg-neutral-500 text-white w-[350px]">
			<p class="text-center">
				Are you sere you want to exit? <br/> Your changes will not be saved
			</p>
			<div class="actions flex mt-6 justify-center gap-10">
				<button
					@click="closeModal"
					class="p-2 bg-sky-600 hover:bg-sky-700 rounded duration-500"
				>
					Return
				</button>
				<button
					@click="closeInvoice"
					class="p-2  bg-red-400 rounded hover:bg-red-500 duration-300"
				>
					Close
				</button>
			</div>
		</div>
	</div>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
	name: "Modal",

	data() {
		return {};
	},
	methods: {
		...mapMutations(["TOGGLE_MODAL", "TOGGLE_INVOICE"]),

		closeModal() {
			this.TOGGLE_MODAL()
		},

		closeInvoice() {
			this.TOGGLE_MODAL()
			this.TOGGLE_INVOICE()
		}
	},
	computed: {
	}
};
</script>

<style lang="css" scoped></style>
