<script context="module">
  export const prerender = true;
</script>


<script>
  import about from "./assets/img/about.jpg";
  import webtrotter2021 from "./assets/img/webtrotter_2021.jpg";
  import webtrotter2020 from "./assets/img/webtrotter_2020.jpg";
  import dispensa from "./assets/img/hero-dispensa.webp";
  import dispensaLogo from "./assets/img/logo_text.svg";
  import damimmo_logo from "./assets/img/damimmo-logo.png";
  import esperia_logo from "./assets/img/esperia-logo.jpg";
  import curriculum from "./assets/Curriculum_NP.pdf";
  import pic from "./assets/img/pic.png";
  import background from "./assets/img/background.png";
  import favicon from "./assets/img/favicon.png";
  import gfmarilli1 from "./assets/img/gfmarilli1.jpg";
  import gfmarilli2 from "./assets/img/gfmarilli2.jpg";

  //icons
  import github from "./assets/img/github-ico.svg";
  import linkedin from "./assets/img/linkedin-ico.svg";
  import gmail from "./assets/img/gmail-ico.svg";
  import telegram from "./assets/img/telegram-ico.svg";
  import twitter from "./assets/img/twitter-ico.svg";
  import facebook from "./assets/img/facebook-ico.svg";

  //flowbite 
  import { Carousel } from 'flowbite-svelte';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
  let showThumbs=false;
  let showCaptions=false;
  const images = [
  {
    id: 0,
    name: "GF Marilli contest 1",
    imgurl: gfmarilli1,
    attribution: "GF Marilli contest",
  },
  {
    id: 1,
    name: "GF Marilli contest 2",
    imgurl: gfmarilli2,
    attribution: "GF Marilli contest",
  },
  
  
];


</script>

<header style="background-image: url({background}); background-size: cover;">

  <Navbar let:hidden let:toggle >
    <NavBrand href="https://nicolapreda.me">
      <img src={favicon} class="mr-3 h-6 sm:h-9" alt="Nicola Preda logo"/>
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Nicola Preda</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="#" active={true}>home</NavLi>
      <NavLi href="#about">about</NavLi>
      <NavLi href="#resume">resume</NavLi>
      <NavLi href="#contactme">contact</NavLi>
      <NavLi href="#dispensa">dispensa</NavLi>
      <NavLi target="”_blank”" href="https://www.linkedin.com/in/nicola-preda-5b0722233">follow</NavLi>

    </NavUl>
  </Navbar>
  

  <div class="text-center h-screen lg:mx-64 md:mx-32 mx-5">
    <div class="grid h-screen place-items-center">
      <div>
        <img
          src={pic}
          class="rounded-full h-32 w-32 mx-auto"
          alt="Nicola Preda"
        />
        <h1
          class="leading-normal font-figtree text-5xl font-bold text-blue-900"
        >
          nicola preda
        </h1>
        <!--arrow down button-->
        <a href="#about" class="flex justify-center items-center mt-10">
          <svg
            class="animate-bounce w-6 h-6 text-blue-900"
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
  </div>
</header>

<section id="about">
  <div class="bg-indigo-50 py-32">
    <div
      class="lg:mx-64 md:mx-32 mx-5 justify-items-center text-center items-center"
    >
      <div class="text-center">
        <img src={about}  class="rounded-lg mb-16 items-center h-128 w-full object-cover	 " alt="about">
        <h2 class="text-7xl md:text-9xl font-bold text-blue-900 font-figtree">about</h2>

        <p class=" text-gray-600 mt-5 md:text-xl text-lg font-normal leading-relaxed">
          I'm a student that loves to create and build projects. I'm currently
          studying Computer Science at ITIS Paleocapa of Bergamo. I'm also the
          institute representative of my school, and I love organizing events
          and managing all the initiatives that are proposed within it. In my
          free time I enjoy <a
            href="https://www.strava.com/athletes/103124446"
            target="”_blank”"
            class="underline underline-offset-1 hover:text-black"
          >
            hiking with my racing bike</a
          >, visiting new places and listening to music.
        </p>

        <div class="mt-10">
          <a
            class="bg-blue-600 hover:bg-blue-800 transition font-medium rounded-lg text-white px-7 py-5 drop-shadow-md text-xl"
            target="”_blank”"
            href={curriculum}>Download CV</a
          >
        </div>
      </div>
    </div>
  </div>
