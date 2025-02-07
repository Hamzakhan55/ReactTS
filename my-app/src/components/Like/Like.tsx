import { useState } from "react";
import { FaHeart } from "react-icons/fa";

import { FaRegHeart } from "react-icons/fa";

interface Props {
    onClick: () => void
}

function Like({onClick}: Props) {
    const [status, setStatus] = useState(false)

    const toggle = () => {
        setStatus(!status);
        onClick();
    }

 
    if (status) return <div onClick = {toggle}><FaHeart color="#ff6b81" size={50} /></div>;
    return <div onClick = {toggle}> <FaRegHeart size={50} /></div>;
   
}

export default Like;