<script>
  import { authenticated } from "../authStore";
</script>

<a href="/">Home</a>
{#if $authenticated}
  <a href="/dashboard">Dashboard</a>
  <a href="/logout">Logout</a>
{:else}
  <a href="/login">Login</a>
{/if}
<a href="/about">About</a>
