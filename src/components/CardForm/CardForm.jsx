import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCardDetails,
  toggleCardSide,
  setCardType,
  setFocus
} from "../../redux/actions/cardActions";
import { CardFormContainer } from "./CardForm.styles";
import { FaCreditCard } from "react-icons/fa";

function CardForm() {
  const dispatch = useDispatch();
  const cardDetails = useSelector((state) => state.card.details);

  useEffect(() => {
    if (cardDetails.cardNumber.replace(/ /g, "").length === 0) {
      dispatch(setCardType(null));
    } else if (cardDetails.cardNumber.startsWith("4")) {
      dispatch(setCardType("visa"));
    } else if (cardDetails.cardNumber.startsWith("5")) {
      dispatch(setCardType("mastercard"));
    } else if (cardDetails.cardNumber.startsWith("9")) {
      dispatch(setCardType("troy"));
    } else {
      dispatch(setCardType(null));
    }
  }, [cardDetails.cardNumber, dispatch]);

  const handleCardFlip = () => {
    if (
      cardDetails.cardNumber.length === 16 &&
      cardDetails.cardName.length > 0 &&
      cardDetails.expiryDate.length === 5 &&
      cardDetails.cvv.length === 3
    ) {
      dispatch(toggleCardSide("back"));
    } else {
      dispatch(toggleCardSide("front"));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let finalValue = value;

    if (
      name === "expiryDate" &&
      value.length === 2 &&
      cardDetails.expiryDate.length !== 3
    ) {
      finalValue = value + "/";
    }

    dispatch(updateCardDetails({ [name]: finalValue }));

    if (name !== "cvv") {
      handleCardFlip();
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    if (name === "cvv") {
      dispatch(toggleCardSide("back"));
    } else {
      dispatch(toggleCardSide("front"));
    }
    dispatch(setFocus(name)); // Burada odaklanılan inputun ismini gönderiyoruz
  };

  const handleBlur = () => {
    dispatch(toggleCardSide("front")); // Kaldırıldı
    dispatch(setFocus(false));
  };

  return (
    <CardFormContainer>
      <form>
        <label>
          Kart Numarası:
          <input
            type="text"
            name="cardNumber"
            maxLength="16"
            value={cardDetails.cardNumber || ""}
            placeholder={cardDetails.cardNumber ? "" : "1234 5678 1234 5678"}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
        <label>
          Kart Sahibi:
          <input
            type="text"
            name="cardName"
            value={cardDetails.cardName || ""}
            placeholder={cardDetails.cardName ? "" : "AD SOYAD"}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
        <label>
          Son Kullanma Tarihi:
          <input
            type="text"
            name="expiryDate"
            maxLength="5"
            value={cardDetails.expiryDate || ""}
            placeholder={cardDetails.expiryDate ? "" : "MM/YY"}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
        <label>
          CVV:
          <input
            type="password"
            name="cvv"
            maxLength="3"
            value={cardDetails.cvv || ""}
            placeholder={cardDetails.cvv ? "" : "123"}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
        <button className="pay-button" type="button">
          <FaCreditCard size={20} style={{ marginRight: "8px" }} />
          Ödeme Yap
        </button>
      </form>
    </CardFormContainer>
  );
}

export default CardForm;
