<script>
  import { createPost } from "../stores/postStore";

  let title = "",
    content = "";

  function handleSubmit() {
    createPost(title, content);
  }
</script>

<div>
  <h1>Add a Post</h1>

  <form on:submit|preventDefault={handleSubmit}>
    <input type="text" name="title" bind:value={title} placeholder="title" />
    <input
      type="text"
      name="content"
      bind:value={content}
      placeholder="content"
    />
    <button type="submit">submit</button>
  </form>
</div>
