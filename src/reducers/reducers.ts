export const m = {};

// import {
//     ChatState,
//     ChatActionTypes,
//     SEND_MESSAGE,
//     DELETE_MESSAGE
//   } from './types'

//   const initialState: ChatState = {
//     messages: []
//   }

//   export function chatReducer(
//     state = initialState,
//     action: ChatActionTypes
//   ): ChatState {
//     switch (action.type) {
//       case SEND_MESSAGE:
//         return {
//           messages: [...state.messages, action.payload]
//         }
//       case DELETE_MESSAGE:
//         return {
//           messages: state.messages.filter(
//             message => message.timestamp !== action.meta.timestamp
//           )
//         }
//       default:
//         return state
//     }
//   }

// import { SystemState, SystemActionTypes, UPDATE_SESSION } from './types'

// const initialState: SystemState = {
//   loggedIn: false,
//   session: '',
//   userName: ''
// }

// export function systemReducer(
//   state = initialState,
//   action: SystemActionTypes
// ): SystemState {
//   switch (action.type) {
//     case UPDATE_SESSION: {
//       return {
//         ...state,
//         ...action.payload
//       }
//     }
//     default:
//       return state
//   }
// }
