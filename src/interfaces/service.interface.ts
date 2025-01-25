export interface UserContent {
    email?: string,
    name?: string,
    role: string
}

export interface UserPayload {
    email?: string,
    name?: string,
    role: string
}

export interface UserServiceResponse {
    data: UserContent
}

export interface AllUsersResponse {
    data: UserContent
}