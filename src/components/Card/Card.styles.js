import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%; // Bu değişiklik
  max-width: 320px; // Bu değişiklik
  height: 200px;
  margin: 20px auto;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  cursor: pointer;
  @media (max-width: 768px) {
    position: absolute;
    top: 0; // 250px'den 0'a çekildi.
    left: 50%;
    transform: translateX(-50%);
  }
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: transform 0.6s;
    border-radius: 10px;
  }

  .card-front {
    background: ${(props) =>
      props.focus
        ? "#64CCC5"
        : "#176B87"}; // Arka plan rengini belirleyen kod güncellendi.
    transform: rotateY(${(props) => (props.side === "front" ? "0" : "180")}deg);
  }

  .card-back {
    background: linear-gradient(135deg, #667eea, #764ba2);
    transform: rotateY(${(props) => (props.side === "front" ? "180" : "0")}deg);

    .card-logo-back {
      position: absolute;
      bottom: 10px;
      left: 10px;
      width: 40px;
      opacity: 0.5;
    }
  }

  .card-logo {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
  }

  .chip {
    position: absolute;
    top: 50px; /* 60px'den 50px'e çekildi. */
    left: 20px;
  }

  .chip-image {
    width: 55px;
  }

  .card-details {
    position: absolute;
    color: #fff;
    bottom: 30px;
    left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    font-family: "Courier New", Courier, monospace; // Ekledik
  }

  .card-number {
    font-size: 20px;
    letter-spacing: 2px;
    word-spacing: 8px;
    font-family: "Courier New", Courier, monospace; // Ekledik
  }

  .card-name {
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: "Courier New", Courier, monospace; // Ekledik
  }

  .card-expiry {
    font-size: 14px;
    letter-spacing: 1px;
    font-family: "Courier New", Courier, monospace; // Ekledik
  }

  .magnetic-stripe {
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    height: 25px;
    background: #000;
    border-radius: 0;
  }

  .cvv-section {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  .cvv-label {
    font-size: 12px;
    display: block;
  }

  .cvv-value {
    font-size: 16px;
    display: block;
    background-color: #fff;
    padding: 2px 10px;
    border-radius: 5px;
    font-family: "Courier New", Courier, monospace; // Ekledik
  }
`;
