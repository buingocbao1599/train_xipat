import React, { useCallback, useState } from "react";
import { Modal, Button } from "@shopify/polaris";
import pic_banner_cross from "./IMG/pic_banner_cross.png";
import icon_popup_banner_cross from "./IMG/icon-popup_banner_cross.png";
import background_popup_banner_cross from "./IMG/background_popup_banner.png"
import './App.scss';

function App() {
  const [close, setClose] = useState(false);
  const [activePopup, setActivePopup] = useState(false);

  const handleChangePopup = useCallback(
    () => setActivePopup(!activePopup),
    [activePopup]
  );

  const activator = () => {
    return (
      <div className="button_grab-free">
        <Button
          className="banner-btn_tracking"
          onClick={() => handlerBtnTracking()}

        >
          Grab free remedies
          <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.7 6.29L9.69999 1.29C9.51999 1.1 9.26999 0.989998 8.98999 0.989998C8.43999 0.989998 7.98999 1.44 7.98999 1.99C7.98999 2.27 8.09999 2.52 8.27999 2.7L11.57 5.99H1.98999C1.43999 5.99 0.98999 6.44 0.98999 6.99C0.98999 7.54 1.43999 7.99 1.98999 7.99H11.58L8.28999 11.28C8.10999 11.46 7.99999 11.71 7.99999 11.99C7.99999 12.54 8.44999 12.99 8.99999 12.99C9.27999 12.99 9.52999 12.88 9.70999 12.7L14.71 7.7C14.89 7.52 15 7.27 15 6.99C15 6.71 14.88 6.47 14.7 6.29Z" fill="#05386B" />
          </svg>

        </Button>
      </div>
    );
  };

  const handlerCloseBtn = () => {
    setClose(true);
  };

  const handlerBtnGetStarted = () => {
    window.open(
      "https://apps.shopify.com/facebook-multi-pixels?surface_detail=tiktokinapp&surface_type=cross"
    );
  };

  const handlerBtnTracking = () => {
    activePopup === true ? setActivePopup(false) : setActivePopup(true);
  };
  return (
    <div className="banner_main">
        <div className="banner-text">
          <div className="banner-text_heading">
            <p className="text-don_be_shy"> Don't be shy, </p>
          </div>
          <div className="banner-text_heading1" style={{ marginLeft: '14px' }}>
            <p className="text-give">give</p>

          </div>
          <div className="banner-text_content">
            Twitter Ads
          </div>
          <div className="banner-text_heading2">
            <p className="text-a_try">a try</p>
          </div>
        </div>
        <div className="banner-picture">
          <img src={pic_banner_cross} />
        </div>
        <div className="banner-btn">
          <div className="banner-popup">
            <Modal
              activator={activator()}
              open={activePopup}
              onClose={handleChangePopup}
            >
              <Modal.Section>
                <div className="background-banner_cross">
                  {/* <img src={background_popup_banner_cross} style={{ width: '100%' }} /> */}
                  <div className="popup-banner_cross-main">
                    <div className="text-twitter_ads">Twitter Ads</div>
                    <img src={icon_popup_banner_cross} />
                  </div>
                </div>

              </Modal.Section>
            </Modal>
          </div>
        </div>

        <div className="banner-close" onClick={() => handlerCloseBtn()}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.41 5.08509L9.7 2.33176C9.89 2.18112 10 1.9719 10 1.73758C10 1.27729 9.55 0.900696 9 0.900696C8.72 0.900696 8.47 0.992753 8.29 1.14339L5 3.90509L1.71 1.14339C1.53 0.992753 1.28 0.900696 1 0.900696C0.45 0.900696 0 1.27729 0 1.73758C0 1.9719 0.11 2.18112 0.29 2.33176L3.59 5.08509L0.3 7.83843C0.11 7.98906 0 8.19828 0 8.43261C0 8.89289 0.45 9.26949 1 9.26949C1.28 9.26949 1.53 9.17743 1.71 9.0268L5 6.26509L8.29 9.01843C8.47 9.17743 8.72 9.26949 9 9.26949C9.55 9.26949 10 8.89289 10 8.43261C10 8.19828 9.89 7.98906 9.71 7.83843L6.41 5.08509Z"
              fill="black"
              fillOpacity="0.25"
            />
          </svg>
        </div>

    </div>
  );
}

export default App;
