import React from 'react'
import { useEffect } from 'react'
import { Hero } from 'react-daisyui'
import { Button, Badge } from 'react-daisyui'

import coverImg from '../public/img/home-bg.webp'



function Home() {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${coverImg})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center center'; //'0% 0%';
        document.body.style.backgroundRepeat = 'no-repeat';


        // You may want to also set other background properties, such as background-size or background-repeat
        return () => {
            document.body.style.backgroundImage = null;
        };
    }, []);

    return (
        <>

            <Hero className="mt-32 md:mt-auto p-4">
                <Hero.Content>
                    {/*<img
                        src={coverImg}
                        className="max-w-sm rounded-lg shadow-2xl w-full h-auto object-cover"
                    ></img>*/}
                    <div className='text-left'>
                        <h1 className="text-5xl font-bold hero-headline">map-salad</h1>
                        <p className="py-6">
                            Minimal maps <span className="text-secondary-focus"> made in Greece</span>.
                        </p>
                        <p>
                            <Badge className='mx-1'>aesthetic cartography & design</Badge>
                            <Badge className='mx-1'>concept maps</Badge>
                            <Badge className='mx-1'>creative data art</Badge>
                        </p>
                        {/*<Button color="primary">explore</Button>*/}
                    </div>
                </Hero.Content>

            </Hero>
        </>
    )
}

export default Home