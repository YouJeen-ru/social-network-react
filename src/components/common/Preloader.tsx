import React from 'react';
import preloader from "../../assets/images/preloader.svg";

const Preloader = (props: any) => {
    return <div>
        <img src={preloader} alt='preloader'/>
    </div>
};

export default Preloader;