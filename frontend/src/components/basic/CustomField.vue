<template>
  <v-row v-if="label">
    <v-col>
      <label class="body-1" v-if="label" :for="id">
        {{ label }} <span v-if="required" class="text-error">*</span>
      </label>
    </v-col>
  </v-row>
  <v-row v-if="$slots.default" no-gutters v-bind="$attrs">
    <v-col>
      <div :class="{'mt-1':label}">
        <slot/>
      </div>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
defineProps({
  label: {
    required: false,
    type: String,
  },
  id: {
    required: true,
    type: String,
  },
  required: {
    type: Boolean,
    default: false,
  },
});
</script>

