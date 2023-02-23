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
import { useDispatch, useSelector } from "react-redux";
import { disableSaveText, disableSavePos, disableSaveApp } from "../../redux/actions";


function Index() {
  let statusSavePos = useSelector((state) => state.statusBtnSave.btnPosition);
  let statusSaveApp = useSelector((state) => state.statusBtnSave.btnAppearance);
  let statusSaveText = useSelector((state) => state.statusBtnSave.btnText);
  const status = useSelector((state) => state);
  
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("dataForm: ", status);
  // },[]);

  return (
    <div>
      <div style={{ height: "100px" }}>
        <Frame>

          {
            (statusSavePos === 0 && statusSaveApp === 0 && statusSaveText === 0)
              ?
              <></>
              :
              <ContextualSaveBar
                alignContentFlush
                message="Unsaved changes"
                saveAction={{
                  onAction: () => console.log("Data Handler Save Button: ", status)
                }}
                discardAction={{
                  onAction: () => {
                    dispatch(disableSaveText(0));
                    dispatch(disableSaveApp(0));
                    dispatch(disableSavePos(0));
                  },
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
