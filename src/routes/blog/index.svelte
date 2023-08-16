<script context="module">
    export function preload() {
        return this.redirect("../404");
    }

  const allPosts = import.meta.glob("./posts/*.md");
  let body = [];
  for (let path in allPosts) {
    body.push(
      allPosts[path]().then(({ metadata }) => {
        return { path, metadata };
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
  };
</script>

<script>
  export let posts;
  import logo from "../assets/img/logo.svg";
</script>

<div class="content lg:mx-32 mx-5 mt-5">
    <h1
    class="text-justify text-primary text-7xl font-bricebold uppercase"
  >
    blog
  </h1>
  <span
    class="text-justify font-briceextralight text-2xl uppercase tracking-tight"
    >QUESTO E' IL MIO BLOG, OGNI TANTO SCRIVO QUALCOSA.
  </span>


  <div class="mt-10 text-primary">
    {#each posts as { path, metadata: { title, description } }}
      <div class="text-4xl  font-briceregular">
        {title}
        <p class="text-lg font-briceextralight text-black">
          {description}
        </p>
        <a href={`./${path.replace(".md", "")}`} class="text-xl">Leggi altro</a>
      </div>
    {/each}
  </div>
</div>
