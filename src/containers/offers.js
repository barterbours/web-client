import React from 'react';
import { Container } from 'unstated'
import Cookies from 'universal-cookie';

class OffersContainer extends Container {
    state = {
        hashtags: ['wiertarka', 'piwo', 'młotek', 'cukier']
    }

    cookies = new Cookies()
}
export const offersContainer = new OffersContainer()