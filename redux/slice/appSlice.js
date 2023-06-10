import { saveDataLocal } from '@/Utils/function'
import { KEY_STORE } from '@/common/constant'
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  modal: null,
  userInfo:null,
  token:null,
  language:{
    la:'en',
    messages:null
  }
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setModal: (state, action) => {
      if (action.payload === null && state.modal?.afterClose) {
        state.modal?.afterClose()
      }
      state.modal = action.payload
    },
    setUserInfo: (state, action) => {
      saveDataLocal(KEY_STORE.SET_USER,action.payload)
      state.userInfo = action.payload
    },
    setLanguage: (state, action) => {
      saveDataLocal(KEY_STORE.SET_LANGUAGE,action.payload)
      state.language = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
  }
})
export const {
  setLanguage,
  setToken,
  setUserInfo,
  setModal
} = appSlice.actions
export default appSlice.reducer
