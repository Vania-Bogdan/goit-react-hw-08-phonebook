import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactElement = ({ name, number, id, onRemoveContact }) => {
  return (
    <Li key={id}>
        <p className='con-text'>{name + ": " + number}</p>
        <Btn onClick={()=>onRemoveContact(id)}>Delete</Btn>
    </Li>
  );
};

ContactElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

const Li = styled.li`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    `;

const Btn = styled.button`
    width: 70px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 150px;
    background: rgb(255, 138, 138);
    padding: 0;
    :hover, :focus {
    color: white;
    background-color: #ff5353;
    }
`;


export default ContactElement;