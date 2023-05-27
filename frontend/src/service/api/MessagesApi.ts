import axios from "axios";
import {LOCAL_API_URL} from "@/constants/api/ApiUrl";
import {MessageApiResponse, MessageDto, MessagesRequestConfig} from "@/models/messages/Message";
export default function useMessageApi() {
    const getMessages = async (config: MessagesRequestConfig): Promise<MessageApiResponse> => {
      const requestString:string = `?limit=${config.limit}&skip=${config.skip}&select=${config.select}`;
      const response = await axios.get<MessageApiResponse>(`${LOCAL_API_URL}posts${requestString}`);
      return response.data;
    }
    const searchMessages = async (search: string): Promise<MessageApiResponse> => {
      const response = await axios.get<MessageApiResponse>(`${LOCAL_API_URL}posts/search?q=${search}`);
      return response.data;
    }
    return {
      getMessages,
      searchMessages
    }
}
