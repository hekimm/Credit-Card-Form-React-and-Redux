export const UPDATE_CARD_DETAILS = "UPDATE_CARD_DETAILS";
export const TOGGLE_CARD_SIDE = "TOGGLE_CARD_SIDE";
export const SET_CARD_TYPE = "SET_CARD_TYPE";
export const SET_FOCUS = "SET_FOCUS"; // Yeni action type'ı eklendi

export const updateCardDetails = (details) => ({
  type: UPDATE_CARD_DETAILS,
  payload: details
});

export const toggleCardSide = (side) => ({
  type: TOGGLE_CARD_SIDE,
  payload: side
});

export const setCardType = (type) => ({
  type: SET_CARD_TYPE,
  payload: type
});

export const setFocus = (focus) => ({
  type: SET_FOCUS,
  payload: focus
});
