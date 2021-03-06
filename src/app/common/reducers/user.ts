import { ActionReducer, Action } from '@ngrx/store';
import { User } from 'angular-atomic-library';
export const userInitState: User = {
  id: 0,
  firstName: '',
  lastName: '',
  phone: ''
};

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const INIT_USER = 'INIT_USER';
export const UPDATE_ORDERID = 'UPDATE_ORDERID';
export const UPDATE_CARTID = 'UPDATE_CARTID';
export const UPDATE_UUID = 'UPDATE_UUID';
export const RESET_UUID = 'RESET_UUID';
export const UPDATE_BILLINGADDRESS = 'UPDATE_BILLINGADDRESS';
export const UPDATE_SHIPPINGADDRESS = 'UPDATE_SHIPPINGADDRESS';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export function userReducer(
  state: User = {},
  action: ActionWithPayload<any>
): User {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, action.payload);
    case UPDATE_USER:
      return Object.assign({}, state, action.payload);
    case DELETE_USER:
      return Object.assign({}, state, userInitState);
    case INIT_USER:
      return userInitState;
    case UPDATE_UUID:
      return Object.assign({}, state, action.payload);
    case RESET_UUID:
      return Object.assign({}, state, { UUID: '' });
    case UPDATE_CARTID:
      return Object.assign({}, state, { cartId: action.payload });
    case UPDATE_ORDERID:
      return Object.assign({}, state, { orderId: action.payload });
    default:
      return state;
  }
}
