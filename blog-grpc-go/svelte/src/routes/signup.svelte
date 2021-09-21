<script>
  import { createUsers } from "../userStrore";

  let user = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  };

  function handleSubmit() {
    if (user.password !== user.password2) {
      console.log("password not matches");
      return;
    }
    createUsers(user);
  }
</script>

<div>
  <form on:submit|preventDefault={handleSubmit}>
    <ul>
      <li>
        <label for="firstName">FirstName</label>
        <input name="firstName" type="text" bind:value={user.firstName} />
      </li>
      <li>
        <label for="lastName">LastName</label>
        <input name="lastname" type="text" bind:value={user.lastName} />
      </li>
      <li>
        <label for="email">Email</label>
        <input name="email" type="text" bind:value={user.email} />
      </li>
      <li>
        <label for="password">Password</label>
        <input name="password" type="password" bind:value={user.password} />
      </li>
      <li>
        <label for="confirmPassword">ConfirmPassword</label>
        <input
          name="confirmPassword"
          type="password"
          bind:value={user.password2}
        />
      </li>
    </ul>
    <button type="submit">Signup</button>
  </form>
</div>
