<template>
	<div
		@click="checkClick"
		ref="invoiceWrap"
		class="invoice-wrap z-10 fixed top-[64px] bg-transparent w-full left-0 md:top-0 md:left-[64px] h-screen overflow-auto flex flex-col md:pb-0 pb-14 "
	>
		<form
			@submit.prevent="submitForm"
			class="invoice-content text-white shadow-2xl bg-green-500 relative p-14 max-w-2xl w-full"
		>
			<h1 class="mb-12 text-white text-3xl font-bold">New Invoice</h1>

			<!-- Bill From -->
			<div class="bill-from flex flex-col">
				<h4 class="mb-6 text-slate-100 text-sm">Bill From</h4>
				<div class="input flex flex-col">
					<label
						class="mb-1.5 text-sm"
						for="billerStreetAddress"
						>Street Address</label
					>
					<input
						class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
						required
						type="text"
						id="billerStreetAddress"
						v-model="billerStreetAddress"
					/>
				</div>
				<div class="location-details flex justify-between">
					<div class="input w-[30%] flex flex-col">
						<label
							class="mb-1.5 text-sm"
							for="billerCity"
							>City</label
						>
						<input
							class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
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
							class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
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
							class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
							required
							type="text"
							id="billerCountry"
							v-model="billerCountry"
						/>
					</div>
				</div>
			</div>

			<!-- Bill To -->
			<div class="bill-from flex flex-col">
				<h4 class="my-6 text-slate-100 text-sm">Bill To</h4>
				<div class="input flex flex-col">
					<label
						class="mb-1.5 text-sm"
						for="clientName"
						>Client's Name</label
					>
					<input
						class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
						required
						type="text"
						id="clientName"
						v-model="clientName"
					/>
				</div>
				<div class="input flex flex-col">
					<label
						class="mb-1.5 text-sm"
						for="clientEmail"
						>Client's Email</label
					>
					<input
						class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
						required
						type="text"
						id="clientEmail"
						v-model="clientEmail"
					/>
				</div>
				<div class="input flex flex-col">
					<label
						class="mb-1.5 text-sm"
						for="clientStreetAddress"
						>Street Address</label
					>
					<input
						class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
						required
						type="text"
						id="clientStreetAddress"
						v-model="clientStreetAddress"
					/>
				</div>
				<div class="location-details justify-between flex">
					<div class="input w-[30%] flex flex-col">
						<label
							class="mb-1.5 text-sm"
							for="clientCity"
							>City</label
						>
						<input
							class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
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
							class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
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
							class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
							required
							type="text"
							id="clientCountry"
							v-model="clientCountry"
						/>
					</div>
				</div>
			</div>

			<!-- Invoice work details -->
			<div class="invoce-work flex flex-col">
				<div class="payment flex justify-between">
					<div class="input w-[45%] flex flex-col">
						<label
							class="mb-1.5 text-sm"
							for="invoiceDate"
							>Invoice Date</label
						>
						<input
							class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
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
							class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
							disabled
							type="text"
							id="paymentDueDateUnix"
							v-model="paymentDueDateUnix"
						/>
					</div>
				</div>
				<div class="input flex flex-col">
					<label
						class="mb-1.5 text-sm"
						for="paymentTerms"
						>Payment Terms</label
					>
					<select
						class="mb-5 border-none rounded-sm text-slate-800 py-1"
						disabled
						type="text"
						id="paymentTerms"
						v-model="paymentTerms"
					>
						<option value="30">Next 30 days</option>
						<option value="60">Next 60 days</option>
					</select>
				</div>
				<div class="input flex flex-col">
					<label
						class="mb-1.5 text-sm"
						for="productDescription"
						>Product Description</label
					>
					<input
						class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
						disabled
						type="text"
						id="productDescription"
						v-model="productDescription"
					/>
				</div>
				<div class="work-items">
					<h3 class="mb-4 text-lg text-slate-100">Items List</h3>
					<table class="items-list w-full">
						<tr class="table-heading mb-4 flex gap-[16px] text-sm">
							<th class="text-left item-name basis-1/2">Item Name</th>
							<th class="text-left qty basis-1/10">Qty</th>
							<th class="text-left price basis-1/5">Price</th>
							<th class="text-left total basis-1/5">Total</th>
						</tr>
						<tr
							class="table-items gap-[16px] text-sm flex relative mb-6"
							v-for="(item, index) in invoiceItemList"
							:key="index"
						>
							<td class="item-name basis-1/2">
								<input
									class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
									type="text"
									v-model="item.itemName"
								/>
							</td>
							<td class="qty basis-1/10">
								<input
									class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
									type="text"
									v-model="item.qty"
								/>
							</td>
							<td class="price basis-1/5">
								<input
									class="mb-6 border-none rounded-sm text-slate-800 px-3 py-1"
									type="text"
									v-model="item.price"
								/>
							</td>
							<td class="total basis-1/5 flex ">
								$ {{ (item.total = item.qty * item.price) }}
							</td>
							<img

								@click="deleteInvoiceItem(item.id)"
								class="absolute top-[15px] w-3 h-4"
								src="../assets/icon-delete.svg"
								alt="delete"
							/>
						</tr>
					</table>
					<div
						@click="addNewInvoiceItem"
						class="flex button align-middle justify-center p-2 rounded-full bg-purple-500 text-zinc-200 hover:bg-purple-600 duration-500 my-4"
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
			<div class="save flex justify-between">
				<div class="right flex">
					<button
						@click="closeInvoice"
						class="p-2 rounded-full bg-red-400 hover:bg-red-500 duration-500"
					>
						Cancel
					</button>
				</div>
				<div class="left gap-4 flex">
					<button
						@click="saveDraft"
						class="p-2 rounded-full bg-purple-400 hover:bg-purple-500 duration-500"
					>
						Save Draft
					</button>
					<button
						@click="publishInvoice"
						class="px-3 py-2 rounded-full bg-purple-600 hover:bg-purple-700 duration-500"
					>
						Create Invoice
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "InvoiceModal",

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
		};
	},
};
</script>

<style lang="css" scoped></style>text-left 