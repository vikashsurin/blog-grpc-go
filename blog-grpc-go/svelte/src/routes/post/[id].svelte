<script context="module">
    import { fetchPost } from "../../stores/postStore";
    export async function load(ctx) {
        let id = ctx.page.params.id;
        const post = await fetchPost(id);
        return { props: { post } };
    }
</script>

<script>
    export let post;
</script>

{#if post == null}
    <p>loading...</p>
{:else}
    <svelete:head>
        <title>Post - {post.title}</title>
    </svelete:head>

    <div>
        <h2>{post.title}</h2>
        <p>{post.firstName + " " + post.lastName}</p>
        <p>{post.content}</p>
    </div>
{/if}
