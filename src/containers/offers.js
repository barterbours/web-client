import React from 'react';
import { Container } from 'unstated'
import Cookies from 'universal-cookie';

class OffersContainer extends Container {
    state = {
        qualities: ['111', '222'],
        possessions: ['245678', '3456789'],
        quality: '',
        possession: '',
    }

    cookies = new Cookies()

    async submit(variant) {
        if (variant === 'quality') {
            await this.state.qualities.push(this.state.quality)
            this.setState({ quality: '' })
        } else {
            await this.state.possessions.push(this.state.possession)
            this.setState({ possession: '' })
        }

    }


}
export const offersContainer = new OffersContainer()