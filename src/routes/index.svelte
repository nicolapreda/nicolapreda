<script context="module">
  export const prerender = true;
</script>

<script>
  import logo from "./assets/img/pp.svg";
  import about from "./assets/img/about-me.webp";
  import certificateAR from "./assets/AR-VR-Certificate.pdf";
  import certificateLinux from "./assets/Linux-Certificate.pdf";
  import webtrotter2021 from "./assets/img/webtrotter_2021.jpg";
  import webtrotter2020 from "./assets/img/webtrotter_2020.jpg";
  import dispensa from "./assets/img/hero-dispensa.webp";
  import dispensaLogo from "./assets/img/logo_text.svg";

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
        <div class="navbar-brand">
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
  <h1 class="leading-normal font-figtree text-6xl font-bold text-indigo-800">
    Nicola Preda.
  </h1>
  <h1 class=" text-3xl font-light ">
    I'm a novice programmer and designer, and I love creating projects. <br />
    I'm currently building my first SaaS application:
    <a
      href="https://dispensapp.com"
      target="”_blank”"
      class="underline-offset-2 hover:underline transition font-bold">dispensapp.com</a
    >
  </h1>
</div>

<a name="about" />
<section>
  <div class="bg-indigo-50 py-32">
    <div class="grid xl:grid-cols-2 gap-16 lg:mx-64 md:mx-32 mx-5">
      <div>
        <!--about img-->
        <img
          src={about}
          alt="about"
          class="w-128 h-full drop-shadow-md rounded-md"
        />
      </div>

      <div>
        <h2 class="text-4xl font-bold text-gray-900">About Me</h2>
        <p class=" text-gray-600 mt-5 text-xl font-normal leading-relaxed">
          I'm a student that loves to create and build projects. I'm currently studying Computer Science at ITIS Paleocapa of Bergamo.
          I'm also the institute representative of my school, and I love organizing events and managing all the initiatives that are proposed within it.
          In my free time I enjoy <a href="https://www.strava.com/athletes/103124446" target="”_blank”" class="underline underline-offset-1 hover:text-black"> hiking with my racing bike</a>, visiting new places and listening to music.
