const initState = {
    statusBtnSave: {
        btnPosition: 0,
        btnAppearance: 0,
        btnText: 0
    },
    widgetPosition: {
        showTheCalendar: false,
        requireDelivery: false
    },
    widgetAppearance: {
        layout: "today",
        calendarLayout: "Calendar layout",
        calendarLanguage: "English",
        calendartFirstDay: "Monday",
        dateFormat: "10/05/22",
        storeName: "#000000",
        titleColor: "#b11b1b",
        textColorMessage: "#3d8e1a"
    },
    widgetTextDate: {
        title: "Select a delivery date",
        deliDateLabel: "Delivery Date",
        deliDateTitle: "Delivery Date",
        deliTimeTitle: "Delivery Date",
        requiredMessage: "Henry Nguyen"
    },
    widgetTextPickup: {
        title: "Store Pickup",
        deliDateLabel: "Choose the storage to pickup your product(s)",
        deliDateTitle: "Delivery Date",
        deliTimeTitle: "Pickup location",
        requiredMessage: "Please select pickup date before checkout"
    }
};


const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case "active/SavePos":
            return {
                ...state,
                statusBtnSave: {
                    ...state.statusBtnSave,
                    btnPosition: action.payload
                },
            }
        case "active/SaveAppear":
                return {
                    ...state,
                    statusBtnSave: {
                        ...state.statusBtnSave,
                        btnAppearance: action.payload
                    },
            }
        case "active/SaveText":
                    return {
                        ...state,
                        statusBtnSave: {
                            ...state.statusBtnSave,
                            btnText: action.payload
                        },
            }
        case "disable/SavePos":
            return {
                ...state,
                statusBtnSave: {
                    ...state.statusBtnSave,
                    btnPosition: action.payload
                }
            }
        case "disable/SaveApp":
            return {
                ...state,
                statusBtnSave: {
                    ...state.statusBtnSave,
                    btnAppearance: action.payload
                }
            }
        case "disable/SaveText":
            return {
                ...state,
                statusBtnSave: {
                    ...state.statusBtnSave,
                    btnText: 0
                }
            }
        case "handleSave/Pos":
            return {
                ...state,
                widgetPosition: {
                    ...state.widgetPosition,
                    showTheCalendar: action.payload.showTheCalendar,
                    requireDelivery: action.payload.requireDelivery
                }
            }
        case "handleSave/App":
            return {
                ...state,
                widgetAppearance: {
                    ...state.widgetAppearance,
                    // layout: action.payload.layout,
                    // calendarLayout: action.payload.calendarLayout,
                    // calendarLanguage: action.payload.calendarLanguage,
                    // calendartFirstDay: action.payload.calendartFirstDay,
                    // dateFormat: action.payload.dateFormat,
                    storeName: action.payload.storeName,
                    titleColor: action.payload.titleColor,
                    textColorMessage: action.payload.textColorMessage
                },
            }
        // case "handleSave/Text":
        //     return {
        //         ...state,
        //         widgetPosition: {
        //             ...state.widgetPosition,
        //             showTheCalendar: action.payload.showTheCalendar,
        //             requireDelivery: action.payload.requireDelivery
        //         }
        //     }
        default:
            return state
    }
}

export default rootReducer;