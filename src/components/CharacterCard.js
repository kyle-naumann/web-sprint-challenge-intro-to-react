import React, { useState } from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col,} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const CharacterCard = ({ character }) => {
    const { name, height, birth_year, eye_color, hair_color} = character;
    const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (

   <Col className = "button" > <ButtonDropdown color = "info" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{name}</DropdownToggle>
      
      <DropdownMenu>
        <DropdownItem header>Height: {height}</DropdownItem>
        <DropdownItem divider />
        <DropdownItem disabled>Born: {birth_year}</DropdownItem>
        <DropdownItem divider />
        <DropdownItem disabled>Eye Color: {eye_color}</DropdownItem>
        <DropdownItem divider />
        <DropdownItem disabled>Hair Color: {hair_color}</DropdownItem>
      </DropdownMenu>
    
    </ButtonDropdown>
    </Col>
    
  );

}

export default CharacterCard;