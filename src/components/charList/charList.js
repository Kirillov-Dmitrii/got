import React, {Component} from 'react'
import styled from 'styled-components'

const CharUl = styled.div`
   margin: 0 auto;
   width: 70%;
   list-style: none;
   background-color: #fff;
   border-radius: 10px;
   opacity: 0.8;
   li {
      padding: 10px 0;
      text-align: center;
      border-bottom: 1px solid #000;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      :last-child {
         border-bottom: none;
      }
      :hover {
         background-color: gray;
      }
   }
`

export default  class CharList extends Component {
   render() {
      return(
         <CharUl>
            <li>Jone Snow</li>
            <li>Brandon Stark</li>
            <li>Geremy</li>
         </CharUl>
      )
   }
}