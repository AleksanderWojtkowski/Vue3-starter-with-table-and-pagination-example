<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        max-width="720px"
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
                <CustomButton  @click="dialog = false">Close</CustomButton>
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
