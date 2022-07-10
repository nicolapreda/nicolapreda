<script context="module">
 const allPosts = import.meta.glob("./**/*.md");
 let body = [];
 for (let path in allPosts) {
  body.push(
   allPosts[path]().then( ({metadata}) => {
    return { path, metadata}
   })
  );  
 }
</script>

<script>
    import { base } from '$app/paths';
    export let posts;
</script>

<ul>
    {#each  posts as {path, metadata: {title}} }
        <li>
            <a href={`${base}/blog/${path.replace(".md","")}`}>{title}</a>
        </li>
    {/each}
</ul>
view raw
index.svelte hosted with ❤ by GitHub 