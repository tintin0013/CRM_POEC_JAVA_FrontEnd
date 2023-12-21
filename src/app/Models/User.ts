import { UserStatus } from "./UserStatus";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    nickname: string;
    status: UserStatus;
}