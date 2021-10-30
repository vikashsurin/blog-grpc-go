<script context="module">
  import { fetchAllPostForUser, postlist } from "../stores/postStore";
  export async function load(ctx) {
    let userId = "silky";
    fetchAllPostForUser(userId);
    return {};
  }
</script>

<script>
  import { postListByUser } from "../stores/postStore";
</script>

<h1>Dashboard</h1>
{#if $postListByUser}
  {#each $postListByUser as post}
    <p>{post.title} <span>update</span> <span>delete</span></p>
  {/each}
{/if}
