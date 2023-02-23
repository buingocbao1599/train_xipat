import React, { useCallback, useState } from "react";
import {
  Card,
  Stack,
  Icon,
  Text,
  Button,
  Collapsible,
  Checkbox,
} from "@shopify/polaris";
import { ProductsMajor, CircleDownMajor } from "@shopify/polaris-icons";
import { useDispatch, useSelector } from "react-redux";
import { activeSave, disableSave } from "../../redux/actions";

function Widget_position(props) {
  const [openPosition, setOpenPosition] = useState(true);
  const [checkShowCalendar, setCheckShowCalendar] = useState(false);
  const [checkRequireDate, setCheckRequireDate] = useState(false);
  const dispatch = useDispatch();
  

  const reduxCheckShowCalendar = useSelector((state) => state.widgetPosition.showTheCalendar);
  const reduxCheckRequireDate = useSelector((state) => state.widgetPosition.showTheCalendar);

  const handleStatusBtnSave = (newDataCalendar, newDataDate) => {
      if(newDataCalendar === reduxCheckShowCalendar && newDataDate === reduxCheckRequireDate){
        dispatch(disableSave(0));
      } else {
        dispatch(activeSave(1));
      }
  }

  handleStatusBtnSave(checkShowCalendar, checkRequireDate);


  const handleChangeShowCalendar = useCallback(
    (newChecked) => {
      setCheckShowCalendar(newChecked);
    }
  ,[]);

  const handleChangeRequireDate = useCallback(
    (newChecked) => {
      setCheckRequireDate(newChecked);
    }
    ,[]);

  const handleTogglePosition = useCallback(
    () => setOpenPosition((open) => !open),
    []
  );

  return (
    <Card
      sectioned
      title={
        <Stack>
          <Icon source={ProductsMajor} color="critical" />
          <Text variant="headingLg" as="h1" color="critical">
            Widget position
          </Text>
        </Stack>
      }
    >
      <Stack vertical>
        <Button
          onClick={handleTogglePosition}
          ariaExpanded={openPosition}
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
          open={openPosition}
          id="basic-collapsible"
          transition={{
            duration: "500ms",
            timingFunction: "ease-in-out",
          }}
          expandOnPrint
        >
          <div className="check_box-position">
            <Checkbox
              label="Show the calendar at the product page"
              checked={checkShowCalendar}
              onChange={handleChangeShowCalendar}
            />
            <Checkbox
              label="Require the delivery date before checkout"
              checked={checkRequireDate}
              onChange={handleChangeRequireDate}
            />
          </div>
        </Collapsible>
      </Stack>
    </Card>
  );
}

export default Widget_position;
