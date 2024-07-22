import React from "react";
import styled from 'styled-components';
import Header from '../../header/header';
import headerImage from '../../../media/header.png'
import { Form } from "react-router-dom";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  margin: 0 auto;
  max-width: 1600px;
  @media (max-width: 768px) {
    flex-direction: column;
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
    padding-left: 10vw;
    padding-right: 10vw;
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
  padding: 0.5em 1.5em;
  box-shadow: 1px 2px 9px gray;
  width: 70%;
  margin-bottom: 10vh;
  
  @media (max-width: 768px) {
    width: 80%;
  }

  & > form > input {
    border-radius: 5px;
    width: 90%;
    height: 10vh;
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
    width: 90%;
    
    margin: 2vh 1vw;
    padding-bottom: 2vh;
  }
`;

const CheckMembership = (menu_state) => {
    const [formData, setFormData] = React.useState(
      {
        email: "",
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
      console.log(`email=${formData.email.replace("@", "%40")}&postal=${formData.postal.replace(" ", "")}&mem_check_submit=Check+Status` );


      try {
        const response = await fetch('https://www.conservative.ca/membership-check/', {
          method: 'POST',
          mode: 'no-cors',
          processData: false,
          mimeType: "multipart/form-data",
          headers: {
          },
          body: `email=${formData.email.replace("@", "%40")}&postal=${formData.postal.replace(" ", "")}&mem_check_submit=Check+Status`    
        });
        const data = await response;
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    return (
        <div>
            <Header image={headerImage}
                isMenuOpen={menu_state} />
                <Container>
                  <Column style={{paddingRight: "7vw", fontSize: "14pt", paddingLeft: "3vw"}}>
                    <FormCard>
                      {/*
                      <iframe src = "https://www.conservative.ca/membership-check/" style = {{width: "100%", height: "100vh"}}/>
                      */}
                      {/*
                      <div>
                    <h1>Check the Status of your Conservative Party Membership</h1>
                    </div>
                      <form onSubmit={handleSubmit}>
                      
                      <label>Registered Email</label><br />
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      /><br /><br />
                      <label>Postal Code</label><br />
                      <input
                        type="text"
                        id="postal"
                        name="postal"
                        value={formData.postal}
                        onChange={handleChange}
                        required
                      /><br />
                      <button>Submit</button>
                      </form>*/}
                    </FormCard>
                  </Column>
                  <RightColumn>
                    </RightColumn>
                </Container>
        </div>
    );
};


export default CheckMembership;

