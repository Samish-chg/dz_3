import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const RidDirect = () => {


    const Navigate = useNavigate()
    useEffect(()=>{Navigate('./users')},[])

    return (
        <div>

        </div>
    );
};

export default RidDirect;