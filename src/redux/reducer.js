const initState = {
    statusBtnSave: 0,
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
        case "active":
            return {
                ...state,
                statusBtnSave: 1
            }
        case "disable":
            return {
                ...state,
                statusBtnSave: 0
            }
        default:
            return state
    }
}

export default rootReducer;