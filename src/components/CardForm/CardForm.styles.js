import styled from "styled-components";
import backgroundImage from "../../assets/images/form-background.jpg";

export const CardFormContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 50px auto;
  @media (max-width: 768px) {
    margin-top: 250px; // kredi kartının yüksekliği + biraz ek boşluk
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1); // Yarı saydam siyah bir overlay
    border-radius: 5px; // Container'ın köşe yuvarlaklığına uyum sağlaması için
  }
  .pay-button {
    display: flex; /* Bu ekleniyor: İçerikleri yan yana almak için */
    align-items: center; /* Bu ekleniyor: İçeriklerin ortalanmasını sağlamak için */
    justify-content: center; /* Bu ekleniyor: İçeriklerin merkezlenmesini sağlamak için */
    background-color: #4caf50;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s; /* "all" olarak değiştirildi. Tüm geçişleri kapsaması için */
    font-weight: 600; /* Yazı kalınlığını artırmak için ekleniyor */
    letter-spacing: 0.5px; /* Karakter aralığı ekleniyor */

    &:hover {
      background-color: #45a049;
      transform: scale(
        1.05
      ); /* Butona hover olduğunda biraz büyümesini sağlamak için ekleniyor */
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15); /* Butona derinlik katmak için gölge ekleniyor */
    }
  }

  form {
    position: relative; // Overlay'in üstünde olması için
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 10px; // Spacing between form elements

    label {
      margin-bottom: 15px;
      font-size: 1.1rem; // Yazı büyüklüğünü arttırın
      color: #000; // Beyaz yazı renk

      input {
        background: rgba(255, 255, 255, 0.8); // Yarı saydam beyaz arka plan
        color: #333; // Yazı rengi
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Input etrafında gölge
        width: 100%;
        padding: 12px;
        border-radius: 4px;
        border: 1px solid #ccc;
        margin-top: 5px;
        transition: border-color 0.3s;
        &::placeholder {
          color: #aaa; // Bu değişiklik
          opacity: 1; // Bu değişiklik
        }

        &:focus::placeholder {
          color: transparent; // Bu değişiklik
        }

        &:hover {
          border-color: #888;
        }

        &:focus {
          border-color: #555;
          box-shadow: 0 0 0 2px rgba(88, 88, 88, 0.1);
        }
      }
    }
  }
`;
