<script>
	// @ts-nocheck

	import Footer from './footer.svelte';

	import design from '$lib/assets/img/design.webp';
	import dispensa from '$lib/assets/img/dispensa.webp';
	import rappresentante from '$lib/assets/img/rappresentante.webp';
	import horidesk from '$lib/assets/img/horidesk.webp';
	import newtab from '$lib/assets/img/new-tab.svg';
	import carousel2 from '$lib/assets/img/fotografia/carousel2.webp';
	import carousel3 from '$lib/assets/img/fotografia/carousel3.jpg';
	import carousel4 from '$lib/assets/img/fotografia/carousel4.jpg';
	import carousel5 from '$lib/assets/img/fotografia/carousel5.webp';
	import carousel6 from '$lib/assets/img/fotografia/carousel6.webp';
	import carousel7 from '$lib/assets/img/fotografia/carousel7.webp';

	import header from '$lib/assets/img/header.jpg';

	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
</script>

<div class="break-words">
	<section class="mx-[5%] md:mx-[20%] relative">
		<div class="relative z-0 bg-black md:mt-12 mt-10">
			<div class="px-6 py-64 lg:px-8 relative z-10">
				<div class="mx-auto max-w-2xl">
					<div class="text-center">
						<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							nik; Cerco la bellezza nell'ordinario.
						</h1>

						<div class="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="https://instagram.com/nicolapreda_"
								target="”_blank”"
								class="rounded-md bg-blue px-3.5 py-2.5 bg-primary hover:bg-primary-hover text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>Instagram</a
							>
							<a
								href="https://www.youtube.com/channel/UC1VPT4qglYpXyj1nt_sL2sA"
								target="”_blank”"
								class="text-sm font-semibold leading-6 text-white"
								>Youtube <span aria-hidden="true">→</span></a
							>
						</div>
					</div>
				</div>
			</div>
			<img src={header} alt="" class="absolute inset-0 w-full h-full object-cover z-0 opacity-75" />
		</div>

		<a name="dipiu">
			<div class="mt-24 md:grid md:grid-cols-2 md:gap-16">
				<div class="text-center">
					<h1 class="text-primary text-2xl font-semibold">ULTIMO VIDEO</h1>

					<iframe
						class="rounded-xl mt-5 w-full h-64"
						src="https://www.youtube.com/embed/EZpJDZn-Cy8"
						title="(Stra)Ordinario"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					/>
				</div>

				<div class="text-center">
					<h1 class="text-primary text-2xl font-semibold">ULTIMO ARTICOLO</h1>

					<div class="p-10 mt-5 rounded-2xl h-64 bg-pink">
						<a href={data.posts[0].slug} class="text-4xl mb-5 text-primary font-semibold"
							>{#if data.posts[0].title.length > 20}
								{data.posts[0].title.substring(0, 20)}...
							{:else}
								{data.posts[0].title}
							{/if}</a
						>

						<div class="post mt-2">
							<p class="text-primary text-lg">{formatDate(data.posts[0].date)}</p>
							<p>
								{#if data.posts[0].description.length > 100}
									{data.posts[0].description.substring(0, 100)}...
								{:else}
									{data.posts[0].description}
								{/if}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-24">
				<p class="mt-6 text-lg leading-8">
					<span class="break-words">
						Mi chiamo <span class="">Nicola Preda </span>(per gli amici nik) e studio informatica.
						Mi piace il design, la pasta al pesto, scrivere, leggere, la fotografia, le dunk,
						raccontare storie su
						<a
							class=" hover:text-primary underline underline-offset-1 transition"
							target="”_blank”"
							href="https://www.youtube.com/channel/UC1VPT4qglYpXyj1nt_sL2sA">Youtube</a
						>. Ogni tanto carico foto su
						<a
							class=" hover:text-primary underline underline-offset-1 transition"
							href="https://instagram.com/nicolapreda_"
							target="”_blank”">Instagram</a
						>. Le mie esperienze formative e professionali le trovi su
						<a
							class=" hover:text-primary underline underline-offset-1 transition"
							href="https://www.linkedin.com/in/nicola-preda-5b0722233/"
							target="”_blank”">Linkedin</a
						>. Ho anche un
						<a class=" hover:text-primary underline underline-offset-1 transition" href="./blog"
							>blog</a
						>. Puoi contattarmi a questa
						<a
							class=" hover:text-primary underline underline-offset-1 transition"
							href="mailto:nicola.preda05@gmail.com"
							target="”_blank”">email</a
						>, ma anche su
						<a
							class=" hover:text-primary underline underline-offset-1 transition"
							href="https://t.me/nicolapreda"
							target="”_blank”">Telegram</a
						>
					</span>
				</p>

				<div class="mt-10">
					<h1 class="text-justify text-primary md:text-5xl text-4xl">DESIGN</h1>

					<div class="grid lg:grid-cols-2 lg:gap-16 gap-4 mt-5">
						<div>
							<img src={design} alt="design" class="h-64 object-cover lg:m-0 m-auto" />
						</div>
						<div class="m-auto">
							<span class="mt-5 text-justify tracking-wide text-xl font-light"
								>Dopo 4 anni di informatica e programmazione, ho cambiato completamente interessi,
								entrando nel mondo del design: in particolare graphic design e ux/ui. Attualmente
								sto imparando le nozioni di base come autodidatta. per il futuro vorrei iscrivermi a <a
									class="hover:text-primary underline underline-offset-1 transition"
									target="”_blank”"
									href="https://www.polimi.it/futuri-studenti/corsi-di-laurea/design-della-comunicazione"
									>design della comunicazione</a
								>
								al politecnico di Milano.
							</span>
						</div>
					</div>
				</div>

				<div class="mt-24">
					<a
						class="flex my-auto fill-primary text-primary hover:text-primary-hover hover:fill-primary-hover transition"
						href="./fotografia"
						target="”_blank”"
					>
						Di più
						<svg
							class="my-auto ml-2"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill-rule="evenodd"
							clip-rule="evenodd"
							><path
								d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
							/></svg
						>
					</a>
					<h1 class="text-justify text-primary md:text-5xl text-4xl">FOTOGRAFIA</h1>

					<div class="my-5">
						<span class="text-justify tracking-wide text-xl font-light"
							>Sono da poco entrato nel mondo della fotografia analogica e digitale, ho acquistato
							una sony a6100 con cui registro e fotografo le mie avventure :) su <a
								href="https://instagram.com/nicolapreda_"
								target="”_blank”"
								class="hover:text-primary underline underline-offset-1 transition">instagram</a
							> trovi i miei scatti migliori (anche quelli peggiori).
						</span>
					</div>
					<a
						href="/fotografia"
						class="px-4 py-2 bg-secondary hover:bg-secondary-hover transition rounded-3xl"
						>Portfolio Fotografico</a
					>
					<div class="hidden md:block container w-full mt-12">
						<div class="flex flex-wrap w-full">
							<div class="flex w-full md:w-1/2 flex-wrap">
								<div class="w-full md:w-1/2 p-1">
									<div class="overflow-hidden h-full w-full">
										<a href={carousel3} data-fancybox="gallery">
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
										<a href={carousel6} data-fancybox="gallery">
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
										<a href={carousel5} data-fancybox="gallery">
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
										<a href={carousel4} data-fancybox="gallery">
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
										<a href={carousel2} data-fancybox="gallery">
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
										<a href={carousel7} data-fancybox="gallery">
											<img
												alt="Portfolio Fotografia"
												class="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
												src={carousel7}
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-24">
					<a
						class="flex my-auto fill-primary text-primary hover:text-primary-hover hover:fill-primary-hover transition"
						href="https://www.youtube.com/channel/UC1VPT4qglYpXyj1nt_sL2sA"
						target="”_blank”"
					>
						Di più
						<svg
							class="my-auto ml-2"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill-rule="evenodd"
							clip-rule="evenodd"
							><path
								d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
							/></svg
						>
					</a>
					<h1 class="text-justify text-primary md:text-5xl text-4xl">YOUTUBE</h1>

					<div class="grid lg:grid-cols-2 lg:gap-16 gap-4 mt-5">
						<div>
							<iframe
								class="object-cover w-full h-64"
								src="https://www.youtube.com/embed/rfRxSmwjILs"
								title="nik"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							/>
						</div>

						<div class="text-justify m-auto">
							<span class="text-justify tracking-wide text-xl font-light">
								Mi piace realizzare video e storie su youtube nel tempo libero. Qua a lato trovi il
								video che rappresenta l'inizio del mio viaggio. Se invece vuoi dare un’occhiata al
								canale clicca <a
									href="https://www.youtube.com/channel/UC1VPT4qglYpXyj1nt_sL2sA"
									target="”_blank”"
									class="hover:text-primary underline underline-offset-1 transition">qui.</a
								>
							</span>
						</div>
					</div>
				</div>

				<div class="mt-24">
					<a
						class="flex my-auto fill-primary text-primary hover:text-primary-hover hover:fill-primary-hover transition"
						href="https://github.com/nicolapreda/"
						target="”_blank”"
					>
						Di più
						<svg
							class="my-auto ml-2"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill-rule="evenodd"
							clip-rule="evenodd"
							><path
								d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
							/></svg
						>
					</a>

					<h1 class="text-justify text-primary md:text-5xl text-4xl">PROGRAMMAZIONE</h1>
					<span class="mt-10 text-justify tracking-wide text-xl font-light"
						>Ogni tanto adempio ancora al mio compito da programmatore (principalmente frontend, un
						esempio molto pratico è questo sito web). I miei progetti li trovi su <a
							href="https://github.com/nicolapreda/"
							target="”_blank”"
							class="hover:text-primary underline underline-offset-1 transition">GitHub</a
						> . qui sotto qualche progetto recente:
					</span>

					<div class="grid xl:grid-cols-3 gap-16 xl:gap-4 mt-12">
						<div class="bg-secondarypink rounded-3xl shadow">
							<div class="bg-primary h-64 rounded-t-3xl flex items-center justify-center">
								<img src={dispensa} alt="dispensa" class="h-32" />
							</div>
							<div class="p-5 content-center text-center">
								<div>
									<h1 class="text-primary lg:text-4xl md:text-3xl text-2xl">DISPENSA</h1>
									<span class="mt-5 text-justify tracking-wide text-md font-light"
										>Applicazione per la gestione della dispensa di casa, realizzato con Flutter e
										Firebase per IOS e Android. Ho avuto l'onore di partecipare e arrivare secondo
										tramite questo progetto al contest GF Marilli organizzato dall'azienda Sorint</span
									>
								</div>
								<div class="mt-5">
									<a
										href="/dispensa"
										class="px-4 py-2 bg-secondary hover:bg-secondary-hover transition rounded-3xl"
										>Scopri di piu'</a
									>
								</div>
							</div>
						</div>

						<div class="bg-secondarypink rounded-3xl shadow">
							<div class="bg-primary h-64 rounded-t-3xl flex items-center justify-center">
								<img src={horidesk} alt="horidesk" class="h-32" />
							</div>
							<div class="p-5 content-center text-center">
								<div>
									<h1 class="text-primary lg:text-4xl md:text-3xl text-2xl">HORIDESK</h1>
									<span class="mt-5 text-justify tracking-wide text-md font-light">
										Ho collaborato per la realizzazione di un software per l’industria 4.0
										incentrato nella gestione di macchine FANUC, tramite un’interfaccia web semplice
										e intuitiva. Lo sviluppo invece e’ stato tutt’altro che semplice e intuitivo. :)</span
									>
								</div>
								<div class="mt-5">
									<a
										href="https://github.com/softwarehorizons"
										target="”_blank”"
										class="px-4 py-2 bg-secondary hover:bg-secondary-hover transition rounded-3xl"
										>Scopri di piu'</a
									>
								</div>
							</div>
						</div>

						<div class="bg-secondarypink rounded-3xl shadow">
							<div class="bg-primary h-64 rounded-t-3xl flex items-center justify-center">
								<span class=" text-white text-center">il logo dobbiamo <br />ancora farlo</span>
							</div>
							<div class="p-5 content-center text-center">
								<div>
									<h1 class="text-center text-primary lg:text-4xl md:text-3xl text-2xl">
										ALLERGIZEN
									</h1>
									<span class="mt-5 text-center tracking-wide text-md font-light">
										Due settimane di intenso lavoro alla Tecnobody S.r.l per realizzare
										un'applicazione mobile che tenesse conto delle allergie dell'utente e analizzare
										i prodotti scansionati, dando una visione più chiara degli ingredienti contenuti
										nell'alimento.</span
									>
								</div>
								<div class="mt-5">
									<a
										href="https://github.com/allergizen"
										target="”_blank”"
										class="px-4 py-2 bg-secondary hover:bg-secondary-hover transition rounded-3xl"
										>Scopri di piu'</a
									>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-24">
					<a
						class="flex my-auto fill-primary text-primary hover:text-primary-hover hover:fill-primary-hover transition"
						href="#"
					>
						Di più
						<svg
							class="my-auto ml-2"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill-rule="evenodd"
							clip-rule="evenodd"
							><path
								d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
							/></svg
						>
					</a>

					<h1 class="text-justify text-primary md:text-5xl text-4xl">RAPPRESENTANTE</h1>

					<div class="grid lg:grid-cols-2 lg:gap-16 gap-4 mt-5">
						<div class="m-auto">
							<img src={rappresentante} alt="rappresentante" class=" object-cover" />
						</div>
						<div class="text-justify m-auto">
							<span class="text-justify tracking-wide text-xl font-light"
								>Da ormai due anni sono rappresentante d’istituto della mia scuola. gestire tutte le
								attivita' che ruotano intorno ad essa e’ un compito che richiede tempo e dedizione,
								ma che mi ha lasciato ottime skill di gestione di un team, logistica, organizzazione
								di eventi e tante soddisfazioni. <a
									class="hover:text-primary underline underline-offset-1 transition"
									href="/rappresentante">Qua</a
								> tutto il mio percorso raccontato per filo e per segno
							</span>
						</div>
					</div>
				</div>

				<div class="mt-24">
					<a
						class="flex my-auto fill-primary text-primary hover:text-primary-hover hover:fill-primary-hover transition"
						href="./blog"
					>
						Di più
						<svg
							class="my-auto ml-2"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill-rule="evenodd"
							clip-rule="evenodd"
							><path
								d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
							/></svg
						>
					</a>

					<h1 class="text-primary text-5xl">BLOG</h1>
					<span class="mt-5 text-justify tracking-wide text-xl font-light"
						>Ho anche un blog. Ogni tanto scrivo qualcosa, quando mi va. Qua sotto gli ultimi
						articoli:
					</span>

					<ul class="posts mt-10">
						{#each data.posts.slice(0, 3) as post}
							<li class="post mt-6">
								<a
									href={post.slug}
									class="text-2xl font-poppins mb-5 text-primary hover:text-primary-hover"
									>{post.title}</a
								>
								<p class="mb-3 date text-md font-semibold">{formatDate(post.date)}</p>
								<span
									class=" px-3 py-1 border-2 text-md border-secondary rounded-lg text-secondary-hover font-poppins font-semibold drop-shadow-sm"
									>{post.category}</span
								>
								<p class=" mt-3 text-sm description font-poppins">{post.description}</p>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</a>
	</section>
</div>

<Footer />
