import { createSelector } from 'reselect';

export const getAuthState = (state) => state.auth || {};

export const isUserLoggedIn = createSelector(
    getAuthState,
    (auth) => auth.isLoggedIn,
);
