import React from 'react';
import { FaCheck } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div>
            <p> <FaCheck /> {feature}</p>
        </div>
    );
};

export default Feature;