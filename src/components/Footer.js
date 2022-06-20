import styled from 'styled-components'

const FooterWrap = styled.footer`
  height: calc(100vh - 880px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-top: 1px solid #eee;
`;

const Footer = () => {
  return (
    <>
      <FooterWrap>
        &copy; 2022 The New York Times Company by Kwak
      </FooterWrap>
    </>
  )
}

export default Footer;