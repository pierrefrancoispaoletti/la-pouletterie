import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../redux/reducers/app/app.actions";
import { selectMessage } from "../../redux/reducers/app/app.selectors";
import {
  LocalMessageContainer,
  LocalMessageWrapper,
} from "./local-message.style";

const LocalMessage = () => {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout;
    setVisible(true);
    if (visible) {
      timeout = setTimeout(() => {
        setVisible(false);
        dispatch(setMessage({ status: undefined, message: "" }));
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [message, dispatch]);
  return message.status ? (
    <LocalMessageContainer visible={visible}>
      <LocalMessageWrapper status={message.status}>
        <span>{message.message}</span>
      </LocalMessageWrapper>
    </LocalMessageContainer>
  ) : (
    <></>
  );
};

export default LocalMessage;