I also like write for my blog and for the school newspaper.
I read weekly, with great interest, the column of Alessandro D'Avenia <a href="https://www.corriere.it/alessandro-d-avenia-ultimo-banco/" target="”_blank”" class="underline underline-offset-1 hover:text-black">"Ultimo Banco"</a>, from which I take inspiration for my articles

        </p>
        <div class="mt-10">
          <a
            class="bg-indigo-200 hover:bg-indigo-300 transition px-7 py-5 rounded-2xl drop-shadow-md text-xl"
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
<section class="lg:mx-64 md:mx-32 mx-5 grid lg:grid-cols-6 mt-32 gap-16">
  <div>
    <div class="grid grid-rows-3">
      <a
        href="#education"
        class="hover:underline-offset-2 hover:underline transition my-1">Education</a
      >
      <a
      href="#experience"
      class="hover:underline-offset-2 hover:underline transition my-1"
      >Experience</a
    >      
    <a
    href="#awards"
    class="hover:underline-offset-2 hover:underline transition my-1">Awards</a
  >
      <a
        href="#certificates"
        class="hover:underline-offset-2 hover:underline transition my-1"
        >Certificates</a
      >
    </div>
  </div>

  <div class="col-span-5">

    <!--education-->
    <div>
      <a name="education"></a>

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

    <!--Experience-->

    <div class="mt-32">
      <a name="experience"></a>

      <h1 class="text-indigo-600 font-semibold text-4xl">Experience</h1>
      <div class="border-l-2 border-indigo-500">
        <div class="mt-10 h-4 w-4" />
        <div
          class="h-3 w-3 mt-10 relative bg-indigo-500 rounded-full"
          style="margin-left: -7px;"
        />
        <div class="pl-16 mt-m2">
          <p class="text-xl font-light">July 2022 - August 2022</p>
          <h1 class="text-3xl font-semibold">Da Mimmo Ai colli - Longuelo(BG)</h1>
          <h2 class="text-2xl font-normal">Waiter</h2>
          <p class="text font-normal">
            During these 2 months, I worked as a waiter at "Da Mimmo - Ai Colli" restaurant. I was responsible for the service of the guests, and for the management of the tables.
          </p>
        </div>
      </div>
    </div>

    <!--awards & certificates-->

    <div class=" mt-32">
      <a name="awards"></a>

      <h1 class="text-indigo-600 font-semibold text-4xl">Awards</h1>
      <div class="p-5 bg-gray-50 my-7 shadow-lg rounded-lg ">
        <p>
          🎖️ Winner of the <b>
          <a
            href={webtrotter2021}
            target="”_blank”"
            class="underline-offset-2 hover:underline  transition text-indigo-900" alt="Certificate Webtrotter 2021">
            "Webtrotter 2021"</a
          > </b> award.
        </p>
      </div>
      <div class="p-5 bg-gray-50 my-7 shadow rounded-lg">
        <p>
          🎖️ 4th place at the <b>
          <a
            href={webtrotter2020}
            target="”_blank”"
            class="underline-offset-2 hover:underline transition text-indigo-900" alt="Certificate Webtrotter 2020">
            "Webtrotter 2020"</a
          ></b>  award.
        </p>
      </div>

      <div class="p-5 bg-gray-50 my-7 shadow rounded-lg">
        <p>
          💪🏼 70th place at the <b>
          <a
            href="https://domino.aicanet.it/aica/ecdlcompetition.nsf/Webtrotter2022-Classifica-Finale-3-4.pdf"
            target="”_blank”"
            class="underline-offset-2 hover:underline transition text-indigo-900" alt="Classification Webtrotter 2022">
            "Webtrotter 2022"</a
          ></b>  award.
        </p>
      </div>
    </div>

    <div class=" my-32">
      <a name="certificates"></a>

      <h1 class="text-indigo-600 font-semibold text-4xl">Certificates</h1>
      <div class="p-5 bg-gray-50 my-7 shadow-lg rounded-lg">
        <p>
          🖥️ Attended the
          <a
            href={certificateAR}
            target="”_blank”"
            class="underline-offset-2 hover:underline transition text-indigo-900" alt="Certificate AR/VR"
            >AR / VR course</a
          > provided by the school.
        </p>
      </div>
      <div class="p-5 bg-gray-50 my-7 shadow-lg rounded-lg">
        <p>
          🧑‍💻 Attended the
          <a
            href="https://udemy-certificate.s3.amazonaws.com/image/UC-119308c9-a0a1-4d3a-80af-140be4228f51.jpg?v=1591534697000"
            target="”_blank”"
            class="underline-offset-2 hover:underline transition text-indigo-900" alt="Certificate Javascript"
            >Javascript course</a
          > provided by Udemy.
        </p>
      </div>

      <div class="p-5 bg-gray-50 my-7 shadow-lg rounded-lg">
        <p>
          🐧 Attended the
          <a
            href={certificateLinux}
            target="”_blank”"
            class="underline-offset-2 hover:underline transition text-indigo-900" alt="Certificate Linux"
            >Linux course</a
          > provided by Sorint.
        </p>
      </div>
    </div>
  </div>
</section>

<!--Dispensa project-->

<section>
  <div class="flex bg-indigo-50 pb-32 lg:pb-0">
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
        <a href="https://dispensapp.com" target="”_blank”" alt="Dispensa website"><img src={dispensaLogo} alt="Dispensa logo" class="w-1/3"></a>
        <h2 class="text-4xl font-bold text-gray-900">Smart manage
          of food storage 🥗</h2>
        <p class=" text-gray-600 mt-5 text-xl font-normal leading-relaxed">
          Organize and control your food storage in a smart, fast and
          intelligent way. Save time searching for supermarket deals💰
        </p>

        
        <div class="mt-4">
          <p class="text-gray-900 font-normal leading-relaxed">Coming soon on:</p> 
          <div class="flex">
            <img class="mt-1 w-24 h-full" src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0" alt="Get it on Google Play Store">
            <img class="ml-4 w-24 h-full" src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-alternate.png" alt="Get it on App Store">
  
          </div>

        </div>

        <div class="mt-10">
          <a
            class="bg-indigo-200 hover:bg-indigo-300 transition px-7 py-3 rounded-xl drop-shadow-md text-xl"
            target="”_blank”" alt="Dispensa website"
            href="https://dispensapp.com/">Project Page</a
          >
        </div>

      </div>
    </div>
  </div>
</section>

