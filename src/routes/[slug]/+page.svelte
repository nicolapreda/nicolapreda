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

<article class="mx-[5%] md:mx-[20%] mt-12 break-words font-poppins">
  <!-- Title -->
	<hgroup>
		<h1 class="text-6xl font-semibold text-primary">{data.meta.title}</h1>		
	</hgroup>
	<div class="mt-5">
		<span class=" surface-4 px-4 py-2 border-2 border-secondary rounded-lg mr-2 font-semibold text-secondary-hover">{data.meta.category}</span>
		<p class="mt-5 date text-xl font-semibold my-auto">{formatDate(data.meta.date)}</p>

	</div>


  <!-- Post -->
	<div class="mt-10 mb-16  prose w-full inline-block">
		<svelte:component this={data.content} />
	</div>
</article>


<Footer />

