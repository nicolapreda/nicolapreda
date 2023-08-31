<script>
	import { formatDate } from '$lib/utils';
	import Footer from '../footer.svelte';
	//import blog.ts

	export let data;
</script>

<section class="lg:mx-32 mx-5 mt-12 h-screen">
	<h1 class="text-8xl font-bricebold text-primary">Blog</h1>
	
	<ul class="posts">
		{#each data.posts as post}
			<li class="post mt-6">
				<a href={post.slug} class="text-4xl font-briceregular mb-5 text-primary">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
			</li>
		{/each}
	</ul>
</section>


<Footer />

