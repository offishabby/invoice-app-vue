<template>
	<div
		@click="checkClick"
		ref="invoiceWrap"
		class="z-10 fixed top-[64px] bg-transparent w-full left-0 md:top-0 md:left-[64px] h-screen overflow-auto flex flex-col md:pb-0 pb-14"
	>
		<form
			@submit.prevent="submitForm"
			class="relative w-full max-w-2xl shadow-2xl text-neutral-600 bg-neutral-300 p-14"
		>
			<Loading v-show="loading" />
			<h1
				v-if="!editInvoice"
				class="mb-12 text-3xl font-bold"
			>
				New Invoice
			</h1>
			<h1
				v-else
				class="mb-12 text-3xl font-bold"
			>
				Edit Invoice
			</h1>

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
					<div class="w-[30%] flex flex-col">
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
					<div class="w-[30%] flex flex-col">
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
			<div class="flex flex-col">
				<h4 class="my-6 text-sm underline">Bill To</h4>
				<div class="flex flex-col">
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
				<div class="flex flex-col">
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
				<div class="flex flex-col">
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
				<div class="flex justify-between">
					<div class="w-[30%] flex flex-col">
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
					<div class="w-[30%] flex flex-col">
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
					<div class="w-[30%] flex flex-col">
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
			<div class="flex flex-col">
				<div class="flex justify-between">
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
					<div class="flex w-[45%] flex-col">
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
				<div class="flex flex-col">
					<label
						class="mb-1.5 text-sm"
						for="productDescription"
						>Product Description</label
					>
					<input
						class="px-3 py-1 mb-6 border-b-2 outline-none border-neutral-400 rounded text-slate-800"
						disabled
						type="text"
						id="productDescription"
						v-model="productDescription"
					/>
				</div>
				<div>
					<h3 class="mb-4 text-lg">Items List</h3>

					<!-- my container for items -->
					<div class="flex flex-col">
						<div class="flex mb-2 text-sm">
							<div class="text-left font-bold basis-[50%]">
								Item Name
							</div>
							<div class="text-left font-bold basis-[10%]">Qty</div>
							<div class="text-left font-bold basis-[15%]">Price</div>
							<div class="text-left font-bold basis-[15%]">Total</div>
						</div>
						<div
							class="relative flex mb-3 text-sm"
							v-for="(item, index) in invoiceItemList"
							:key="index"
						>
							<div class="basis-[50%] pr-1.5">
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
								class="basis-[10%] flex items-center justify-center border-2 bg-red-400 hover:bg-red-500 duration-300 text-white"
							>
								Delete
							</div>
						</div>
					</div>

					<div
						@click="addNewInvoiceItem"
						class="flex justify-center p-2 my-4 align-middle text-white rounded opacity-80 hover:opacity-100 bg-blue-500 duration-300"
					>
						Add New Item
					</div>
				</div>
			</div>

			<!-- Save/Exit -->
			<div class="flex justify-between text-white">
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
						v-if="!editInvoice"
						type="submit"
						@click="saveDraft"
						class="p-2 rounded opacity-80 hover:opacity-100 bg-blue-500 duration-300"
					>
						Save Draft
					</button>
					<button
						v-if="!editInvoice"
						type="submit"
						@click="publishInvoice"
						class="px-3 py-2 rounded opacity-80 hover:opacity-100 bg-blue-500 duration-300"
					>
						Create Invoice
					</button>
					<button
						v-if="editInvoice"
						type="submit"
						class="px-3 py-2 rounded opacity-80 hover:opacity-100 bg-blue-500 duration-300"
					>
						Update Invoice
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import Loading from "./Loading.vue";
import firebaseDB from "../firebase/firebaseinit";
import { mapMutations, mapState, mapActions } from "vuex";
import { uid } from "uid";
export default {
	name: "InvoiceModal",

	components: {
		Loading,
	},

	data() {
		return {
			docId: null,
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
				month: "short",
				day: "numeric",
			},
			loading: false,
		};
	},
	created() {
		if (!this.editInvoice) {
			this.invoiceDateUnix = Date.now();
			this.invoiceDate = new Date(this.invoiceDateUnix).toLocaleDateString(
				"en",
				this.dateOptions
			);
		} else {
			this.docId = this.currentInvoice.docId;
			this.invoiceId = this.currentInvoice.invoiceId;
			this.billerStreetAddress = this.currentInvoice.billerStreetAddress;
			this.billerCity = this.currentInvoice.billerCity;
			this.billerZipCode = this.currentInvoice.billerZipCode;
			this.billerCountry = this.currentInvoice.billerCountry;
			this.clientName = this.currentInvoice.clientName;
			this.clientEmail = this.currentInvoice.clientEmail;
			this.clientStreetAddress = this.currentInvoice.clientStreetAddress;
			this.clientCity = this.currentInvoice.clientCity;
			this.clientZipCode = this.currentInvoice.clientZipCode;
			this.clientCountry = this.currentInvoice.clientCountry;
			this.invoiceDateUnix = this.currentInvoice.invoiceDateUnix;
			this.invoiceDate = this.currentInvoice.invoiceDate;
			this.paymentTerms = this.currentInvoice.paymentTerms;
			this.paymentDueDateUnix = this.currentInvoice.paymentDueDateUnix;
			this.paymentDueDate = this.currentInvoice.paymentDueDate;
			this.productDescription = this.currentInvoice.productDescription;
			this.invoiceItemList = this.currentInvoice.invoiceItemList;
			this.invoiceTotal = this.currentInvoice.invoiceTotal;
			this.invoicePending = this.currentInvoice.invoicePending;
			this.invoiceDraft = this.currentInvoice.invoiceDraft;
			this.invoicePaid = this.currentInvoice.invoicePaid;
		}
	},
	methods: {
		...mapMutations([
			"TOGGLE_INVOICE",
			"TOGGLE_MODAL",
			"TOGGLE_EDIT_INVOICE",
		]),
		...mapActions(["UPDATE_INVOICE", "GET_INVOICES"]),

		checkClick(event) {
			if (event.target === this.$refs.invoiceWrap) {
				this.TOGGLE_MODAL();
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

			const dataBase = firebaseDB.collection(this.FIREBASE_COLLECTION_NAME).doc();

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
				invoicePending: this.invoicePending,
				invoiceDraft: this.invoiceDraft,
				invoicePaid: null,
			});

			this.loading = false;

			this.TOGGLE_INVOICE();

			this.GET_INVOICES();
		},

		async updateInvoice() {
			if (this.invoiceItemList.length <= 0) {
				alert("Please ensure you filled out work items!");
				return;
			}
			this.loading = true;

			this.calculateInvoiceTotal();

			const dataBase = firebaseDB.collection(this.FIREBASE_COLLECTION_NAME).doc(this.docId);

			await dataBase.update({
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
				paymentTerms: this.paymentTerms,
				paymentDueDate: this.paymentDueDate,
				paymentDueDateUnix: this.paymentDueDateUnix,
				productDescription: this.productDescription,
				invoiceItemList: this.invoiceItemList,
				invoiceTotal: this.invoiceTotal,
			});

			this.loading = false;

			const data = {
				docId: this.docId,
				routeId: this.$route.params.invoiceId,
			};

			this.UPDATE_INVOICE(data);
		},

		submitForm() {
			if (this.editInvoice) {
				this.updateInvoice();
				return;
			}
			this.uploadInvoice();
		},
	},
	computed: {
		...mapState(["editInvoice", "currentInvoice", "FIREBASE_COLLECTION_NAME"]),
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
