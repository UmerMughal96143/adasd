

export const bookCovidTest = (data) => async (dispatch) => {
    try {
        
        dispatch({type : 'BOOK_COVID_TEST' , payload : data})

    } catch (error) {
        


    }
}


export const testlocation = (data) => async (dispatch) => {
    try {
        
        dispatch({type : 'TEST_LOCATION' , payload : data})

    } catch (error) {
        


    }
}


export const addressesAppointment = (data) => async (dispatch) => {
console.log("🚀 ~ file: form.js ~ line 30 ~ addressesAppointment ~ data", data)
    try {
        
        dispatch({type : 'ADDRESS_APPOINMENT' , payload : data})

    } catch (error) {
        


    }
}