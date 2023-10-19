import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardContainer } from "./Card.styles";
import visaLogo from "../../../src/assets/images/visa-icon.png";
import mastercardLogo from "../../../src/assets/images/Mastercard-logo.svg.png";
import troyLogo from "../../../src/assets/images/Troy_logo.png";
import chipImage from "../../../src/assets/images/credit-card-chip.png";
import { useSpring, animated } from "react-spring";
import { toggleCardSide } from "../../redux/actions/cardActions";

function Card() {
  const dispatch = useDispatch(); // Bu satırı ekleyin

  const { details, type, side, focus } = useSelector((state) => state.card); // focus eklendi

  const logos = {
    visa: visaLogo,
    mastercard: mastercardLogo,
    troy: troyLogo
  };

  const displayCardNumber = (num) => {
    if (!num) return "12 **** ****** 3456";
    if (num.length <= 2) return num;

    const firstTwo = num.slice(0, 2);
    const obscured = "*".repeat(Math.min(num.length - 2, 10));
    const remainingClear = num.length > 12 ? num.slice(12) : "";

    return `${firstTwo} ${obscured} ${remainingClear}`;
  };

  const displayCVV = (cvv) => {
    if (!cvv) return "";
    return cvv.replace(/./g, "•");
  };
  const numberAnim = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    opacity: focus === "cardNumber" ? 1 : 0,
    transform: focus === "cardNumber" ? "translateY(0)" : "translateY(20px)",
    reset: true,
    delay: 100
  });

  const nameAnim = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    opacity: focus === "cardName" ? 1 : 0,
    transform: focus === "cardName" ? "translateY(0)" : "translateY(20px)",
    reset: true,
    delay: 200
  });

  const expiryAnim = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    opacity: focus === "expiryDate" ? 1 : 0,
    transform: focus === "expiryDate" ? "translateY(0)" : "translateY(20px)",
    reset: true,
    delay: 300
  });

  const handleCardClick = () => {
    // We will set the reverse based on which side the card is on.
    dispatch(toggleCardSide(side === "front" ? "back" : "front"));
  };

  return (
    <CardContainer
      type={type}
      side={side}
      focus={focus}
      onClick={handleCardClick}
    >
      <div className="card-front">
        {details.cardNumber && type && (
          <img src={logos[type]} alt={type} className="card-logo" />
        )}

        <div className="chip">
          <img src={chipImage} alt="Chip" className="chip-image" />
        </div>
        <div className="card-details">
          <animated.span
            style={focus === "cardNumber" ? numberAnim : {}}
            className="card-number"
          >
            {displayCardNumber(details.cardNumber)}
          </animated.span>

          <animated.span
            style={focus === "cardName" ? nameAnim : {}}
            className="card-name"
          >
            {details.cardName || "AD SOYAD"}
          </animated.span>
          <animated.span
            style={focus === "expiryDate" ? expiryAnim : {}}
            className="card-expiry"
          >
            {details.expiryDate || "MM/YY"}
          </animated.span>
        </div>
      </div>
      <div className="card-back">
        <div className="magnetic-stripe"></div>
        {details.cardNumber && type && (
          <img src={logos[type]} alt={type} className="card-logo-back" />
        )}

        <div className="cvv-section">
          <span className="cvv-label">CVV</span>
          <span className="cvv-value">{displayCVV(details.cvv) || "•••"}</span>
        </div>
      </div>
    </CardContainer>
  );
}

export default Card;
