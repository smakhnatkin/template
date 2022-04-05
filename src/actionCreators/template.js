import { TEMPLATE_ACTION_TYPE } from '../constants/actionTypes';

export const templateActionCreator = payload => ({
    type: TEMPLATE_ACTION_TYPE,
    payload
});
