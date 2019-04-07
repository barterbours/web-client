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
            {
                'userEmail': 'lalalala@lala.la',
                'message': 'tfcusdwvdyuvdyibwbhbh',
                'variant': 'unread'
                // can be: starred unread or all
            },
            {
                'userEmail': 'lalalala@lala.la',
                'message': 'sdfghjvctfybjvsudgvsghdvghsdvhvsd',
                'variant': 'starred'
                // can be: starred unread or all
            },
        ]
    }

    cookies = new Cookies()


}
export const chatContainer = new ChatContainer()