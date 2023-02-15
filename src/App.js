import "./App.css";
import {
  Button,
  AccountConnection,
  Link,
  ButtonGroup,
  PageActions,
  SettingToggle,
  Text,
  AlphaCard,
  Box,
  Card,
  ResourceList,
  Thumbnail,
  Layout,
  Page,
} from "@shopify/polaris";
import { useCallback, useState } from "react";

function App() {
  const [connected, setConnected] = useState(false);
  const accountName = connected ? "Jane Appleseed" : "";
  const [expanded, setExpanded] = useState(false);

  const handleAction = useCallback(() => {
    setConnected((connected) => !connected);
  }, []);

  const buttonText = connected ? "Disconnect" : "Connect";
  const details = connected ? "Account connected" : "No account connected";
  const terms = connected ? null : (
    <p>
      By clicking <strong>Connect</strong>, you agree to accept Sample App’s{" "}
      <Link url="Example App">terms and conditions</Link>. You’ll pay a
      commission rate of 15% on sales made through Sample App.
    </p>
  );

  // Setting toggle
  const [active, setActive] = useState(false);

  const handleToggle = useCallback(() => setActive((active) => !active), []);

  const contentStatus = active ? "Deactivate" : "Active";
  const textStatus = active ? "activated" : "deactivated";
  // end Setting toggle

  const Placeholder = ({ label = "", height = "auto", width = "auto" }) => {
    return (
      <div
        style={{
          background: "#7B47F1",
          height: height,
          width: width,
        }}
      >
        <div
          style={{
            color: "#FFFFFF",
          }}
        >
          <Text as="h2" variant="bodyMd" fontWeight="medium">
            {label}
          </Text>
        </div>
      </div>
    );
  };

  const handleSaveTest = () => {
    console.log("abc")
  }

  return (
    <>
      {/* Polaris Component Actions */}
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Button
          size="medium"
          accessibilityLabel="Edit shipping address"
          url="https://facebook.com"
          destructive={true}
          textAlign="right"
          removeUnderline={true}
        >
          Omega
        </Button>

        <div
          style={{ width: "200px", marginTop: "20px", marginBottom: "20px" }}
        >
          <Button
            fullWidth
            textAlign="left"
            disclosure={expanded ? "up" : "down"}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show less" : "Show more"}
          </Button>
        </div>

        <AccountConnection
          accountName={accountName}
          connected={connected}
          title="Example App"
          action={{
            content: buttonText,
            onAction: handleAction,
          }}
          details={details}
          termsOfService={terms}
        />
        <br />

        <ButtonGroup
          spacing="loose"
          segmented={false}
          fullWidth={true}
          connectedTop={false}
          noWrap={true}
        >
          <Button>Cancel</Button>
          <Button primary={true}>Save</Button>
          <Button primary={true}>Edit</Button>
          <Button primary={true}>Add</Button>
          <Button primary={true} destructive={true}>
            Error
          </Button>
        </ButtonGroup>

        {/* Page Actions */}

        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <PageActions
            primaryAction={{
              content: "save",
            }}
            secondaryActions={[
              {
                content: "Delete",
                destructive: true,
              },
            ]}
          />
        </div>

        {/* Setting toggle */}
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <SettingToggle
            action={{
              content: contentStatus,
              onAction: handleToggle,
            }}
            enabled={active}
          >
            This setting is {""}
            <Text variant="bodyMd" fontWeight="bold" as="span">
              {textStatus}
            </Text>
            .
          </SettingToggle>
        </div>
      </div>

      {/* Polaris Component Layout and structure  */}
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Box background="surface-success">
          <Placeholder label="Content inside a box" />
        </Box>
        <Box>
          <Placeholder label="Content inside a box" />
        </Box>

        <div style={{ marginRight: "50px", marginLeft: "50px" }}>
          <Page fullWidth>
            <Layout style={{color: "red"}}>
              <Layout.Section oneThird>
                <Card title="Florida" actions={[{ content: "Manage" }]}>
                  <Card.Section>
                    <Text variant="bodyMd" color="subdued" as="span">
                      455 units available
                    </Text>
                  </Card.Section>
                  <Card.Section title="Items">
                    <ResourceList
                      resourceName={{ singular: "product", plural: "products" }}
                      items={[
                        {
                          id: 343,
                          url: "produdcts/343",
                          name: "Black & orange scarf",
                          sku: "9234194023",
                          quantity: "254",
                          media: (
                            <Thumbnail
                              source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                              alt="Black orange scarf"
                            />
                          ),
                        },
                        {
                          id: 258,
                          url: "produdcts/258",
                          name: "Tucan scarf",
                          sku: "9234194010",
                          quantity: "201",
                          media: (
                            <Thumbnail
                              source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                              alt="Tucan scarf"
                            />
                          ),
                        },
                      ]}
                      renderItem={(item) => {
                        const { id, url, name, sku, media, quantity } = item;

                        return (
                          <ResourceList.Item
                            id={id}
                            url={url}
                            media={media}
                            accessibilityLabel={`View details for ${name}`}
                          >
                            <Text variant="bodyMd" fontWeight="bold" as="h3">
                              {name}
                            </Text>
                            <div>SKU: {sku}</div>
                            <div>{quantity} available</div>
                          </ResourceList.Item>
                        );
                      }}
                    />
                  </Card.Section>
                  <Button onClick={() => handleSaveTest()}>Save</Button>
                </Card>
              </Layout.Section>
              <Layout.Section oneThird>
                <Card title="Nevada" actions={[{ content: "Manage" }]}>
                  <Card.Section>
                    <Text variant="bodyMd" color="subdued" as="span">
                      301 units available
                    </Text>
                  </Card.Section>
                  <Card.Section title="Items">
                    <ResourceList
                      resourceName={{ singular: "product", plural: "products" }}
                      items={[
                        {
                          id: 344,
                          url: "produdcts/344",
                          name: "Black & orange scarf",
                          sku: "9234194023",
                          quantity: "100",
                          media: (
                            <Thumbnail
                              source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                              alt="Black orange scarf"
                            />
                          ),
                        },
                        {
                          id: 259,
                          url: "produdcts/259",
                          name: "Tucan scarf",
                          sku: "9234194010",
                          quantity: "201",
                          media: (
                            <Thumbnail
                              source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                              alt="Tucan scarf"
                            />
                          ),
                        },
                      ]}
                      renderItem={(item) => {
                        const { id, url, name, sku, media, quantity } = item;

                        return (
                          <ResourceList.Item
                            id={id}
                            url={url}
                            media={media}
                            accessibilityLabel={`View details for ${name}`}
                          >
                            <Text variant="bodyMd" fontWeight="bold" as="h3">
                              {name}
                            </Text>
                            <div>SKU: {sku}</div>
                            <div>{quantity} available</div>
                          </ResourceList.Item>
                        );
                      }}
                    />
                  </Card.Section>
                </Card>
              </Layout.Section>
              <Layout.Section oneThird>
                <Card title="Minneapolis" actions={[{ content: "Manage" }]}>
                  <Card.Section>
                    <Text variant="bodyMd" color="subdued" as="span">
                      1931 units available
                    </Text>
                  </Card.Section>
                  <Card.Section title="Items">
                    <ResourceList
                      resourceName={{ singular: "product", plural: "products" }}
                      items={[
                        {
                          id: 345,
                          url: "produdcts/345",
                          name: "Black & orange scarf",
                          sku: "9234194023",
                          quantity: "1230",
                          media: (
                            <Thumbnail
                              source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                              alt="Black orange scarf"
                            />
                          ),
                        },
                        {
                          id: 260,
                          url: "produdcts/260",
                          name: "Tucan scarf",
                          sku: "9234194010",
                          quantity: "701",
                          media: (
                            <Thumbnail
                              source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                              alt="Tucan scarf"
                            />
                          ),
                        },
                      ]}
                      renderItem={(item) => {
                        const { id, url, name, sku, media, quantity } = item;

                        return (
                          <ResourceList.Item
                            id={id}
                            url={url}
                            media={media}
                            accessibilityLabel={`View details for ${name}`}
                          >
                            <Text variant="bodyMd" fontWeight="bold" as="h3">
                              {name}
                            </Text>
                            <div>SKU: {sku}</div>
                            <div>{quantity} available</div>
                          </ResourceList.Item>
                        );
                      }}
                    />
                  </Card.Section>
                </Card>
              </Layout.Section>
              <Layout.Section oneThird>
                <Card title="Minneapolis" actions={[{ content: "Manage" }]}>
                  <Card.Section>
                    <Text variant="bodyMd" color="subdued" as="span">
                      1931 units available
                    </Text>
                  </Card.Section>
                  <Card.Section title="Items">
                    <ResourceList
                      resourceName={{ singular: "product", plural: "products" }}
                      items={[
                        {
                          id: 345,
                          url: "produdcts/345",
                          name: "Black & orange scarf",
                          sku: "9234194023",
                          quantity: "1230",
                          media: (
                            <Thumbnail
                              source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                              alt="Black orange scarf"
                            />
                          ),
                        },
                        {
                          id: 260,
                          url: "produdcts/260",
                          name: "Tucan scarf",
                          sku: "9234194010",
                          quantity: "701",
                          media: (
                            <Thumbnail
                              source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                              alt="Tucan scarf"
                            />
                          ),
                        },
                      ]}
                      renderItem={(item) => {
                        const { id, url, name, sku, media, quantity } = item;

                        return (
                          <ResourceList.Item
                            id={id}
                            url={url}
                            media={media}
                            accessibilityLabel={`View details for ${name}`}
                          >
                            <Text variant="bodyMd" fontWeight="bold" as="h3">
                              {name}
                            </Text>
                            <div>SKU: {sku}</div>
                            <div>{quantity} available</div>
                          </ResourceList.Item>
                        );
                      }}
                    />
                  </Card.Section>
                </Card>
              </Layout.Section>
            </Layout>
          </Page>
        </div>
      </div>
    </>
  );
}

export default App;
