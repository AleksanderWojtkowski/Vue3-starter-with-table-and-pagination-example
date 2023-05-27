<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <CustomButton
            variant="text"
            v-bind="props"
          >
            {{label}}
          </CustomButton>
        </template>

        <v-card>
          <v-card-text>
            <v-row>
              <v-col>
                <slot/>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <CustomButton variant="text" color="error" @click="dialog = false">Close Dialog</CustomButton>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import CustomButton from "@/components/basic/CustomButton.vue";
defineProps({
  label: {
    type: String,
    required: true,
  },
})
const dialog = ref<boolean>(false)
</script>
<style scoped>

</style>
