import React from 'react';
import { Container } from 'unstated'
import Cookies from 'universal-cookie';

class OffersContainer extends Container {
    state = {
        hashtags: ['lalala', 'ebebebebe', 'sjhdvjhsvdjh', 'gdvjhsvh']
    }

    cookies = new Cookies()
}
export const offersContainer = new OffersContainer()