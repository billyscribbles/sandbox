import React from 'react';
import Head from 'next/head';

export type NextHeadProps = {
    siteTitle?: string;
    description?: string;
    url?: string;
    image?: string;
};

export const NextHead: React.FC<NextHeadProps> = function({
    siteTitle = '',
    description = '',
    url = '',
    image = ''
}: NextHeadProps): JSX.Element {
    return (
        <Head>
            <title>{siteTitle}</title>

            <link rel="canonical" href="https://www.menux.com" />

            <meta charSet="utf-8" key="charSet" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <meta name="description" content={description} key="description" />

            <meta name="og:title" property="og:title" content={siteTitle} />
            <meta property="og:type" content="website" />
            <meta name="og:description" property="og:description" content={description} />
            <meta property="og:site_name" content="" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content={url} />
            <meta name="twitter:creator" content="" />
            <meta name="twitter:image" content={image} />
        </Head>
    );
};

export default React.memo(NextHead);

//How to build SEO friendly head components
//https://www.creativebloq.com/how-to/build-an-seo-friendly-head-component-for-nextjsreact
