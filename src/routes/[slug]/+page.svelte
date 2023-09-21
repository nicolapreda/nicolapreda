<script lang="ts">
	import { formatDate } from '$lib/utils'
	import Footer from '../footer.svelte';

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="mx-[5%] md:mx-[20%] h-screen">
  <!-- Title -->
	<hgroup>
		<h1 class="text-8xl font-bricebold text-primary">{data.meta.title}</h1>
	</hgroup>

  <!-- Tags -->
	<div class="tags mt-2">
		{#each data.meta.categories as category}
			<span class="surface-4 px-4 py-2 border-2 border-secondary rounded-lg mr-2 text-secondary-hover">&num;{category}</span>
		{/each}
	</div>

  <!-- Post -->
	<div class="prose mt-12 ">
		<svelte:component this={data.content} />
	</div>
</article>


<Footer />

