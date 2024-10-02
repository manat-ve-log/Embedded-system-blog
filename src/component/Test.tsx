import React, { useEffect, useState } from 'react'
import Codebox from '../topic/component/codebox'
import Cardimgx from '../topic/component/cardimgx';
import linekey from '../topic/Image/install_raspberryPi_a01.png'
import TextProps from '../topic/component/TextComponent'
import styled from 'styled-components';
import {
  Button,
} from 'react-native';

const style:React.CSSProperties={
    // background:'blue',
    width:'100%',
}
function Test() {
  const code01 = `fe
  fe
  fe`;


  const Heading = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
    &:hover {
    color: #007bff; /* Example hover effect */
  }`;
  const H2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
    &:hover {
    color: #007bff; /* Example hover effect */
  }`;

  const [users,setUsers] = useState([]);
  const [indexx,setIndex] = useState(1);

  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };

  React.useEffect(() => {
    f();
  }, []);

  const userElements = users.map((user) => {
    return (
    <div key={user.id}>
      <h2>{user.id === indexx ? user.first_name : ''}</h2>
      <img src={user.id === indexx ? user.avatar :''} alt="" />
    </div>
  );
  });
  const handleClick = () => {
    // Increment indexx
    setIndex(indexx + 1);
  
    // Reset indexx if it exceeds the number of users
    if (indexx >= users.length - 1) {
      setIndex(0);
    }
  };

  return (
    <div style={style}>

        {/* <Heading>Test</Heading>      */}
        <h1>Test</h1>
        <TextProps><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium labore, necessitatibus magni accusantium at cupiditate asperiores aspernatur maiores natus cum dicta sequi deleniti beatae, harum molestias eius consectetur ea dolorum.</p></TextProps>
        <TextProps>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, perferendis iusto? Ipsum eligendi et quisquam perspiciatis odio deleniti sint laudantium itaque est beatae? Sed, saepe placeat? Voluptatem aliquid ipsum reprehenderit.
        </TextProps>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, aut.</p>
        <Codebox 
        code={`fe`} 
        size="90%" margin='10px'></Codebox>
        <Cardimgx img={linekey} alt="linekey"></Cardimgx>
        <Codebox>{code01}</Codebox>
        <button type="button" onClick={handleClick}>
        <p>Next</p>
        </button>
        {userElements}

    </div>
  )
}

export default Test