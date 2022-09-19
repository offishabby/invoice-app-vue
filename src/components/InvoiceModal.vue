<template>
	<div
		@click="checkClick"
		ref="invoiceWrap"
		class="invoice-wrap flex flex-col"
	>
		<form
			@submit.prevent="submitForm"
			class="invoice-content"
		>
			<h1>New Invoice</h1>
			<!-- Bill From -->
			<div class="bill-from flex flex-col">
				<h4>Bill From</h4>
				<div class="input flex flex-col">
					<label for="billerStreetAddress">Street Address</label>
					<input
						required
						type="text"
						id="billerStreetAddress"
						v-model="billerStreetAddress"
					/>
				</div>
				<div class="location-details flex">
					<div class="input flex flex-col">
						<label for="billerCity">City</label>
						<input
							required
							type="text"
							id="billerCity"
							v-model="billerCity"
						/>
					</div>
					<div class="input flex flex-col">
						<label for="billerZipCode">Zip Code</label>
						<input
							required
							type="text"
							id="billerZipCode"
							v-model="billerZipCode"
						/>
					</div>
					<div class="input flex flex-col">
						<label for="billerCountry">Country</label>
						<input
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
				<h4>Bill To</h4>
				<div class="input flex flex-col">
					<label for="clientName">Client's Name</label>
					<input
						required
						type="text"
						id="clientName"
						v-model="clientName"
					/>
				</div>
				<div class="input flex flex-col">
					<label for="clientEmail">Client's Email</label>
					<input
						required
						type="text"
						id="clientEmail"
						v-model="clientEmail"
					/>
				</div>
				<div class="input flex flex-col">
					<label for="clientStreetAddress">Street Address</label>
					<input
						required
						type="text"
						id="clientStreetAddress"
						v-model="clientStreetAddress"
					/>
				</div>
				<div class="location-details flex">
					<div class="input flex flex-col">
						<label for="clientCity">City</label>
						<input
							required
							type="text"
							id="clientCity"
							v-model="clientCity"
						/>
					</div>
					<div class="input flex flex-col">
						<label for="clientZipCode">Zip Code</label>
						<input
							required
							type="text"
							id="clientZipCode"
							v-model="clientZipCode"
						/>
					</div>
					<div class="input flex flex-col">
						<label for="clientCountry">Country</label>
						<input
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
				<div class="payment flex">
					<div class="input flex flex-col">
						<label for="invoiceDate">Invoice Date</label>
						<input
							disabled
							type="text"
							id="invoiceDate"
							v-model="invoiceDate"
						/>
					</div>
					<div class="input flex flex-col">
						<label for="paymentDueDateUnix">Payment Due</label>
						<input
							disabled
							type="text"
							id="paymentDueDateUnix"
							v-model="paymentDueDateUnix"
						/>
					</div>
					<div class="input flex flex-col">
						<label for="paymentTerms">Payment Terms</label>
						<select
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
						<label for="productDescription">Product Description</label>
						<input
							disabled
							type="text"
							id="productDescription"
							v-model="productDescription"
						/>
					</div>
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

<style lang="css" scoped></style>
