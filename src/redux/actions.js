export const activeSave = (data) => {
    return {
        type: 'active',
        payload: data
    }
}

export const disableSave = (data) => {
    return {
        type: "disable",
        payload: data
    }
}