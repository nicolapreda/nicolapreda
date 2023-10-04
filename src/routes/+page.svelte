<script>
	// @ts-nocheck

	import Footer from './footer.svelte';

	import logo from '$lib/assets/img/logo.svg';
	import design from '$lib/assets/img/design.webp';
	import dispensa from '$lib/assets/img/dispensa.webp';
	import rappresentante from '$lib/assets/img/rappresentante.webp';
	import horidesk from '$lib/assets/img/horidesk.webp';
	import newtab from '$lib/assets/img/new-tab.svg';
	import carousel1 from '$lib/assets/img/fotografia/carousel1.webp';
	import carousel2 from '$lib/assets/img/fotografia/carousel2.webp';
	import carousel3 from '$lib/assets/img/fotografia/carousel3.webp';
	import carousel4 from '$lib/assets/img/fotografia/carousel4.webp';
	import carousel5 from '$lib/assets/img/fotografia/carousel5.webp';
	import carousel6 from '$lib/assets/img/fotografia/carousel6.webp';
	import carousel7 from '$lib/assets/img/fotografia/carousel7.webp';
	import carousel8 from '$lib/assets/img/fotografia/carousel8.webp';

	import nik from '$lib/assets/img/nik.jpg';
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
</script>

<div class="break-words">
	<section class="mx-[5%] md:mx-[20%]">
		<h1
			class="mt-32 text-center break-words text-primary xl:text-7xl text-5xl m-auto font-semibold font-poppins"
		>
			Aspirante fotografo e graphic designer.
		</h1>
		<div class="md:flex justify-center items-center mt-12">
			<img src={nik} class="h-32 rounded-full mx-auto md:mx-0" alt="nik" />

			<div class="my-auto md:ml-10 md:mx-0 mx-auto text-primary text-center md:text-left">
				<h1 class="md:text-4xl text-3xl my-auto uppercase font-semibold">Nicola Preda</h1>
				<div class="flex items-center justify-center">
					<a
						target="”_blank”"
						href="https://www.youtube.com/channel/UC1VPT4qglYpXyj1nt_sL2sA"
						class="mr-2 flex"
					>
						<img src={newtab} class="mr-1 w-5" alt="youtube" />
						YOUTUBE</a
					>
					<a href="https://instagram.com/nicolapreda_" target="”_blank”" class="mr-2 flex">
						<img src={newtab} class="mr-1 w-5" alt="youtube" />
						INSTAGRAM</a
					>
				</div>
			</div>
		</div>

		<a name="dipiu">
			<div class="mt-24">
				<h1 class="text-justify text-primary md:text-5xl text-4xl">io in breve</h1>

				<div class="mt-5 text-justify tracking-wide text-xl uppercase font-light">
					<span class="break-words"
						>Mi chiamo <span class="">Nicola Preda </span>(per gli amici nik) e studio informatica,
						sono rappresentante della mia scuola.mi piace il design, la pasta al pesto, scrivere,
						leggere, la fotografia, le dunk, raccontare storie su
						<a
							class=" hover:text-primary underline underline-offset-1 transition"
							target="”_blank”"
							href="https://www.youtube.com/channel/UC1VPT4qglYpXyj1nt_sL2sA">youtube</a
						>. ogni tanto carico foto su
						<a
							class=" hover:text-primary underline underline-offset-1 transition"
							href="https://instagram.com/nicolapreda_"
							target="”_blank”">instagram</a
						>.Le mie esperienze formative e professionali le trovi su
						<a
							class=" hover:text-primary underline underline-offset-1 transition"
							href="https://www.linkedin.com/in/nicola-preda-5b0722233/"
							target="”_blank”">linkedin</a
						>. ho anche un <span>blog</span>. puoi contattarmi a questa

						<a
							class=" hover:text-primary underline underline-offset-1 transition"
							href="mailto:nicola.preda05@gmail.com"
							target="”_blank”">email</a
						>, ma anche su
						<a
							class=" hover:text-primary underline underline-offset-1 transition"
							href="https://t.me/nicolapreda"
							target="”_blank”">telegram</a
						>
					</span>
				</div>
			</div>

			<div class="mt-10 md:grid md:grid-cols-2 md:gap-16">
				<div class="text-center">
					<h1 class="text-primary text-2xl">ultimo video</h1>
					<iframe
						class="rounded-xl mt-10 w-full h-64"
						src="https://www.youtube.com/embed/1ruJUAvUVao"
						title="Ascolta il tuo dolore"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					/>
				</div>

				<div class="text-center">
					<h1 class="text-primary text-2xl">ultimo articolo</h1>

					<div class="p-5 mt-10 rounded-xl h-64 bg-secondarypink">
						<a href={data.posts[0].slug} class="text-4xl mb-5 text-primary font-bold"
							>{data.posts[0].title}</a
						>

						<div class="post mt-2">
							<p class="text-primary text-lg">{formatDate(data.posts[0].date)}</p>
							<p>{data.posts[0].description}</p>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-24">
				<div class="mt-10">
					<h1 class="text-justify text-primary md:text-5xl text-4xl">design</h1>

					<div class="grid lg:grid-cols-2 lg:gap-16 gap-4 mt-5">
						<div>
							<img src={design} alt="design" class="h-64 object-cover lg:m-0 m-auto" />
						</div>
						<div class="m-auto">
							<span class="mt-5 text-justify tracking-wide text-xl font-light"
								>dopo 4 anni di informatica e programmazione, ho cambiato completamente interessi,
								entrando nel mondo del design: in particolare graphic design e ux/ui. attualmente
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
						href="https://instagram.com/nicolapreda_/"
						target="”_blank”"
					>
						di più
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
					<h1 class="text-justify text-primary md:text-5xl text-4xl">fotografia</h1>

					<div class="mt-5">
						<span class="text-justify tracking-wide text-xl font-light"
							>Sono da poco entrato nel mondo della fotografia analogica e digitale, ho acquistato
							una sony a6100 con cui registro e fotografo le mie avventure :) su <a
								href="https://instagram.com/nicolapreda_"
								target="”_blank”"
								class="hover:text-primary underline underline-offset-1 transition">instagram</a
							> trovi i miei scatti migliori (anche quelli peggiori)
						</span>
					</div>

					<div class="mt-12 h-64 carousel carousel-center rounded-box">
						<div class="carousel-item">
							<img src={carousel1} alt="fotografia" />
						</div>
						<div class="carousel-item">
							<img src={carousel2} alt="fotografia" />
						</div>
						<div class="carousel-item">
							<img src={carousel4} alt="fotografia" />
						</div>
						<div class="carousel-item">
							<img src={carousel5} alt="fotografia" />
						</div>
						<div class="carousel-item">
							<img src={carousel6} alt="fotografia" />
						</div>
						<div class="carousel-item">
							<img src={carousel7} alt="fotografia" />
						</div>
						<div class="carousel-item">
							<img src={carousel8} alt="fotografia" />
						</div>
					</div>
				</div>

				<div class="mt-24">
					<a
						class="flex my-auto fill-primary text-primary hover:text-primary-hover hover:fill-primary-hover transition"
						href="https://www.youtube.com/channel/UC1VPT4qglYpXyj1nt_sL2sA"
						target="”_blank”"
					>
						di più
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
					<h1 class="text-justify text-primary md:text-5xl text-4xl">youtube</h1>

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
								mi piace realizzare video e storie su youtube nel tempo libero. qua a lato puoi
								trovare il mio ultimo video, se invece vuoi dare un’occhiata al canale clicca <a
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
						di più
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

					<h1 class="text-justify text-primary md:text-5xl text-4xl">programmazione</h1>
					<span class="mt-10 text-justify tracking-wide text-xl font-light"
						>ogni tanto adempio ancora al mio compito da programmatore (principalmente frontend). i
						miei progetti li trovi su <a
							href="https://github.com/nicolapreda/"
							target="”_blank”"
							class="hover:text-primary underline underline-offset-1 transition">github</a
						> . qui sotto qualche progetto recente:
					</span>

					<div class="grid xl:grid-cols-3 gap-16 xl:gap-4 mt-12">
						<div class="bg-secondarypink rounded-3xl shadow">
							<div class="bg-primary h-64 rounded-t-3xl flex items-center justify-center">
								<img src={dispensa} alt="dispensa" class="h-32" />
							</div>
							<div class="p-5 content-center text-center">
								<div>
									<h1 class="text-primary lg:text-4xl md:text-3xl text-2xl">dispensa</h1>
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
										>scopri di piu'</a
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
									<h1 class="text-primary lg:text-4xl md:text-3xl text-2xl">horidesk</h1>
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
										>scopri di piu'</a
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
										allergizen
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
										>scopri di piu'</a
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
						di più
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

					<h1 class="text-justify text-primary md:text-5xl text-4xl">rappresentante</h1>

					<div class="grid lg:grid-cols-2 lg:gap-16 gap-4 mt-5">
						<div class="m-auto">
							<img src={rappresentante} alt="rappresentante" class=" object-cover" />
						</div>
						<div class="text-justify m-auto">
							<span class="text-justify tracking-wide text-xl font-light"
								>da ormai due anni sono rappresentante d’istituto della mia scuola. gestire tutte le
								attivita' che ruotano intorno ad essa e’ un compito che richiede tempo e dedizione,
								ma che mi ha lasciato ottime skill di gestione di un team, logistica, organizzazione
								di eventi e tante soddisfazioni. <a
									class="hover:text-primary underline underline-offset-1 transition"
									href="/rappresentante">qua</a
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
						di più
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

					<h1 class="text-primary text-5xl">blog</h1>
					<span class="mt-5 text-justify tracking-wide text-xl font-light"
						>prima ho scritto che mi piace scrivere, infatti ho anche un blog. ogni tanto scrivo
						qualcosa, quando mi va. qua sotto gli ultimi articoli:
					</span>

					<ul class="posts mt-10">
						{#each data.posts.slice(0, 3) as post}
							<li class="post mt-6">
								<a href={post.slug} class="text-2xl font-poppins mb-5 text-primary hover:text-primary-hover"
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
