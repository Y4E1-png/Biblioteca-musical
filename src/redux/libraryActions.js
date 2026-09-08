
export const addSong = (cancion) => {
    return {
        type: 'ADD_SONG',
        payload: cancion
    };
};

export const removeSong = (cancionId) => {
    return {
        type: 'REMOVE_SONG',
        payload: cancionId
    };
}