import React, {Component} from 'react';
import styled from 'styled-components'


const CharDetails = styled.div`
   margin: 0 auto;
   padding: 20px;
   width: 500px;
   background-color: white;
   border-radius: 10px;
   opacity: 0.8;
   h3 {
      text-align: center;
   }
`
const DetailsList = styled.ul`
   list-style: none;
`

const DetailsListItem = styled.li`
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid #000;
   margin-bottom: 5px;
   font-size: 18px;
   font-weight: bold;
   :last-child {
      border-bottom: none;
      margin-bottom: 0;
   }
`

export default class CharInfo extends Component {
   render() {
      return(
         <CharDetails>
            <h3>Jone Snow</h3>
            <DetailsList>
               <DetailsListItem>
                  <span>Gender</span>
                  <span>male</span>
               </DetailsListItem>
               <DetailsListItem>
                  <span>Born</span>
                  <span>03.05.1996</span>
               </DetailsListItem>
               <DetailsListItem>
                  <span>Died</span>
                  <span>02.02.02220</span>
               </DetailsListItem>
               <DetailsListItem>
                  <span>Culture</span>
                  <span>Russian</span>
               </DetailsListItem>
            </DetailsList>
         </CharDetails>
      )
   }
}