import React from 'react';
import { Container } from 'unstated'
import Cookies from 'universal-cookie';

class OffersContainer extends Container {
    state = {
        qualities: ['111', '222'],
        possessions: ['245678', '3456789']
    }

    cookies = new Cookies()
}
export const offersContainer = new OffersContainer()