<script context="module">
  export const prerender = true;
</script>

<script>
  import logo from "./assets/img/logo.svg";
  import header from "./assets/img/header.webp";
  import design from "./assets/img/design.png";
  import dispensa from "./assets/img/dispensa.png";
  import fotografia from "./assets/img/fotografia.jpg";
  import rappresentante from "./assets/img/rappresentante.png";
  import horidesk from "./assets/img/horidesk.png";
  import allergizen from "./assets/img/allergizen.png";
</script>

<!--<svg class="absolute opacity-40 w-full h-full z-10" xmlns='http://www.w3.org/2000/svg'>
    <filter id='noiseFilter'>
        <feTurbulence type='fractalNoise' baseFrequency='9.31' numOctaves='3' stitchTiles='stitch' />
    </filter>

    <rect class="h-full w-full" filter='url(#noiseFilter)' />
</svg>-->


<body class="bg-pink">

    <section class="content lg:mx-32 mx-5">
        <div>
            <ul class="flex justify-between">
                <img src="{logo}" alt="nik" class="h-20">

                <li class="my-auto uppercase text-2xl font-briceregular">
                    <a class="text-primary hover:text-primary-hover transition mr-12 cursor-pointer" href="#dipiu">dipiu'</a>
                    <a class="text-primary hover:text-primary-hover transition cursor-pointer" href="https://predanicola.it/blog">blog</a>
                </li>
            </ul>

            <div class=" mt-12">
                <div class="h-full w-full">
                    <img src="{header}" alt="header" class="w-full object-cover">
                </div>
                <a href="#about" class="flex justify-center items-center mt-10">
                  <svg
                    class="animate-bounce w-10 h-10 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </a>
                

            </div>
        </div>


        <div name="about"
            class="mt-10 text-justify lg:text-6xl md:text-4xl text-3xl uppercase leading-snug tracking-tight font-briceextralight">
            <span class="">MI
                CHIAMO <span class="font-bricelight">NICOLA
                    PREDA </span>(PER GLI AMICI NIK) E
                STUDIO INFORMATICA, SONO RAPPRESENTANTE DELLA MIA SCUOLA.MI PIACE IL DESIGN, LA PASTA AL PESTO,
                SCRIVERE, LEGGERE, LA FOTOGRAFIA, LE DUNK LOW, RACCONTARE STORIE SU <a class="font-briceregular"
                    href="https://youtube.com/nicolapreda">YOUTUBE</a>. OGNI TANTO CARICO
                FOTO SU <a class="font-briceregular" href="https://instagram.com/nicolapreda_">INSTAGRAM</a>.LE MIE
                ESPERIENZE FORMATIVE E
                PROFESSIONALI LE TROVI SU <a class="font-briceregular"
                    href="https://youtube.com/nicolapreda">LINKEDIN</a>.
                HO ANCHE UN <span>BLOG</span>.
                PUOI CONTATTARMI SU QUESTA

                <a class="font-briceregular cursor-pointer" href="mailto:nicola.preda05@gmail.com">E-MAIL</a>, MA ANCHE
                SU
                <a class="font-briceregular" href="https://t.me/nicolapreda">TELEGRAM</a> O <a class="font-briceregular"
                    href="https://youtube.com/nicolapreda">WHATSAPP</a>.

        </div>

        <div class="mt-24" name="dipiu">
            <h1 class="text-justify text-primary text-8xl font-briceblack uppercase">dipiu' sul nik</h1>

            <div class="mt-10">
                <h1 class="text-justify text-primary text-5xl font-briceregular uppercase">design</h1>

                <div class="grid lg:grid-cols-2 lg:gap-16 gap-4 mt-5">
                    <div>
                        <img src="{design}" alt="design" class=" object-cover">
                    </div>
                    <div class="text-justify m-auto">
                        <span class="font-briceextralight text-2xl uppercase  tracking-tight">DOPO 4 ANNI DI
                            INFORMATICA E
                            PROGRAMMAZIONE, HO CAMBIATO COMPLETAMENTE INTERESSI, ENTRANDO NEL MONDO DEL DESIGN: IN
                            PARTICOLARE GRAPHIC DESIGN E UX/UI. ATTUALMENTE STO IMPARANDO LE NOZIONI DI BASE COME
                            AUTODIDATTA. PER IL FUTURO VORREI ISCRIVERMI A <a class="font-bricelight"
                                href="#">COMMUNICATION
                                DESIGN</a> AL
                            POLITECNICO DI MILANO. TROVI QUALCHE MIO LAVORO SU <a class="font-bricelight"
                                href="#">BEHANCE</a>.
                        </span>
                    </div>
                </div>
            </div>

            <div class="mt-24">
                <div class="flex">
                    
                </div>
                <h1 class="text-justify text-primary text-5xl font-briceregular uppercase">fotografia</h1>

                <div class="grid lg:grid-cols-2 lg:gap-16 gap-4 mt-5">
                    <div class="text-justify m-auto">
                        <span class="font-briceextralight text-2xl uppercase  tracking-tight">Sono da poco
                            entrato
                            nel mondo della fotografia analogica e digitale, ho acquistato una sony a6100 con cui
                            registro e
                            fotografo le mie avventure :) su instagram trovate i miei scatti migliori (anche quelli
                            peggiori)
                        </span>
                    </div>

                    <div>
                        <img src="{fotografia}" alt="fotografia" class=" object-cover">
                    </div>

                </div>

            </div>

            <div class="mt-24">
                <h1 class="text-justify text-primary text-5xl font-briceregular uppercase">youtube</h1>

                <div class="grid lg:grid-cols-2 lg:gap-16 gap-4 mt-5">
                    <div>
                        <iframe class="object-cover w-full h-full" src="https://www.youtube.com/embed/rfRxSmwjILs"
                            title="nik" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>

                    <div class="text-justify m-auto">
                        <span class="font-briceextralight text-2xl uppercase  tracking-tight">
                            Sono da poco entrato nel mondo della fotografia analogica e digitale, ho acquistato una sony
                            a6100 con cui
                            registro e
                            fotografo le mie avventure :) su instagram trovate i miei scatti migliori (anche quelli
                            peggiori)
                        </span>
                    </div>
                </div>
            </div>

            <div class="mt-24">
                <h1 class="text-justify text-primary text-5xl font-briceregular uppercase">programmazione</h1>
                <span class="text-justify font-briceextralight text-2xl uppercase tracking-tight">OGNI TANTO
                    ADEMPIO ANCORA AL MIO COMPITO DA PROGRAMMATORE (PRINCIPALMENTE FRONTEND). QUI SOTTO QUALCHE PROGETTO
                    RECENTE:
                </span>


                <div class="grid grid-cols-3 gap-16 mt-12">
                    <div class="bg-secondarypink rounded-3xl shadow">

                        <div class="bg-primary h-64 rounded-t-3xl">
                            <img src="{dispensa}" alt="dispensa"
                                class="shadow h-32 m-auto content-center">
                        </div>
                        <div class="p-12">
                            <div>
                                <h1 class="text-justify text-primary text-5xl font-briceregular uppercase">dispensa</h1>
                                <span class="font-briceextralight">Incididunt laborum exercitation occaecat elit
                                    occaecat
                                    aliqua. Excepteur et magna in consequat incididunt ex elit anim irure. Laborum
                                    aliquip
                                    Lorem adipisicing fugiat velit excepteur officia anim pariatur anim. Voluptate enim
                                    ullamco ad aliquip cupidatat aliquip. Quis sint cupidatat tempor enim qui excepteur
                                    id
                                    et aliquip irure nisi. Lorem consectetur quis sit ea ea veniam veniam
                                    eiusmod.</span>

                            </div>
                            <div class="mt-5">
                                <a href="https://predanicola.it/dispensa" class="px-4 py-2 bg-secondary rounded-3xl">scopri di piu'</a>

                            </div>
                        </div>
                    </div>

                    <div class="bg-secondarypink rounded-3xl shadow">

                        <div class="bg-primary h-64 rounded-t-3xl">
                            <img src="{horidesk}" alt="horidesk" class="shadow h-32 m-auto">
                        </div>
                        <div class="p-12">
                            <div>
                                <h1 class="text-justify text-primary text-5xl font-briceregular uppercase">horidesk</h1>
                                <span class="font-briceextralight">Ho collaborato per la realizzazione di un software per l’industria 4.0 incentrato nella gestione di macchine FANUC, tramite un’interfaccia web semplice e intuitiva. Lo sviluppo invece e’ stato tutt’altro che semplice e intuitivo. :)</span>

                            </div>
                            <div class="mt-5">
                                <a href="https://github.com/softwarehorizons" class="px-4 py-2 bg-secondary rounded-3xl">scopri di piu'</a>

                            </div>
                        </div>
                    </div>


                    <div class="bg-secondarypink rounded-3xl shadow">

                        <div class="bg-primary h-64 rounded-t-3xl">
                            <img src="{allergizen}" alt="allergizen" class="shadow h-32 m-auto">
                        </div>
                        <div class="p-12">
                            <div>
                                <h1 class="text-justify text-primary text-5xl font-briceregular uppercase">allergizen
                                </h1>
                                <span class="font-briceextralight">Due settimane di intenso lavoro per realizzare questa
                                    applicazione mobile insieme ad un fantastico team. Per la prima volta in vita mia
                                    sono
                                    riuscito a dividere equamente il lavoro e creare qualcosa fatto VERAMENTE in gruppo
                                    (tranne il nome, che ho scelto io a caso perche’ non c’era piu’ tempo)</span>

                            </div>
                            <div class="mt-5 ">
                                <a href="https://predanicola.it/allergizen" class="px-4 py-2 bg-secondary rounded-3xl">scopri di piu'</a>

                            </div>
                        </div>
                    </div>



                </div>

            </div>

            <div class="mt-24">
                <h1 class="text-justify text-primary text-5xl font-briceregular uppercase">rappresentante</h1>

                <div class="grid lg:grid-cols-2 lg:gap-16 gap-4 mt-5">
                    <div class="m-auto">
                        <img src="{rappresentante}" alt="rappresentante" class=" object-cover">
                    </div>
                    <div class="text-justify m-auto">
                        <span class="font-briceextralight text-2xl uppercase tracking-tight">DA ORMAI DUE
                            ANNI
                            SONO RAPPRESENTANTE D’ISTITUTO DELLA MIA SCUOLA. GESTIRE TUTTE LE ATTIVITA' CHE RUOTANO
                            INTORNO
                            AD ESSA E’ UN COMPITO CHE RICHIEDE TEMPO E DEDIZIONE, MA CHE MI HA LASCIATO OTTIME SKILL DI
                            GESTIONE DI UN TEAM, LOGISTICA, ORGANIZZAZIONE DI EVENTI E TANTE SODDISFAZIONI. <a
                                class="font-briceregular underline-offset-1 underline" href="https://predanicola.it/rappresentante">QUA</a> TUTTO IL MIO
                            PERCORSO IN QUESTO AMBITO RACCONTATO PER FILO E PER SEGNO.
                        </span>
                    </div>
                </div>
            </div>


            <div class="mt-24">
                <h1 class="text-justify text-primary text-5xl font-briceregular uppercase">blog</h1>
                <span class="text-justify font-briceextralight text-4xl uppercase leading-10 tracking-tight">PRIMA HO
                    SCRITTO CHE MI PIACE SCRIVERE, INFATTI HO ANCHE UN BLOG. OGNI TANTO SCRIVO QUALCOSA, QUANDO MI VA.
                    TROVI TUTTO QUI.
                    TI LASCIO DUE ARTICOLI IN EVIDENZA QUA SOTTO:
                </span>

                <div>
                    <div class="grid grid-cols"></div>
                </div>

            </div>
    </section>

    <div class=" mt-24 bg-primary p-32 justify-content-center text-center">
        <h1 class="font-bricebold uppercase text-white text-5xl">SEI ARRIVATO ALLA FINE.</h1>
        <span class="font-briceextralight text-white text-2xl ">puoi tornare <a
                class="underline underline-offset-1 font-bricelight cursor-pointer" href="#">su'</a> se vuoi. :)</span>
    </div>

    <div class="p-8 bg-primary-footer text-center">
        <span class="text-gray-footer font-bricelight">
            copyright nicola preda, 2023
        </span>
    </div>

</body>

