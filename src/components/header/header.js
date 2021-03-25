import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 15px;
   color: white;
`
const HeaderTitle = styled.h3`
   font-size: 30px;
`
const HeaderList = styled.ul`
   display: flex;
   list-style: none;
   li {
      margin-right: 30px;
      font-size: 18px;
      text-shadow: 2px 2px 2px black;
   }
`

const Header = () => {
   return(
      <HeaderWrapper>
         <HeaderTitle>
            <a href="#">Game of Thrones</a>
         </HeaderTitle>
         <HeaderList>
            <li>
               <a href="#">Characters</a>
            </li>
            <li>
               <a href="#">Houses</a>
            </li>
            <li>
               <a href="#">Book</a>
            </li>
         </HeaderList>
      </HeaderWrapper>
   )
}

export default Header