import React, { useCallback, useState, memo } from "react";
import {
  Button,
  Text,
  Card,
  Layout,
  Page,
  LegacyStack,
  TextField,
} from "@shopify/polaris";
import "../../css/pricing.css";

function Index() {
  const [tab, setTab] = useState(1);


    const show  = useRef (1);

  const dataTab1 = [
    {
      id: 1,
      namePlan: "free",
      price: "free",
      pixel: 10,
      selected: 1,
    },
    {
      id: 2,
      namePlan: "basic",
      price: "200.09",
      pixel: 50,
      selected: 0,
    },
    {
      id: 3,
      namePlan: "pro",
      price: "400.16",
      pixel: 100,
      selected: 0,
    },
    {
      id: 4,
      namePlan: "unlimited",
      price: "600.29",
      pixel: 200,
      selected: 0,
    },
  ];


  const dataTab2 = [
    {
      id: 1,
      namePlan: "free",
      price: "free",
      pixel: 1,
      selected: 0,
    },
    {
      id: 2,
      namePlan: "basic",
      price: "2.09",
      pixel: 5,
      selected: 0,
    },
    {
      id: 3,
      namePlan: "pro",
      price: "4.16",
      pixel: 10,
      selected: 0,
    },
    {
      id: 4,
      namePlan: "unlimited",
      price: "6.29",
      pixel: 20,
      selected: 1,
    },
  ];

  const handleChangeTab = useCallback((x) => {
    if (x == 1) {
      setTab(1);
      document.getElementById("btn_yearly").style.border = "1px solid #2C6ECB";
      document.getElementById("btn_month").style.border = "1px solid #BCCFE9";
    } else {
      setTab(2);
      document.getElementById("btn_yearly").style.border = "1px solid #BCCFE9";
      document.getElementById("btn_month").style.border = "1px solid #2C6ECB";
    }
  }, []);

  const Tab1 = () => {
    return (
      <div
        style={{ marginTop: "20px", marginBottom: "20px" }}
        className="yearl_main"
      >
        <div style={{ marginRight: "50px", marginLeft: "50px" }}>
          <Page fullWidth>
            <Layout>
              {dataTab1.map((x, index) => {
                return (
                  <div style={{ maxWidth: "255px", width: "255px" }}>
                    <Layout.Section oneThird key={index}>
                      <Card id="cart" className="layout_section">
                        <div className="name_plan">{x.namePlan + " PLAN"}</div>
                        <div className="price_plan">
                          {x.price === "free" ? (
                            <div className="price_free">FREE</div>
                          ) : (
                            <div className="price">
                              <div className="price_currency"> US $ </div>
                              <div className="price_month">
                                <b className="price_valid">{x.price}</b> /year
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="pixel_plan">
                          <svg
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 0.946309L3.77143 9L0 5.30872L0.966857 4.36242L3.77143 7.10067L11.0331 0L12 0.946309Z"
                              fill="black"
                            />
                          </svg>
                          {x.pixel == 1 ? (
                            <div>&nbsp; {x.pixel} pixel event</div>
                          ) : (
                            <div>&nbsp; {x.pixel} pixel events</div>
                          )}
                        </div>
                        <LegacyStack vertical={true} alignment={"center"}>
                          {x.selected == 1 ? (
                            <Button
                              //   onClick={() => handleSaveTest()}
                              id="btn_current"
                              pressed={true}
                            >
                              Current Plan
                            </Button>
                          ) : (
                            <Button
                              //   onClick={() => handleSaveTest()}
                              id="btn_choose"
                              pressed={true}
                            >
                              Choose this plan
                            </Button>
                          )}
                        </LegacyStack>
                      </Card>
                    </Layout.Section>
                  </div>
                );
              })}
            </Layout>
          </Page>
        </div>
      </div>
    );
  };

  const Tab2 = () => {
    return (
      <div
        style={{ marginTop: "20px", marginBottom: "20px" }}
        className="yearl_main"
      >
        <div style={{ marginRight: "50px", marginLeft: "50px" }} className="">
          <Page fullWidth>
            <Layout>
              {dataTab2.map((x, index) => {
                return (
                  <div style={{ maxWidth: "255px", width: "255px" }}>
                    <Layout.Section oneThird key={index}>
                      <Card>
                        <div className="name_plan">{x.namePlan + " PLAN"}</div>
                        <div className="price_plan">
                          {x.price === "free" ? (
                            <div className="price_free">FREE</div>
                          ) : (
                            <div className="price">
                              <div className="price_currency"> US $ </div>
                              <div className="price_month">
                                <b className="price_valid">{x.price}</b> /month
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="pixel_plan">
                          <svg
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 0.946309L3.77143 9L0 5.30872L0.966857 4.36242L3.77143 7.10067L11.0331 0L12 0.946309Z"
                              fill="black"
                            />
                          </svg>
                          {x.pixel == 1 ? (
                            <div>&nbsp; {x.pixel} pixel event</div>
                          ) : (
                            <div>&nbsp; {x.pixel} pixel events</div>
                          )}
                        </div>
                        <LegacyStack vertical={true} alignment={"center"}>
                          {x.selected == 1 ? (
                            <Button
                              //   onClick={() => handleSaveTest()}
                              id="btn_current"
                              pressed={true}
                            >
                              Current Plan
                            </Button>
                          ) : (
                            <Button
                              //   onClick={() => handleSaveTest()}
                              id="btn_choose"
                              pressed={true}
                            >
                              Choose this plan
                            </Button>
                          )}
                        </LegacyStack>
                      </Card>
                    </Layout.Section>
                  </div>
                );
              })}
            </Layout>
          </Page>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <Text alignment="center" variant="heading3xl" as="h2">
          Pricing & Plans
        </Text>
      </div>
      <div
        className="btn_changetab"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <button onClick={() => handleChangeTab(1)} id="btn_yearly">
          Yearly -30%
        </button>
        <button onClick={() => handleChangeTab(2)} id="btn_month">
          Monthly
        </button>
      </div>
      <div className="body_plan">
        {tab === 1 ? <Tab1 data={dataTab1} /> : <Tab2 />}
      </div>


      <TextField
        label="Shipping address"
        value="abc"
         
      />
    </>
  );
}

export default memo(Index);