</section>

<!--roadmap education, experience and awards-->
<section
  id="resume"
  class="lg:mx-64 md:mx-32 mx-5 grid lg:grid-cols-6 mt-32 gap-16 mb-32"
>
  <div>
    <div class="grid grid-rows-3">
      <a
        href="#education"
        class="hover:underline-offset-2 hover:underline transition my-1"
        >education</a
      >
      <a
        href="#experience"
        class="hover:underline-offset-2 hover:underline transition my-1"
        >experience</a
      >
      <a
        href="#awards"
        class="hover:underline-offset-2 hover:underline transition my-1"
        >awards</a
      >
    </div>
  </div>

  <div class="col-span-5" id="education">
    <!--education-->
    <div>
      <h1 class="text-blue-900 font-semibold text-6xl font-figtree">
        education
      </h1>
      <div class="border-l-2 border-blue-900">
        <div class="mt-10 h-4 w-4" />
        <div
          class="h-3 w-3 mt-10 relative bg-blue-900 rounded-full"
          style="margin-left: -7px;"
        />
        <div class="md:pl-16 pl-8 mt-m2">
          <div class="flex items-center">
            <div>
              <img
                src={esperia_logo}
                alt="Esperia Logo"
                class="w-12 rounded-full drop-shadow-md"
              />
            </div>
            <div class="ml-5">
              <h1 class="md:text-3xl text-lg font-semibold">
                ITIS P. Paleocapa - Bergamo
              </h1>
              <p class="md:text-lg text-normal font-light">2019 - present</p>
            </div>
          </div>
          <h2 class="md:text-2xl text-md font-semibold mt-4 text-gray-900">
            Computer expert
          </h2>
          <p class="text-sm md:text-normal font-normal text-gray-800">
            I'm currently growing a lot from the computer science point of view,
            learning the basics of programming and from a human and
            organizational point of view, thanks to my 2 years as a member of
            student council and school representative .
          </p>
        </div>
      </div>
    </div>

    <!--Experience-->

    <div name="experience" class="mt-32">
      <h1 class="text-blue-900 font-semibold text-6xl font-figtree">
        experience
      </h1>
      <div class="border-l-2 border-blue-900">
        <div class="mt-10 h-4 w-4" />
        <div
          class="h-3 w-3 mt-10 relative bg-blue-900 rounded-full"
          style="margin-left: -7px;"
        />
        <div class="md:pl-16 pl-8 mt-m2">
          <div class="flex items-center">
            <div>
              <img
                src={damimmo_logo}
                alt="Da Mimmo Ai Colli"
                class="w-12 drop-shadow-md"
              />
            </div>
            <div class="ml-5">
              <h1 class="md:text-3xl text-md font-semibold ">
                Da Mimmo Ai colli - Longuelo(BG)
              </h1>
              <p class="md:text-lg text-normal font-light ">
                July 2022 - August 2022
              </p>
            </div>
          </div>
          <h2 class="md:text-2xl text-md font-semibold mt-4 text-gray-900">
            Waiter
          </h2>
          <p class="text-sm md:text-normal font-normal text-gray-800">
            During these 2 months, I worked as a waiter at "Da Mimmo - Ai Colli"
            restaurant. I was responsible for the service of the guests, and for
            the management of the tables.
          </p>
        </div>
      </div>
    </div>

    <!--awards & certificates-->

    <div id="awards" class=" mt-32">
      <h1 class="text-blue-900 font-semibold text-6xl font-figtree">
        awards
      </h1>
      <div
        class=" bg-blue-50 hover:bg-blue-100 transition my-7 shadow-lg rounded-lg mt-12"
      >
      <Carousel {images} loop {showCaptions} {showThumbs}/>
      <p class="p-5">
          🎖️ 2th place at the <b>
            <a
              href="https://s4s.sorint.it/event"
              target="”_blank”"
              class="underline-offset-2 hover:underline  transition text-indigo-900"
              alt="Certificate Webtrotter 2021"
            >
              "GF Marilli 2022"</a
            >
          </b> award, with my project <a href="https://dispensapp.com" class="underline-offset-2 hover:underline  transition text-indigo-900">Dispensa</a>
        </p>
      </div>
      <div
        class="p-5 bg-blue-50 hover:bg-blue-100 transition my-7 shadow-lg rounded-lg "
      >
        <p>
          🎖️ Winner of the <b>
            <a
              href={webtrotter2021}
              target="”_blank”"
              class="underline-offset-2 hover:underline  transition text-indigo-900"
              alt="Certificate Webtrotter 2021"
            >
              "Webtrotter 2021"</a
            >
          </b> award.
        </p>
      </div>
      <div
        class="p-5 bg-blue-50 hover:bg-blue-100 transition my-7 shadow rounded-lg"
      >
        <p>
          🎖️ 4th place at the <b>
            <a
              href={webtrotter2020}
              target="”_blank”"
              class="underline-offset-2 hover:underline transition text-indigo-900"
              alt="Certificate Webtrotter 2020"
            >
              "Webtrotter 2020"</a
            ></b
          > award.
        </p>
      </div>
    </div>
  </div>
