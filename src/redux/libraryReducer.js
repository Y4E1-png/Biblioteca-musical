
const initialState = [];

const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SONG':
            return [...state, action.payload];

        case "REMOVE_SONG":
            return state.filter((cancion) => cancion.id !== action.payload);

        default:
            return state;
    }
};

export default libraryReducer;