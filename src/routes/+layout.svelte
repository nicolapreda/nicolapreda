<script lang="ts">
	import { page } from '$app/stores';

	import '../app.css';
	import PageTransition from './transition.svelte';

	export let data;
</script>

<div>
		<main>
			<PageTransition url={data.url}>
				<slot />
			</PageTransition>
		</main>
</div>
