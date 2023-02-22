import React from "react";
import { TextField, Page } from "@shopify/polaris";
import { useState, useCallback } from "react";

function StorePickup() {
    const [valueLabel, setValueLabel] = useState("Store Pickup");
    const [valueMessToRequireBuyer, setValueMessToRequireBuyer] = useState("Choose the storage to pickup your product(s)");
    const [valueDateTitle, setValueDateTitle] = useState("Delivery Date");
    const [valueTimeTitle, setValueTimeTiltle] = useState("Pickup location");
    const [valueMessage, setValueMessage] = useState("Please select pickup date before checkout");
  
    const handleChangeLabel = useCallback((newValue) => setValueLabel(newValue), []);
    const handleMessToRequireBuyer = useCallback((newValue) => setValueMessToRequireBuyer(newValue), []);
    const handleChangeDateTitle= useCallback((newValue) => setValueDateTitle(newValue), []);
    const handleChangeTimeTitle = useCallback((newValue) => setValueTimeTiltle(newValue), []);
    const handleChangeMessage = useCallback((newValue) => setValueMessage(newValue), []);
    return (
      <Page>
        <TextField
          label="Title"
          value={valueLabel}
          onChange={handleChangeLabel}
          autoComplete="on"
        />
        <TextField
          label="Delivery date label"
          value={valueMessToRequireBuyer}
          onChange={handleMessToRequireBuyer}
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

export default StorePickup;