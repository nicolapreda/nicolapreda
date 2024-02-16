<svelte:head>
	<title>Perlage 10/02/24</title>
	<meta property="og:title" content="Perlage 10/02/24" />
	<meta property="og:description" content="Foto Perlage 10/02/24">
	<meta property="og:image" content="%sveltekit.assets%/perlage/10-02-24/00042.jpg">
	<meta name=description content="Foto Perlage 10/02/24">

</svelte:head>


<script>
		// @ts-nocheck
	import Footer from '../../footer.svelte';

	let samucam = [];

	let images = [];

	for (let i = 1; i <= 146; i++) {
		images.push(`/perlage/10-02-24/${i.toString().padStart(5, '0')}.jpg`);
	}

	for (let i = 1; i <= 65; i++) {
		samucam.push(`/perlage/10-02-24/samu/${i.toString().padStart(5, '0')}.JPG`);
	}

	let imageUrl;
  const username = 'nicolapreda';
  const password = 'vQcFycebLFej6XH';

  async function fetchImage() {
    try {
      const response = await fetch('https://drive.predanicola.it/remote.php/dav/files/nicolapreda/Foto/Sony%20a6100/Perlage/10-02-24/DSC03014-Migliorato-NR.jpg', {
        headers: {
          'Authorization': 'Basic ' + btoa(`${username}:${password}`),
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
        }
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const blob = await response.blob();
      imageUrl = URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  }

  fetchImage();

</script>

<section class="mx-[5%] md:mx-[10%] my-12">
	{#if imageUrl}
	<img src={imageUrl} alt="Fetched Image" />
  {:else}
	<p>Loading...</p>
  {/if}

  
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
