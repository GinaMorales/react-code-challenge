import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

type FormControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type InputProps = {
  type: "text" | "number";
  disabled?: boolean;
  value?: string | number;
  placeholder?: string;
  endIcon?: string;
};

const Input: React.FC<InputProps> = ({
  type,
  disabled = false,
  value = '',
  placeholder,
  endIcon
}) => {

  const [formValue, setFormValue] = useState(value);

  const handleOnChange = (event: React.FormEvent<FormControlElement>) => (
    setFormValue(event.currentTarget.value)
  );

  return (
    <InputGroup>
      <FormControl
        type={type}
        disabled={disabled}
        value={formValue}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
      {
        endIcon ? (
          <InputGroup.Append>
            <InputGroup.Text>{endIcon}</InputGroup.Text>
          </InputGroup.Append>
        ) :
          (
            <></>
          )
      }
    </InputGroup>
  );
};

export default Input;