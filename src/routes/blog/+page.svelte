<script>
	import { formatDate } from '$lib/utils';
	import Footer from '../footer.svelte';
	import Navbar from '../navbar.svelte';

	export let data;

</script>

<Navbar />
<section class="mx-[5%] md:mx-[20%] mt-12">
	<h1 class="mt-22 text-primary xl:text-8xl text-6xl m-auto font-bold font-poppins">Blog</h1>
	<h2 class="mt-5 text-xl">Qui mi racconto. I post sono divisi in categorie/rubriche specifiche, in base al contenuto. Un giorno aggiungerò anche qualche filtro e migliorerò anche questa pagina. Per oggi mi limito a pubblicare il primo articolo e a tornare a dormire. Vi ringrazio per lo sforzo da voi fatto per aprire la pagina.</h2>
	<ul class="posts mt-12">
		{#each data.posts as post}
			<li class="post mt-6">
				<a href={post.slug} class="text-4xl font-semibold font-poppins mb-5 text-primary">{post.title}</a>
				<p class="mb-5 date text-xl font-poppins font-semibold">{formatDate(post.date)}</p>
				<span class=" px-4 py-2 border-2 text-xl border-secondary rounded-lg text-secondary-hover font-poppins font-semibold drop-shadow-sm">{post.category}</span>
				<p class=" mt-5 description font-poppins">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>


<Footer />

