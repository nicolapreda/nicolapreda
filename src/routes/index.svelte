<script context="module">
  export const prerender = true;
</script>

<script>
  import logo from "./assets/img/pp.svg";
  import about from "./assets/img/about-me2.jpg";
  import project1 from "./assets/img/Yunime.svg";
  import certificateAR from "./assets/AR-VR-Certificate.pdf";
  import certificateLinux from "./assets/Linux-Certificate.pdf";
  import webtrotter2021 from "./assets/img/webtrotter_2021.jpg";
  import webtrotter2020 from "./assets/img/webtrotter_2020.jpg";
  import dispensa from "./assets/img/hero-dispensa.webp";
  import curriculum from "./assets/Curriculum_NP.pdf";

  //icons
  import github from "./assets/img/github-ico.svg";
  import linkedin from "./assets/img/linkedin-ico.svg";
  import gmail from "./assets/img/gmail-ico.svg";
  import telegram from "./assets/img/telegram-ico.svg";
  import twitter from "./assets/img/twitter-ico.svg";
  import facebook from "./assets/img/facebook-ico.svg";

  import mailBlack from "./assets/img/mail-ico-black.svg";
  import twitterBlack from "./assets/img/twitter-ico-black.svg";
</script>

<navbar>
  <nav
    class="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b  drop-shadow-md firefox:bg-opacity-30"
  >
    <div class="mx-5 md:mx-32 lg:mx-64">
      <div class="flex items-center justify-between h-16">
        <div class="navbar-brand ">
          <a href="https://nicolapreda.me">
            <img src={logo} alt="logo" class="logo h-10 w-10 mr-5" />
          </a>
        </div>
        <div>
          <a
            href="#about"
            class="ml-10 hover:border-b-4 hover:border-indigo-500 transition"
            >About</a
          >
          <a
            href="#resume"
            class="ml-10 hover:border-b-4 hover:border-indigo-500 transition"
            >Resume</a
          >

          <a
            href="#contactme"
            class="ml-10 hover:border-b-4 hover:border-indigo-500 transition"
            >Contact Me</a
          >
        </div>
        <div>
          <a
            href="/blog/"
            class="px-4 py-2 bg-indigo-200 hover:bg-indigo-400 transition rounded-lg"
            >Blog</a
          >
        </div>
      </div>
    </div>
  </nav>
</navbar>

<div class="text-center lg:mx-64 md:mx-32 mx-5 py-32">
  <h1 class=" leading-normal text-4xl font-normal">Hello, I'm</h1>
  <h1 class="leading-normal text-6xl font-bold text-indigo-500">
    Nicola Preda.
  </h1>
  <h1 class=" text-3xl font-light">
    I'm a novice programmer and designer, and I love creating projects. <br />
    I'm currently building my first SaaS application:
    <a
      href="https://dispensapp.com"
      target="”_blank”"
      class="underline-offset-2 hover:underline font-bold">dispensapp.com</a
    >
  </h1>
</div>

<a name="about" />
<section>
  <div class="bg-indigo-50 py-32">
    <div class="grid lg:grid-cols-2 gap-16 lg:mx-64 md:mx-32 mx-5">
      <div>
        <!--about img-->
        <img
          src={about}
          alt="about"
          class="w-128 h-auto drop-shadow-md rounded-md"
        />
      </div>

      <div>
        <h2 class="text-4xl font-bold text-gray-900">About Me</h2>
        <p class=" text-gray-600 mt-5 text-xl font-normal leading-relaxed">
          I'm a student that loves programming, In my spare time I love learning
          new things, coding and implement my ideas. I love traveling and
          visiting new places ✈️, going to the mountains 🧗‍♂️, listening to music
          and reading. Finally, I love enjoying every single moment of my life
          doing what I love, sharing time with the people who make me feel happy
          and being myself. 😉
        </p>
        <div class="mt-10">
          <a
            class="bg-indigo-200 px-7 py-5 rounded-2xl drop-shadow-md text-xl"
            target="”_blank”"
            href={curriculum}>Download CV</a
          >
        </div>
      </div>
    </div>
  </div>
</section>

