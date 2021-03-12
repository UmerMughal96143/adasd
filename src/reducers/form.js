const iniitialState = {
  data: [],
  loading: false,
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
        data: [...state.data, tesLocation],
      };

      case 'ADDRESS_APPOINMENT' : 
      let addressAppointment = {
        testLocation: action.payload,
      };
      // localStorage.setItem(
      //   "form",
      //   JSON.stringify([...state.data, tesLocation])
      // );
      return{
        data : [...state.data , action.payload]
      }
    default:
      return {
        ...state,
      };
  }
};
