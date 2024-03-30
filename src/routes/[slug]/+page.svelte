<script lang="ts">
	import { formatDate } from '$lib/utils'
	import Footer from '../footer.svelte';
	import Navbar from '../navbar.svelte';

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>


<Navbar />
<article class="mx-[5%] md:mx-[20%] mt-12 break-words font-poppins">
  <!-- Title -->
  
  <div>
	<a
	class="flex my-auto fill-primary text-primary hover:text-primary-hover hover:fill-primary-hover transition"
	href="/blog"
>
<svg class="my-auto mr-2" width="24"
height="24" fill="#0000FF" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 476.213 476.213">
<polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 
57.427,253.107 476.213,253.107 "/>
</svg>

Blog
</a>

  </div>
	<hgroup class="flex mt-5">
	<h1 class="text-6xl font-semibold text-primary">{data.meta.title}</h1>		

	</hgroup>


	<div class="mt-7">
		<span class=" surface-4 px-4 py-2 border-2 border-primary rounded-lg mr-2 font-semibold text-primary">{data.meta.category}</span>
		<p class="mt-5 date text-xl font-semibold my-auto">{formatDate(data.meta.date)}</p>

	</div>


  <!-- Post -->
	<div class="mt-10 mb-16 prose w-full inline-block">
		<svelte:component this={data.content}/>
	</div>
</article>


<Footer />

