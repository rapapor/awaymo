import React from 'react';
import Header from './components/header'
import styled from 'styled-components';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './App.css';
import { StickyFooter } from './elementsStyle/stickyFooter';
import FooterContainer from './components/footer';
import MobileMenuList from './components/mobileMenu';
import DesktopMenu from './components/desktopMenu';


const GlobalStyles = createGlobalStyle`
  body {
    @import url('./styleSettingsGlobal/fonts/MYRIADPRO-REGULAR.OTF');
    font-family: 'Myriad-pro', sans-serif;
  }
`

const theme = {
  font: 'Myriad-pro',
}

const ContentWrapper = styled.div`
  background: #ee5f63;
  height: 100vh;
  padding: 0px 10px;
  color: #fff;
  min-height: 800px;
  @media screen and (min-width: 768px){
    min-height: 400px;
  }
`
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ismobile: window.innerWidth < 768,
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 768 });
  };

  render() {
    let mobile = window.innerWidth < 768
    return (
      <ThemeProvider theme={theme}>
      <ContentWrapper>
        <GlobalStyles />
        <StickyFooter>
          <Header />
          { mobile ? <MobileMenuList /> : <DesktopMenu/>}
        </StickyFooter>
        <FooterContainer />
      </ContentWrapper>
    </ThemeProvider>
    )
  }
}

export default App;
