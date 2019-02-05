import { SIGNED_IN } from '../constant';

let user = {
    email: null
};

const reducer = (state = user, action) => {
    switch (action.type) {
        case SIGNED_IN:
            const { email } = action;
            return {
                ...state,
                email
            };
        default:
            return state;
    }
}

export default reducer;