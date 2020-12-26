<template>
  <h1>Events for You</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <router-link
      :to="{ name: 'EventList', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
    >
      Prev Page
    </router-link>
    <router-link
      :to="{ name: 'EventList', query: { page: page + 1 } }"
      rel="next"
    >
      Next Page
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import EventCard from '@/components/EventCard.vue'
import EventService from '@/server/EventService'

export default defineComponent({
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    watchEffect(() => {
      this.events = null
      EventService.getEvents(2, this.page)
        .then(response => {
          this.events = response.data
        })
        .catch(error => {
          console.log(error)
        })
    })
  }
})
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
