import React, { useReducer, useState } from "react";
import {
  Frame,
  ContextualSaveBar,
  SkeletonPage,
  Layout,
} from "@shopify/polaris";

import Widget_appearance from "./widget_appearance";
import Widget_position from "./widget_position";
import Widget_text from "./widget-text";
import "./widget.css";
import { useSelector } from "react-redux";

const initState = 0;

const ACTIVE_TOP = "active";
const DISABLE_TOP = "disable";

const reducer = (state, action) => {
  switch (action) {
    case ACTIVE_TOP:
      console.log("active");
      return state = 1
    case DISABLE_TOP:
      console.log("disable");
      return state = 0
    default:
      throw new Error('Invalid Action')
  }
}

function Index() {
  const [activeSave, dispatch] = useReducer(reducer, initState);
  const [active, setActive] = useState(0);

  const abc = useSelector((state) => state);
  console.log("abc: ", abc);

  const handdlerActive = () => {
    setActive(1);
  }

  return (
    <div>
      <div style={{ height: "100px" }}>
        <Frame>

          {
            abc === 1
              ?
              <ContextualSaveBar
                alignContentFlush
                message="Unsaved changes"
                saveAction={{
                  onAction: () => console.log("add form submit logic"),
                }}
                discardAction={{
                  onAction: () => console.log("add clear form logic"),
                }}
              />
              :
              <ContextualSaveBar
                alignContentFlush
                message="Unsaved changes"
                saveAction={{
                  onAction: () => console.log("add form submit logic"),
                  disabled: "true"
                }}
                discardAction={{
                  onAction: () => console.log("add clear form logic"),
                }}
              />
          }
        </Frame>
      </div>

      <div>
        <SkeletonPage title="Widget Setting" variant="heading3xl" as="h2">
          <Layout>
            <Layout.Section>
              <Widget_position />
              <Widget_appearance />
              <Widget_text />
            </Layout.Section>
          </Layout>
        </SkeletonPage>
      </div>
    </div>
  );
}

export default Index;
