<template>
  <div class="quiz"></div>
</template>
<!-- <template>
  <div>
    <div v-for="question in questions" :key="question.id" class="question">
      <p class="question-text">{{ question.text }}</p>
      <div class="answers">
        <div v-for="answer in question.answers" :key="answer.id" class="answer">
          <p>{{ answer.text }}</p>
          <p class="answer-user">Answered by: {{ answer.user }}</p>
        </div>
      </div>
      <div v-if="!question.open">
        <button @click="toggleOpen(question.id)" class="toggle-btn">
          Show Answers
        </button>
      </div>
      <div v-else>
        <textarea v-model="newAnswer" placeholder="Your answer"></textarea>
        <button @click="addAnswer(question.id)" class="add-btn">
          Add Answer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";

export default {
  data() {
    return {
      questions: [
        {
          id: 1,
          text: "How can I buy tickets for the event?",
          open: false,
          answers: [
            {
              id: 1,
              text: "You can buy tickets directly from our website.",
              user: "John",
            },
            {
              id: 2,
              text: "Ticket sales will be available at the venue as well.",
              user: "Jane",
            },
          ],
        },
        {
          id: 2,
          text: "Is there parking available at the venue?",
          open: false,
          answers: [
            {
              id: 1,
              text: "Yes, there is ample parking available.",
              user: "Mark",
            },
          ],
        },
      ],
      newAnswer: "",
    };
  },
  methods: {
    toggleOpen(questionId) {
      const question = this.questions.find((q) => q.id === questionId);
      question.open = true;
    },
    addAnswer(questionId) {
      const question = this.questions.find((q) => q.id === questionId);
      const newAnswer = {
        id: question.answers.length + 1,
        text: this.newAnswer,
        user: "User123",
      };
      question.answers.push(newAnswer);
      this.newAnswer = "";
    },
  },
};
</script>

<style>
.question {
  margin-bottom: 20px;
}

.question-text {
  font-weight: bold;
  margin-bottom: 10px;
  background-color: #f1f1f1;
}

.answers {
  margin-top: 10px;
}

.answer {
  margin-bottom: 5px;
}

.answer-user {
  font-size: 12px;
  color: gray;
}

.toggle-btn,
.add-btn {
  margin-top: 10px;
}
</style> -->
