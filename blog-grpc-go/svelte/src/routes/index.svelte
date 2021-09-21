<script>
    import CreatePost from "../components/createPost.svelte";
    import { postlist, fetchAllPost } from "../store";
    import Post from "../components/post.svelte";
    fetchAllPost();
</script>

<h1>Home</h1>
<CreatePost />
{#each $postlist as post}
    <Post {post} />
{/each}
