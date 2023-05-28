<template>
<v-row>
  <v-col v-if="pagination" :cols="mdAndUp ? 6 : 12" :class="{'pb-0': !mdAndUp}">
    <v-pagination
      :length="pagination.maxPage as number"
      v-model="pagination.page"
      :disabled="pagination.maxPage === 0"
      density="compact"
      @update:modelValue="() => emit('update:pagination')"
    ></v-pagination>
  </v-col>
  <v-col :cols="mdAndUp ? 6 : 12">
    <CustomInput v-model="searchValue" placeholder="Search..."/>
  </v-col>
</v-row>
</template>
<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import CustomInput from "@/components/basic/CustomInput.vue";
import {computed, ref} from "vue";
import {Pagination} from "@/models/pagination/Pagination";
import {useDisplay} from "vuetify";
const {mdAndUp} = useDisplay()
const emit = defineEmits(['update:pagination','update:search'])
defineProps({
  pagination: {
    type: Object as PropType<Pagination>,
    required: false,
  },
  search: {
    type: String,
    default: false,
  },
})
const search = ref<string>('')
const searchValue = computed<string>({
  get: () => search.value,
  set: (value) => {
    search.value = value as string;
    emit('update:search', value);
  }
})
</script>
<style scoped>

</style>
