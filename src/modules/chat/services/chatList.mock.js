export function chatListMock() {
    return [
        {
            id: 1,
            username: 'Владилен минин',
            avatar: '/vladilen-photo.jpg',
            lastMessage: 'я: я тебе не верю',
            lastVisit: 'был 5 минут назад',
            messageList: [
                {
                    text: 'я хороший программист',
                    self: false
                },
                {
                    text: 'я тебе не верю',
                    self: true
                }
            ]
        },
        {
            id: 2,
            username: 'Илья Климов',
            avatar: '/ilya-photo.jpg',
            lastMessage: 'я: тоже так думаю',
            lastVisit: 'был 30 минут назад',
            messageList: [
                {
                    text: 'не слушай его, он врет',
                    self: false
                },
                {
                    text: 'тоже так думаю',
                    self: true
                }
            ]
        },
    ]
}
