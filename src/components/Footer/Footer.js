import React from "react";
import { useSelector } from "react-redux";
import { GOOGLE_API_KEY_FOR_PLACE } from "../../_consts/GOOGLE_API_KEY";
import {
  selectEmail,
  selectOriginAddress,
  selectPhoneNumber,
} from "../../redux/reducers/app/app.selectors";
import { FooterContainer } from "./footer.style";

const Footer = () => {
  const originAddress = useSelector(selectOriginAddress);
  const phone = useSelector(selectPhoneNumber);
  const email = useSelector(selectEmail);
  return (
    <FooterContainer>
      <div className="container">
        <h2>La Pouletterie chez César et Lisa</h2>
        <div className="element">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.google.fr/maps/place/La+Pouletterie/@41.9520984,8.7714648,17z/data=!3m1!4b1!4m5!3m4!1s0x12da6b6cb8129f97:0xb9a343f75565cc37!8m2!3d41.9520972!4d8.7736628`}
          >
            <span>{originAddress}</span>
          </a>
        </div>
        <div className="element">
          <a href={`tel: "${phone}"`}>{phone}</a>
        </div>
        <div className="element">
          <a href={`mailto: "${email}"`}>{email}</a>
        </div>
      </div>
      <div className="container">
        <iframe
          title="google maps"
          width="100%"
          height="100%"
          border="0"
          loading="lazy"
          allowfullscreen
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY_FOR_PLACE}&q=${originAddress}`}
        ></iframe>
      </div>
    </FooterContainer>
  );
};

export default Footer;
