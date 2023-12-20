import { UserStatus } from "./UserStatus";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    nickName: string;
    status: UserStatus;
}