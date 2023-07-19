<template>
  <div class="profile row">
    <div class="col-lg-6 col-md-6 col-sm-12 dp">
      <div
        class="profile-picture"
        :style="{
          backgroundImage: `url(${profilePicture || defaultProfilePicture})`,
        }"
        @click="openProfilePictureUpload"
      >
        <input
          ref="profilePictureInput"
          type="file"
          accept="image/*"
          @change="handleProfilePictureUpload"
          class="profile-picture-input"
        />
        <i v-if="!profilePicture" class="material-icons upload-icon"
          >add_a_photo</i
        >
        <i v-else class="material-icons upload-icon">edit</i>
      </div>
    </div>

    <div class="col-lg-6 col-md-6 col-sm-12 details">
      <input
        type="text"
        class="username"
        placeholder="Username"
        v-model="username"
      />

      <div class="bio">
        <label for="bio">CREATE BIO</label>
        <textarea
          name="bio"
          id="bio"
          cols="53"
          rows="10"
          v-model="bio"
        ></textarea>
      </div>

      <div class="save">
        <button @click="handleSave">SAVE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profilePicture: null,
      username: "",
      bio: "",
      defaultProfilePicture: "path/to/default-profile-picture.jpg",
    };
  },
  methods: {
    openProfilePictureUpload() {
      this.$refs.profilePictureInput.click();
    },
    handleProfilePictureUpload(event) {
      const file = event.target.files[0];
      this.profilePicture = URL.createObjectURL(file);
    },
    handleSave() {
      // Process the uploaded profile picture, username, and bio
      console.log("Profile Picture:", this.profilePicture);
      console.log("Username:", this.username);
      console.log("Bio:", this.bio);
    },
  },
};
</script>

<style scoped>
.dp {
  margin-top: 5%;
  height: 300px;
  width: 300px;
}

.profile-picture {
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: 1pt solid gray;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  cursor: pointer;
}

.profile-picture-input {
  display: none;
}

.upload-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: #888;
  pointer-events: none;
}

.details {
  margin-left: 10%;
}

.username {
  margin-top: 20px;
  outline: none;
  border: 1pt solid gray;
  width: 550px;
}

textarea {
  margin-top: 5px;
  outline: none;
  border: 1pt solid gray;
}

.bio {
  margin-top: 30px;
}

label {
  font-weight: 600;
}

.profile {
  font-size: 15;
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
}
</style>
