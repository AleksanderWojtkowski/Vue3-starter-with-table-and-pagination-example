<template>
<v-row>
  <v-col :data-cy-id="MESSAGE_LIST">
    <CustomDataTable
      :columns="tableColumns"
      :items="messages">
      <template #top>
       <CustomTableTop
         :pagination="pagination"
         @update:pagination="getMessagesByPage"
         @update:search="searchMessagesBySearch"/>
      </template>
    </CustomDataTable>
  </v-col>
</v-row>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {CypressIds} from "@/constants/cypress/CypressIds";
import useMessageApi from "@/service/api/MessagesApi";
import {Message, MessageApiResponse, MessageDto, MessagesRequestConfig} from "@/models/messages/Message";
import CustomDataTable from "@/components/basic/CustomDataTable.vue";
import {DataTableColumn} from "@/models/components/DataTable";
import CustomTableTop from "@/components/basic/CustomTableTop.vue";
import {TABLE_LIMIT} from "@/constants/table/Table";
import {Pagination} from "@/models/pagination/Pagination";

const { getMessages, searchMessages } = useMessageApi();
const { MESSAGE_LIST } = CypressIds;

const messages = ref<MessageDto[]>([]);
const requestConfig  = ref<MessagesRequestConfig>(new MessagesRequestConfig());
const pagination = ref<Pagination>(new Pagination())
const tableColumns: DataTableColumn[] = [
  { label: 'Id', field: 'id', cssClass: 'text-disabled' },
  { label: 'Name', field: 'title', cssClass:'font-weight-bold' },
  { label: 'Date', field: 'date', align: 'center'},
  { label: 'Sender', field: 'email', cssClass:'text-secondary'},
  { label: 'Message', field: 'body', hideDetails: true },
];

onMounted(async () => {
  await getMessagesByPage();
});
const setRequestConfig = (): void => {
  requestConfig.value.skip = pagination.value.page * TABLE_LIMIT - TABLE_LIMIT;
}
const convertResponseToValue = (response: MessageApiResponse): void => {
  pagination.value.maxPage = response.total / requestConfig.value.limit
  messages.value = response.posts.map((post) => new Message(post));
}
const getMessagesByPage = async (): Promise<void> => {
  try {
    setRequestConfig();
    const response = await getMessages(requestConfig.value);
    convertResponseToValue(response);
  } catch (e) {
    console.error(e)
    alert('Error while fetching messages')
  }
}
const searchMessagesBySearch = async (search): Promise<void> => {
  if (!search) {
    return await getMessagesByPage();
  }
  try {
    setRequestConfig();
    const response = await searchMessages(search);
    convertResponseToValue(response);
    pagination.value.page = 1;
  } catch (e) {
    console.error(e)
    alert('Error while fetching messages')
  }
}
</script>
<style scoped>
</style>
