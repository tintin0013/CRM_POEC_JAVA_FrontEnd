import { MessageStatus } from "./MessageStatus";

export interface Message {
    id: number;
    message: string;
    dateMessage: Date;
    user: number;
    channel: number;
    status: MessageStatus;
}
