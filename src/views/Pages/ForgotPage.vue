<template>
  <div class="register">
    <img src="@/assets/logo.png" />

    <div class="form-group">
      <label for="email">Email to Reset Password</label>
      <input type="text" placeholder="Email" />
    </div>

    <button>Reset Password</button>
  </div>
</template>

<style scoped>
.register {
  max-width: 300px;
  padding: 20px;
  box-shadow: 5px 5px 10px 10px #eeeeee;
  border-radius: 5px;
  font-size: 15px;
  margin-top: 5%;
  margin-left: 45%;
}

img {
  width: 200px;
  height: 100px;
  margin-left: 10%;
}

.form-group {
  padding: 10px;
  margin-top: 10%;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  outline: none;
}

button {
  display: block;
  margin-top: 20%;
  padding: 10px;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 200px;
  margin-left: 10%;
}

a {
  text-decoration: none;
}

.password {
  font-size: 13px;
  margin-top: 10px;
}

.forgot {
  padding-left: 20px;
}

.login {
  padding-left: 80px;
}
</style>
