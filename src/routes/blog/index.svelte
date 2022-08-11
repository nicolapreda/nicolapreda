<script context="module">
 const allPosts = import.meta.glob("./*.svx");
 let body = [];
 for (let path in allPosts) {
  body.push(
   allPosts[path]().then( ({metadata}) => {
    return { path, metadata}
   })
  );  
 }
 export const load = async () => {
  const posts = await Promise.all(body);
  return {
    props: {
        posts,
    },
  };
 }


</script>

<script>
    export let posts;
    import logo from "../assets/img/pp.svg";

</script>

<navbar>
    <nav
      class="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b  drop-shadow-md firefox:bg-opacity-30"
    >
      <div class="mx-5 md:mx-32 lg:mx-64">
        <div class="flex items-center justify-between h-16">
          <div class="navbar-brand flex">
            <a href="https://nicolapreda.me">
              <img src={logo} alt="logo" class="logo h-10 w-10 mr-5" />
            </a>
            <h1 class="m-auto text-xl">Blog</h1>
          </div>
          <div>
            
          </div>
          
          
        </div>
      </div>
    </nav>
</navbar>

<section class="mx-64 my-16">
    <h1 class="text-6xl font-semibold">Blog</h1>

    <ul class="mt-8">
      {#each  posts as {path, metadata: {title}} }
          <li class="p-5 my-10 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition">
              <a class="text-2xl" href={`/blog/${path.replace(".md","")}`}>{title}</a>
          </li>
      {/each}
  </ul>
  
</section>
