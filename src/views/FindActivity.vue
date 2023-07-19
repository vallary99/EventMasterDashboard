<template>
  <div class="map">
    <div class="filter">
      <label for="filter">
        <i class="material-icons">filter_list</i>
        FILTER BY ACTIVITY:
      </label>
      <select id="filter" v-model="selectedFilter">
        <option value="">ALL</option>
        <option value="option1">BIKE RIDING</option>
        <option value="option2">HIKING</option>
        <option value="option3">MARATHON</option>
      </select>
    </div>
    <MapView />
  </div>
</template>

<script>
import MapView from "@/components/MapView.vue";
import { ref, computed } from "vue";

export default {
  name: "HomeView",
  components: {
    MapView,
  },

  setup() {
    const items = ref([
      { id: 1, name: "Item 1", filter: "option1" },
      { id: 2, name: "Item 2", filter: "option2" },
      { id: 3, name: "Item 3", filter: "option3" },
      // Add more items as needed
    ]);

    const selectedFilter = ref("");

    // Computed property for filtered items
    const filteredItems = computed(() => {
      if (!selectedFilter.value) {
        return items.value;
      } else {
        return items.value.filter(
          (item) => item.filter === selectedFilter.value
        );
      }
    });

    return {
      selectedFilter,
      filteredItems,
    };
  },
};
</script>

<style scoped>
.material-icons {
  vertical-align: middle;
  margin-right: 5px;
}

select {
  width: 120px;
  height: 30px;
  margin-left: 10px;
  border: none;
  background-color: #0092ff;
  color: white;
  outline: none;
}

option {
  background-color: white;
  color: black;
}
.filter {
  background-color: #0092ff;
  width: 285px;
  color: white;
  font-size: 12px;
}
</style>
