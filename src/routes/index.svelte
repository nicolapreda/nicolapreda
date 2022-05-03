<script>
  import logo from "./pp.svg";
  import heading from "./heading.svg";
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
  <div class="navbar py-5 mx-auto w-full absolute z-20">
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

  <div class="grid md:grid-cols-2 w-full gap-16 absolute z-10 mx-auto ">
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
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 gap-16">
      <div>
        <!--about img-->
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="about"
          class="w-full h-auto"
        />
      </div>

      <div>
        <h2 class="text-3xl font-bold text-gray-900">about</h2>

        <p class=" text-gray-600">
          I’m a full-stack developer and designer with a passion for creating
          beautiful and intuitive user experiences.
        </p>
      </div>
    </div>
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
