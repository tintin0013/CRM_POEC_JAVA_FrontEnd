import { Channel } from "./Channel";
import { MessageStatus } from "./MessageStatus";
import { User } from "./User";

export interface Message {
    id: number;
    message: string;
    dateMessage: Date;
    user: User;
    channel: Channel;
    status: MessageStatus;
}
