import React from 'react';
import { Button, Modal, TextContainer } from '@shopify/polaris';
import { useState, useCallback } from 'react';
// import "./modal1.css"

export default function Modal1(activeModal2) {
  const [active, setActive] = useState(activeModal2);

  const handleChange = useCallback(() => setActive(!active), [active]);

  // const activator = <Button onClick={handleChange}>Open</Button>;

  return (
    <div style={{ height: '500px' }} className="a">
      <Modal
        // activator={activator}
        open={active}
        onClose={handleChange}
        // title="Reach more shoppers with Instagram product tags"
        primaryAction={{
          content: "I've understood. Switch to Basic plan222222",
          onAction: handleChange,
        }}
        secondaryActions={[
          {
            content: 'Cancel2222',
            onAction: handleChange,
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
