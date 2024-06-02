import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
	return (
		<div className="p-20 flex gap-40" style={{ backgroundImage: 'url("src/assets/images/footerbg.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
			{/* First column */}
			<div className="w-[500px] text-center text-white">
				<div className="flex justify-center"><img src="src/assets/images/footerlogo.png" alt="" /></div>
				<p className="my-10">Your gateway to exceptional nautical adventures and <br /> unparalleled marine craftsmanship.</p>
				<p className="my-3">2229 McCullough Rd, Nanaimo, BC V9S 4M7</p>
				<div className="flex justify-center"><img src="src/assets/images/footermap.png" alt="" /></div>
				<div className="flex gap-5 justify-center my-10"><img src="src/assets/icons/facebookicon.svg" alt="" /><img src="src/assets/icons/twitterico.svg" alt="" /></div>
			</div>
			{/* Second column */}
			<div className="text-white">
				<p className="text-2xl font-bold uppercase">QuickLinks</p>
				<div className="flex justify-center my-3 border-[#0989A4] border-2"></div>
				<div className="flex flex-col my-5">
					<Link to="#">About Us</Link>
					<Link to="#">Boats</Link>
					<Link to="#">&emsp;Stryker</Link>
					<Link to="#">&emsp;Legend</Link>
					<Link to="#">&emsp;Fish Whistle</Link>
					<Link to="#">&emsp;Suzumar</Link>
					<Link to="#">&emsp;Pre-owned</Link>
					<Link to="#">Engines</Link>
					<Link to="#">&emsp;Suzuki</Link>
					<Link to="#">&emsp;Mercury</Link>
					<Link to="#">Services</Link>
					<Link to="#">&emsp;Regular Maintenance</Link>
					<Link to="#">&emsp;Seasonal Maintenance</Link>
					<Link to="#">&emsp;Boat Storage</Link>
					<Link to="#">&emsp;Drop Off & Pick Up</Link>
					<Link to="#">Why Us to Finance?</Link>
					<Link to="#">Google Reviews</Link>
					<Link to="#">Follow Us!</Link>
				</div>
				<Button title="INVENTORY" />
			</div>
			{/* Third column */}
			<div className="text-white">
				<p className="text-2xl font-bold uppercase">Operation hours</p>
				<div className="flex justify-center my-3 border-[#0989A4] border-2"></div>
				<div className="flex flex-col my-5">
					<p>Monday - Friday:</p>
					<p>&emsp;08:00am to 4:30pm</p>
					<p>Saturday:</p>
					<p>&emsp;By appointment only</p>
					<p>Closed Sundays & Holidays</p>
					<p>Winter hours will apply.</p>
				</div>
			</div>
			{/* Fourth column */}
			<div className="text-white">
				<p className="text-2xl font-bold uppercase">Get In touch!</p>
				<div className="flex justify-center my-3 border-[#0989A4] border-2"></div>
				<div className="flex flex-col my-5">
					<p className="font-bold">EMAIL</p>
					<p>info@allenmarine.ca</p>
					<br />
					<p className="font-bold">PHONE NUMBER</p>
					<p>+1 (250) 585 7880</p>
				</div>
				<Button title="Financing" />
			</div>
		</div>
	)
}

export default Footer;