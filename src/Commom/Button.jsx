import React from 'react'
import { useNavigate } from 'react-router-dom'


function Button({color , bgcolor , radius , text , link}) {

    const router = useNavigate()
    return (
        <button   data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className='btn common-btn mt-4 mt-md-0 ' onClick={()=>{router(link)}} style={{color : color , backgroundColor : bgcolor , borderRadius : radius}}>
            {text}
        </button>
    )
}

export default Button
