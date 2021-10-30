<script context="module">
  export const ssr = false;
</script>

<script>
  // export let postlist;
  import CreatePost from "../components/createPost.svelte";
  import { postlist, fetchAllPost } from "../stores/postStore";
  import Post from "../components/post.svelte";
  fetchAllPost();
</script>

<h1 class="text-center bg-gradient-to-r from-green-400 to-blue-500 ... p-10 ">
  Home
</h1>
<CreatePost />
{#each $postlist as post}
  <Post {post} />
{/each}
