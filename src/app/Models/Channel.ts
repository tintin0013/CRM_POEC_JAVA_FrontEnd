import { ChannelStatus } from './ChannelStatus';

export interface Channel {
    id: number;
    name : string;
    creationDate : Date;
    status : ChannelStatus;
}