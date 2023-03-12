import React from 'react'
import { Card, Button, Indicator } from 'react-daisyui'

import coverImg from '../public/img/cover.webp'

function Contact() {
    return (

        <div className="mt-32 md:mt-auto p-4">
            <h1>Contact</h1>
            <hr className="border-neutral opacity-10" />

            {/*<p className="">The <span className='text-primary'>map-salad</span> project</p>*/}

            <p className=""> Map making is an art. <br></br> If you share this view, please contact us at <a href="mailto:info@mapsalad.com">info@mapsalad.com</a>  </p>

            
            <div className="mt-5">
            <div className="badge badge-neutral badge-outline mr-1">Thessaloniki</div>
            <div className="badge badge-neutral badge-outline mr-1">Athens</div>
            </div>


        </div>




    )
}

export default Contact