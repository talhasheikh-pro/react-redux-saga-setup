const initialState = {
    // indicates whether the current user is logged in or not
    isLoggedIn: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