<!--roadmap education, experience and awards-->
<a name="resume" />
<section class="lg:mx-64 md:mx-32 mx-5 grid lg:grid-cols-3 mt-32 gap-16">
  <div>
    <div class="grid grid-rows-3">
      <a
        href="#education"
        class="hover:border-b-4 hover:border-indigo-500 transition">Education</a
      >
      <a
        href="#education"
        class="hover:border-b-4 hover:border-indigo-500 transition"
        >Certificates</a
      >
      <a
        href="#education"
        class="hover:border-b-4 hover:border-indigo-500 transition">Awards</a
      >
    </div>
  </div>

  <div class="col-span-2">
    <!--education-->
    <div>
      <h1 class="text-indigo-600 font-semibold text-4xl">Education</h1>
      <div class="border-l-2 border-indigo-500">
        <div class="mt-10 h-4 w-4" />
        <div
          class="h-3 w-3 mt-10 relative bg-indigo-500 rounded-full"
          style="margin-left: -7px;"
        />
        <div class="pl-16 mt-m2">
          <p class="text-xl font-light">2019 - present</p>
          <h1 class="text-3xl font-semibold">ITIS P. Paleocapa - Bergamo</h1>
          <h2 class="text-2xl font-normal">👨‍💻Computer expert</h2>
          <p class="text font-normal">
            During my 5 years of studies I grew a lot from the computer science
            point of view, learning the basics of programming and from a human
            and organizational point of view, thanks to my two years as student
            representative.
          </p>
        </div>
      </div>
    </div>

    <!--awards & certificates-->

    <div class=" mt-32">
      <h1 class="text-indigo-600 font-semibold text-4xl">Awards</h1>
      <div class="p-5 bg-gray-50 my-7 shadow-lg rounded-lg ">
        <p>
          🎖️ Winner of the <b>"Webtrotter 2021"</b> award.
          <a
            href={webtrotter2021}
            target="”_blank”"
            class="underline-offset-2 hover:underline  transition text-indigo-500" alt="Certificate Webtrotter 2021">
            >Here</a
          > you can find the link to the award
        </p>
      </div>
      <div class="p-5 bg-gray-50 my-7 shadow rounded-lg">
        <p>
          🎖️ 4th place at the <b>"Webtrotter 2020"</b> award.
          <a
            href={webtrotter2020}
            target="”_blank”"
            class="underline-offset-2 hover:underline transition text-indigo-500" alt="Certificate Webtrotter 2020">
            >Here</a
          > you can find the link to the award
        </p>
      </div>

      <div class="p-5 bg-gray-50 my-7 shadow rounded-lg">
        <p>
          💪🏼 70th place at the <b>"Webtrotter 2022"</b> award.
          <a
            href="https://domino.aicanet.it/aica/ecdlcompetition.nsf/Webtrotter2022-Classifica-Finale-3-4.pdf"
            target="”_blank”"
            class="underline-offset-2 hover:underline transition text-indigo-500" alt="Classification Webtrotter 2022">
            >Here</a
          > you can find the link to the classification
        </p>
      </div>
    </div>

    <div class=" my-32">
      <h1 class="text-indigo-600 font-semibold text-4xl">Certificates</h1>
      <div class="p-5 bg-gray-50 my-7 shadow-lg rounded-lg">
        <p>
          🖥️ Attended the AR / VR course provided by the school.
          <a
            href={certificateAR}
            target="”_blank”"
            class="underline-offset-2 hover:underline transition text-indigo-500" alt="Certificate AR/VR"
            >Here</a
          > you can find the certificate.
        </p>
      </div>
      <div class="p-5 bg-gray-50 my-7 shadow-lg rounded-lg">
        <p>
          🧑‍💻 Attended the Javascript course provided by Udemy.
          <a
            href="https://udemy-certificate.s3.amazonaws.com/image/UC-119308c9-a0a1-4d3a-80af-140be4228f51.jpg?v=1591534697000"
            target="”_blank”"
            class="underline-offset-2 hover:underline transition text-indigo-500" alt="Certificate Javascript"
            >Here</a
          > you can find the certificate.
        </p>
      </div>

      <div class="p-5 bg-gray-50 my-7 shadow-lg rounded-lg">
        <p>
          🐧 Attended the Linux course provided by Sorint.
          <a
            href={certificateLinux}
            target="”_blank”"
            class="underline-offset-2 hover:underline transition text-indigo-500" alt="Certificate Linux"
            >Here</a
          > you can find the certificate.
        </p>
      </div>
    </div>
  </div>
</section>

<!--Dispensa project-->

<section>
  <div class="flex bg-indigo-50">
    <div class="grid lg:grid-cols-2 gap-16 lg:mx-64 md:mx-32 mx-5 items-center">
      <div >
        <!--about img-->
        <img
          src={dispensa}
          alt="Dispensa project"
          class="w-128 h-auto drop-shadow-md rounded-md"
        />
      </div>

      <div>
        <h2 class="text-4xl font-bold text-gray-900">Dispensa</h2>
        <p class=" text-gray-600 mt-5 text-xl font-normal leading-relaxed">
          Organize and control your food storage in a smart, fast and
          intelligent way. Save time searching for supermarket deals💰
        </p>
        <div class="mt-10">
          <a
            class="bg-indigo-200 hover:bg-indigo-300 transition px-7 py-3 rounded-xl drop-shadow-md text-xl"
            target="”_blank”"
            href="https://dispensapp.com/">Project Page</a
          >
        </div>
      </div>
    </div>
  </div>
