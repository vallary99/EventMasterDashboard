<template>
  <div class="sidebar">
    <!-- Sidebar content -->
    <div class="logo">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>

    <hr />

    <nav>
      <ul>
        <li v-for="item in sidebarItems" :key="item.id">
          <router-link :to="item.path" :class="{ active: isActive(item.path) }">
            <i class="material-icons">{{ item.icon }}</i
            >{{ item.label }}
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="logout">
      <router-link to="/">
        <button @click="handleSignOut">
          <i class="material-icons">logout</i><span>LOGOUT</span>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const sidebarItems = [
  { id: 1, label: "Dashboard", path: "/dashboard", icon: "dashboard" },
  {
    id: 2,
    label: "Find Activity",
    path: "/find-activity",
    icon: "travel_explore",
  },
  {
    id: 3,
    label: "Create Event",
    path: "/create-event",
    icon: "edit_document",
  },
  {
    id: 4,
    label: "Host Events",
    path: "/host-events",
    icon: "gite",
  },
  {
    id: 5,
    label: "Profile",
    path: "/profile",
    icon: "manage_accounts",
  },
  {
    id: 6,
    label: "Settings",
    path: "/settings",
    icon: "settings",
  },
  {
    id: 7,
    label: "Q&A",
    path: "/q&a",
    icon: "quiz",
  },
];

const isActive = (path) => route.path === path;
</script>

<style scoped>
@import "~material-icons/iconfont/material-icons.css";

.sidebar {
  background-color: black;
  padding: 10px;
}

.logo {
  margin-right: 50px;
  margin-top: 10px;
}

img {
  width: 250px;
  height: 150px;
}

hr {
  color: white;
}

.material-icons {
  color: white;
}

nav ul {
  list-style-type: none;
}

li {
  margin-bottom: 5px;
  cursor: pointer;
  padding-top: 30px;
}

a {
  text-decoration: none;
  color: white;
  padding: 10px 100px 10px 10px;
}

.active {
  background-color: white;
  color: black;
}

a.active .material-icons {
  /* Add your active styles here */
  color: black;
}

.logout {
  margin-top: 100%;
  border: 1pt solid white;
  padding-left: 30%;
}

.main-content {
  padding: 20px;
}

button {
  background: none;
  border: none;
  color: white;
}
</style>
