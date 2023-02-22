import React from "react";
import { TextField, Page } from "@shopify/polaris";
import { useState, useCallback } from "react";

function DeliveryDate(props) {
  const [valueTitle, setValueTitle] = useState("Select a delivery date");
  const [valueDateLabel, setValueDateLabel] = useState("Delivery Date");
  const [valueDateTitle, setValueDateTitle] = useState("Delivery Date");
  const [valueTimeTitle, setValueTimeTiltle] = useState("Delivery Date");
  const [valueMessage, setValueMessage] = useState("Henry Nguyen");

  const handleChangeTitle = useCallback((newValue) => setValueTitle(newValue), []);
  const handleChangeDateLabel = useCallback((newValue) => setValueDateLabel(newValue), []);
  const handleChangeDateTitle= useCallback((newValue) => setValueDateTitle(newValue), []);
  const handleChangeTimeTitle = useCallback((newValue) => setValueTimeTiltle(newValue), []);
  const handleChangeMessage = useCallback((newValue) => setValueMessage(newValue), []);
  return (
    <Page>
      <TextField
        label="Title"
        value={valueTitle}
        onChange={handleChangeTitle}
        autoComplete="on"
      />
      <TextField
        label="Delivery date label"
        value={valueDateLabel}
        onChange={handleChangeDateLabel}
        autoComplete="on"
      />
      <TextField
        label="Delivery date title"
        value={valueDateTitle}
        onChange={handleChangeDateTitle}
        autoComplete="on"
      />
      <TextField
        label="Delivery time title"
        value={valueTimeTitle}
        onChange={handleChangeTimeTitle}
        autoComplete="on"
      />
      <TextField
        label="Required message text"
        value={valueMessage}
        onChange={handleChangeMessage}
        autoComplete="on"
      />
    </Page>
  );
}

export default DeliveryDate;
