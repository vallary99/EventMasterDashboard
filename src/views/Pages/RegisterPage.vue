<template>
  <div class="register">
    <img src="@/assets/logo.png" />

    <div class="form-group">
      <label for="email">E-mail</label>
      <input type="text" placeholder="email" v-model="email" />
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input type="text" placeholder="password" v-model="password" />
    </div>

    <button @click="register">Sign Up</button>

    <button @click="signInWithGoogle">Sign up with Google</button>

    <div class="row password">
      <div class="col-6 forgot">
        <router-link to="/forgot-password">Forgot Password?</router-link>
      </div>

      <div class="col-6 login">
        <router-link to="/">Login?</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully Registered!");
      console.log(data);
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>

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
  margin-top: 10px;
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
