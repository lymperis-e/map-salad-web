import React from 'react'
import { Card, Button, Indicator } from 'react-daisyui'

import coverImg from '../public/img/cover.webp'

function Contact() {
    return (
        <div className="page-content mt-min-20  md:mt-min-40 mt-auto">
            <div className="mb-3">

            </div>
            <Card side="lg" className="mw-fit">
                <Indicator/>
                <Card.Image
                    src={coverImg}
                    alt="map"
                    className="max-h-72"
                    
                />
                <Card.Body>
                <div className="flex flex-row">
                    <div className="badge badge-neutral badge-outline mr-1">Thessaloniki</div>
                    <div className="badge badge-neutral badge-outline mr-1">Athens</div>
                    </div>
                    <Card.Title tag="h2">Contact</Card.Title>
                    <p className="text-left">The <span className='text-primary'>map-salad</span> project</p>

                   
                    <Card.Actions className="justify-end">
                        {/*<Button color="primary">Buy Now</Button>*/}
                    </Card.Actions>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Contact