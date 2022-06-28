<script>
  import logo from "./assets/img/pp.svg";
  import about from "./assets/img/about-me2.jpg";
  import project1 from "./assets/img/Yunime.svg";
  import certificateAR from "./assets/AR-VR-Certificate.pdf";
  import certificateLinux from "./assets/Linux-Certificate.pdf";
  import webtrotter2021 from "./assets/img/webtrotter_2021.jpg";
  import webtrotter2020 from "./assets/img/webtrotter_2020.jpg";
  import dispensa from "./assets/img/dispensa_hero.jpg";


  //icons
  import github from "./assets/img/github-ico.svg";
  import linkedin from "./assets/img/linkedin-ico.svg";
  import gmail from "./assets/img/gmail-ico.svg";
  import telegram from "./assets/img/telegram-ico.svg";
  import twitter from "./assets/img/twitter-ico.svg";

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
            href="#contactme"
            class="ml-10 hover:border-b-4 hover:border-indigo-500 transition"
            >Contact Me</a
          >
          <a
            href="#dispensa"
            class="ml-10 hover:border-b-4 hover:border-indigo-500 transition"
            >Projects</a
          >
        </div>
        <div>
          <a
            href="/blog"
            class="px-4 py-2 bg-indigo-200 hover:bg-indigo-400 transition rounded-lg"
            >Blog</a
          >
        </div>
      </div>
    </div>
  </nav>
</navbar>

<div class="text-center px-64 py-32">
  <h1 class=" leading-normal text-4xl font-normal">Hello, I'm</h1>
  <h1 class="leading-normal text-6xl font-bold text-indigo-500">
    Nicola Preda.
  </h1>
  <h1 class=" text-3xl font-light">
    I'm a novice programmer and designer, and I love creating projects. I'm currently building my first SaaS application: <a href="https://dispensapp.com" class="underline-offset-2 hover:underline font-bold">dispensapp.com</a>
  </h1>
</div>

<a name="about"></a>
<section>
  <div class="bg-indigo-50 p-32">
    <div class="grid grid-cols-2 gap-16 mx-32">
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
            href="#">Download CV</a
          >
        </div>
      </div>
    </div>
  </div>
</section>

<!--roadmap education, experience and awards-->

<section class="px-64 grid grid-cols-3 mt-32 gap-16">
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
            class="underline-offset-2 hover:underline  transition text-indigo-500">Here</a
          > you can find the link to the award
        </p>
      </div>
      <div class="p-5 bg-gray-50 my-7 shadow rounded-lg">
        <p>
          🎖️ 4th place at the <b>"Webtrotter 2020"</b> award.
          <a
            href={webtrotter2020}
            class="underline-offset-2 hover:underline transition text-indigo-500">Here</a
          > you can find the link to the award
        </p>
      </div>

      <div class="p-5 bg-gray-50 my-7 shadow rounded-lg">
        <p>
          💪🏼 70th place at the <b>"Webtrotter 2022"</b> award.
            <a
              href="https://domino.aicanet.it/aica/ecdlcompetition.nsf/Webtrotter2022-Classifica-Finale-3-4.pdf"
              class="underline-offset-2 hover:underline transition text-indigo-500">Here</a
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
            class="underline-offset-2 hover:underline transition text-indigo-500">Here</a
          > you can find the certificate.
        </p>

        
      </div>
      <div class="p-5 bg-gray-50 my-7 shadow-lg rounded-lg">
        <p>
          🧑‍💻 Attended the Javascript course provided by Udemy. 
          <a
            href="https://udemy-certificate.s3.amazonaws.com/image/UC-119308c9-a0a1-4d3a-80af-140be4228f51.jpg?v=1591534697000"
            class="underline-offset-2 hover:underline transition text-indigo-500">Here</a
          > you can find the certificate.
        </p>
      </div>

      <div class="p-5 bg-gray-50 my-7 shadow-lg rounded-lg">
        <p>
          🐧 Attended the Linux course provided by Sorint. 
          <a
            href={certificateLinux}
            class="underline-offset-2 hover:underline transition text-indigo-500">Here</a
          > you can find the certificate.
        </p>
      </div>


    </div>
  </div>
</section>

<!--Dispensa project-->

<section>
  <div class="bg-indigo-50 p-32">
    <div class="grid grid-cols-2 gap-16 mx-32">
      <div>
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
          Dispensa is a web application that allows you to manage your
          food storage.
        </p>
        <div class="mt-10">
          <a
              class="bg-indigo-200 px-7 py-5 rounded-2xl drop-shadow-md text-xl"
              href="https://dispensapp.com/">Project Page</a
          >
        </div>
      </div>
    </div>
  </div>
</section>


<!--social section-->
<a name="contactme"></a>
<section>
  <div class="px-64 py-64">
    <h2 class="text-4xl font-bold text-gray-900 mb-16">Contact Me</h2>

    <div class="grid grid-cols-5 gap-16 place-items-center ">
      <!--contact card-->
      <div class="bg-indigo-200 flex items-center  rounded-lg drop-shadow-lg">
        <!--twitter img from web-->
        <a href="https://twitter.com/nicolapreda_"><img
          src={twitter}
          alt="Twitter"
          class="w-64 h-auto p-16"
        /></a>
      </div>
  
      <div class="bg-indigo-200 flex items-center  rounded-lg drop-shadow-lg">
        <!--twitter img from web-->
        <a href="mailto:nicola.preda05@gmail.com"><img
          src={gmail}
          alt="Mail"
          class="w-64 h-auto p-16"
        /></a>
      </div>
  
      <div class="bg-indigo-200 flex items-center  rounded-lg drop-shadow-lg">
        <!--twitter img from web-->
        <a href="https://github.com/nicolapreda"><img
          src={github}
          alt="Github"
          class="w-64 h-auto p-16"
        /></a>
      </div>
  
      <div class="bg-indigo-200 flex items-center  rounded-lg drop-shadow-lg">
        <!--twitter img from web-->
        <a href="https://www.linkedin.com/in/nicola-preda-5b0722233"><img
          src={linkedin}
          alt="Linkedin"
          class="w-64 h-auto p-16"
        /></a>
      </div>
  
      <div class="bg-indigo-200 flex items-center  rounded-lg drop-shadow-lg">
        <!--twitter img from web-->
        <a href="https://t.me/niocolapreda"><img
          src={telegram}
          alt="Telegram"
          class="w-64 h-auto p-16"
        /></a>
      </div>
    </div>
  </div>
  
</section>

<footer>
  <div class="w-full py-24 bg-yellow-300">
    <div class="text-center">
          <a href="mailto:nicola.preda05@gmail.com">nicola.preda05@gmail.com</a>
        <h3>This website is cookie free🍪</h3>
        <p class="text-center text-gray-500 text-xs">
          &copy; 2022 Nicola Preda. All rights reserved.
        </p>
    </div>
  </div>
</footer>
