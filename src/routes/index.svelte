<script>
  import logo from "./pp.svg";
  import heading from "./heading.svg";
  import about from "./about-me2.jpg";
</script>

<section class="h-300">
  <div class="z-0 section_background-wrap absolute">
    <canvas
      style="--gradient-color-1:#CFD3FF;--gradient-color-2:#FAD755;--gradient-color-3:#7038ff;--gradient-color-4:#e2e2e2;"
      id="gradient-canvas"
      data-transition-in=""
      class="isLoaded w-full h-240"
    />
  </div>
  <div class="navbar py-5 w-full absolute z-20 mx-32">
    <div class="grid grid-cols-2 gap-4">
      <div class="navbar-brand ">
        <a href="index.html" class="flex items-center justify-start">
          <img src={logo} alt="logo" class="logo h-10 w-10 mr-5" />
          Nicola Preda
        </a>
      </div>
      <div class="flex items-center justify-end">
        <a
          href="about.html"
          class="ml-10 hover:border-b-4 hover:border-indigo-500">About</a
        >
        <a
          href="projects.html"
          class="ml-10 hover:border-b-4 hover:border-indigo-500">Contact Me</a
        >
        <a
          href="projects.html"
          class="ml-10 hover:border-b-4 hover:border-indigo-500">Blog</a
        >
        <a
          href="projects.html"
          class="ml-10 hover:border-b-4 hover:border-indigo-500">Projects</a
        >
      </div>
    </div>
  </div>

  <div class="grid md:grid-cols-2 w-full gap-16 absolute z-10 mx-auto px-32">
    <div class="mt-64">
      <p class=" text-2xl">Hello, I’m Nicola Preda</p>
      <h1
        class="text-gray-900 my-5 lg:text-8xl md:text-6xl sm:text-6xl font-extrabold"
      >
        Developer <br />& Designer
      </h1>
      <p class="text-lg sm:text-xl mb-5">
        Student, about to build a SaaS <br />for smart food storage
      </p>
      <a class="px-5 py-3 bg-blue-400 rounded-full shadow" href="helo"
        >About Me</a
      >
    </div>
    <div class="md:mt-32">
      <img src={heading} class="w-140" alt="pic" />
    </div>
  </div>
  <script>
    var gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  </script>
</section>

<!--hero section-->
<section>
  <div class="container mx-32">
    <div class="grid grid-cols-2 gap-16">
      <div>
        <!--about img-->
        <img src={about} alt="about" class="w-full h-auto" />
      </div>

      <div>
        <h2 class="text-3xl font-bold text-gray-900">about</h2>
        <p class=" text-gray-600 mt-5">
          Aliquip dolore velit quis cillum dolor anim veniam labore officia
          ullamco reprehenderit. Eiusmod minim sit aute laborum qui culpa nulla.
          Quis occaecat et dolore enim tempor eu. Ullamco ipsum ullamco
          voluptate est labore anim quis mollit proident elit. Do consequat quis
          eu tempor consequat sint labore mollit reprehenderit adipisicing
          consequat sit laboris. Sint Lorem excepteur proident anim sint nisi
          velit.
        </p>
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
        class="h-4 w-4 absolute mt-10 bg-indigo-500 rounded-full"
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
        class="h-4 w-4 absolute mt-10 bg-indigo-500 rounded-full"
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

  </div>
</section>

<style>
  .section_background-wrap {
    width: 100%;
    height: 760px;
    transform: skewY(-12deg);
    transform-origin: 0;
    top: 0;
  }
</style>
