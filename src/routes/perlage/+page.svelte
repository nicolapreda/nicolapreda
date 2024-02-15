<script>
	import Footer from '../footer.svelte';
</script>

<section class="mx-[5%] md:mx-[20%] my-12">
	<h1 class="text-8xl">TUTTI GLI EVENTI</h1>

	<div class="grid xl:grid-cols-3 gap-16 xl:gap-4 mt-12">
		<div class="bg-secondarypink rounded-3xl shadow">
			<div class="bg-primary rounded-t-3xl flex">
				<img src="perlage/10-02-24/00042.jpg" alt="Evento 10-02-24" class="h-full w-full object-cover" />
			</div>
			<div class="p-5 content-center text-center">
				<div>
					<h1 class="text-primary lg:text-4xl md:text-3xl text-2xl">10 Febbraio 2024</h1>
				</div>
				<div class="mt-5">
					<a
						href="/perlage/10_02_24"
						class="px-4 py-2 bg-secondary hover:bg-secondary-hover transition rounded-3xl"
						>Visualizza tutto</a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<Footer />