<!--contact section-->
<a name="contactme" />
<section>
  <div class="lg:mx-64 md:mx-32 mx-5 py-64">
    <h2 class="text-4xl font-bold text-gray-900 mb-16">Contact Me</h2>

    <div class="grid xl:grid-cols-2 gap-16 xl:gap-32 2xl:gap-64">
      <div class="grid lg:grid-rows-3 gap-16">
        
        <div class="shadow-lg shadow-gray-400/20 bg-secondary-blue rounded-xl py-2 px-5 my-4 hover:bg-indigo-100 transition">
          <a  href="https://twitter.com/nicolapreda_" target="”_blank”">
            <div class="flex items-center">
                <a href="https://twitter.com/nicolapreda_" target="”_blank”"
                ><img src={twitter} alt="Twitter" class="w-12 m-5" /></a
              >
              
              <div class="block" >
                <p class="text-gray-700 font-normal text-normal">Twitter</p>
                <p
                  
                  class="font-semibold text-xl"
                  >@nicolapreda_</p
                >
              </div>
              
            </div>
          </a>
        </div>
        
        <div class="shadow-lg shadow-gray-400/20 bg-secondary-blue rounded-xl py-2 px-5 my-4 hover:bg-indigo-100 transition">
          <a  href="https://www.linkedin.com/in/nicola-preda-5b0722233" target="”_blank”">
            <div class="flex items-center" >
                <img src={linkedin} alt="Linkedin" class="w-12 m-5" />
              
              <div class="block">
                <p class="text-gray-700 font-normal text-normal">Linkedin</p>
                <p
                  
                  class="font-semibold text-xl"
                  target="”_blank”">@nicola-preda-5b0722233</p
                >
              </div>
            </div>
          </a>
        </div>
        
        <div class="shadow-lg shadow-gray-400/20 bg-secondary-blue rounded-xl py-2 px-5 my-4 hover:bg-indigo-100 transition">
          <a href="mailto:nicola.preda05@gmail.com" target="”_blank”" >
            <div class="flex items-center">
              <img src={gmail} alt="Gmail" class="w-12 m-5" />
              <div class="block">
                <p class="text-gray-700 font-normal text-normal">Gmail</p>
                <p
                  
                  class="font-semibold text-xl"
                  >nicola.preda05@gmail.com</p
                >
              </div>
            </div>
          </a>
        </div>
        

      </div>

      <div class="grid lg:grid-rows-3 gap-16 ">
        <div class="shadow-lg shadow-gray-400/20 bg-secondary-blue rounded-xl py-2 px-5 my-4 hover:bg-indigo-100 transition">
          <a href="https://github.com/nicolapreda" target="”_blank”">
            <div class="flex items-center">
              <img src={github} alt="Github" class="w-12 m-5" />
              <div class="block">
                <p class="text-gray-700 font-normal text-normal">Github</p>
                <p
                  
                  class="font-semibold text-xl"
                  >@nicolapreda</p
                >
              </div>
            </div>
          </a>
          
        </div>

        <div class="shadow-lg shadow-gray-400/20 bg-secondary-blue rounded-xl py-2 px-5 my-4 hover:bg-indigo-100 transition">
          <a href="https://t.me/nicolapreda" target="”_blank”">
            <div class="flex items-center">
             <img src={telegram} alt="Telegram" class="w-12 m-5" />
              <div class="block">
                <p class="text-gray-700 font-normal text-normal">Telegram</p>
                <p
                  class="font-semibold text-xl"
                  >@nicolapreda</p
                >
              </div>
            </div>
          </a>
          
        </div>

        <div class="shadow-lg shadow-gray-400/20  bg-secondary-blue rounded-xl py-2 px-5 my-4 hover:bg-indigo-100 transition">
          <a href="https://www.facebook.com/nicolapred4/" target="”_blank”">
            <div class="flex items-center">
              <img src={facebook} alt="Facebook" class="w-12 m-5" />
              <div class="block">
                <p class="text-gray-700 font-normal text-normal">Facebook</p>
                <p
                  
                  class="font-semibold text-xl"
                  >@nicolapred4</p
                >
              </div>
            </div>
          </a>
          
        </div>

      </div>
    </div>
</section>

<footer>
  <div class="w-full bg-yellow-100">
    <div class="text-center py-12">
      <h3 class="text-gray-800">Hosted with ❤ by <a target="”_blank”" href="https://github.com/nicolapreda/nicolapreda" class="underline-offset-2 underline hover:text-black">Github</a></h3>

      <div class="flex justify-center mt-5">
        <a href="https://twitter.com/nicolapreda_" target="”_blank”"
          ><img src="https://www.svgrepo.com/show/11841/twitter.svg" alt="Twitter" class="w-5 h-5 mx-2 stroke-white" /></a
        >
        <a href="mailto:nicolapreda_" target="”_blank”"
          ><img src="https://www.svgrepo.com/show/296967/email-mail.svg" alt="Telegram" class="w-5 h-5 mx-2 " /></a
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
