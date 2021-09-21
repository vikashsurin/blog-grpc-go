<script>
  import { writable } from "svelte/store";
  import { createPost } from "../store.js";
  const post = writable({
    id: "",
    author: "",
    title: "",
    content: "",
  });

  function handleSubmit() {
    createPost($post);
    $post = {};
  }
</script>

<div>
  <h1>Add a Post</h1>

  <form on:submit|preventDefault={handleSubmit}>
    <input
      type="text"
      name="author"
      placeholder="author"
      bind:value={$post.author}
    />
    <input
      type="text"
      name="title"
      bind:value={$post.title}
      placeholder="title"
    />
    <input
      type="text"
      name="content"
      bind:value={$post.content}
      placeholder="content"
    />
    <button type="submit">submit</button>
  </form>
</div>
