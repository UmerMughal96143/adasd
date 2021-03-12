const iniitialState = {
  data: localStorage.getItem("form")
    ? JSON.parse(localStorage.getItem("form"))
    : [],
  loading: false,
  peoplesData: localStorage.getItem("peoples")
    ? JSON.parse(localStorage.getItem("peoples"))
    : [],
};

export const Form = (state = iniitialState, action) => {
  switch (action.type) {
    case "BOOK_COVID_TEST":
      let obj = {
        title: action.payload,
      };
      let arr = [];
      arr.push(obj);
      localStorage.setItem("form", JSON.stringify(arr));
      return {
        ...state,
        data: [...arr],
      };

    case "TEST_LOCATION":
      let tesLocation = {
        testLocation: action.payload,
      };
      localStorage.setItem(
        "form",
        JSON.stringify([...state.data, tesLocation])
      );
      return {
        ...state,
        data: [...state.data, tesLocation],
      };

    case "ADDRESS_APPOINMENT":
      let addressAppointment = {
        testLocation: action.payload,
      };
      localStorage.setItem(
        "form",
        JSON.stringify([...state.data, addressAppointment])
      );
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case "SUGGESTIONS":
      localStorage.setItem(
        "form",
        JSON.stringify([...state.data, action.payload])
      );
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "PEOPLE_BOOKING":
      localStorage.setItem(
        "peoples",
        JSON.stringify([...state.peoplesData, action.payload])
      );
      return {
        ...state,
        peoplesData: [...state.peoplesData, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};
