<script>

	import hero from '$lib/assets/img/dispensa/hero.webp';
	import intro from '$lib/assets/img/dispensa/intro.webp';
	import scadenze from '$lib/assets/img/dispensa/scadenze.webp';
	import offers from '$lib/assets/img/dispensa/offers.webp';
</script>

<div class="flex bg-primary-yellow h-full drop-shadow-lg mx-[5%] md:mx-[20%]">
	<div class="grid lg:grid-cols-2 gap-16 items-center">
		<div>
			<div class="m-auto text-center lg:text-start">
				<h1 class="mt-12 lg:mt-0 text-4xl xl:text-5xl 2xl:text-7xl font-bold">
					Smart manage <br />of food storage 🥗
				</h1>
				<p class="mt-5 lg:mt-10 text-xl md:text-2xl font-normal">
					Organize and control your food storage in a smart, fast and intelligent way. Save time
					searching for supermarket deals💰
				</p>
			</div>
		</div>
		<div>
			<img src={hero} alt="Banner" class="drop-shadow-lg w-auto hidden lg:block" />
		</div>
	</div>
</div>

	<div class=" flex bg-white h-full">
		<div class="grid lg:grid-cols-2 gap-4 my-32 text-center lg:text-start mx-[5%] md:mx-[20%]">
			<div class="flex justify-center">
				<img src={intro} class="w-64 h-full" alt="Banner" />
			</div>
			<div class="m-auto">
				<h1 class="text-4xl xl:text-5xl 2xl:text-7xl font-bold">
					All of your food storage in one place.
				</h1>
				<p class="mt-10 font-normal md:text-2xl">
					Keep track of all the food products you own and their expirations in a single screen,
					which summarizes the main information and the most advantageous deals
				</p>
			</div>
		</div>
	</div>

	<div class=" bg-secondary-yellow drop-shadow-lg h-full mx-[5%] md:mx-[20%]">
		<div class="grid 3xl:grid-cols-2 gap-4 h-full py-32 text-center">
			<div>
				<h1 class="text-4xl xl:text-5xl 2xl:text-7xl font-bold">
					Better management of<br /> products expiration
				</h1>
				<p class="mt-10 md:text-2xl font-normal">
					Take a quick look at your food storage to understand what you will need to buy and when
					the next foods will expire, in order of priority
				</p>
			</div>
			<div class="flex justify-center">
				<img
					src={scadenze}
					class="drop-shadow-md grow-0"
					alt="Products
							expiration"
				/>
			</div>
		</div>
	</div>

	<div class="flex bg-white drop-shadow-lg h-full">
		<div
			class="grid lg:grid-cols-2 gap-4 h-full my-32 text-center lg:text-start mx-[5%] md:mx-[20%]"
		>
			<div class="flex justify-center">
				<img src={offers} class="w-64 h-auto" alt="Banner" />
			</div>
			<div>
				<div class="m-auto">
					<h1 class="text-4xl xl:text-5xl 2xl:text-7xl font-bold">
						Save time searching for offers
					</h1>
					<p class="mt-10 md:text-2xl font-normal">
						Save time and money by consulting supermarket deals of your favorite products, through
						the dedicated section in the application
					</p>
				</div>
			</div>
		</div>
	</div>
