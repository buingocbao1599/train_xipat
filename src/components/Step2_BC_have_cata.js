import React, { useCallback, useState } from 'react';
import {
    SettingToggle, RadioButton, TextField,
    Text,
    Layout,
    Page,
    LegacyCard,
    Select,
    Stack,
    Button,
    Card
} from '@shopify/polaris';
import "./css/Step2_BC_have_cata.css";
import tiktok_logo from "./img/tiktok-logo.png";


function Bussiness_haved_catalog(props) {
    // config click click "Create a new catalog" and "Select an existed catalog"
    const [display, setDisplay] = useState(3);
    const [newProduct, setNewProduct] = useState('');
    // end config click click "Create a new catalog" and "Select an existed catalog"


    // config of checkbox
    const [value, setValue] = useState('disabled');
    const handleChange = useCallback(
        (_checked, newValue) => setValue(newValue),
        [],
    );
    // end config of chechbox


    // config Product source
    const [valueProdSource, setValueProdSource] = useState('allProducts');
    const handleChangeProductSource = useCallback(
        (_checked, newValue) => setValueProdSource(newValue),
        [],
    );
    // end config Product source


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


    // config radio footer
    const [valueRadioFoot, setValueRadioFoot] = useState('disabled');

    const handleChangeRadioFoot = useCallback(
        (_checked, newValue) => setValueRadioFoot(newValue),
        [],);
    // end config radio footer


    return (
        <div className='bc_have_cata-main'>
            <div className='business_haved_catalog'>
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
                            <div style={{ marginTop: "20px" }} className="bc_have_cata">
                                <p className='text-create_catalog'>CREATE A CATALOG</p>
                                <div className='bc_have_cata-body'>
                                    <Select
                                        label="Business Center account"
                                        options={options}
                                        onChange={selectedAccount}
                                        value={handleSelectChangeAccount}
                                        id="select-account"
                                    />

                                    <div className='bc_have_cata-create_cata'>
                                        <p className='bc_have_cata-text_tiktok'>TikTok Catalog</p>
                                        <span>Please select a catalog to sync Shopify items with</span>
                                        {
                                            display === 1
                                                ?
                                                (<div className='bc_have_cata_radio'>
                                                    <Card>
                                                        <Card.Section>
                                                            <RadioButton
                                                                label={
                                                                    <div className='radio-cata-example'>
                                                                        <div>Catalog1</div>
                                                                        <div>ID: 123456789</div>
                                                                    </div>
                                                                }
                                                                checked={value === 'disabled'}
                                                                id="disabled"
                                                                name="accounts"
                                                                onChange={handleChange}
                                                            />
                                                        </Card.Section>


                                                        <Card.Section>
                                                            <RadioButton
                                                                label={
                                                                    <div className='radio-cata-example'>
                                                                        <div>Catalog2</div>
                                                                        <div>ID: 2234222229</div>
                                                                    </div>
                                                                }
                                                                id="optional"
                                                                name="accounts"
                                                                checked={value === 'optional'}
                                                                onChange={handleChange}
                                                            />
                                                        </Card.Section>

                                                        <Card.Section>
                                                            <div className='bc_have_cata-btn_cre_new_cata'>
                                                                <Button onClick={() => setDisplay(2)}>Create a new catalog</Button>
                                                            </div>
                                                        </Card.Section>
                                                    </Card>
                                                </div>)
                                                : display === 2
                                                ?
                                                (
                                                    <div className='bc_have_cata_new'>
                                                        <Card>
                                                            <Card.Section>
                                                                <div className='bc_have_cata_new_label'>
                                                                    <Text>Please name your new catalog</Text>
                                                                    <a href="#" onClick={() => setDisplay(1)}>Select an existed catalog</a>
                                                                </div>
                                                                <TextField
                                                                    value={newProduct}
                                                                    onChange={(e) => setNewProduct(e.target.value)}
                                                                    placeholder="Enter here"
                                                                />
                                                            </Card.Section>
                                                        </Card>
                                                    </div>
                                                )
                                                :
                                                (
                                                    <div className='bc_have_cata_new'>
                                                    <Card>
                                                        <Card.Section>
                                                            <div className='bc_have_cata_new_label'>
                                                                <Text>Please name your new catalog</Text>
                                                                {/* <a href="#" onClick={() => setDisplay(1)}>Select an existed catalog</a> */}
                                                            </div>
                                                            <TextField
                                                                value={newProduct}
                                                                onChange={(e) => setNewProduct(e.target.value)}
                                                                placeholder="Enter here"
                                                            />
                                                        </Card.Section>
                                                    </Card>
                                                </div>
                                                )
                                        }

                                    </div>
                                  
                                    <div className='bc_have_cata-select_foot'>

                                        <Card.Section>
                                            <div className=''>
                                                <p className='bc_have_cata-text_tiktok'>Product source</p>
                                                <p className='bc_have_cata-text_product'>Choose the items you want to sync with the catalog</p>
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
                                            <div className='bc_have_cata-select_foot2'>
                                                <p className='bc_have_cata-text_tiktok'>Automatic Upload</p>
                                                <p style={{ marginTop: "6px", marginBottom: "6px" }}>Plan your submit feed schedule</p>
                                                <div className='bc_have_cata-radio_foot'>
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

export default Bussiness_haved_catalog;