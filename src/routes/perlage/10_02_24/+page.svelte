<script>
		// @ts-nocheck
	import Footer from '../../footer.svelte';

	let samucam = [];

	let images = [];

	for (let i = 1; i <= 146; i++) {
		images.push(`/perlage/10-02-24/${i.toString().padStart(5, '0')}.jpg`);
	}

	for (let i = 1; i <= 65; i++) {
		samucam.push(`/perlage/10-02-24/samu/${i.toString().padStart(5, '0')}.jpg`);
	}
</script>

<section class="mx-[5%] md:mx-[10%] my-12">

	<div class="grid md:grid-cols-4 gap-4 mt-12">
		{#each images as image}
			<a href={image} class="zoomable-link relative inline-block overflow-hidden">
				<img
					src={image}
					alt="perlage"
					class="w-full h-full object-cover transition-transform duration-300 ease-in-out zoomable-img"
					loading="lazy"
				/>
			</a>
		{/each}
	</div>

	<div class="grid grid-cols-4 gap-4 mt-36">
		{#each samucam as image}
			<a href={image} class="zoomable-link relative inline-block overflow-hidden">
				<img
					src={image}
					alt="perlage"
					class="w-full h-full object-cover transition-transform duration-300 ease-in-out zoomable-img"
					loading="lazy"
				/>
			</a>
		{/each}
	</div>
</section>

<Footer />

<style>
    .zoomable-link:hover .zoomable-img {
        transform: scale(1.2); /* Effetto di zoom del 20% */
    }
</style>
