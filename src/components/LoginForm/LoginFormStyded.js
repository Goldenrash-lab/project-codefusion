import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import backgroundImageImac from '../../images/Login/LoginFonIMac.jpg';
import backgroundImageTablet from '../../images/Login/LoginFonTablet.jpg';
import backgroundImageMobail from '../../images/Login/LoginGonMobile.jpg';

export const LoginDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (min-width: 1280px) {
    background-image: url(${backgroundImageImac});
  }
  @media only screen and (min-width: 768px) {
    background-image: url(${backgroundImageTablet});
  }

  @media only screen and (max-width: 767px) {
    background-image: url(${backgroundImageMobail});
  }
`;

export const LoginDivForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const LoginFormContainer = styled.form`
  display: flex;
  border-radius: 8px;

  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-right: 62px;
  padding-bottom: 80px;
  padding-left: 62px;
  z-index: 2;
  @media only screen and (min-width: 768px) {
    background: var(--Form-color, rgba(255, 255, 255, 0.1));

    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
  }
  @media only screen and (max-width: 767px) {
    padding-top: 97px;
    padding-right: 20px;
    padding-bottom: 98px;
    padding-left: 20px;
  }
`;

export const LoginDivButton = styled.div`
  display: flex;
  min-width: 300px;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 12px;
  @media only screen and (max-width: 767px) {
    min-width: 280px;
  }
`;

export const InputDiv = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

export const LoginFormDivGradient = styled.div`
  @media only screen and (max-width: 767px) {
    display: none;
  }

  width: 454px;
  border-radius: 454px;
  background: rgba(47, 21, 176, 0.73);
  max-width: 454px;
  height: 454px;
  overflow: hidden;
  position: absolute;
  z-index: 0;
  filter: blur(100px);
`;

export const LoginSpanLogo = styled.span`
  color: var(--white, #fbfbfb);

  font-size: 26.963px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const LoginInput = styled.input`
  @media only screen and (max-width: 767px) {
    padding: 8px 8px 8px 40px;
    min-width: 280px;
  }
  min-width: 409px;
  padding: 8px 8px 8px 54px;
  color: #fff;
  outline: transparent;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  position: relative;
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Eye = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const LoginNavLink = styled(NavLink)`
  width: 100%;
  padding-top: 13px;
  padding-bottom: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #4a56e2;
  background: #fcfcfc;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
export const LoginNavLinkSpan = styled.span`
  color: var(--text-button, #623f8b);
  text-align: center;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
`;

export const LoginDivLogo = styled.div`
  display: flex;

  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 52px;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding-top: 13px;
  padding-bottom: 13px;
  border-radius: 20px;
  background: var(
    --button-gradient,
    linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
  );
  cursor: pointer;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  color: var(--white, #fbfbfb);
  text-align: center;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border: none;
`;

export const LoginTextError = styled.p`
  font-size: 14px;
  display: block;
  height: 14px;
  color: #ff868d;
`;
