export enum ConfigActionTypes {
  SET_LANGUAGE = '@@config/SET_LANGUAGE',
  SET_THEME = '@@config/SET_THEME',
  SET_CARD_TYPE = '@@config/SET_CARD_TYPE'
}

export interface ITheme {
  mode: "light" | "dark"
}

export interface configState {
  readonly language: "fa" | "en"
  readonly theme: "light" | "dark"
  readonly cardType: string
}
