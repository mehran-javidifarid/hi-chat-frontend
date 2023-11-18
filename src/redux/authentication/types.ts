export enum AuthenticationActionTypes {
    FETCH_LOGIN = '@@authentication/FETCH_LOGIN',
    SET_LOGIN = '@@authentication/SET_LOGIN',
    SET_ERROR = '@@authentication/SET_ERROR',
}

export interface ILogin {
    username: string
    password: string
}

export interface AuthenticationState {
    readonly access?: string
    readonly mobile?: string
    readonly birth_date?: string
    readonly national_id?: string
    readonly refresh?: string
    readonly loading: boolean
}
