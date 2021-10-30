<script context="module">
  import { getLoginState } from "../stores/authStore";
  getLoginState();
</script>

<script>
  import { authenticated } from "../stores/authStore";
  console.log($authenticated);
</script>

<a href="/">Home</a>
{#if $authenticated == ""}
  <span>loading....</span>
{:else if $authenticated}
  <a href="/dashboard">Dashboard</a>
  <a href="/logout">Logout</a>
{:else if $authenticated == false}
  <a href="/login">Login</a>
{/if}
<a href="/about">About</a>
