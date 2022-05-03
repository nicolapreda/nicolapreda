<script>
	import logo from "./pp.svg";
	import arrow from "./arrow.svg";
</script>

<main class="bg-blue-50">
	<script>
		var gradient = new Gradient();
		gradient.initGradient("#gradient-canvas");
	</script>

	<section class="section_top">
		<div class="section-container">
			<div class="section-layout-container container-medium with-padding">
				<div class="section-layout">
					<div class="gradient-area">
						<div class="gradient-title-area">
							<h1 class="text text-above section-title-1">
								Developer & Designer
							</h1>
							<div class="section_background-wrap">
								<canvas
									id="gradient-canvas"
									data-js-darken-top
									data-transition-in
								/>
							</div>
							<div
								class="text text-under text-under-blended section-title-1"
							>
								sussy baka
							</div>
							<div
								class="text text-under text-under-overlay section-title-1"
							>
								uwu
							</div>
						</div>
					</div>
					<h2 class="section-title-2 subtitle">provaprovas</h2>
				</div>
			</div>
		</div>
	</section>
</main>
<!--
	<div class="header h-screen">
		<canvas id="gradient-canvas" class="absolute w-max h-20"></canvas>

		<div class="navbar py-5 px-16">
			<div class="grid grid-cols-2 gap-4">
				<div class="navbar-brand ">
					<a
						href="index.html"
						class="flex items-center justify-start"
					>
						<img
							src={logo}
							alt="logo"
							class="logo h-10 w-10 mr-5"
						/>
						Nicola Preda
					</a>
				</div>
				<div class="navbar-nav flex items-center justify-end">
					<a href="index.html" class="navbar-item">Home</a>
					<a href="about.html" class="navbar-item ml-10">About</a>
					<a href="projects.html" class="navbar-item ml-10"
						>Projects</a
					>
				</div>
			</div>
		</div>

		<div class="px-16 flex items-center justify-center md:mt-44">
			<div class="grid md:grid-cols-2 gap-64">
				<div class="intro">
					<h3 class="font-light md:text-4xl text-xl text-black">
						Hello, I'm Nicola Preda
					</h3>
					<h1
						class="font-bold xl:text-9xl text-6xl md:my-10 my-5 text-primary-blue "
					>
						Developer<br /> & Designer
					</h1>
					<p
						class="font-normal md:text-2xl md:mt-5 mb-10 text-secondary-blue"
					>
						I'm a web developer and designer based in Milan, Italy.
					</p>
					<a
						href="sus"
						class="px-7 py-3 bg-yellow-400 rounded-full"
						>Blog</a
					>
				</div>

				<div class="relative w-full max-w-lg">
					<div
						class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
					/>
					<div
						class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
					/>
					<div
						class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
					/>
					<div class="m-8 relative space-y-4">
						<img src={logo} alt="profile" class="md:w-96 md:h-96" />
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-center mt-24">
			<a href="#about" class="down-arrow">
				<img src={arrow} alt="down arrow" class="h-10 w-10" />
			</a>
		</div>
	</div>
</main>
-->

<style>
	#gradient-canvas {
		--gradient-color-1: #6ec3f4;
		--gradient-color-2: #3a3aff;
		--gradient-color-3: #ff61ab;
		--gradient-color-4: #e63946;
	}
</style>
