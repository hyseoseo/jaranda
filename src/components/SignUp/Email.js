import React from "react";
import InputInfo from "utils/commons/InputInfo";
import {
  EMAIL_INPUT_ID,
  EMAIL_INPUT_NAME,
  EMAIL_INPUT_PLACEHOLDER,
  EMAIL_INPUT_TYPE,
} from "utils/constants/INPUT";

function Email(props) {
  const { handleChange } = props;
  return (
    <label htmlFor={EMAIL_INPUT_ID}>
      <InputInfo
        type={EMAIL_INPUT_TYPE}
        id={EMAIL_INPUT_ID}
        name={EMAIL_INPUT_NAME}
        placeholder={EMAIL_INPUT_PLACEHOLDER}
        handleChange={handleChange}
      />
    </label>
  );
}

export default Email;
