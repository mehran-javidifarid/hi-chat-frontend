import {Reducer} from 'redux'
import {configState, ConfigActionTypes} from './types'

export const initialState: configState = {
    language: "fa",
    theme: 'light',
    cardType: ""
}

const reducer: Reducer<configState> = (state = initialState, action) => {
    switch (action.type) {
        case ConfigActionTypes.SET_LANGUAGE: {
            return {...state, language: action.payload}
        }
        case ConfigActionTypes.SET_THEME: {
            return {...state, theme: action.payload.mode}
        }
        case ConfigActionTypes.SET_CARD_TYPE: {
            return {...state, cardType: action.payload}
        }
        default: {
            return state
        }
    }
}

export {reducer as configReducer}
