<template>
  <div class="login">
    <img src="@/assets/logo.png" />

    <div class="form-group">
      <label for="email">E-mail</label>
      <input type="text" placeholder="email" v-model="email" />
    </div>

    <p v-if="errMsg">{{ errMsg }}</p>

    <div class="form-group">
      <label for="password">Password</label>
      <input type="text" placeholder="password" v-model="password" />
    </div>

    <button @click="register">Login</button>

    <button @click="signInWithGoogle">Sign in with Google</button>

    <div class="row password">
      <div class="col-6 forgot">
        <router-link to="/forgot-password">Forgot Password?</router-link>
      </div>

      <div class="col-6 register">
        <router-link to="/register">Sign up?</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();

const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully Logged In!");
      console.log(data);
      router.push("/dashboard");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;

        case "auth/user-not-found":
          errMsg.value = "No aacount with that email was found";
          break;

        case "auth/wrong-password":
          errMsg.value = "Incorrect Password";
          break;

        default:
          errMsg.value = "Wrong Email or password";
      }
    });
};
</script>

<style scoped>
.login {
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

.register {
  padding-left: 80px;
}
</style>
