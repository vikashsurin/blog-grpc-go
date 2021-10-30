<!-- <script context="module">
  export async function get(req) {
    return {
      status: 302,
      headers: {
        location: "/",
      },
    };
  }
</script> -->
<script>
  import { logIn } from "../stores/authStore";

  let email = "",
    password = "";

  let error = false;
  const handleSubmit = async () => {
    const res = await logIn(email, password);

    if (!res) {
      error = true;
    } else {
      error = false;
    }
  };
</script>

<div>
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <ul>
      <li>
        <label for="email">Email</label>
        <input class="border-2" name="email" type="text" bind:value={email} />
      </li>
      <li>
        <label for="password">Password</label>
        <input
          class="border-2"
          name="password"
          type="password"
          bind:value={password}
        />
      </li>
    </ul>
    {#if error}
      <p>invalid credentials</p>
    {/if}
    <button class="bg-pink" type="submit">Login</button>
  </form>
  <p>or</p>
  <button>
    <a href="/signup">Signup</a>
  </button>
</div>
