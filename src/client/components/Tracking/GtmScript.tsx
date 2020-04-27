import React from 'react';
import Head from 'next/head';
import { IGTMConfig } from './config';

const GtmScript: React.FunctionComponent<IGTMConfig> = ({ isEnabled, gtmId }) => {
    if (!isEnabled) {
        return null;
    }

    const gtmScript = `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtmId}');`

    return (
        <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-L03B29K251"></script>
            <script key="gtmscript" className="gtmScript" dangerouslySetInnerHTML={{ __html: gtmScript }} />
        </Head>
    );
};

export default GtmScript;
