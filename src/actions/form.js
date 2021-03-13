export const bookCovidTest = (data) => async (dispatch) => {
  try {
    dispatch({ type: "BOOK_COVID_TEST", payload: data });
  } catch (error) {}
};

export const testlocation = (data) => async (dispatch) => {
  try {
    dispatch({ type: "TEST_LOCATION", payload: data });
  } catch (error) {}
};

export const addressesAppointment = (data) => async (dispatch) => {
  console.log(
    "🚀 ~ file: form.js ~ line 30 ~ addressesAppointment ~ data",
    data
  );
  try {
    dispatch({ type: "ADDRESS_APPOINMENT", payload: data });
  } catch (error) {}
};

export const suggestions = (data) => async (dispatch) => {
  console.log(
    "🚀 ~ file: form.js ~ line 30 ~ addressesAppointment ~ data",
    data
  );
  try {
    dispatch({ type: "SUGGESTIONS", payload: data });
  } catch (error) {}
};

export const peopleBookingAction = (data) => async (dispatch) => {
console.log("🚀 ~ file: form.js ~ line 34 ~ peopleBookingAction ~ data", data)
  
  try {
    console.log('asdasd')
    dispatch({ type: "PEOPLE_BOOKING", payload: data });
    console.log('asssssssssssdasd')

  } catch (error) {}
};

export const removePersons = (data) => async (dispatch) => {
    
    try {
      dispatch({ type: "REMOVE_PERSON", payload: data });
  
    } catch (error) {}
  };
