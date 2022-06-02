import styled from "styled-components";

export default styled.div`
  font-family: sans-serif;

  h1 {
    text-align: center;
    color: darkgreen;
    padding: 10px;
    font-weight: 700;
    font-size: 2rem;
  }
  Form {
    text-align: center;
    padding: 40px;
    font-weight: 800;
  }
  form {
    top: 1rem;
    max-width: 500px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 25px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    position: relative;
  }
  .lable {
    color: darkgreen;
    margin: 1rem;
  }
  Button {
    margin: 1rem;
  }
  input {
    color: green;
    font-size: 1rem;
  }
span{
  color:red;
}
`;
//Advanced styled components
const Button = styled.button`
   font-sixe:1rem;
   color:red;
   margin:5rem; 
   border-radious:3px;
   color: ${props => props.theme.main};
   border:3px solid ${props=>props.theme.main};
`;
Button.defaultProps={
  theme:{
    main:"palevioletred"
  }
}
