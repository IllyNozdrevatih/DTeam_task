import {chatListMock} from "@/modules/chat/services/chatList.mock";

export const chatModule = {
    namespaced: true,
    state: {
        chatList: []
    },
    mutations: {
        SET_CHAT_LIST(state, payload){
            state.chatList = payload
        },
        PUSH_MESSAGE(state, {id, text, self}){
            const chatItemIndex = state.chatList.findIndex(chatItem => chatItem.id === id)
            const updatedChatItem = state.chatList[chatItemIndex]
            updatedChatItem.messageList.push({id, text, self})
            const lastMessage = self === true ? `я: ${text}` : text
            updatedChatItem.lastMessage = lastMessage
        }
    },
    actions: {
        getChatList({commit}){
            const loadedChatList = chatListMock()
            commit('SET_CHAT_LIST', loadedChatList)
        }
    }
}
