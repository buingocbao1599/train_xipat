export const activeSavePos = (data) => {
    return {
        type: 'active/SavePos',
        payload: data
    }
}

export const activeSaveApp = (data) => {
    return {
        type: 'active/SaveAppear',
        payload: data
    }
}

export const activeSaveText = (data) => {
    return {
        type: 'active/SaveText',
        payload: data
    }
}

export const disableSavePos = (data) => {
    return {
        type: "disable/SavePos",
        payload: data
    }
}

export const disableSaveApp = (data) => {
    return {
        type: "disable/SaveApp",
        payload: data
    }
}

export const disableSaveText = (data) => {
    return {
        type: "disable/SaveText",
        payload: data
    }
}

export const handlerSavePos = (data) => {
    return {
        type: "handleSave/Pos",
        payload: data
    }
}

export const handlerSaveApp = (data) => {
    return {
        type: "handleSave/App",
        payload: data
    }
}