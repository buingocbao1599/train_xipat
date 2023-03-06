import { Icon, IndexTable, Layout, LegacyCard, SettingToggle, Text, TextField, Tooltip } from '@shopify/polaris'
import {
    ArrowDownMinor,
    ArrowUpMinor,
    SearchMajor
} from '@shopify/polaris-icons';
import tiktok_logo from "./img/tiktok-logo.png";
import React, { useCallback, useState } from 'react'

import './css/list_Catalog.css'

const ListCatalog = () => {
    const [textSearch, setTextSearch] = useState('');
    const [sortASC, setSortASC] = useState(false);
    const [sortDEC, setSortDEC] = useState(false);

    const customers = [
        {
            id: '3411',
            url: '#',
            catalog: (
                <>
                    <a href="#">Catalog 1</a>
                    <p>ID: 123456789</p>
                </>
            ),
            bc_account: 'Xipat',
            last_update: 'Feb 3, 2023 15:31:00',
            action: (
                <div className='action_catalog'>
                    <Tooltip preferredPosition='above' content="Click here If any updates to the products are not updated">
                        <a href="#">Sync</a>
                    </Tooltip>
                    <Tooltip preferredPosition='above' content="Delete products synced by the app from TikTok Catalog ">
                        <a href="#">Delete</a>
                    </Tooltip>
                </div>
            ),
        },
        {
            id: '2561',
            url: '#',
            catalog: (
                <>
                    <a href="#">Catalog 2</a>
                    <p>ID: 123456789</p>
                </>
            ),
            bc_account: 'Xipat',
            last_update: 'Feb 3, 2023 15:31:00',
            action: (
                <div className='action_catalog'>
                    <Tooltip preferredPosition='above' content="Click here If any updates to the products are not updated">
                        <a href="#">Sync</a>
                    </Tooltip>
                    <Tooltip preferredPosition='above' content="Delete products synced by the app from TikTok Catalog ">
                        <a href="#">Delete</a>
                    </Tooltip>
                </div>
            ),
        },
        {
            id: '2561',
            url: '#',
            catalog: (
                <>
                    <a href="#">Catalog 3</a>
                    <p>ID: 123456789</p>
                </>
            ),
            bc_account: 'Xipat',
            last_update: 'Feb 3, 2023 15:31:00',
            action: (
                <div className='action_catalog'>
                    <Tooltip preferredPosition='above' content="Click here If any updates to the products are not updated">
                        <a href="#">Sync</a>
                    </Tooltip>
                    <Tooltip preferredPosition='above' content="Delete products synced by the app from TikTok Catalog ">
                        <a href="#">Delete</a>
                    </Tooltip>
                </div>
            ),
        },
    ];
    const resourceName = {
        singular: 'customer',
        plural: 'customers',
    };
    const rowMarkup = customers.map(
        ({ id, catalog, bc_account, last_update, action }, index) => (
            <IndexTable.Row id={id} key={id} position={index}>
                <IndexTable.Cell>
                    <Text variant="bodyMd" as="span">
                        {catalog}
                    </Text>
                </IndexTable.Cell>
                <IndexTable.Cell>
                    {bc_account}
                </IndexTable.Cell>
                <IndexTable.Cell>
                    <Text variant="bodyMd" as="span" numeric>
                        {last_update}
                    </Text>
                </IndexTable.Cell>
                <IndexTable.Cell>
                    {action}
                </IndexTable.Cell>
            </IndexTable.Row>
        ),
    );

    // config of Toggle Log out and Sigin
    const [active, setActive] = useState(true);
    const handleToggle = useCallback(() => setActive((active) => !active), []);

    const contentStatus = active ? 'Log out' : 'Log in';
    const textStatus = active ? 'Harley' : 'Tiktok Account';
    // end config of Toggle Log out
    return (
        <>
            <Layout.Section>
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
            </Layout.Section>

            <Layout.Section>
                <TextField
                    prefix={
                        <>
                            <Icon
                                source={SearchMajor}
                                color="base"
                            />
                        </>
                    }
                    type='search'
                    value={textSearch}
                    placeholder="Search"
                    onChange={(value) => setTextSearch(value)}
                    autoComplete="off"
                />
            </Layout.Section>

            <Layout.Section>
                <LegacyCard>
                    <IndexTable
                        resourceName={resourceName}
                        itemCount={customers.length}
                        headings={[
                            { title: 'Catalog' },
                            { title: 'Business Center account' },
                            {
                                title: (
                                    <div style={{ display: "flex" }}>
                                        <div onClick={() => {
                                            setSortDEC(true)
                                            setSortASC(false)
                                        }}
                                        >
                                            <Icon
                                                source={ArrowDownMinor}
                                                color={sortDEC ? "base" : "subdued"}
                                            />
                                        </div>
                                        <div onClick={() => {
                                            setSortASC(true)
                                            setSortDEC(false)
                                        }}
                                        >
                                            <Icon
                                                source={ArrowUpMinor}
                                                color={sortASC ? "base" : "subdued"}
                                            />
                                        </div>
                                        <span>Last update</span>
                                    </div>
                                )
                            },
                        ]}
                        selectable={false}
                    >
                        {rowMarkup}
                    </IndexTable>
                </LegacyCard>
            </Layout.Section>
        </>
    )
}

export default ListCatalog