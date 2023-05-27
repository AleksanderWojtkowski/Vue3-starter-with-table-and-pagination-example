<template>
  <v-row>
    <v-col>
      <slot name="top"/>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" class="overflow-auto">
      <table>
        <thead>
        <tr>
          <th v-for="column in columns" :key="column.field">{{ column.label }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in items" :key="item.id">
          <td v-for="column in columns" :key="column.field">
            <CustomModal v-if="column.hideDetails" label="👀">
              <p>{{item[column.field]}}</p>
            </CustomModal>
            <p v-else class="row-text">{{item[column.field]}}</p>
          </td>
        </tr>
        </tbody>
      </table>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import {DataTableColumn} from "@/models/components/DataTable";
import CustomModal from "@/components/basic/CustomModal.vue";
defineProps({
  columns: {
    type: Array as PropType<DataTableColumn[]>,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
})
</script>
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}
.row-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