</section>

<!--Dispensa project-->

<section id="dispensa">
  <div class="flex bg-indigo-50 pb-32 xl:pb-0">
    <div class="grid xl:grid-cols-2 gap-16 lg:mx-64 md:mx-32 mx-5 items-center">
      <div>
        <!--about img-->
        <img
          src={dispensa}
          alt="Dispensa project"
          class="w-128 h-auto drop-shadow-md rounded-md"
        />
      </div>

      <div>
        <a
          href="https://dispensapp.com"
          target="”_blank”"
          alt="Dispensa website"
          ><img src={dispensaLogo} alt="Dispensa logo" class="w-1/3" /></a
        >
        <h2 class="text-4xl font-bold text-gray-900">
          Smart manage of <br /> food storage 🥗
        </h2>
        <p class=" text-gray-600 mt-5 text-xl font-normal leading-relaxed">
          Organize and control your food storage in a smart, fast and
          intelligent way. Save time searching for supermarket deals💰
        </p>

        <div class="mt-4">
          <p class="text-gray-900 font-normal leading-relaxed">
            Coming soon on:
          </p>
          <div class="flex">
            <img
              class="mt-1 w-24 h-full"
              src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
              alt="Get it on Google Play Store"
            />
            <img
              class="ml-4 w-24 h-full"
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-alternate.png"
              alt="Get it on App Store"
            />
          </div>
        </div>

        <div class="mt-10">
          <a
            class="bg-blue-600 hover:bg-blue-800 transition font-medium rounded-lg text-white px-7 py-5 drop-shadow-md text-xl"
            target="”_blank”"
            href="https://dispensapp.com/">Project Page</a
          >
        </div>
      </div>
    </div>
  </div>
</section>

