import React from 'react';
import { Container } from 'unstated'
import Cookies from 'universal-cookie';

class ChatContainer extends Container {
    state = {
        all: [
            {
                'userEmail': 'lalalala@lala.la',
                'message': 'lalalalallalalalalalallalalalalallalalalalallalalalalallallalalalalalalalalallalalalalalalalalalalalalalallalalalalalalalalalallalala',
                'variant': 'starred'
                // can be: starred unread or all
            },
            {},
        ],
        unread: [{}],
        starred: [{}]
    }

    cookies = new Cookies()


}
export const chatContainer = new ChatContainer()