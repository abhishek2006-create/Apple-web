import "../style/body.css"
import "../style/global.css"
import Macbook from "../assets/Macbook.png"
import Phone from "../assets/phones.png"
import Airpads from "../assets/Airpads.png"
import TV from "../assets/Apple-TV.png"
import Homepod from "../assets/Homepod.png"
import Iphone from "../assets/Iphone.png"
import Tablet from "../assets/tablets.png"
import Watches from "../assets/watches.png"
import Airpods from "../assets/airpods.png"
import IP_launch from "../assets/Ipad-launch.jpg"
import Phone_launch from "../assets/Phone_launch.jpg"
import Colours from "../assets/colour.jpg"
import Mac_launch from "../assets/Mac_launch.jpg"
import Watch_launch from "../assets/Watch-launch.jpg"

export default function B(){
    return(
        <>
            <div id="container">
                <div id="header">
                    <h1>Store</h1>
                    <div id="sidebar">
                        <h2>The best way to buy the </h2>
                        <h2>products you love.</h2>
                        <div id="anchors">
                            <a href="https://contactretail.apple.com/" target="blank">Connect with a specialist</a>
                            <a href="https://www.apple.com/in/retail/" target="blank">Find an apple store</a>
                        </div>
                    </div>
                </div>
                <div id="products">
                    <div className="card">
                        <a href="https://www.apple.com/in/shop/buy-mac" target="blank"><img src={Macbook} alt="Macbook" id="Macbook"></img></a>
                        <a href="https://www.apple.com/in/shop/buy-mac"target="blank">Mac</a>
                    </div>
                    <div className="card">
                        <a href="https://www.apple.com/in/shop/buy-iphone" target="blank"><img src={Phone} alt="Phone"></img></a>
                        <a href="https://www.apple.com/in/shop/buy-iphone" target="blank">Iphones</a>
                    </div>
                    <div className="card">
                        <a href="https://www.apple.com/in/shop/buy-ipad" target="blank"><img src={Tablet} alt="iPad"></img></a>
                        <a href="https://www.apple.com/in/shop/buy-ipad" target="blank">iPad</a>
                    </div>
                    <div className="card">
                        <a href="https://www.apple.com/in/shop/buy-watch" target="blank"><img src={Watches} alt="Watches"></img></a>
                        <a href="https://www.apple.com/in/shop/buy-watch" target="blank">Apple Watches</a>
                    </div>
                    <div className="card">
                        <a href="https://www.apple.com/in/shop/buy-airpods" target="blank"><img src={Airpods} alt="Airpods"></img></a>
                        <a href="https://www.apple.com/in/shop/buy-airpods" target="blank">Airpods</a>
                    </div>
                    <div className="card">
                        <a href="https://www.apple.com/in/shop/buy-airtags" target="blank"><img src={Airpads} alt="Airtags"></img></a>
                        <a href="https://www.apple.com/in/shop/buy-airpods" target="blank">Airtags</a>
                    </div>
                    <div className="card">
                        <a href="https://www.apple.com/in/apple-tv-4k/" target="blank"><img src={TV} alt="TV"></img></a>
                        <a href="https://www.apple.com/in/apple-tv-4k/" target="blank">Apple TV 4K</a>
                    </div>
                    <div className="card">
                        <a href="https://www.apple.com/in/homepod/" target="blank"><img src={Homepod} alt="Homepods"></img></a>
                        <a href="https://www.apple.com/in/homepod/" target="blank">Homepods</a>
                    </div>
                    <div className="card">
                        <a href="https://www.apple.com/in/shop/accessories/all" target="blank"><img src={Iphone} alt="Iphone"></img></a>
                        <a href="https://www.apple.com/in/shop/accessories/all" target="blank">Accessories</a>
                    </div>
                </div>
                <div id="banner">
                    <h2 style={{color:"black"}}>The latest.</h2>
                    <h2 style={{color:"gray"}}>Take a look at what’s new right now...</h2>
                </div>
                <div className="latest">
                    <div className="product-card">
                        <div className="card-content">
                            <h3>iPhone 17 Pro</h3>
                            <p>All out Pro.</p>
                            <span>From ₹134900.00*</span>
                        </div>
                        <a href="https://www.apple.com/in/shop/buy-iphone/iphone-17-pro" target="blank"><img src={Phone_launch} alt="iPhone 17 Pro" /></a>
                    </div>
                    <div className="product-card">
                        <div className="card-content">
                            <h3>Macbook Pro 14"</h3>
                            <p>Supercharged by M5</p>
                            <span>From ₹169900.00*</span>
                        </div>
                        <a href="https://www.apple.com/in/shop/buy-mac/macbook-pro" target="blank"><img src={Mac_launch} alt="Mac_book" /></a>
                    </div>
                    <div className="product-card">
                        <div className="card-content">
                            <h3>iPad Pro</h3>
                            <p>Mmmmm. Power.</p>
                            <span>From ₹99900.00*</span>
                        </div>
                        <a href="https://www.apple.com/in/shop/buy-ipad/ipad-pro" target="blank"><img src={IP_launch} alt="ipad" /></a>
                    </div>
                    <div className="product-card">
                        <div className="card-content" style={{color:"black"}}>
                            <h3>Apple Watch Series 11</h3>
                            <p>The ultimate way to watch your health.</p>
                            <span>From ₹46900.00*</span>
                        </div>
                        <a href="https://www.apple.com/in/shop/buy-watch/apple-watch" target="blank"><img src={Watch_launch} alt="Watch" /></a>
                    </div>
                    <div className="product-card">
                        <div className="card-content" style={{color:"black"}}>
                            <h3>iPhone 17</h3>
                            <p>Magichromatic.</p>
                            <span>From ₹82900.00*</span>
                        </div>
                        <a href="https://www.apple.com/in/shop/buy-iphone/iphone-17" target="blank"><img src={Colours} alt="iPhone 17 shades" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}