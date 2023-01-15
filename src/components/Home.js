import React from "react";

import AppsIcon from '@material-ui/icons/Apps';
import AvatarIcon from '@material-ui/core/Avatar';

import Search from './Search';
import Styled from 'styled-components';

const HomeContainer = Styled.div`
   display: flex;
   flex-direction: column;
   height: 100vh;
`
const HeadContainer = Styled.div`
   display: flex;
   justify-content: space-between;
   padding: 20px 30px;
   align-items: center;

`
const Header = Styled.div`
    display: flex;
    align-items: center;

p{
    margin-right: 20px;
    font-size: 15px;
}
 .left-margin: {
    margin-left: 20px; 
 }
`
const BodyContainer = Styled.div`
       flex: 1;
       display: flex;
       margin-top: 10%; 
       flex-direction: column;
       img {
           object-fit: contain;
           height: 100px; 
    }
`


const Home = () => {
    
    return(
    <HomeContainer>
    <HeaderContainer>
    <Header>
        <p>About</p>
        <p>Store</p>
    </Header>

    <Header>
        <p>GMail</p>
        <p>Images</p>
        <AppsIcon/>
        <AvatarIcon/>
    </Header>
    </HeaderContainer>
<BodyContainer>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png" alt="google-logo" />

    <div> 
<Search/>
    </div>
    </BodyContainer>
    </HomeContainer>
    
    )
};

export default Home; 