<!--contact section-->
<section >
  <div class="lg:mx-64 md:mx-32 mx-5 py-64" >
    <h2 class="text-7xl md:text-9xl font-bold text-blue-900 mb-16" id="contactme">contact</h2>

    <div class="grid xl:grid-cols-2 gap-16 xl:gap-32 2xl:gap-64">
      <div class="grid lg:grid-rows-3 gap-16">
        <div
          class="shadow-lg shadow-gray-400/20 bg-secondary-blue rounded-xl py-2 px-5 my-4 hover:bg-indigo-100 transition"
        >
          <a href="https://twitter.com/nicolapreda_" target="”_blank”">
            <div class="flex items-center">
              <a href="https://twitter.com/nicolapreda_" target="”_blank”"
                ><img src={twitter} alt="Twitter" class="w-12 m-5" /></a
              >

              <div class="block">
                <p class="text-gray-700 font-normal text-normal">Twitter</p>
                <p class="font-semibold text-xl">@nicolapreda_</p>
              </div>
            </div>
          </a>
        </div>

        <div
          class="shadow-lg shadow-gray-400/20 bg-secondary-blue rounded-xl py-2 px-5 my-4 hover:bg-indigo-100 transition"
        >
          <a
            href="https://www.linkedin.com/in/nicola-preda-5b0722233"
            target="”_blank”"
          >
            <div class="flex items-center">
              <img src={linkedin} alt="Linkedin" class="w-12 m-5" />

              <div class="block">
                <p class="text-gray-700 font-normal text-normal">Linkedin</p>
                <p class="font-semibold text-xl" target="”_blank”">
                  @nicola-preda
                </p>
              </div>
            </div>
          </a>
        </div>

        <div
          class="shadow-lg shadow-gray-400/20 bg-secondary-blue rounded-xl py-2 px-5 my-4 hover:bg-indigo-100 transition"
        >
          <a href="mailto:nicola.preda05@gmail.com" target="”_blank”">
            <div class="flex items-center">
              <img src={gmail} alt="Gmail" class="w-12 m-5" />
              <div class="block">
                <p class="text-gray-700 font-normal text-normal">Gmail</p>
                <p class="font-semibold text-xl">nicola.preda05@gmail.com</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="grid lg:grid-rows-3 gap-16 ">
        <div
          class="shadow-lg shadow-gray-400/20 bg-secondary-blue rounded-xl py-2 px-5 my-4 hover:bg-indigo-100 transition"
        >
          <a href="https://github.com/nicolapreda" target="”_blank”">
            <div class="flex items-center">
              <img src={github} alt="Github" class="w-12 m-5" />
              <div class="block">
                <p class="text-gray-700 font-normal text-normal">Github</p>
                <p class="font-semibold text-xl">@nicolapreda</p>
              </div>
            </div>
          </a>
        </div>

        <div
          class="shadow-lg shadow-gray-400/20 bg-secondary-blue rounded-xl py-2 px-5 my-4 hover:bg-indigo-100 transition"
        >
          <a href="https://t.me/nicolapreda" target="”_blank”">
            <div class="flex items-center">
              <img src={telegram} alt="Telegram" class="w-12 m-5" />
              <div class="block">
                <p class="text-gray-700 font-normal text-normal">Telegram</p>
                <p class="font-semibold text-xl">@nicolapreda</p>
              </div>
            </div>
          </a>
        </div>

        <div
          class="shadow-lg shadow-gray-400/20  bg-secondary-blue rounded-xl py-2 px-5 my-4 hover:bg-indigo-100 transition"
        >
          <a href="https://www.facebook.com/nicolapred4/" target="”_blank”">
            <div class="flex items-center">
              <img src={facebook} alt="Facebook" class="w-12 m-5" />
              <div class="block">
                <p class="text-gray-700 font-normal text-normal">Facebook</p>
                <p class="font-semibold text-xl">@nicolapred4</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="w-full bg-yellow-100">
    <div class="text-center py-12">
      <h3 class="text-gray-800">
        Hosted with ❤ by <a
          target="”_blank”"
          href="https://github.com/nicolapreda/nicolapreda"
          class="underline-offset-2 underline hover:text-black">Github</a
        >
      </h3>

      <div class="flex justify-center mt-5">
        <a href="https://twitter.com/nicolapreda_" target="”_blank”"
          ><img
            src="https://www.svgrepo.com/show/11841/twitter.svg"
            alt="Twitter"
            class="w-5 h-5 mx-2 stroke-white"
          /></a
        >
        <a href="mailto:nicolapreda_" target="”_blank”"
          ><img
            src="https://www.svgrepo.com/show/296967/email-mail.svg"
            alt="Telegram"
            class="w-5 h-5 mx-2 "
          /></a
        >
      </div>
    </div>
    <div class="bg-yellow-200 py-5">
      <p class="text-center text-gray-700 text-xs">
        &copy; 2022 Nicola Preda. All rights reserved.
      </p>
    </div>
  </div>
</footer>
