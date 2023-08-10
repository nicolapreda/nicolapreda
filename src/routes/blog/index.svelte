<script context="module">
 const allPosts = import.meta.glob("./*.md");
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
    import logo from "../assets/img/logo.svg";

</script>


<section class="mx-5 md:mx-32 lg:mx-64 my-16">
    <h1 class="text-6xl font-semibold">Blog</h1>

    <div class="mt-8 grid grid-cols-2 lg:gap-16 gap-4">
      {#each  posts as {path} }
              <a class="text-2xl font-semibold p-5 my-10 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition drop-shadow-md" href={`/blog/${path.replace(".md","")}`}>
                <!--{title}
                <div class="px-3 py-2 bg-indigo-200 text-md font-light">{ora}</div>
                <p class="text-lg font-normal">{excerpt}</p>-->
                sos
              </a>
      {/each}
        </div>
  
</section>
