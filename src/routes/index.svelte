<script>
  import logo from "./pp.svg";
</script>

<div class="bg-gray-50 min-h-screen px-16 flex items-center justify-center">
  <div class="grid grid-cols-2">
    <div class="intro">
      <h3 class="font-light font-4xl">Hello, I'm Nicola Preda</h3>
      <h1 class="font-light">Developer & Designer</h1>
      <p class="font-light">
        I'm a web developer and designer based in Milan, Italy.
      </p>
    </div>

    <div class="relative w-full max-w-lg">
      <div
        class="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
      />
      <div
        class="absolute top-0 -right-4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
      />
      <div
        class="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
      />
      <div class="m-8 relative space-y-4">
        <!--profile pic-->
        <img src={logo} alt="profile" class="w-96 h-96" />
      </div>
    </div>
  </div>
</div>
