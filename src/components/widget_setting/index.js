import React, { useState } from "react";
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

const initState = 0;

// const reducer = (state, action) => {
//     switch(action) {
//         case: AC
//     }
// }

function Index() {
    const [activeSave, setActiveSave] = useState(false);

  return (
    <div>
      <div style={{ height: "100px" }}>
        <Frame
          logo={{
            width: 124,
            contextualSaveBarSource:
              "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999",
          }}
        >
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
        </Frame>
      </div>

      <div>
        <SkeletonPage title="Widget Setting" variant="heading3xl" as="h2">
          <Layout>
            <Layout.Section>
              <Widget_position activeSave={activeSave}/>
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
