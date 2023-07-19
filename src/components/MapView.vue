<template>
  <div id="map"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import L from "leaflet";
import * as turf from "@turf/turf";
import "leaflet/dist/leaflet.css";

export default {
  name: "MapComponent",
  setup() {
    const map = ref(null);

    onMounted(async () => {
      map.value = L.map("map").setView([0, 0], 14);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "Map data &copy; OpenStreetMap contributors",
        maxZoom: 18,
      }).addTo(map.value);

      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            L.marker([latitude, longitude]).addTo(map.value);

            const point = turf.point([longitude, latitude]);
            const buffered = turf.buffer(point, 2, { units: "kilometers" });
            const [minLng, minLat, maxLng, maxLat] = turf.bbox(buffered);

            const bounds = L.latLngBounds([
              [minLat, minLng],
              [maxLat, maxLng],
            ]);

            map.value.fitBounds(bounds);
          },
          (error) => {
            console.error("Error getting current position:", error);
          }
        );
      }
    });

    return {
      map,
    };
  },
};
</script>

<style scoped>
#map {
  height: 500px;
  width: 970px !important;
  margin-top: 30px;
}
</style>
