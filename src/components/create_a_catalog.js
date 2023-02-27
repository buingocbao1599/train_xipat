import React, { useState, useCallback } from 'react';
import {
    SettingToggle,
    Text,
    Layout,
    Page,
    LegacyCard,
    Select
} from '@shopify/polaris';
import tiktok_logo from "./img/tiktok-logo.png";
import "./css/create_a_catalog.css"

function Create_a_catalog(props) {
    const [active, setActive] = useState(true);
    const [selectedAccount, setSelectedAccount] = useState('today');
    const [selectedProduct, setSelectedProduct] = useState('today');

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
                                <h3>CREATE A CATALOG</h3>
                                <hr />
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
                            </div>
                        </LegacyCard>
                    </Layout.Section>
                </Layout>
            </Page>
        </>
    );
}

export default Create_a_catalog;