import {
  UPDATE_CARD_DETAILS,
  TOGGLE_CARD_SIDE,
  SET_CARD_TYPE,
  SET_FOCUS // SET_ACTIVE_STATUS yerine bu kullanıldı
} from "../actions/cardActions";

const initialState = {
  details: {
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: ""
  },
  type: null,
  side: "front",
  focus: false,
  animationResetKey: 0
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CARD_DETAILS:
      const cardNumber = action.payload.cardNumber || state.details.cardNumber;
      let cardType = state.type;

      if (!cardNumber) {
        cardType = null;
      } else if (cardNumber.startsWith("4")) {
        cardType = "visa";
      } else if (cardNumber.startsWith("5")) {
        cardType = "mastercard";
      } else if (cardNumber.startsWith("9")) {
        cardType = "troy";
      }

      return {
        ...state,
        details: {
          ...state.details,
          ...action.payload
        },
        type: cardType
      };
    case TOGGLE_CARD_SIDE:
      return {
        ...state,
        side: action.payload
      };
    case SET_CARD_TYPE:
      return {
        ...state,
        type: action.payload
      };
    case SET_FOCUS:
      return {
        ...state,
        focus: action.payload
      };

    default:
      return state;
  }
};

export default cardReducer;
