import React from "react";
import styled from 'styled-components';
import Header from '../../header/header';
import headerImage from '../../../media/header.png'
import {db} from '../../fireStore/fireStore';
import { collection, addDoc } from "firebase/firestore";
import SideCard from "../../sideCard/sideCard";
import MapSideCard from "../../mapSideCard/mapSideCard";
import oakvilleWestMap from "../../../media/Oakville-West-Map.png"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10vh;
  margin: 0 auto;
  max-width: 1600px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 2vh;
  }
`;

const Column = styled.div`
  flex: 3;
  padding-right: "7vw"; 
  fontSize: "14pt";
  paddingLeft: "3vw";
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding-left: 10vw;
    padding-right: 10vw;
    width: 100%;
    order: 1;

  }

  & > img {
    box-shadow: 1px 2px 9px gray;
    width: 70%;
    padding-left: 0;
    border-radius: 5px;
    border: 0.4em solid white;
    
    
    @media (max-width: 768px) {   
      width: 100%;

  }
  }

    & > img {
    box-shadow: 1px 2px 9px gray;
    width: 70%;
    padding-left: 0;
    border-radius: 5px;
    
    
    @media (max-width: 768px) {
      width: 100%;

  }
  }
`;

const RightColumn = styled(Column)`
  flex: 1;
  padding-left: 2vw;
  padding-right: 2vw;
  @media (max-width: 768px) {
    width: 100%;
    order: 2;
    padding-left: 3vw;
    padding-right: 7vw;
    }

  & > iframe {
    width: 450px;
    height: 100%;
    margin: 0px 0px;
    margin-top: 15vh;
    frame-border: 0px;
    margin-height: 0px;
    margin-width: 0px;
    border: 0px solid white;
    
    @media (max-width: 768px) {
      width: 100%;
      margin: 0px 0px;
      padding: 0px 0px;
      height: 150vh;
    
    }

  }
  
`;
const FormCard = styled.div`
  background-color: white;
  border-radius: 5px;
  
  box-shadow: 1px 2px 9px gray;
  width: 70%;
  margin-bottom: 10vh;
  
  @media (max-width: 768px) {
    width: 100%;
  }
 & > form {
  padding: 1.2em 1.4em;
 }
  & > form > input {
    border-radius: 5px;
    width: 80%;
    height: 4vh;
    margin: 2vh 1vw;
    font-size: 1.6em;
    padding: 1vh 1vw;
  }
  & > form > label {

    width: 60%;
    height: 10vh;
    margin: 2vh 1vw;
  }
  & > form > button{

    width: 60%;
    height: 5vh;
    margin: 2vh 1vw;
    margin-bottom: 5vh;
    background-color: #152e52;
    color: white;
    border: 3px solid #152e52;
    font-size: 14pt;
  }
  & > div {
    width: 100%;
    border-radius: 5px;
    padding-bottom: 4vh;
    margin: 0px 0px;
    margin-bottom: 2vh;

    & > h1{
    color: white;
    padding: 0vh 3vw;
    padding-top: 5vh;
      @media (max-width: 768px) {
      padding: 5vh 8vw;
      padding-bottom: 2vh;
      font-size: 18pt;
      }
    }
    & > p {
      color: white;
      padding: 0vh 3vw;
      font-size: 14pt;

      @media (max-width: 768px) {
        margin: 0vh 4vw;
        margin-bottom: 2vh;
        font-size: 10pt;
    }
    
    }
  }
`;

const BecomeAMember = (menu_state) => {
    const [formData, setFormData] = React.useState(
      {
        name: "",
        email: "",
        phone: "",
        postal: ""
      }
    )

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      window.location.href = ("https://donate.conservative.ca/membership/")
      const docRef = await addDoc(collection(db, "Members"), formData);
    };
    return (
        <div>
            <Header image={headerImage}
                isMenuOpen={menu_state} />
                <Container>
                  <Column style={{paddingRight: "7vw", fontSize: "14pt", paddingLeft: "3vw"}}>
                    <FormCard>
                      <div style = {{backgroundColor: "#152e52"}}>
                    <h1>Become a Member</h1>
                    <p>It starts with your Membership and vote for Kerry.</p>
                    <p><i>To be able to vote, you must have a valid Conservative Party of Canada Membership. Please note this is <u>not</u> the same as a provincial party membership.</i></p>
                    </div>
                      <form onSubmit={handleSubmit}>
                      <label>Name *</label><br />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      /><br /><br />
                      <label>Email *</label><br />
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      /><br /><br />
                      <label>Phone</label><br />
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
  
                      /><br /><br />
                      <label>Postal Code *</label><br />
                      <input
                        type="text"
                        id="postal"
                        name="postal"
                        value={formData.postal}
                        onChange={handleChange} style = {{width: "5rem"}}
                        required
                      /><br />
                      <button>Submit</button>
                      </form>
                    </FormCard>
                  </Column>
                  <RightColumn>
                  <MapSideCard map = {oakvilleWestMap} title = {"*New* Oakville West"} subtitle = "Riding Boundaries"/>
                  
                    </RightColumn>
                </Container>
        </div>
    );
};


export default BecomeAMember;

