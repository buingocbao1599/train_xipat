import React, { useEffect } from "react";
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

function Index() {
  const statusSavePos = useSelector((state) => state.statusBtnSave.btnPosition);
  const statusSaveApp = useSelector((state) => state.statusBtnSave.btnAppearance);
  const statusSaveText = useSelector((state) => state.statusBtnSave.btnText);
  // const dataForm = useEffect(useSelector((state) => state.statusBtnSave), []);
  let status = useSelector((state) => state);
  
  
  useEffect(() => {
    console.log("dataForm: ", status);
  },[]);
  
  return (
    <div>
      <div style={{ height: "100px" }}>
        <Frame>

          {
            (statusSavePos === 0 && statusSaveApp === 0 && statusSaveText === 0)
              ?
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
              :
              <ContextualSaveBar
                alignContentFlush
                message="Unsaved changes"
                saveAction={{
                  onAction: () => console.log("status: ", status)
                  
                  
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
