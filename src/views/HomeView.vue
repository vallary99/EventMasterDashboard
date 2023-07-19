<template>
  <div class="content">
    <div class="row cards">
      <div class="cd col-3">
        <div class="row">
          <div class="col-4 icon i-green">
            <i class="material-icons">event_available</i>
          </div>
          <div class="col-7">
            <div class="title">TOTAL ATTENDED EVENTS</div>

            <div class="value">20</div>
          </div>
        </div>
      </div>

      <div class="cd col-3">
        <div class="row">
          <div class="col-4 icon i-blue">
            <i class="material-icons">upcoming</i>
          </div>
          <div class="col-7">
            <div class="title">UPCOMING EVENTS</div>

            <div class="value">10</div>
          </div>
        </div>
      </div>

      <div class="cd col-3">
        <div class="row">
          <div class="col-4 icon i-red">
            <i class="material-icons">free_cancellation</i>
          </div>
          <div class="col-7">
            <div class="title">CANCELLED EVENTS</div>

            <div class="value">5</div>
          </div>
        </div>
      </div>
    </div>

    <div class="row timer">
      <div class="col-4 bg">
        <img alt="Vue logo" src="../assets/timer.png" />
      </div>

      <div class="col-8 time">
        <div>TIME TILL NEXT EVENT</div>
        <div class="counter">{{ formattedTimer }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";

export default {
  name: "HomeView",

  setup() {
    const timer = ref(86400); // Timer set to 1 day (86400 seconds)
    let intervalId;

    const startTimer = () => {
      intervalId = setInterval(() => {
        if (timer.value > 0) {
          timer.value--;
        } else {
          stopTimer();
        }
      }, 1000);
    };

    const stopTimer = () => {
      clearInterval(intervalId);
    };

    onMounted(() => {
      startTimer();
    });

    const formattedTimer = computed(() => {
      const days = Math.floor(timer.value / 86400);
      const hours = Math.floor((timer.value % 86400) / 3600);
      const minutes = Math.floor(((timer.value % 86400) % 3600) / 60);

      return `${days}Days ${hours}Hours ${minutes}Mins`;
    });

    return {
      formattedTimer,
      stopTimer,
    };
  },
};
</script>

<style scoped>
.timer {
  /* border: 1pt solid gray; */
  height: 150px;
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
  width: 65%;
  box-shadow: 5px 5px #eeeeee;
  margin-top: 50px;
}

.cd {
  height: 150px;
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
  width: 30%;
  box-shadow: 5px 5px #eeeeee;
  margin-left: 20px;
}

img {
  width: 150px;
  height: 150px;
}

.time {
  margin-top: 10%;
}

.counter {
  font-size: 15px;
}
.icon {
  height: 80px;
  width: 80px;
  margin-top: 15%;
  margin-left: 5%;
}

.material-icons {
  color: white;
  margin-top: 45%;
  margin-left: 25%;
}

.i-blue {
  background-color: #0092ff;
}

.i-green {
  background-color: #4caf50;
}

.i-red {
  background-color: #f83712;
}

.title {
  font-size: 12px;
  margin-top: 40%;
  font-weight: 600;
}

.value {
  font-size: 12px;
  margin-top: 10%;
}
</style>
