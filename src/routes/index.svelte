<script>
  import logo from "./assets/img/pp.svg";
  import heading from "./assets/img/heading.svg";
  import about from "./assets/img/about-me2.jpg";
  import project1 from "./assets/img/Yunime.svg";
  import hero from "./assets/img/hero.jpg";
</script>

<navbar>
  <div class="z-0 section_background-wrap absolute">
    <canvas
      style="--gradient-color-1:#CFD3FF;--gradient-color-2:#FAD755;--gradient-color-3:#7038ff;--gradient-color-4:#e2e2e2;"
      id="gradient-canvas"
      data-transition-in=""
      class="isLoaded w-full h-240"
    />
  </div>
  <div class="navbar py-5 w-full px-64">
    <div class="flex justify-between">
      <div class="navbar-brand ">
        <a href="https://nicolapreda.me">
          <img src={logo} alt="logo" class="logo h-10 w-10 mr-5" />
        </a>
      </div>
      <div>
        <a
          href="about.html"
          class="ml-10 hover:border-b-4 hover:border-indigo-500 transition">About</a
        >
        <a
          href="projects.html"
          class="ml-10 hover:border-b-4 hover:border-indigo-500 transition">Contact Me</a
        >
        <a
          href="projects.html"
          class="ml-10 hover:border-b-4 hover:border-indigo-500 transition">Projects</a
        >
      </div>
      <div>
        <a href="/blog" class="px-4 py-2 bg-indigo-200 hover:bg-indigo-400 transition rounded-lg">Blog</a>
      </div>
    </div>
  </div>
</navbar>

  <div class="grid grid-cols-2 px-64 py-32">
  
    <div>
      <h1 class=" leading-normal text-4xl font-normal">Hello, I'm</h1>
      <h1 class="leading-normal text-6xl font-bold text-indigo-500">
        Nicola Preda.
      </h1>
      <h1 class=" text-3xl font-light">
        I'm a novice programmer and designer, and I love creating projects.
      </h1>

    </div>

      <div>
        <img src={hero} alt="Hero image">

      </div>
    
  </div>

<section>
  <div class="bg-indigo-50 p-32">
    <div class="grid grid-cols-2 gap-4 mx-32">
      <div>
        <!--about img-->
        <img src={about} alt="about" class="w-128 h-auto drop-shadow-md rounded-md" />
      </div>

      <div>
        <h2 class="text-4xl font-bold text-gray-900">About Me</h2>
        <p class=" text-gray-600 mt-5 text-xl font-normal leading-relaxed">
          I'm a student that loves programming, In my spare time I love learning new things, coding and implement my ideas. I love traveling and visiting new places ✈️, going to the mountains 🧗‍♂️, listening to music and reading. Finally, I love enjoying every single moment of my life doing what I love, sharing time with the people who make me feel happy and being myself. 😉 
        </p>
        <div class="mt-10">
          <a class="bg-indigo-200 px-7 py-5 rounded-2xl drop-shadow-md text-xl" href="#">Download CV</a>

        </div>
      </div>
    </div>
  </div>
</section>

<!--roadmap education, experience and awards-->

<section>
  <!--education-->
  <div class="mx-32 mt-32">
    <h1 class="text-indigo-600 font-semibold text-4xl">Education</h1>
    <div class="border-l-4 border-indigo-500">
      <div
        class="h-4 w-4 mt-10 bg-indigo-500 rounded-full"
        style="margin-left: -10px;"
      />
      <div class="pl-16 my-10">
        <p class="text-xl font-light">2019 - present</p>
        <h1 class="text-3xl font-semibold">ITIS P. Paleocapa - Bergamo</h1>
        <h2 class="text-2xl font-normal">Computer expert</h2>
        <p class="text font-normal">
          Id ex qui excepteur enim. Incididunt eu reprehenderit ipsum ex
          consectetur id. Ut id et fugiat reprehenderit exercitation irure qui
          ea do culpa eu. Voluptate est enim deserunt aute pariatur.
        </p>
      </div>
    </div>
  </div>

  <!--experience-->

  <div class="mx-32 mt-32">
    <h1 class="text-indigo-600 font-semibold text-4xl">Experience</h1>
    <div class="border-l-4 border-indigo-500">
      <div
        class="h-4 w-4 mt-10 bg-indigo-500 rounded-full"
        style="margin-left: -10px;"
      />
      <div class="pl-16 my-10">
        <p class="text-xl font-light">2019 - present</p>
        <h1 class="text-3xl font-semibold">ITIS P. Paleocapa - Bergamo</h1>
        <h2 class="text-2xl font-normal">Computer expert</h2>
        <p class="text font-normal">
          Id ex qui excepteur enim. Incididunt eu reprehenderit ipsum ex
          consectetur id. Ut id et fugiat reprehenderit exercitation irure qui
          ea do culpa eu. Voluptate est enim deserunt aute pariatur.
        </p>
      </div>
    </div>
  </div>

  <!--awards-->

  <div class="mx-32 mt-32">
    <h1 class="text-indigo-600 font-semibold text-4xl">Awards</h1>
    <div class="p-5 bg-gray-50 my-5 shadow-lg rounded-lg">
      <p>
        Eu Lorem ullamco duis ex ea in incididunt nisi ut enim adipisicing
        aliqua. Labore irure ex veniam dolore eiusmod occaecat labore labore
        reprehenderit consequat sunt id laboris aute. Deserunt minim
        exercitation enim nulla pariatur commodo occaecat sint mollit mollit
        consectetur magna velit ullamco.
      </p>
    </div>
    <div class="p-5 bg-gray-50 my-5 shadow rounded-lg">
      <p>
        Eu Lorem ullamco duis ex ea in incididunt nisi ut enim adipisicing
        aliqua. Labore irure ex veniam dolore eiusmod occaecat labore labore
        reprehenderit consequat sunt id laboris aute. Deserunt minim
        exercitation enim nulla pariatur commodo occaecat sint mollit mollit
        consectetur magna velit ullamco.
      </p>
    </div>

    <div class="p-5 bg-gray-50 my-5 shadow rounded-lg">
      <p>
        Eu Lorem ullamco duis ex ea in incididunt nisi ut enim adipisicing
        aliqua. Labore irure ex veniam dolore eiusmod occaecat labore labore
        reprehenderit consequat sunt id laboris aute. Deserunt minim
        exercitation enim nulla pariatur commodo occaecat sint mollit mollit
        consectetur magna velit ullamco.
      </p>
    </div>

    <div class="p-5 bg-gray-50 my-5 shadow rounded-lg">
      <p>
        Eu Lorem ullamco duis ex ea in incididunt nisi ut enim adipisicing
        aliqua. Labore irure ex veniam dolore eiusmod occaecat labore labore
        reprehenderit consequat sunt id laboris aute. Deserunt minim
        exercitation enim nulla pariatur commodo occaecat sint mollit mollit
        consectetur magna velit ullamco.
      </p>
    </div>
  </div>
</section>

<!--current projects-->
<section>
  <div class="mt-32 mx-32 flex justify-center">
    <div class="grid md:grid-cols-3 gap-32 place-content-center">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={project1} alt="Yunime" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#photography</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#travel</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#winter</span
          >
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={project1} alt="Yunime" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#photography</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#travel</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#winter</span
          >
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={project1} alt="Yunime" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#photography</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#travel</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#winter</span
          >
        </div>
      </div>
    </div>
  </div>
</section>

<!--social section-->
<section>
  <div class="container mt-32" />
</section>
