import React, { useCallback, useState } from 'react';
import {
    SettingToggle, RadioButton,
    Text,
    Layout,
    Page,
    LegacyCard,
    Select,
    Stack,
    Button
} from '@shopify/polaris';
import "./css/business_not_haved_catalog.css";
import tiktok_logo from "./img/tiktok-logo.png";

function Business_haved_catalog(props) {
    
    
    
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
        <div className='bc_not_have_cata-main'>
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
                            <div style={{ marginTop: "20px" }} className="bc_not_catalog">
                                <p className='text-create_catalog'>CREATE A CATALOG</p>
                                <div className='bc_not_cata-select'>
                                    <Select
                                        label="Business Center account"
                                        options={options}
                                        onChange={selectedAccount}
                                        value={handleSelectChangeAccount}
                                        id="select-account"
                                    />
                                    <Select
                                        label="Please name your new catalog"
                                        options={options}
                                        onChange={selectedAccount}
                                        value={handleSelectChangeAccount}
                                        id="select-account"
                                    />
                                    <Select
                                        label="Product cateegory"
                                        options={options}
                                        onChange={selectedAccount}
                                        value={handleSelectChangeAccount}
                                        id="select-account"
                                    />
                                </div>
                                <div className='bc_not_cata-chekbox'>
                                    <Text id='bc_not_cata-chekbox_text'>Choose the items you want to sync with the catalog</Text>
                                    <Stack vertical>
                                        <RadioButton
                                            label="Accounts are disabled"
                                            // helpText="Customers will only be able to check out as guests."
                                            checked={value === 'disabled'}
                                            id="disabled"
                                            name="accounts"
                                            onChange={handleChange}
                                        />
                                        <RadioButton
                                            label="Accounts are optional"
                                            // helpText="Customers will be able to check out with a customer account or as a guest."
                                            id="optional"
                                            name="accounts"
                                            checked={value === 'optional'}
                                            onChange={handleChange}
                                        />
                                    </Stack>
                                </div>
                                <div className='bc_not_cata-btn_create'>
                                    <Button>Create Catalog</Button>
                                </div>
                            </div>
                        </LegacyCard>
                    </Layout.Section>
                </Layout>
            </Page>
        </div>
    );
}

export default Business_haved_catalog;