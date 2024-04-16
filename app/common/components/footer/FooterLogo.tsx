import "./footerLogo.scss";
import Image from "next/image";
import letterM from "../../assets/images/footer/logoVector/letterM.svg";
import letterA from "../../assets/images/footer/logoVector/letterA.svg";
import letterU from "../../assets/images/footer/logoVector/letterU.svg";
import letterT from "../../assets/images/footer/logoVector/letterT.svg";
import letterH from "../../assets/images/footer/logoVector/letterH.svg";

export const FooterLogo: React.FC = () => {
  const letters = [letterM, letterA, letterM, letterU, letterT, letterH];

  return (
    <div className="footer-logo-container">
      {letters.map((letter, index) => {
        return (
          <div key={index} className="footer-logo-letter-container">
            <Image src={letter} className="footer-logo-letter" alt="Letter" />
          </div>
        );
      })}
    </div>
  );
};
