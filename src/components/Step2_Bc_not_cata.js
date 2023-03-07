import React, { useCallback, useState } from 'react';
import {
    SettingToggle, RadioButton,
    Text,
    Layout,
    Page,
    LegacyCard,
    Select,
    Stack,
    Button,
    Card,
    TextField
} from '@shopify/polaris';
import "./css/Step2_Bc_not_catalog.css";
import tiktok_logo from "./img/tiktok-logo.png";

function Business_haved_catalog(props) {
    const [newProduct, setNewProduct] = useState('');

    // config Product source
    const [valueProdSource, setValueProdSource] = useState('allProducts');
    const handleChangeProductSource = useCallback(
        (_checked, newValue) => setValueProdSource(newValue),
        [],
    );
    // end config Product source

    // config radio footer
    const [valueRadioFoot, setValueRadioFoot] = useState('disabled');

    const handleChangeRadioFoot = useCallback(
        (_checked, newValue) => setValueRadioFoot(newValue),
        [],);
    // end config radio footer

    // config of checkbox
    const [value, setValue] = useState('disabled');
    const handleChange = useCallback(
        (_checked, newValue) => setValue(newValue),
        [],
    );
    // end config of chechbox

    // config of Toggle Log out and Sigin
    const [active, setActive] = useState(true);
    const [selectedAccount, setSelectedAccount] = useState('today');
    const handleToggle = useCallback(() => setActive((active) => !active), []);

    const contentStatus = active ? 'Log out' : 'Log in';
    const textStatus = active ? 'Harley' : 'Tiktok Account';

    const handleSelectChangeAccount = useCallback((value) => setSelectedAccount(value), []);
    // end config of Toggle Log ou

    const options = [
        { label: 'Today', value: 'today' },
        { label: 'Yesterday', value: 'yesterday' },
        { label: 'Last 7 days', value: 'lastWeek' },
    ];

    return (
        <div className='bc_not_cata-main'>
            <div className='bc_not_cata-login'>
                <SettingToggle
                    action={{
                        content: contentStatus,
                        onAction: handleToggle,
                    }}
                    enabled={active}
                >
                    <div className='sign_in-main'>
                        <img src={tiktok_logo} />
                        Signed in as {' '} &nbsp;
                        <Text variant="bodyMd" fontWeight="bold" as="span">
                            {textStatus}
                        </Text>
                        .
                    </div>
                </SettingToggle>
            </div>

            <Page fullWidth>
                <Layout>
                    <Layout.Section fullWidth>
                        <LegacyCard>
                            <div style={{ marginTop: "20px" }} className="bc_not_cata">
                                <p className='text-create_catalog'>CREATE A CATALOG</p>
                                <div className='bc_not_cata-bdy'>
                                    <Select
                                        label="Business Center account"
                                        options={options}
                                        onChange={selectedAccount}
                                        value={handleSelectChangeAccount}
                                        id="select-account"
                                    />

                                    <div className='bc_not_cata-create_cata'>
                                        <p className='bc_not_cata-text_heading'>TikTok Catalog</p>
                                        <span>Please name your new catalog</span>

                                        <div className='bc_not_cata_new'>
                                            <TextField
                                                value={newProduct}
                                                onChange={(e) => setNewProduct(e.target.value)}
                                                placeholder="Enter here"
                                            />
                                        </div>



                                    </div>

                                    <div className='bc_not_cata-select_foot'>

                                        <Card.Section>
                                            <div className=''>
                                                <p className='bc_not_cata-text_heading'>Product source</p>
                                                <p className='bc_not_cata-text_product'>Choose the items you want to sync with the catalog</p>
                                                <Stack vertical>
                                                    <RadioButton
                                                        label="All products"
                                                        // helpText="Customers will only be able to check out as guests."
                                                        checked={valueProdSource === 'allProducts'}
                                                        id="allProducts"
                                                        name="allProducts"
                                                        onChange={handleChangeProductSource}
                                                    />
                                                    <RadioButton
                                                        label="Specific product(s)"
                                                        // helpText="Customers will be able to check out with a customer account or as a guest."
                                                        id="specificProduct"
                                                        name="specificProduct"
                                                        checked={valueProdSource === 'specificProduct'}
                                                        onChange={handleChangeProductSource}
                                                    />
                                                    {
                                                        valueProdSource === 'specificProduct'
                                                            ? (
                                                                <div className='bc_have_cata-chekbox_btn_specific'>
                                                                    <div>
                                                                        <Button>+ Select collecttion(s)</Button>
                                                                    </div>
                                                                    <div>
                                                                        <Button>+ Product with type(s)</Button>
                                                                    </div>
                                                                    <div>
                                                                        <Button>+ Product with tag(s)</Button>
                                                                    </div>
                                                                    <div>
                                                                        <Button>+ Select product(s)</Button>
                                                                    </div>
                                                                </div>
                                                            ) : ''
                                                    }
                                                </Stack>
                                            </div>
                                        </Card.Section>

                                        <Card.Section>
                                            <div className='bc_not_cata-select_foot2'>
                                                <p className='bc_not_cata-text_heading'>Automatic Upload</p>
                                                <p style={{ marginTop: "6px", marginBottom: "6px" }}>Plan your submit feed schedule</p>
                                                <div className='bc_not_cata-radio_foot'>
                                                    <RadioButton label="Hourly" onChange={handleChangeRadioFoot} checked={valueRadioFoot === 'radio1'} id="radio1"></RadioButton>
                                                    <RadioButton label="Daily" onChange={handleChangeRadioFoot} checked={valueRadioFoot === 'radio2'} id="radio2"></RadioButton>
                                                    <RadioButton label="Weekly" onChange={handleChangeRadioFoot} checked={valueRadioFoot === 'radio3'} id="radio3"></RadioButton>
                                                    <RadioButton label="Monthly" onChange={handleChangeRadioFoot} checked={valueRadioFoot === 'radio4'} id="radio4"></RadioButton>
                                                </div>
                                            </div>

                                        </Card.Section>

                                    </div>


                                </div>

                                <div className='bc_not_cata-btn_create'>
                                    <Button>Create Catalog</Button>
                                </div>
                            </div>
                        </LegacyCard>
                    </Layout.Section>
                </Layout>
            </Page >
        </div >
    );
}

export default Business_haved_catalog;