<template>
  <div class="create-event">
    <form @submit.prevent="saveEvent">
      <div class="event-name">
        <!-- <label for="eventName">Event Name:</label> -->
        <input
          type="text"
          id="eventName"
          v-model="eventName"
          placeholder="Event Name"
          required
        />
      </div>

      <div class="row">
        <div class="col-lg-6">
          <div class="event-date">
            <!-- <label for="eventDate">Event Date:</label> -->
            <input type="date" id="eventDate" v-model="eventDate" required />
          </div>

          <div class="event-time">
            <!-- <label for="eventTime">Event Time:</label> -->
            <input type="time" id="eventTime" v-model="eventTime" required />
          </div>
        </div>

        <div class="col-lg-6">
          <div class="event-location">
            <!-- <label for="eventLocation">Event Location:</label> -->
            <input
              placeholder="Event Location"
              type="text"
              id="eventLocation"
              v-model="eventLocation"
              required
            />
          </div>

          <div class="event-category">
            <!-- <label for="eventCategory">Event Category:</label> -->
            <select id="eventCategory" v-model="eventCategory" required>
              <option value="">Select a category</option>
              <option value="Music">Music</option>
              <option value="Sports">Sports</option>
              <option value="Conference">Conference</option>
              <!-- Add more categories as needed -->
            </select>
          </div>
        </div>
      </div>

      <!-- <label for="eventDescription">Event Description:</label> -->
      <textarea
        placeholder="Add a description"
        rows="10"
        id="eventDescription"
        v-model="eventDescription"
        required
      ></textarea>

      <!-- <label for="eventImage">Event Image:</label> -->
      <div class="dp">
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

      <button type="submit">SAVE EVENT</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventName: "",
      eventDate: "",
      eventTime: "",
      eventLocation: "",
      eventDescription: "",
      eventCategory: "",
      profilePicture: null,
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
    saveEvent() {
      // Perform event data validation before saving
      if (!this.validateEventData()) {
        return;
      }

      // Perform saving logic or API request with the event data

      // Clear form fields after saving
      this.clearForm();
    },
    validateEventData() {
      // Perform validation checks for required fields and show error messages if needed
      if (
        !this.eventName ||
        !this.eventDate ||
        !this.eventTime ||
        !this.eventLocation ||
        !this.eventDescription ||
        !this.eventCategory
      ) {
        alert("Please fill in all required fields.");
        return false;
      }

      return true;
    },
    clearForm() {
      this.eventName = "";
      this.eventDate = "";
      this.eventTime = "";
      this.eventLocation = "";
      this.eventDescription = "";
      this.eventImage = null;
      this.eventCategory = "";
    },
  },
};
</script>

<style scoped>
.create-event {
  margin: 20px;
  font-size: 15px;
}

.event-name input {
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="file"],
textarea {
  width: 100%;
  margin-bottom: 10px;
  margin-top: 20px;
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
}

input {
  height: 40px;
  outline: none;
  width: 350px;
}

select {
  background: none;
}
.event-date input {
  width: 300px;
}
.event-time input {
  width: 300px;
}

input,
select {
  border: 1pt solid gray;
  outline: none;
  margin-top: 20px;
}

select {
  width: 350px;
  height: 40px;
}

.dp {
  margin-top: 5%;
  height: 300px;
  width: 300px;
}

.profile-picture {
  height: 300px;
  width: 720px;
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
</style>
