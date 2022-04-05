import {TEMPLATE_ACTION_TYPE} from "../constants/actionTypes";

const initialState = 'Проверка доступа к стейт редаксу';

const template = (state = initialState, { type, payload }) => {
    switch (type) {
        case TEMPLATE_ACTION_TYPE:
            return payload;
        default:
            return state;
    }
}
export default template;