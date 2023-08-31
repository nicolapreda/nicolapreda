<script>
	// @ts-nocheck

	import Footer from './footer.svelte';

	import logo from '$lib/assets/img/logo.svg';
	import design from '$lib/assets/img/design.webp';
	import dispensa from '$lib/assets/img/dispensa.webp';
	import rappresentante from '$lib/assets/img/rappresentante.webp';
	import horidesk from '$lib/assets/img/horidesk.webp';

	import carousel1 from '$lib/assets/img/fotografia/carousel1.webp';
	import carousel2 from '$lib/assets/img/fotografia/carousel2.webp';
	import carousel3 from '$lib/assets/img/fotografia/carousel3.webp';
	import carousel4 from '$lib/assets/img/fotografia/carousel4.webp';
	import carousel5 from '$lib/assets/img/fotografia/carousel5.webp';

	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
</script>

<div class="break-words">
	<section class="lg:mx-32 mx-5">
		<div
			class="mt-10 text-justify lg:text-6xl md:text-4xl sm:text-3xl text-2xl uppercase leading-snug tracking-tight font-briceextralight"
		>
			<span class="break-all"
				>MI CHIAMO <span class="font-bricelight">NICOLA PREDA </span>(PER GLI AMICI NIK) E STUDIO
				INFORMATICA, SONO RAPPRESENTANTE DELLA MIA SCUOLA.MI PIACE IL DESIGN, LA PASTA AL PESTO,
				SCRIVERE, LEGGERE, LA FOTOGRAFIA, LE DUNK, RACCONTARE STORIE SU
				<a
					class="font-briceregular hover:underline hover:underline-offset-1 transition"
					target="”_blank”"
					href="https://www.youtube.com/channel/UC1VPT4qglYpXyj1nt_sL2sA">YOUTUBE</a
				>. OGNI TANTO CARICO FOTO SU
				<a
					class="font-briceregular hover:underline hover:underline-offset-1 transition"
					href="https://instagram.com/nicolapreda_"
					target="”_blank”">INSTAGRAM</a
				>.LE MIE ESPERIENZE FORMATIVE E PROFESSIONALI LE TROVI SU
				<a
					class="font-briceregular hover:underline hover:underline-offset-1 transition"
					href="https://www.linkedin.com/in/nicola-preda-5b0722233/"
					target="”_blank”">LINKEDIN</a
				>. HO ANCHE UN <span>BLOG</span>. PUOI CONTATTARMI SU QUESTA

				<a
					class="font-briceregular cursor-pointer hover:underline hover:underline-offset-1 transition"
					href="mailto:nicola.preda05@gmail.com"
					target="”_blank”">E-MAIL</a
				>, MA ANCHE SU
				<a
					class="font-briceregular hover:underline hover:underline-offset-1 transition"
					href="https://t.me/nicolapreda"
					target="”_blank”">TELEGRAM</a
				>
				O
				<a
					class="font-briceregular hover:underline hover:underline-offset-1 transition"
					href="https://wa.me/message/NCECJOBKRIRDO1"
					target="”_blank”">WHATSAPP</a
				>.
			</span>
		</div>
		<a name="dipiu">
			<div class="mt-24">
				<h1 class="text-justify text-primary md:text-8xl text-6xl font-briceblack uppercase">
					dipiu'
				</h1>

				<div class="mt-10">
					<h1 class="text-justify text-primary md:text-5xl text-4xl font-briceregular uppercase">
						design
					</h1>

					<div class="grid lg:grid-cols-2 lg:gap-16 gap-4 mt-5">
						<div>
							<img src={design} alt="design" class="h-64 object-cover lg:m-0 m-auto" />
						</div>
						<div class="text-justify m-auto">
							<span class="font-briceextralight md:text-2xl text-xl uppercase tracking-tight"
								>DOPO 4 ANNI DI INFORMATICA E PROGRAMMAZIONE, HO CAMBIATO COMPLETAMENTE INTERESSI,
								ENTRANDO NEL MONDO DEL DESIGN: IN PARTICOLARE GRAPHIC DESIGN E UX/UI. ATTUALMENTE
								STO IMPARANDO LE NOZIONI DI BASE COME AUTODIDATTA. PER IL FUTURO VORREI ISCRIVERMI A <a
									class="font-bricelight hover:underline hover:underline-offset-1 transition"
									target="”_blank”"
									href="https://www.polimi.it/futuri-studenti/corsi-di-laurea/design-della-comunicazione"
									>COMMUNICATION DESIGN</a
								>
								AL POLITECNICO DI MILANO.
								<!--
								TROVI QUALCHE MIO LAVORO SU
								<a
									class="font-bricelight hover:underline hover:underline-offset-1 transition"
									href="https://behance.com"
									target="”_blank”">BEHANCE</a
								>.-->
							</span>
						</div>
					</div>
				</div>

				<div class="mt-24">
					<a
						class="flex my-auto font-bricelight fill-primary text-primary hover:text-primary-hover hover:fill-primary-hover transition"
						href="https://instagram.com/nicolapreda_/"
						target="”_blank”"
					>
						dipiu'
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
					<h1 class="text-justify text-primary md:text-5xl text-4xl font-briceregular uppercase">
						fotografia
					</h1>

					<div class="text-justify m-auto">
						<span class="font-briceextralight md:text-2xl text-xl uppercase tracking-tight"
							>Sono da poco entrato nel mondo della fotografia analogica e digitale, ho acquistato
							una sony a6100 con cui registro e fotografo le mie avventure :) su <a
								href="https://instagram.com/nicolapreda_"
								target="”_blank”"
								class="font-bricelight hover:underline hover:underline-offset-1 transition"
								>instagram</a
							> trovi i miei scatti migliori (anche quelli peggiori)
						</span>
					</div>

					<div class="mt-12">
						<div class="-m-1 flex flex-wrap md:-m-2">
							<div class="flex w-1/2 flex-wrap">
								<div class="w-1/2 p-1 md:p-2">
									<img
										alt="gallery"
										class="block h-full w-full rounded-lg object-cover object-center"
										src={carousel1}
									/>
								</div>
								<div class="w-1/2 p-1 md:p-2">
									<img
										alt="gallery"
										class="block h-full w-full rounded-lg object-cover object-center"
										src={carousel2}
									/>
								</div>
								<div class="w-full p-1 md:p-2">
									<img
										alt="gallery"
										class="block h-full w-full rounded-lg object-cover object-center"
										src={carousel3}
									/>
								</div>
							</div>
							<div class="flex w-1/2 flex-wrap">
								<div class="w-full p-1 md:p-2">
									<img
										alt="gallery"
										class="block h-full w-full rounded-lg object-cover object-center"
										src={carousel4}
									/>
								</div>

								<div class="p-1 md:p-2">
									<img
										alt="gallery"
										class="block h-full w-full rounded-lg object-cover object-center"
										src={carousel5}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-24">
					<a
						class="flex my-auto font-bricelight fill-primary text-primary hover:text-primary-hover hover:fill-primary-hover transition"
						href="https://www.youtube.com/channel/UC1VPT4qglYpXyj1nt_sL2sA"
						target="”_blank”"
					>
						dipiu'
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
					<h1 class="text-justify text-primary md:text-5xl text-4xl font-briceregular uppercase">
						youtube
					</h1>

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
							<span class="font-briceextralight md:text-2xl text-xl uppercase tracking-tight">
								MI PIACE REALIZZARE VIDEO E STORIE SU YOUTUBE NEL TEMPO LIBERO. QUA A LATO PUOI
								TROVARE IL MIO ULTIMO VIDEO, SE INVECE VUOI DARE UN’OCCHIATA AL CANALE CLICCA <a
									href="https://www.youtube.com/channel/UC1VPT4qglYpXyj1nt_sL2sA"
									target="”_blank”"
									class="font-bricelight hover:underline hover:underline-offset-1 transition"
									>QUI.</a
								>
							</span>
						</div>
					</div>
				</div>

				<div class="mt-24">
					<a
						class="flex my-auto font-bricelight fill-primary text-primary hover:text-primary-hover hover:fill-primary-hover transition"
						href="https://github.com/nicolapreda/"
						target="”_blank”"
					>
						dipiu'
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

					<h1 class="text-justify text-primary md:text-5xl text-4xl font-briceregular uppercase">
						programmazione
					</h1>
					<span
						class="text-justify font-briceextralight md:text-2xl text-xl uppercase tracking-tight"
						>OGNI TANTO ADEMPIO ANCORA AL MIO COMPITO DA PROGRAMMATORE (PRINCIPALMENTE FRONTEND). I
						MIEI PROGETTI LI TROVI SU <a
							href="https://github.com/nicolapreda/"
							target="”_blank”"
							class="font-bricelight hover:underline hover:underline-offset-1 transition">GITHUB</a
						> . QUI SOTTO QUALCHE PROGETTO RECENTE:
					</span>

					<div class="grid md:grid-cols-3 gap-4 mt-12">
						<div class="bg-secondarypink rounded-3xl shadow">
							<div class="bg-primary h-64 rounded-t-3xl flex items-center justify-center">
								<img src={dispensa} alt="dispensa" class="h-32" />
							</div>
							<div class="lg:p-10 p-5">
								<div>
									<h1
										class="text-justify text-primary lg:text-4xl md:text-3xl text-2xl font-briceregular uppercase"
									>
										dispensa
									</h1>
									<span class="font-briceextralight"
										>Applicazione per la gestione della dispensa di casa, realizzato con Flutter e
										Firebase per IOS e Android. Ho avuto l'onore di partecipare e arrivare secondo
										tramite questo progetto al contest GF Marilli organizzato dall'azienda Sorint</span
									>
								</div>
								<div class="mt-5">
									<a
										href="#"
										class="px-4 py-2 bg-secondary hover:bg-secondary-hover transition uppercase rounded-3xl font-bricelight"
										>scopri di piu'</a
									>
								</div>
							</div>
						</div>

						<div class="bg-secondarypink rounded-3xl shadow">
							<div class="bg-primary h-64 rounded-t-3xl flex items-center justify-center">
								<img src={horidesk} alt="horidesk" class="h-32" />
							</div>
							<div class="lg:p-10 p-5">
								<div>
									<h1
										class="text-justify text-primary lg:text-4xl md:text-3xl text-2xl font-briceregular uppercase"
									>
										horidesk
									</h1>
									<span class="font-briceextralight"
										>Ho collaborato per la realizzazione di un software per l’industria 4.0
										incentrato nella gestione di macchine FANUC, tramite un’interfaccia web semplice
										e intuitiva. Lo sviluppo invece e’ stato tutt’altro che semplice e intuitivo. :)</span
									>
								</div>
								<div class="mt-5">
									<a
										href="https://github.com/softwarehorizons"
										target="”_blank”"
										class="px-4 py-2 bg-secondary hover:bg-secondary-hover transition uppercase rounded-3xl font-bricelight"
										>scopri di piu'</a
									>
								</div>
							</div>
						</div>

						<div class="bg-secondarypink rounded-3xl shadow">
							<div class="bg-primary h-64 rounded-t-3xl flex items-center justify-center">
								<span class="uppercase font-briceregular text-white text-center"
									>il logo dobbiamo <br />ancora farlo</span
								>
							</div>
							<div class="lg:p-10 p-6">
								<div>
									<h1
										class="text-justify text-primary lg:text-4xl md:text-3xl text-2xl font-briceregular uppercase"
									>
										allergizen
									</h1>
									<span class="font-briceextralight"
										>Due settimane di intenso lavoro per realizzare questa applicazione mobile
										insieme ad un fantastico team. Per la prima volta in vita mia sono riuscito a
										dividere equamente il lavoro e creare qualcosa fatto VERAMENTE in gruppo (tranne
										il nome, che ho scelto io a caso perche’ non c’era piu’ tempo)</span
									>
								</div>
								<div class="mt-5">
									<a
										href="#"
										class="px-4 py-2 bg-secondary hover:bg-secondary-hover transition uppercase rounded-3xl font-bricelight"
										>scopri di piu'</a
									>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-24">
					<a
						class="flex my-auto font-bricelight fill-primary text-primary hover:text-primary-hover hover:fill-primary-hover transition"
						href="#"
					>
						dipiu'
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

					<h1 class="text-justify text-primary md:text-5xl text-4xl font-briceregular uppercase">
						rappresentante
					</h1>

					<div class="grid lg:grid-cols-2 lg:gap-16 gap-4 mt-5">
						<div class="m-auto">
							<img src={rappresentante} alt="rappresentante" class=" object-cover" />
						</div>
						<div class="text-justify m-auto">
							<span class="font-briceextralight text-2xl uppercase tracking-tight"
								>DA ORMAI DUE ANNI SONO RAPPRESENTANTE D’ISTITUTO DELLA MIA SCUOLA. GESTIRE TUTTE LE
								ATTIVITA' CHE RUOTANO INTORNO AD ESSA E’ UN COMPITO CHE RICHIEDE TEMPO E DEDIZIONE,
								MA CHE MI HA LASCIATO OTTIME SKILL DI GESTIONE DI UN TEAM, LOGISTICA, ORGANIZZAZIONE
								DI EVENTI E TANTE SODDISFAZIONI. <a
									class="font-briceregular underline-offset-1 underline"
									href="#">QUA</a
								> TUTTO IL MIO PERCORSO IN QUESTO AMBITO RACCONTATO PER FILO E PER SEGNO.
							</span>
						</div>
					</div>
				</div>

				<div class="mt-24">
					<a
						class="flex my-auto font-bricelight fill-primary text-primary hover:text-primary-hover hover:fill-primary-hover transition"
						href="./blog"
					>
						dipiu'
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

					<h1 class="text-justify text-primary text-5xl font-briceregular uppercase">blog</h1>
					<span class="text-justify font-briceextralight text-2xl uppercase tracking-tight"
						>PRIMA HO SCRITTO CHE MI PIACE SCRIVERE, INFATTI HO ANCHE UN BLOG. OGNI TANTO SCRIVO
						QUALCOSA, QUANDO MI VA. QUA SOTTO GLI ULTIMI TRE ARTICOLI:
					</span>

					<ul class="posts mt-10">
						{#each data.posts.slice(0, 3) as post}
							<li class="post mt-6">
								<a href={post.slug} class="text-4xl font-briceregular mb-5 text-primary"
									>{post.title}</a
								>
								<p class="date">{formatDate(post.date)}</p>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</a>
	</section>
</div>

<Footer />
