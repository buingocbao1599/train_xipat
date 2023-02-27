import React, { useState, useCallback } from 'react';
import {
    SettingToggle, Button,
    Text,
    Layout,
    Page,
    LegacyCard,
} from '@shopify/polaris';
import tiktok_logo from "./img/tiktok-logo.png";


function Catalog_create_business(props) {
    const [active, setActive] = useState(true);

    const handleToggle = useCallback(() => setActive((active) => !active), []);

    const contentStatus = active ? 'Log out' : 'Log in';
    const textStatus = active ? 'Harley' : 'Tiktok Account';

    return (
        <>
            <div className='create_business_account-main'>

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

            <Page>
                <Layout >
                    <Layout.Section>
                        <LegacyCard sectioned>
                            <div className="body_create_business">
                                <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.9704 54.3842C27.532 54.101 22.9434 52.0049 19.2044 48.0961C15.4655 44.1872 13.5961 39.4852 13.5961 33.9902C13.5961 28.3251 15.5788 23.5099 19.5443 19.5443C23.5099 15.5788 28.3251 13.5961 33.9902 13.5961C39.4852 13.5961 44.1872 15.4655 48.0961 19.2044C52.0049 22.9434 54.101 27.532 54.3842 32.9704L47.2463 30.8461C46.5099 27.7869 44.9236 25.2807 42.4877 23.3274C40.0517 21.3741 37.2192 20.3964 33.9902 20.3941C30.2512 20.3941 27.0505 21.7254 24.3879 24.3879C21.7254 27.0505 20.3941 30.2512 20.3941 33.9902C20.3941 37.2192 21.3719 40.0517 23.3274 42.4877C25.283 44.9236 27.7892 46.5099 30.8461 47.2463L32.9704 54.3842ZM33.9902 67.9803C29.2882 67.9803 24.8695 67.0875 20.734 65.3019C16.5985 63.5163 13.0012 61.095 9.94212 58.0382C6.88301 54.9791 4.46177 51.3818 2.67842 47.2463C0.895074 43.1108 0.00226601 38.6921 0 33.9902C0 29.2882 0.892808 24.8695 2.67842 20.734C4.46404 16.5985 6.88527 13.0012 9.94212 9.94212C13.0012 6.88301 16.5985 4.46177 20.734 2.67842C24.8695 0.895074 29.2882 0.00226601 33.9902 0C38.6921 0 43.1108 0.892808 47.2463 2.67842C51.3818 4.46404 54.9791 6.88527 58.0382 9.94212C61.0973 13.0012 63.5197 16.5985 65.3053 20.734C67.0909 24.8695 67.9826 29.2882 67.9803 33.9902V35.5197C67.9803 36.0296 67.9237 36.5394 67.8103 37.0493L61.1823 35.0099V33.9902C61.1823 26.399 58.548 19.9692 53.2796 14.7007C48.0111 9.43227 41.5813 6.79803 33.9902 6.79803C26.399 6.79803 19.9692 9.43227 14.7007 14.7007C9.43227 19.9692 6.79803 26.399 6.79803 33.9902C6.79803 41.5813 9.43227 48.0111 14.7007 53.2796C19.9692 58.548 26.399 61.1823 33.9902 61.1823H35.0099L37.0493 67.8103C36.5394 67.9237 36.0296 67.9803 35.5197 67.9803H33.9902ZM61.7771 68.4902L48.436 55.149L45.8867 62.8818C45.6035 63.6749 45.0653 64.0578 44.2722 64.0306C43.4791 64.0034 42.9409 63.5922 42.6576 62.7968L34.9249 37.0493C34.6983 36.4261 34.8399 35.8596 35.3498 35.3498C35.8596 34.8399 36.4261 34.6983 37.0493 34.9249L62.7968 42.6576C63.5899 42.9409 64.0012 43.4791 64.0306 44.2722C64.0601 45.0653 63.6771 45.6035 62.8818 45.8867L55.149 48.436L68.4902 61.7771C68.8301 62.117 69 62.5135 69 62.9668C69 63.42 68.8301 63.8165 68.4902 64.1564L64.1564 68.4902C63.8165 68.8301 63.42 69 62.9668 69C62.5135 69 62.117 68.8301 61.7771 68.4902Z" fill="#69C9D0" />
                                </svg>
                                <Text id='#create_business_account'> Create Business Account</Text>
                                <p  className="create_business-description">You need to create a TikTok Business account before syncing products with the TikTok catalog. </p>
                                <Button id='create_ads_manager'>
                                    Create Ads Manager
                                </Button>
                            </div>
                        </LegacyCard >
                    </Layout.Section>
                </Layout>
            </Page>
        </>
    );
}

export default Catalog_create_business;