<template>
  <h1>Events for You</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventCard from "@/components/EventCard.vue"; // @ is an alias to /src

export default defineComponent({
  name: "EventList",
  components: {
    EventCard
  },
  data() {
    return {
      events: [
        {
          id: 1123,
          category: "x-wing",
          subcategory: "extended",
          title: "Store champinship",
          description:
            "New Store championship event, good time and great prizes... come and check by yourself!!!",
          location: "Your local store",
          date: "2021-01-15",
          time: "10:00",
          organizer: "Mr. Orginizer",
        },
        {
          id: 2123,
          category: "x-wing",
          subcategory: "hyperspace",
          title: "Store champinship",
          description:
            "New Store championship event, good time and great prizes... come and check by yourself!!!",
          location: "Your local store",
          date: "2021-02-15",
          time: "10:00",
          organizer: "Mr. Orginizer",
        },
      ]
    };
  },
});
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>