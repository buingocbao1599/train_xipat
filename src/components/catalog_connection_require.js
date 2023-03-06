import React from 'react';
import {
    Button,
    Text,
    Layout,
    Page,
    LegacyCard,
} from "@shopify/polaris";


function Catalog_connection_require(props) {
    return (
        <div>
            <Page>
                <Layout >
                    <Layout.Section>
                        <LegacyCard sectioned>
                            <div className="body_connection_require">

                                <svg width="44" height="60" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M31 15C31 10.037 26.963 6 22 6C17.037 6 13 10.037 13 15V23H31V15ZM37 23V15C37 6.716 30.284 0 22 0C13.716 0 7 6.716 7 15V23H2C0.895 23 0 23.895 0 25V45C0 53.284 6.716 60 15 60H29C37.284 60 44 53.284 44 45V25C44 23.895 43.105 23 42 23H37ZM22 50C20.343 50 19 48.657 19 47V35C19 33.343 20.343 32 22 32C23.657 32 25 33.343 25 35V47C25 48.657 23.657 50 22 50Z" fill="#69C9D0" />
                                </svg>
                                <Text id='connect_requir-heading'> Access Permission</Text>
                                <p className="connect_requir-description">This feature requires to connect with your TikTok Ads Manager to create catalogs from Shopify products. Be assured that our program has tightly forbidden any access to sensitive data, such as revenue or customer data</p>
                                <Button id='sign_in_tiktok'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.0722 3.16333C13.3411 2.42631 12.9383 1.4798 12.9386 0.5H9.63407V12.2111C9.60859 12.8449 9.30562 13.4451 8.78898 13.8856C8.27233 14.326 7.58233 14.5721 6.86427 14.5722C5.34569 14.5722 4.08377 13.4767 4.08377 12.1167C4.08377 10.4922 5.85901 9.27389 7.68772 9.77444V6.79C3.99821 6.35556 0.768555 8.88667 0.768555 12.1167C0.768555 15.2617 3.72016 17.5 6.85357 17.5C10.2116 17.5 12.9386 15.0917 12.9386 12.1167V6.17611C14.2786 7.02597 15.8874 7.48194 17.5371 7.47944V4.56111C17.5371 4.56111 15.5266 4.64611 14.0722 3.16333Z" fill="white" />
                                    </svg>
                                    Accept Permission 
                                </Button>
                            </div>
                        </LegacyCard >
                    </Layout.Section>
                </Layout>
            </Page>

        </div>
    );
}

export default Catalog_connection_require;