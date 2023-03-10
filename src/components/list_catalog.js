import { Icon, IndexTable, Layout, LegacyCard, SettingToggle, Text, TextField, Button } from '@shopify/polaris'
import {
    ArrowDownMinor,
    ArrowUpMinor,
    SearchMajor
} from '@shopify/polaris-icons';
import tiktok_logo from "./img/tiktok-logo.png";
import React, { useCallback, useEffect, useState } from 'react'

import './css/list_Catalog.css'
import PaginationComponent from './common/components/Pagination';

const ListCatalog = () => {
    const [textSearch, setTextSearch] = useState('');
    const [sortASC, setSortASC] = useState(false);
    const [sortDEC, setSortDEC] = useState(false);

    // config Pagination
    const [listCatalog, setListCataLog] = useState([
        {
            nameCatalog: "Catalog 1",
            idCatalog: "111111111",
            bcAccount: "Xipat1",
            timerCatalog: "15:32:00"
        },
        {
            nameCatalog: "Catalog 2",
            idCatalog: "2222222",
            bcAccount: "Xipat1",
            timerCatalog: "15:31:00"
        },
        {
            nameCatalog: "Catalog 3",
            idCatalog: "3333333",
            bcAccount: "Xipat1",
            timerCatalog: "15:31:00"
        },
        {
            nameCatalog: "Catalog 4",
            idCatalog: "44444444",
            bcAccount: "Xipat1",
            timerCatalog: "15:31:00"
        },
        {
            nameCatalog: "Catalog 5",
            idCatalog: "555555555",
            bcAccount: "Xipat1",
            timerCatalog: "15:33:00"
        },
        {
            nameCatalog: "Catalog 6",
            idCatalog: "666666666",
            bcAccount: "Xipat1",
            timerCatalog: "15:31:00"
        },
    ])
    
    const [list, setList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 5,
        page: 1,
        total: 2,
    });

    const handlePaginationChange = (value, key) => {
        let newPagination = {
            ...pagination,
            [key]: value,
        };

        let total = parseInt(listCatalog.length / newPagination.limit);
        total = listCatalog.length % newPagination.limit > 0 ? total + 1 : total;
        setPagination({ ...newPagination, total: total });
    };

    useEffect(() => {
        const list_catalog = [];
        listCatalog.length > 0 && listCatalog.map((item) => {
            return list_catalog.push({ ...item, id: item.idCatalog });
        });
        setList(list_catalog);
        let total = parseInt(list_catalog.length / pagination.limit);
        total = list_catalog.length % pagination.limit > 0 ? total + 1 : total;
        let page = pagination.page;
        if (pagination.page > 1)
            page = (listCatalog.length >= (pagination.limit * (pagination.page - 1) + 1)) ? pagination.page : pagination.page - 1;
        setPagination({
            ...pagination,
            total: total,
            page: page
        });
        // handleSelectionChange('page', false, null);
    }, []);

    const listCatalogMap = list.filter((item, index) => {
        return (
            index < pagination.page * pagination.limit &&
            index >= pagination.limit * (pagination.page - 1)
        );
    }).map(
        (catalog, index) => (
            <IndexTable.Row id={catalog.idCatalog} key={catalog.idCatalog} position={index}>
                <IndexTable.Cell>
                    <Text variant="bodyMd" as="span">
                        <>
                            <a href="#">{catalog.nameCatalog}</a>
                            <p>ID: {catalog.idCatalog}</p>
                        </>
                    </Text>
                </IndexTable.Cell>
                <IndexTable.Cell>
                    {catalog.bcAccount}
                </IndexTable.Cell>
                <IndexTable.Cell>
                    <Text variant="bodyMd" as="span" numeric>
                        {catalog.timerCatalog}
                    </Text>
                </IndexTable.Cell>
                <IndexTable.Cell>
                    <Button plain>Delete</Button>
                </IndexTable.Cell>
            </IndexTable.Row>
        ),
    );


    // end config Pagination



    // config of Toggle Log out and Sigin
    const [active, setActive] = useState(true);
    const handleToggle = useCallback(() => setActive((active) => !active), []);

    const contentStatus = active ? 'Log out' : 'Log in';
    const textStatus = active ? 'Harley' : 'Tiktok Account';
    // end config of Toggle Log out


    // function Filter list
    const listCatalogSortAsc = (listCatalog) => {
        const data = listCatalog.sort(function (a, b) {
            return a.timerCatalog.localeCompare(b.timerCatalog);
        });
        setList(data);
        console.log("data listCatalogSortAsc: ", data)
    }

    const listCatalogSortDec = (listCatalog) => {
        const data = listCatalog.sort((a,b) => {
            return a.timerCatalog.localeCompare(b.timerCatalog);
        })

        const list = data.reverse();

        setList(list);
        console.log("data listCatalogSortDec: ", data);
    }
    // end function Filter
    return (
        <div className='list_catalog-main'>
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
                        itemCount={listCatalog.length}
                        headings={[
                            { title: 'Catalog' },
                            { title: 'Business Center account' },
                            {
                                title: (
                                    <div style={{ display: "flex" }}>
                                        <div onClick={() => {
                                            setSortDEC(true)
                                            setSortASC(false)
                                            listCatalogSortDec(listCatalog)
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
                                            listCatalogSortAsc(listCatalog)
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
                        {listCatalogMap}
                    </IndexTable>

                    <div className='bc_have_cata-pagination'>
                        <PaginationComponent
                            pagination={pagination}
                            handlePaginationChange={handlePaginationChange}
                            pd={16}
                            isShow={(pagination.total !== 1 && pagination.total !== 0) || listCatalog.length > 5}
                        />
                    </div>

                </LegacyCard>
            </Layout.Section>
        </div>
    )
}

export default ListCatalog