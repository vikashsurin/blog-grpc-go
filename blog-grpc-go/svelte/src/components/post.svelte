<script>
  export let post;
</script>

<div>
  <a href={`/post/${post.id}`}>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
  </a>
</div>

<style>
  div {
    border: 1px solid black;
    margin-bottom: 10px;
  }
</style>
