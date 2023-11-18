import { action } from 'typesafe-actions'
import { ConfigActionTypes ,ITheme } from './types'

export const setLanguageAction = (language?: "fa" | "en") => action(ConfigActionTypes.SET_LANGUAGE, language)

export const setAppTheme = (theme:ITheme) => action(ConfigActionTypes.SET_THEME,theme)

export const setCardType = (type: string) => action(ConfigActionTypes.SET_CARD_TYPE, type)
