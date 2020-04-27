import React from 'react';
import GtmScript from './GtmScript';
// import GtmNoScript from './GtmNoScript';

const Tracking = ({children}) => (
    <>
        <GtmScript isEnabled={true} gtmId="G-L03B29K251" />
        {/* <GtmNoScript isEnabled={true}  gtmId="G-L03B29K251" /> */}
        {children}
    </>
);

export default Tracking;