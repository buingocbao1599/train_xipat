import React, { useState, useCallback } from 'react';
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
import tiktok_logo from "./img/tiktok-logo.png";
import "./css/create_a_catalog.css"

function Create_a_catalog(props) {
    const [active, setActive] = useState(true);
    const [selectedAccount, setSelectedAccount] = useState('today');
    const [selectedProduct, setSelectedProduct] = useState('today');
    const [value, setValue] = useState('disabled');

    const handleChange = useCallback(
        (_checked, newValue) => setValue(newValue),
        [],
    );

    const handleSelectChangeAccount = useCallback((value) => setSelectedAccount(value), []);
    const handleSelectChangeProduct = useCallback((value) => setSelectedProduct(value), []);

    const options = [
        { label: 'Today', value: 'today' },
        { label: 'Yesterday', value: 'yesterday' },
        { label: 'Last 7 days', value: 'lastWeek' },
    ];

    const handleToggle = useCallback(() => setActive((active) => !active), []);

    const contentStatus = active ? 'Log out' : 'Log in';
    const textStatus = active ? 'Harley' : 'Tiktok Account';

    return (
        <>
            <div className='create_catalog-main'>
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
                            <div className="selected-create_catalog">
                                <p className='text-create_catalog'>CREATE A CATALOG</p>
                                <Select
                                    label="Business Center account"
                                    options={options}
                                    onChange={selectedAccount}
                                    value={handleSelectChangeAccount}
                                    id="select-account"
                                />

                                <Select
                                    label="Product cate"
                                    options={options}
                                    onChange={selectedProduct}
                                    value={handleSelectChangeProduct}
                                    id="select-product"
                                />

                                <div>
                                    <Text id='product_on_catalog-text'>Product on Catalog</Text>
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
                                <div className='btn-create_Catalog'>
                                    <Button>Create Catalog</Button>
                                </div>
                            </div>
                        </LegacyCard>
                    </Layout.Section>
                </Layout>
            </Page>
        </>
    );
}

export default Create_a_catalog;