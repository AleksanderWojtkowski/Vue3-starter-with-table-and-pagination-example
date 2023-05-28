<template>
  <v-row>
    <v-col>
      <h1 class="mb-4">My inbox</h1>
      <MessageList/>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import MessageList from "@/components/messages/MessageList.vue";
</script>