</section>

<!--social section-->
<a name="contactme" />
<section>
  <div class="lg:mx-64 md:mx-32 mx-5 py-64">
    <h2 class="text-4xl font-bold text-gray-900 mb-16">Contact Me</h2>

    <div class="grid xl:grid-cols-2 gap-16">
      <div class="grid lg:grid-rows-3 gap-16">
        <!--contact card-->
        <div class="bg-secondary-blue rounded-xl py-2 px-5 my-6">
          <!--twitter img from web-->
          <div class="flex items-center">
            <a href="https://twitter.com/nicolapreda_" target="”_blank”"
              ><img src={twitter} alt="Twitter" class="w-12 m-5" /></a
            >
            <div class="block">
              <p class="text-gray-700 font-normal text-normal">Twitter</p>
              <a
                href="https://twitter.com/nicolapreda_"
                class="font-semibold text-xl"
                target="”_blank”">@nicolapreda_</a
              >
            </div>
          </div>
        </div>

        <div class="bg-secondary-blue rounded-xl py-2 px-5 my-6">
          <!--twitter img from web-->
          <div class="flex items-center">
            <a href="https://www.linkedin.com/in/nicola-preda-5b0722233" target="”_blank”"
              ><img src={linkedin} alt="Linkedin" class="w-12 m-5" /></a
            >
            <div class="block">
              <p class="text-gray-700 font-normal text-normal">Linkedin</p>
              <a
                href="https://www.linkedin.com/in/nicola-preda-5b0722233"
                class="font-semibold text-xl"
                target="”_blank”">@nicola-preda-5b0722233</a
              >
            </div>
          </div>
        </div>

        <div class="bg-secondary-blue rounded-xl py-2 px-5 my-6">
          <!--twitter img from web-->
          <div class="flex items-center">
            <a href="mailto:nicola.preda05@gmail.com" target="”_blank”"
              ><img src={gmail} alt="Gmail" class="w-12 m-5" /></a
            >
            <div class="block">
              <p class="text-gray-700 font-normal text-normal">Gmail</p>
              <a
                href="mailto:nicola.preda05@gmail.com"
                class="font-semibold text-xl"
                target="”_blank”">nicola.preda05@gmail.com</a
              >
            </div>
          </div>
        </div>

      </div>

      <div class="grid lg:grid-rows-3 gap-16 ">
        <div class="bg-secondary-blue rounded-xl py-2 px-5 my-6">
          <!--twitter img from web-->
          <div class="flex items-center">
            <a href="https://github.com/nicolapreda" target="”_blank”"
              ><img src={github} alt="Github" class="w-12 m-5" /></a
            >
            <div class="block">
              <p class="text-gray-700 font-normal text-normal">Github</p>
              <a
                href="https://github.com/nicolapreda"
                class="font-semibold text-xl"
                target="”_blank”">@nicolapreda</a
              >
            </div>
          </div>
        </div>

        <div class="bg-secondary-blue rounded-xl py-2 px-5 my-6">
          <!--twitter img from web-->
          <div class="flex items-center">
            <a href="https://t.me/nicolapreda" target="”_blank”"
              ><img src={telegram} alt="Telegram" class="w-12 m-5" /></a
            >
            <div class="block">
              <p class="text-gray-700 font-normal text-normal">Telegram</p>
              <a
                href="https://t.me/nicolapreda"
                class="font-semibold text-xl"
                target="”_blank”">@nicolapreda</a
              >
            </div>
          </div>
        </div>

        <div class="bg-secondary-blue rounded-xl py-2 px-5 my-6">
          <!--twitter img from web-->
          <div class="flex items-center">
            <a href="https://www.facebook.com/nicolapred4/" target="”_blank”"
              ><img src={facebook} alt="Facebook" class="w-12 m-5" /></a
            >
            <div class="block">
              <p class="text-gray-700 font-normal text-normal">Facebook</p>
              <a
                href="https://www.facebook.com/nicolapred4/"
                class="font-semibold text-xl"
                target="”_blank”">@nicolapred4</a
              >
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<footer>
  <div class="w-full bg-yellow-50">
    <div class="text-center py-12">
      <h3>This site is cookie free🍪</h3>

      <div class="flex justify-center mt-5">
        <a href="https://twitter.com/nicolapreda_" target="”_blank”"
          ><img src={twitterBlack} alt="Twitter" class="w-5 h-5 mx-2 " /></a
        >
        <a href="mailto:nicolapreda_" target="”_blank”"
          ><img src={mailBlack} alt="Telegram" class="w-5 h-5 mx-2 " /></a
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
