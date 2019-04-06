import React from 'react';
import { Container } from 'unstated'
import Cookies from 'universal-cookie';

class AuthenticationContainer extends Container {
    state = {
    }

    cookies = new Cookies()

    function() {

    }

}
export const authContainer = new AuthenticationContainer()