<script>
	import carousel1 from '$lib/assets/img/fotografia/carousel1.webp';
  import carousel2 from '$lib/assets/img/fotografia/carousel2.webp';
  import carousel3 from '$lib/assets/img/fotografia/carousel3.jpg';
  import carousel4 from '$lib/assets/img/fotografia/carousel4.jpg';
  import carousel5 from '$lib/assets/img/fotografia/carousel5.webp';
  import carousel6 from '$lib/assets/img/fotografia/carousel6.webp';
  import carousel7 from '$lib/assets/img/fotografia/carousel7.webp';
  import carousel8 from '$lib/assets/img/fotografia/carousel8.jpg';
  import carousel9 from '$lib/assets/img/fotografia/carousel9.jpg';
  import carousel10 from '$lib/assets/img/fotografia/carousel10.webp';
  import carousel11 from '$lib/assets/img/fotografia/carousel11.webp';

	import Footer from '../footer.svelte';



</script>

<section class="mx-[5%] md:mx-[20%] my-12">
	<div class="container w-full">
		<div class="flex flex-wrap w-full">
			<div class="flex w-full md:w-1/2 flex-wrap">
				<div class="w-full md:w-1/2 p-1">
					<div class="overflow-hidden h-full w-full">
						<a
							href={carousel3}
							data-fancybox="gallery"
						>
							<img
								alt="Portfolio Fotografia"
								class="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
								src={carousel3}
							/>
						</a>
					</div>
				</div>
				<div class="w-full md:w-1/2 p-1">
					<div class="overflow-hidden h-full w-full">
						<a
							href={carousel6}
							data-fancybox="gallery"
						>
							<img
								alt="Portfolio Fotografia"
								class="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
								src={carousel6}
							/>
						</a>
					</div>
				</div>
				<div class="w-full p-1">
					<div class="overflow-hidden h-full w-full">
						<a
							href={carousel5}
							data-fancybox="gallery"
						>
							<img
								alt="Portfolio Fotografia"
								class="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
								src={carousel5}
							/>
						</a>
					</div>
				</div>
			</div>
			<div class="flex w-full md:w-1/2 flex-wrap">
				<div class="w-full p-1">
					<div class="overflow-hidden h-full w-full">
						<a
							href={carousel4}
							data-fancybox="gallery"
						>
							<img
								alt="Portfolio Fotografia"
								class="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
								src={carousel4}
							/>
						</a>
					</div>
				</div>
				<div class="w-full md:w-1/2 p-1">
					<div class="overflow-hidden h-full w-full">
						<a
							href={carousel2}
							data-fancybox="gallery"
						>
							<img
								alt="Portfolio Fotografia"
								class="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
								src={carousel2}
							/>
						</a>
					</div>
				</div>
				<div class="w-full md:w-1/2 p-1">
					<div class="overflow-hidden h-full w-full">
						<a
							href={carousel7}
							data-fancybox="gallery"
						>
							<img
								alt="Portfolio Fotografia"
								class="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
								src={carousel7}
							/>
						</a>
					</div>
				</div>
				<div class="w-full md:w-1/2 p-1">
					<div class="overflow-hidden h-full w-full">
						<a
							href={carousel8}
							data-fancybox="gallery"
						>
							<img
								alt="Portfolio Fotografia"
								class="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
								src={carousel8}
							/>
						</a>
					</div>
				</div>
				<div class="w-full md:w-1/2 p-1">
					<div class="overflow-hidden h-full w-full">
						<a
							href={carousel9}
							data-fancybox="gallery"
						>
							<img
								alt="Portfolio Fotografia"
								class="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
								src={carousel9}
							/>
						</a>
					</div>
				</div>
			</div>

			<div class="flex w-full md:w-1/2 flex-wrap">
				<div class="w-full p-1">
					<div class="overflow-hidden h-full w-full">
						<a
							href={carousel10}
							data-fancybox="gallery"
						>
							<img
								alt="Portfolio Fotografia"
								class="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
								src={carousel10}
							/>
						</a>
					</div>
				</div>
			</div>
			<div class="flex w-full md:w-1/2 flex-wrap">
				<div class="w-full md:w-1/2 p-1">
					<div class="overflow-hidden h-full w-full">
						<a
							href={carousel11}
							data-fancybox="gallery"
						>
							<img
								alt="Portfolio Fotografia"
								class="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
								src={carousel11}
							/>
						</a>
					</div>
				</div>
				<div class="w-full md:w-1/2 p-1">
					<div class="overflow-hidden h-full w-full">
						<a
							href={carousel1}
							data-fancybox="gallery"
						>
							<img
								alt="Portfolio Fotografia"
								class="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
								src={carousel1}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<Footer />