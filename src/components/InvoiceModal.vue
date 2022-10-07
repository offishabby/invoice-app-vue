<template>
	<div
		@click="checkClick"
		ref="invoiceWrap"
		class="invoice-wrap z-10 fixed top-[64px] bg-transparent w-full left-0 md:top-0 md:left-[64px] h-screen overflow-auto flex flex-col md:pb-0 pb-14"
	>
		<form
			@submit.prevent="submitForm"
			class="relative w-full max-w-2xl shadow-2xl invoice-content text-neutral-600 bg-neutral-300 p-14"
		>
			<Loading v-show="loading" />
			<h1 class="mb-12 text-3xl font-bold">New Invoice</h1>

			<!-- Bill From -->
			<div class="flex flex-col bill-from">
				<h4 class="mb-6 text-sm underline">Bill From</h4>
				<div class="flex flex-col input">
					<label
						class="mb-1.5 text-sm"
						for="billerStreetAddress"
						>Street Address</label
					>
					<input
						class="px-3 py-1 mb-6 border-b-2 rounded outline-none border-neutral-400 text-slate-800"
						required
						type="text"
						id="billerStreetAddress"
						v-model="billerStreetAddress"
					/>
				</div>
				<div class="flex justify-between location-details">
					<div class="input w-[30%] flex flex-col">
						<label
							class="mb-1.5 text-sm"
							for="billerCity"
							>City</label
						>
						<input
							class="px-3 py-1 mb-6 border-b-2 rounded outline-none border-neutral-400 text-slate-800"
							required
							type="text"
							id="billerCity"
							v-model="billerCity"
						/>
					</div>
					<div class="input w-[30%] flex flex-col">
						<label
							class="mb-1.5 text-sm"
							for="billerZipCode"
							>Zip Code</label
						>
						<input
							class="px-3 py-1 mb-6 border-b-2 rounded outline-none border-neutral-400 text-slate-800"
							required
							type="text"
							id="billerZipCode"
							v-model="billerZipCode"
						/>
					</div>
					<div class="input w-[30%] flex flex-col">
						<label
							class="mb-1.5 text-sm"
							for="billerCountry"
							>Country</label
						>
						<input
							class="px-3 py-1 mb-6 border-b-2 rounded outline-none border-neutral-400 text-slate-800"
							required
							type="text"
							id="billerCountry"
							v-model="billerCountry"
						/>
					</div>
				</div>
			</div>

			<!-- Bill To -->
			<div class="flex flex-col bill-from">
				<h4 class="my-6 text-sm underline">Bill To</h4>
				<div class="flex flex-col input">
					<label
						class="mb-1.5 text-sm"
						for="clientName"
						>Client's Name</label
					>
					<input
						class="px-3 py-1 mb-6 border-b-2 rounded outline-none border-neutral-400 text-slate-800"
						required
						type="text"
						id="clientName"
						v-model="clientName"
					/>
				</div>
				<div class="flex flex-col input">
					<label
						class="mb-1.5 text-sm"
						for="clientEmail"
						>Client's Email</label
					>
					<input
						class="px-3 py-1 mb-6 border-b-2 rounded outline-none border-neutral-400 text-slate-800"
						required
						type="text"
						id="clientEmail"
						v-model="clientEmail"
					/>
				</div>
				<div class="flex flex-col input">
					<label
						class="mb-1.5 text-sm"
						for="clientStreetAddress"
						>Street Address</label
					>
					<input
						class="px-3 py-1 mb-6 border-b-2 rounded outline-none border-neutral-400 text-slate-800"
						required
						type="text"
						id="clientStreetAddress"
						v-model="clientStreetAddress"
					/>
				</div>
				<div class="flex justify-between location-details">
					<div class="input w-[30%] flex flex-col">
						<label
							class="mb-1.5 text-sm"
							for="clientCity"
							>City</label
						>
						<input
							class="px-3 py-1 mb-6 border-b-2 rounded outline-none border-neutral-400 text-slate-800"
							required
							type="text"
							id="clientCity"
							v-model="clientCity"
						/>
					</div>
					<div class="input w-[30%] flex flex-col">
						<label
							class="mb-1.5 text-sm"
							for="clientZipCode"
							>Zip Code</label
						>
						<input
							class="px-3 py-1 mb-6 border-b-2 rounded outline-none border-neutral-400 text-slate-800"
							required
							type="text"
							id="clientZipCode"
							v-model="clientZipCode"
						/>
					</div>
					<div class="input w-[30%] flex flex-col">
						<label
							class="mb-1.5 text-sm"
							for="clientCountry"
							>Country</label
						>
						<input
							class="px-3 py-1 mb-6 border-b-2 rounded outline-none border-neutral-400 text-slate-800"
							required
							type="text"
							id="clientCountry"
							v-model="clientCountry"
						/>
					</div>
				</div>
			</div>

			<!-- Invoice work details -->
			<div class="flex flex-col invoce-work">
				<div class="flex justify-between payment">
					<div class="input w-[45%] flex flex-col">
						<label
							class="mb-1.5 text-sm"
							for="invoiceDate"
							>Invoice Date</label
						>
						<input
							class="px-3 py-1 mb-6 border-b-2 rounded outline-none border-neutral-400 text-slate-800"
							disabled
							type="text"
							id="invoiceDate"
							v-model="invoiceDate"
						/>
					</div>
					<div class="input flex w-[45%] flex-col">
						<label
							class="mb-1.5 text-sm"
							for="paymentDueDateUnix"
							>Payment Due</label
						>
						<input
							class="px-3 py-1 mb-6 border-b-2 rounded outline-none border-neutral-400 text-slate-800"
							disabled
							type="text"
							id="paymentDueDateUnix"
							v-model="paymentDueDate"
						/>
					</div>
				</div>
				<div class="flex flex-col input">
					<label
						class="mb-1.5 text-sm"
						for="paymentTerms"
						>Payment Terms</label
					>
					<select
						class="mb-5 border-neutral-400 border-b-2 outline-none rounded text-slate-800 py-1.5 px-3"
						type="text"
						id="paymentTerms"
						v-model="paymentTerms"
					>
						<option value="30">Next 30 days</option>
						<option value="60">Next 60 days</option>
					</select>
				</div>
				<div class="flex flex-col input">
					<label
						class="mb-1.5 text-sm"
						for="productDescription"
						>Product Description</label
					>
					<input
						class="px-3 py-1 mb-6 border-b-2 outline-none border-neutral-400 rounded ext-slate-800"
						disabled
						type="text"
						id="productDescription"
						v-model="productDescription"
					/>
				</div>
				<div class="work-items">
					<h3 class="mb-4 text-lg">Items List</h3>

					<!-- my container for items -->
					<div class="flex flex-col">
						<div class="flex mb-2 text-sm">
							<div class="text-left font-bold item-name basis-[50%]">
								Item Name
							</div>
							<div class="text-left font-bold qty basis-[10%]">Qty</div>
							<div class="text-left font-bold price basis-[15%]">
								Price
							</div>
							<div class="text-left font-bold total basis-[15%]">
								Total
							</div>
						</div>
						<div
							class="relative flex mb-3 text-sm"
							v-for="(item, index) in invoiceItemList"
							:key="index"
						>
							<div class="item-name basis-[50%] pr-1.5">
								<input
									class="w-full border-neutral-400 border-b-2 rounded outline-none text-slate-800 px-1.5 py-1"
									type="text"
									v-model="item.itemName"
								/>
							</div>
							<div class="basis-[10%] pr-1.5">
								<input
									class="w-full border-neutral-400 border-b-2 rounded outline-none text-slate-800 px-1.5 py-1"
									type="text"
									v-model="item.qty"
								/>
							</div>
							<div class="basis-[15%] pr-1.5">
								<input
									class="w-full border-neutral-400 border-b-2 rounded outline-none text-slate-800 px-1.5 py-1"
									type="text"
									v-model="item.price"
								/>
							</div>
							<div
								class="border-neutral-400 border-b-2 basis-[15%] flex items-center pr-1.5 mr-1.5 overflow-x-auto"
							>
								<span class="mr-0.5">$</span>
								{{ (item.total = item.qty * item.price) }}
							</div>
							<div
								@click="deleteInvoiceItem(item.id)"
								class="total basis-[10%] flex items-center justify-center border-2 bg-red-400 hover:bg-red-500 duration-300 text-white"
							>
								Delete
								<!-- <img
									@click="deleteInvoiceItem(item.id)"
									class="w-3 h-4"
									src="../assets/icon-delete.svg"
									alt="delete"
								/> -->
							</div>
						</div>
					</div>

					<div
						@click="addNewInvoiceItem"
						class="flex justify-center p-2 my-4 align-middle rounded button bg-sky-600 hover:bg-sky-700 text-zinc-200 duration-500"
					>
						<!-- <img
							class="h-[20px] w-auto self-center mr-1"
							src="../assets/icon-plus.svg"
							alt=""
						/> -->
						Add New Item
					</div>
				</div>
			</div>

			<!-- Save/Exit -->
			<div class="flex justify-between text-white save">
				<div class="flex right">
					<button
						type="button"
						@click="closeInvoice"
						class="px-3 py-2 bg-red-400 rounded hover:bg-red-500 duration-500"
					>
						Cancel
					</button>
				</div>
				<div class="flex left gap-4">
					<button
						type="submit"
						@click="saveDraft"
						class="p-2 rounded bg-sky-600 hover:bg-sky-700 duration-500"
					>
						Save Draft
					</button>
					<button
						type="submit"
						@click="publishInvoice"
						class="px-3 py-2 rounded bg-sky-600 hover:bg-sky-700 duration-500"
					>
						Create Invoice
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import Loading from "./Loading.vue";
import firebaseDB from "../firebase/firebaseinit";
import { mapMutations } from "vuex";
import { uid } from "uid";
export default {
	name: "InvoiceModal",

	components: {
		Loading,
	},

	data() {
		return {
			billerStreetAddress: null,
			billerCity: null,
			billerZipCode: null,
			billerCountry: null,
			clientName: null,
			clientEmail: null,
			clientStreetAddress: null,
			clientCity: null,
			clientZipCode: null,
			clientCountry: null,
			invoiceDateUnix: null,
			invoiceDate: null,
			paymentTerms: null,
			paymentDueDateUnix: null,
			paymentDueDate: null,
			productDescription: null,
			invoicePending: null,
			invoiceDraft: null,
			invoiceItemList: [],
			invoiceTotal: 0,
			dateOptions: {
				year: "numeric",
				month: "long",
				day: "numeric",
			},
			loading: false,
		};
	},
	created() {
		this.invoiceDateUnix = Date.now();
		this.invoiceDate = new Date(this.invoiceDateUnix).toLocaleDateString(
			"en",
			this.dateOptions
		);
	},
	methods: {
		...mapMutations(["TOGGLE_INVOICE", "TOGGLE_MODAL"]),

		checkClick(event) {
			if (event.target === this.$refs.invoiceWrap) {
				this.TOGGLE_MODAL()
			}
		},

		closeInvoice() {
			this.TOGGLE_INVOICE();
		},

		addNewInvoiceItem() {
			this.invoiceItemList.push({
				id: uid(),
				itemName: "",
				qty: "",
				price: 0,
			});
		},

		deleteInvoiceItem(id) {
			this.invoiceItemList = this.invoiceItemList.filter(
				(item) => item.id !== id
			);
		},

		calculateInvoiceTotal() {
			this.invoiceTotal = 0;
			this.invoiceItemList.forEach((item) => {
				this.invoiceTotal += item.total;
			});
		},

		publishInvoice() {
			this.invoicePending = true;
		},

		saveDraft() {
			this.invoiceDraft = true;
		},

		async uploadInvoice() {
			if (this.invoiceItemList.length <= 0) {
				alert("Please fill up the work items!");
				return;
			}

			this.loading = true;

			this.calculateInvoiceTotal();

			const dataBase = firebaseDB.collection("invoice").doc();

			await dataBase.set({
				invoiceId: uid(6),
				billerStreetAddress: this.billerStreetAddress,
				billerCity: this.billerCity,
				billerZipCode: this.billerZipCode,
				billerCountry: this.billerCountry,
				clientName: this.clientName,
				clientEmail: this.clientEmail,
				clientStreetAddress: this.clientStreetAddress,
				clientCity: this.clientCity,
				clientZipCode: this.clientZipCode,
				clientCountry: this.clientCountry,
				invoiceDateUnix: this.invoiceDateUnix,
				invoiceDate: this.invoiceDate,
				paymentTerms: this.paymentTerms,
				paymentDueDateUnix: this.paymentDueDateUnix,
				paymentDueDate: this.paymentDueDate,
				productDescription: this.productDescription,
				invoicePending: this.invoicePending,
				invoiceDraft: this.invoiceDraft,
				invoiceItemList: this.invoiceItemList,
				invoiceTotal: this.invoiceTotal,
			});

			this.loading = false;

			this.TOGGLE_INVOICE();
		},

		submitForm() {
			this.uploadInvoice();
		},
	},
	watch: {
		paymentTerms() {
			let futureDate = new Date();
			this.paymentDueDateUnix = futureDate.setDate(
				futureDate.getDate() + +this.paymentTerms
			);

			this.paymentDueDate = new Date(
				this.paymentDueDateUnix
			).toLocaleDateString("en-us", this.dateOptions);
		},
	},
};
</script>

<style lang="css" scoped></style>
