import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="slika" />
            <div className="home__row">
                <Product
                    id="12321341"
                    title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
                    price={309.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg"
                    alt="slika"
                />
                <Product
                    id="12321341"
                    title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
                    price={130.28}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_SL1384_.jpg"
                    alt="slika"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12321341"
                    title="
                    WD 2TB Elements Portable External Hard Drive - USB 3.0 - WDBU6Y0020BBK"
                    price={52.76}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61IBBVJvSDL._AC_SL1500_.jpg"
                    alt="slika"
                />
                <Product
                    id="12321341"
                    title="Sceptre E248W-19203R 24 Ultra Thin 75Hz 1080p LED"
                    price={104.68}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71qCGPWI8aL._AC_SL1080_.jpg"
                    alt="slika"
                />
                <Product
                    id="12321341"
                    title="
                    RESPAWN Fortnite SKULL TROOPER-V"
                    price={250.25}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81J2Fc2izRL._AC_SL1500_.jpg"
                    alt="slika"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12321341"
                    title="Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz"
                    price={999.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61Hh-0F7AbL._AC_SL1000_.jpg"
                    alt="slika"
                />
            </div>
        </div>
    )
}

export default Home
