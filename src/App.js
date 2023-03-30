import React, { useCallback, useState } from "react";
import { Modal, Button } from "@shopify/polaris";
import pic_banner_cross from "./IMG/pic_banner_cross.png";
import icon_popup_banner_cross from "./IMG/icon-popup_banner_cross.png";
import background_popup_banner_cross from "./IMG/background_popup_banner.png";
import "./App.scss";

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
          onClick={() => handlerBtnGrabFree()}
        >
          Grab free remedies
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.7 6.29L9.69999 1.29C9.51999 1.1 9.26999 0.989998 8.98999 0.989998C8.43999 0.989998 7.98999 1.44 7.98999 1.99C7.98999 2.27 8.09999 2.52 8.27999 2.7L11.57 5.99H1.98999C1.43999 5.99 0.98999 6.44 0.98999 6.99C0.98999 7.54 1.43999 7.99 1.98999 7.99H11.58L8.28999 11.28C8.10999 11.46 7.99999 11.71 7.99999 11.99C7.99999 12.54 8.44999 12.99 8.99999 12.99C9.27999 12.99 9.52999 12.88 9.70999 12.7L14.71 7.7C14.89 7.52 15 7.27 15 6.99C15 6.71 14.88 6.47 14.7 6.29Z"
              fill="#05386B"
            />
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

  const handlerBtnGrabFree = () => {
    activePopup === true ? setActivePopup(false) : setActivePopup(true);
  };

  const handlerBtnTryForFree = () => {
    //     Facebook: https://apps.shopify.com/facebook-multi-pixels?surface_detail=fbpxinapp&surface_type=cross
    //     GGfeed: https://apps.shopify.com/facebook-multi-pixels?surface_detail=feedinapp&surface_type=cross
    //     Pinterest: https://apps.shopify.com/facebook-multi-pixels?surface_detail=pinterestinapp&surface_type=cross
    //     Snapchat: https://apps.shopify.com/facebook-multi-pixels?surface_detail=snapinapp&surface_type=cross
    //     GGtag: https://apps.shopify.com/facebook-multi-pixels?surface_detail=ggtaginapp&surface_type=cross
    window.open('https://apps.shopify.com/facebook-multi-pixels?surface_detail=fbpxinapp&surface_type=cross');
  };
  return (
    <div className="banner_main">
      <div className="banner-text">
        <p className="text-don_be_shy text"> Don't be shy, </p>
        <p className="text-give text">give</p>
        <div className="banner-text_content">Twitter Ads</div>
        <p className="text-a_try text">a try</p>
      </div>
      <div className="banner-picture">
        <img src={pic_banner_cross} />
      </div>
      <div className="banner-btn">
        {/* <div className="banner-popup"> */}
          <Modal
            activator={activator()}
            open={activePopup}
            onClose={handleChangePopup}
          >
            <Modal.Section>
              <div className="background-banner_cross">
                <div className="modal-text">
                  <p className="text-twitter_ads">Twitter Ads</p>
                  <p className="text-got_you_down">got you down?</p>
                  <div className="text-descrpition">
                    Turn your ads into winners <br /> with{" "}
                    <span>5 powerful</span> Twitter Pixel events
                  </div>
                  <button className="btn-try_for_free" onClick={() => handlerBtnTryForFree()}>
                    Try for free
                    <svg
                      width={15}
                      height={13}
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.7 5.79001L9.69999 0.790006C9.51999 0.600006 9.26999 0.490005 8.98999 0.490005C8.43999 0.490005 7.98999 0.940005 7.98999 1.49001C7.98999 1.77001 8.09999 2.02001 8.27999 2.20001L11.57 5.49001H1.98999C1.43999 5.49001 0.98999 5.94001 0.98999 6.49001C0.98999 7.04001 1.43999 7.49001 1.98999 7.49001H11.58L8.28999 10.78C8.10999 10.96 7.99999 11.21 7.99999 11.49C7.99999 12.04 8.44999 12.49 8.99999 12.49C9.27999 12.49 9.52999 12.38 9.70999 12.2L14.71 7.20001C14.89 7.02001 15 6.77001 15 6.49001C15 6.21001 14.88 5.97001 14.7 5.79001Z"
                        fill="#05386B"
                      />
                    </svg>
                  </button>
                </div>
                <img src={icon_popup_banner_cross} className="a"/>
              </div>
            </Modal.Section>
          </Modal>
        {/* </div> */}
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
