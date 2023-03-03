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
    Card
} from '@shopify/polaris';
import "./css/bussiness_have_catalog2.css";
import tiktok_logo from "./img/tiktok-logo.png";


function Bussiness_haved_catalog(props) {

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
        <div className='bc_have_cata2-main'>
            <div className='business_haved_catalog2'>
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
                            <div style={{ marginTop: "20px" }} className="">
                                <p className='text-create_catalog'>CREATE A CATALOG</p>
                                <div className=''>
                                    <Select
                                        label="Business Center account"
                                        options={options}
                                        onChange={selectedAccount}
                                        value={handleSelectChangeAccount}
                                        id="select-account"
                                    />

                                    <div className=''>
                                        <p className=''>TikTok Catalog</p>
                                        <span>Please select a catalog to sync Shopify items with</span>
                                        <div className='bc_have_cata2-card_new_cata'>
                                            <LegacyCard sectioned title="Please name your new catalog" actions={[{ content: 'Add variant' }]}>
                                                <p>
                                                    Add variants if this product comes in multiple versions, like different
                                                    sizes or colors.
                                                </p>
                                            </LegacyCard>
                                        </div>
                                    </div>

                                    <Select
                                        label="Product cateegory"
                                        options={options}
                                        onChange={selectedAccount}
                                        value={handleSelectChangeAccount}
                                        id="select-account"
                                    />
                                </div>
                                <div className='bc_not_cata-chekbox'>
                                    <Text id=''>Choose the items you want to sync with the catalog</Text>
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
                                <div className=''>
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

export default Bussiness_haved_catalog;