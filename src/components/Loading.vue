<template>
	<div
		class="w-full h-full bg-neutral-400/[0.5] absolute flex items-center top-0 left-0 z-50"
	>
		<div
			class="half-circle-spinner z-50 m-auto border-box w-[60px] h-[60px] rounded-full relative"
		>
			<div
				class="circle circle-1 border-box content-[''] absolute w-full h-full rounded-full border-solid border-transparent border-[6px] border-t-neutral-500 animate-spin"
			></div>
			<div
				class="circle circle-2 border-box content-[''] absolute w-full h-full rounded-full border-solid border-transparent border-[6px] border-b-neutral-500 animate-spin"
			></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Loading",

	data() {
		return {};
	},
};
</script>
