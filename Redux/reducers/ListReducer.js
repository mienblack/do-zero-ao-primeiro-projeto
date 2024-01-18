
module.exports = function listReducer(state = ["item 0"], action) {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.payload]

        default:
            return state;
    }
}