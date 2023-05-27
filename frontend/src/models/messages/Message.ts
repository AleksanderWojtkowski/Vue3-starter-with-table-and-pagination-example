import {dateAndHours} from "@/utils/DateUtils";
import {TABLE_LIMIT} from "@/constants/table/Table";

export class MessageDto {
  id!: number;
  title!: string;
  body!: string;
}
export class Message extends MessageDto {
  constructor(dto: MessageDto) {
    super();
    Object.assign(this, dto);
  }
  email: string = "support@clickmeeting.com";
  get date(): string {
    return dateAndHours(new Date().toISOString());
  }
}
export class MessagesRequestConfig {
  limit: number = TABLE_LIMIT;
  skip: number = 0;
  select: string = "id,title,body";
}
export interface MessageApiResponse {
  limit: number;
  skip: number;
  total: number;
  posts: MessageDto[];
}
