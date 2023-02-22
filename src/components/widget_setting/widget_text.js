import React, { useCallback, useState } from "react";
import {
  Card,
  Stack,
  Icon,
  Text,
  Button,
  Collapsible,
  Tabs,
} from "@shopify/polaris";
import { TextMajor, CircleDownMajor } from "@shopify/polaris-icons";
import DeliveryDate from "./widget_text-date";
import StorePickup from "./widget-text_storepickup";

function Widget_text(props) {
  const [openText, setOpenText] = useState(true);
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "all-customers-fitted-3",
      content: (
        <span>
          Delivery Date
        </span>
      ),
    },
    {
      id: "accepts-marketing-fitted-3",
      content: (
        <span>
          Store Pickup
        </span>
      ),
      panelID: "accepts-marketing-fitted-content-3",
    },
  ];

  const handleToggleText = useCallback(() => setOpenText((open) => !open), []);

  return (
    <Card
      sectioned
      title={
        <Stack>
          <Icon source={TextMajor} color="critical" />
          <Text variant="headingLg" as="h4" color="critical">
            Widget text
          </Text>
        </Stack>
      }
    >
      <Stack vertical>
        <Button
          onClick={handleToggleText}
          ariaExpanded={openText}
          ariaControls="basic-collapsible"
          plain
          destructive
          id="open-position"
          fullWidth
          textAlign="right"
        >
          <Icon source={CircleDownMajor} />
        </Button>
        <Collapsible
          open={openText}
          id="basic-collapsible"
          transition={{
            duration: "500ms",
            timingFunction: "ease-in-out",
          }}
          expandOnPrint
        >
          <Card>
            <Tabs
              tabs={tabs}
              selected={selected}
              onSelect={handleTabChange}
              fitted
            >
              {
                selected === 0 
                    ? <DeliveryDate /> 
                    : <StorePickup />
             }
            </Tabs>
          </Card>
        </Collapsible>
      </Stack>
    </Card>
  );
}

export default Widget_text;
