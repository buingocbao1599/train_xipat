import React from 'react';
import { Button, Modal, TextContainer } from '@shopify/polaris';
import { useState, useCallback } from 'react';
// import Modal2 from "./pricing/modal2"
import "./modal1.css"

export default function Modal1() {
  const [active, setActive] = useState(true);
  const [activeModal2, setActiveModal2] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);
  const data = true;
  const handleChange2 = useCallback(() => {
    if(data === true){
      setActive(false);
      setActiveModal2(true);
    }
   
  })

  // const activator = <Button onClick={handleChange}>Open</Button>;

  return (
    <div style={{ height: '500px' }}>
      {/* <Modal2 activeModal2={activeModal2} /> */}

      <Modal
        // activator={activator}
        open={active}
        onClose={handleChange}
        // title="Reach more shoppers with Instagram product tags"
        primaryAction={{
          content: "I've understood. Switch to Basic plan",
          onAction: handleChange2,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction:
              handleChange
            ,
          },
        ]}
      >
        <Modal.Section>
          <TextContainer>
            <p>
              Please remember that the selected pixels will remain once your plan changes back to Basic and the unselected pixels will be permanently removed from the app.
            </p>
          </TextContainer>
        </Modal.Section>
      </Modal>
    </div>
  );
}
