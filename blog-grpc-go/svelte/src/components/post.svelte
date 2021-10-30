<script>
  export let post;
</script>

<div class="flex justify-center">
  <div class="p-10 m-2 border-2 w-1/2 filter drop-shadow-xl">
    <a href={`/post/${post.id}`}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>author {post.firstName + post.lastName}</small>
    </a>
  </div>
</div>
