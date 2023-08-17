<script lang="ts">
	import { page } from '$app/stores';

	import '../app.css';
	import Footer from './footer.svelte';
	import Navbar from './navbar.svelte';
	import PageTransition from './transition.svelte';

	export let data;
</script>

<div>
	{#if $page.error}
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	{:else}
		<Navbar />

		<main>
			<PageTransition url={data.url}>
				<slot />
			</PageTransition>
		</main>
	{/if}
</div>
