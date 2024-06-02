import Button from "../components/Button";
import CareService from "../components/CareService";
import Carousels from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Reviews from "../components/reviews/Reviews";
import Contents from "../content/contents";
import images from "../content/contents";
import { Image } from "../types/type";



const Home = () => {
  return (
    <div >
      <div className="absolute z-10 md:visible invisible"><Header /></div>
      <Carousels />

      {/* Service Part */}
      <div className="flex mx-20 my-10 justify-around">
        <div className="flex items-center gap-10">
          <ServiceCard image={Contents.homeservice.src[0]} imgtitle={Contents.homeservice.title[0]} />
          <div className="border-r-2 h-36 "></div>
        </div>
        <div className="flex items-center gap-10">
          <ServiceCard image={Contents.homeservice.src[1]} imgtitle={Contents.homeservice.title[1]} />
          <div className="border-r-2 h-36 "></div>
        </div>
        <div className="flex items-center gap-10">
          <ServiceCard image={Contents.homeservice.src[2]} imgtitle={Contents.homeservice.title[2]} />
          <div className="border-r-2 h-36 "></div>
        </div>
        <ServiceCard image={Contents.homeservice.src[3]} imgtitle={Contents.homeservice.title[3]} />
      </div>

      {/* Introduction Section*/}
      <div className="text-center">
        <div className="flex justify-center"><img src="src/assets/images/bluelogo.png" alt="" /></div>
        <p className="my-5 text-[#0989A4] text-4xl font-birthstone font-bold">making dream's a reality</p>
        <p className="text-[#063752] text-6xl font-bold uppercase">Dreamer's Marine</p>
      </div>
      <div className="flex gap-20 justify-center items-center my-20">
        <div><img src="src/assets/images/homepage/homeimg1.png" alt="" className="w-[500px]" /></div>
        <div><p className="w-[550px] text-[#063752] text-xl font-poppins">Set sail with Dreamer’s Marine, where <strong>our passion for the sea shapes every journey.</strong> We deliver not just boats, but experiences crafted with exceptional skill for <strong>durability and performance.</strong> Join a community united by the waves, and share in our <strong>commitment to a greener, cleaner marine adventure.</strong> Choose Dreamer’s Marine, where every voyage is both a legacy and a step towards a sustainable future.</p>

          <button className="w-64 bg-[#BF9550] text-white font-bold uppercase rounded-full px-1 py-3 my-10">About Us!</button>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center">
        <div className="flex justify-center"><img src={Contents.homeservice.src[0]} alt="" /></div>
        <p className="my-5 text-[#0989A4] text-4xl font-birthstone font-bold">Ready to find your dream boat?</p>
        <p className="text-[#063752] text-6xl font-bold uppercase italic">DISCOVER YOUR PERFECT BOAT!</p>
      </div>

      {/* Boats */}
      <div className="text-center py-20" style={{backgroundImage:'url("src/assets/images/homepage/boatssectbg.png")', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
        <div className="flex justify-center"><img src={Contents.homeservice.src[4]} alt="" /></div>
        <p className="my-5 text-[#BF9550] text-4xl font-birthstone font-bold"><span className="text-6xl">n</span>eed engine for your boat?</p>
        <p className="text-white text-6xl font-bold uppercase italic">Find your heartbeat of your boat!</p>
        <div></div>
        <div className="flex gap-40 justify-center my-10">
          <Button title="Explore our engine range"/>
          <Button title="Explore financing solutions"/>
        </div>
      </div>

      {/* Help with your boat (Care) */}
      <div className="text-center my-20">
        <div className="flex justify-center"><img src={Contents.homeservice.src[2]} alt="" /></div>
        <p className="my-5 text-[#0989A4] text-4xl font-birthstone font-bold">Help with your boat?</p>
        <p className="text-[#063752] text-6xl font-bold uppercase italic">Seamless care for smoothin saling</p>
        <div className="flex gap-20 my-14 justify-center">
          {Contents.careservices.map((item) =>
            <CareService src={item.src} alt={item.alt} title1={item.title1} title2={item.title2}text={item.text} />)}
        </div>
        <div className="flex gap-20 justify-center">
            <Button title="Contact our service team"/>
            <Button title="Viw parts catalogue"/>
        </div>
      </div>

      {/* Why Dreams Marine */}
      <div className="text-center my-20">
        <div className="flex justify-center"><img src="src/assets/images/bluelogo.png" alt="" /></div>
        <p className="my-5 text-[#0989A4] text-4xl font-birthstone font-bold">We're your best option</p>
        <p className="text-[#063752] text-6xl font-bold uppercase italic">Why finance with <br /> Dreamer's Marine</p>
        <div className="flex gap-40 justify-center my-20">
          <div className="w-64 text-center">
            <div className="flex justify-center"><img src="src/assets/images/service images/boat 1.svg" alt="" className="w-24" /></div>
            <p className="my-5 text-[#063752] text-2xl font-bold uppercase italic">Massive<br /> Inventory</p>
            <p className="text-[#0989A4] font-poppins">Choose from a wide selection of top-tier boats and engines to fit your maritime lifestyle</p>
          </div>
          <div className="w-64 text-center">
            <div className="flex justify-center"><img src="src/assets/icons/betterrate.svg" alt="" className="w-24" /></div>
            <p className="my-5 text-[#063752] text-2xl font-bold uppercase italic">Better<br /> Retes!</p>
            <p className="text-[#0989A4] font-poppins">Benefit from competitive financing rates that make boat ownership more affordable.</p>
          </div>
          <div className="w-64 text-center">
            <div className="flex justify-center"><img src="src/assets/icons/savecoin.svg" alt="" className="w-24" /></div>
            <p className="my-5 text-[#063752] text-2xl font-bold uppercase italic">Save<br /> Money!</p>
            <p className="text-[#0989A4] font-poppins">Enjoy cost-effective solutions that maximize value without compromising on quality.</p>
          </div>
        </div>
        <Button title="Apply for financing" />
      </div>

      {/* Reviews! */}
      <div className="w-full p-20" style={{ backgroundImage: 'url("src/assets/images/footerbg.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Reviews />
      </div>

      {/* Follow US! */}
      <div className="text-center my-20">
        <div className="flex justify-center"><img src="src/assets/icons/homefollow.svg" alt="" /></div>
        <p className="my-5 text-[#0989A4] text-4xl font-birthstone font-bold">instagram</p>
        <p className="text-[#063752] text-6xl font-bold uppercase italic">Follow Us!</p>
        <div className="flex mx-40 my-20 justify-around">
          {images.homefollowus.map((item: Image, index: number) =>
            <img key={index} src={item.src} alt={item.alt} />)}
        </div>
        <Button title="Stay Connected!" />
      </div>

      {/* Savincs */}
      <div className="flex gap-56 h-[222px] justify-center items-center" style={{ backgroundImage: 'url("src/assets/images/homepage/homesavincs.png")' }}>
        <p className=" w-[726px] uppercase text-[42px] text-white font-bold italic text-center">Join Our VIP Club for Exclusive Deals and Special Offers!</p>
        <Button title="subscribe for Savincs" />
      </div>
      
      {/* Brand Section */}
      <div className="flex mx-40 my-10 justify-around">
        {images.brands.map((item: Image, index: number) =>
          <img key={index} src={item.src} alt={item.alt} className="object-contain object-center"/>)}
      </div>
      {/* Extra section for merge in github */}
      <div>CopyRight@2024</div>
      <Footer />
    </div>
  )
}

export default Home;