import React, { useCallback, useState } from "react";
import {
  Card,
  Stack,
  Icon,
  Text,
  Button,
  Collapsible,
  Page,
  Grid,
  Select,
  Checkbox,
  TextField,
} from "@shopify/polaris";
import { PaintBrushMajor, CircleDownMajor } from "@shopify/polaris-icons";

function Widget_appearance() {
  const [openAppearance, setOpenAppearance] = useState(true);
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);
  const [colorTheme, setColorTheme] = useState("#000000");
  const [colorTitle, setColorTitle] = useState("#b11b1b");
  const [colorMessage, setColorMessage] = useState("#3d8e1a");

  const handleChange = useCallback((newChecked) => setChecked(newChecked), []);
  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const handleColorThemeChange = (value) => {
    console.log("hàm bên trên:", value);
    setColorTheme(value);
  };

  const handleColorTitleChange = (value) => {
    console.log("hàm bên trên:", value);
    setColorTitle(value);
  };

  const handleColorMessageChange = (value) => {
    console.log("hàm bên trên:", value);
    setColorMessage(value);
  };

  const options = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];

  const options1 = [
    { label: "Calendar layout", value: "Calendar layout" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];

  const optionsCalenLang = [
    { label: "English", value: "English" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];

  const optionsCalenFirstDay = [
    { label: "Monday", value: "monday" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];

  const optionsDateFormat = [
    { label: "10/05/22", value: "monday" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];

  const handleToggleAppearane = useCallback(
    () => setOpenAppearance((open) => !open),
    []
  );
  return (
    <Card
      sectioned
      title={
        <Stack>
          <Icon source={PaintBrushMajor} color="critical" />
          <Text variant="headingLg" as="h3" color="critical">
            Widget appearance
          </Text>
        </Stack>
      }
    >
      <Stack vertical>
        <Button
          onClick={handleToggleAppearane}
          ariaExpanded={openAppearance}
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
          open={openAppearance}
          id="basic-collapsible"
          transition={{
            duration: "500ms",
            timingFunction: "ease-in-out",
          }}
          expandOnPrint
        >
          <Page fullWidth>
            <Grid>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <Select
                  label="Layout"
                  options={options}
                  onChange={handleSelectChange}
                  value={selected}
                />
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <Select
                  label="Calendar layout"
                  options={options1}
                  onChange={handleSelectChange}
                  value={selected}
                />
                <Checkbox
                  label="Basic checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
              </Grid.Cell>
            </Grid>

            <Grid>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <Select
                  label="Calendar language"
                  options={optionsCalenLang}
                  onChange={handleSelectChange}
                  value={selected}
                />
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <Select
                  label="Frist day of calendar"
                  options={optionsCalenFirstDay}
                  onChange={handleSelectChange}
                  value={selected}
                />
              </Grid.Cell>
            </Grid>

            <Grid>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <Select
                  label="Date format"
                  options={optionsDateFormat}
                  onChange={handleSelectChange}
                  value={selected}
                />
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <div style={{ display: "flex", position: "relative" }}>
                  <TextField
                    label="Store name"
                    value={colorTheme}
                    onChange={handleColorThemeChange}
                    autoComplete="off"
                    id="color-theme"
                  />
                  <input
                    type="color"
                    className="select-color_theme"
                    value={colorTheme}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setColorTheme(e.target.value);
                    }}
                  />
                </div>
              </Grid.Cell>
            </Grid>

            <Grid>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <div style={{ display: "flex", position: "relative" }}>
                  <TextField
                    label="Title color"
                    value={colorTitle}
                    onChange={handleColorTitleChange}
                    autoComplete="off"
                    id="color-title"
                  />
                  <input type="color" className="select-color_theme" value={colorTitle}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setColorTitle(e.target.value);
                    }}/>
                </div>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <div style={{ display: "flex", position: "relative" }}>
                  <TextField
                    label="Required message text color"
                    value={colorMessage}
                    onChange={handleColorMessageChange}
                    autoComplete="off"
                    id="color-text"
                  />
                  <input type="color" className="select-color_theme" value={colorMessage}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setColorMessage(e.target.value);
                    }} />
                </div>
              </Grid.Cell>
            </Grid>
          </Page>
        </Collapsible>
      </Stack>
    </Card>
  );
}

export default Widget_appearance;
