import React, {Component} from 'react';
import styled from 'styled-components'
import GotService from '../../service/gotService'
import Spiner from '../spiner/spiner'

const CharDetails = styled.div`
   margin: 0 auto;
   margin-top: 140px;
   margin-bottom: 20px;
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

export default class RandomCharater extends Component {
   constructor(props) {
      super(props)
      this.state = {
         char: {},
         loading: true
      }
      this.gotService = new GotService();
      this.updateChar = this.updateChar(this)
   }

   onCharLoaded = (char) => {
      this.setState({
         char,
         loading: false
      })
   }
   updateChar() {
      const id = Math.floor(Math.random()*140 + 25)
      this.gotService.getCharacter(id)
         .then(this.onCharLoaded)
   }

   render() {
      const {char: {name, gender, born, died, culture}, loading} = this.state
      if(loading) {
         return <Spiner/>
      }
      return(
         <CharDetails>
            <h3>Random Character: {name}</h3>
            <DetailsList>
               <DetailsListItem>
                  <span>Gender</span>
                  <span>{gender}</span>
               </DetailsListItem>
               <DetailsListItem>
                  <span>Born</span>
                  <span>{born}</span>
               </DetailsListItem>
               <DetailsListItem>
                  <span>Died</span>
                  <span>{died}</span>
               </DetailsListItem>
               <DetailsListItem>
                  <span>Culture</span>
                  <span>{culture}</span>
               </DetailsListItem>
            </DetailsList>
         </CharDetails>
      )
   }
}