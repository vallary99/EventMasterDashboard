<template>
  <div class="host-events">
    <div class="row">
      <div class="col-6">
        <div class="event-name"><span>Event Name:</span> {{ name }}</div>

        <div class="event-date"><span>Date:</span> {{ date }}</div>

        <div class="event-time"><span>Time:</span> {{ time }}</div>
      </div>

      <div class="col-6">
        <div class="event-location"><span>Location:</span> {{ location }}</div>

        <div class="event-category"><span>Category:</span> {{ category }}</div>

        <div class="event-status"><span>Status:</span> {{ status }}</div>
      </div>
    </div>

    <div class="row event-description">
      <p><span>Description:</span></p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.host-events {
  box-shadow: 5px 5px #eeeeee;
  padding: 10px;
  height: 400px;
  width: 100%;
  margin-left: 10%;
}

.event-name,
.event-date,
.event-time,
.event-location,
.event-category,
.event-status,
.event-description {
  padding: 15px;
}

span {
  font-weight: 600;
  font-size: 15px;
}
</style>
