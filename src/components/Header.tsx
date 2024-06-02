import { Link } from "react-router-dom";
import Button from "./Button";


const Header = () => {
	function TopNav() {
		return (
			<div className="flex gap-20 justify-center py-5 text-white text-xl">
				<div className="flex items-center gap-4"><img src="src/assets/icons/searchicon.svg" alt="" className="w-7"/>What are you looking for?</div>
				<div className="flex items-center gap-4"><img src="src/assets/icons/phoneicon.svg" alt="" className="w-7"/>+1 250 585 7880</div>
				<div className="flex items-center gap-4"><img src="src/assets/icons/emailicon.svg" alt="" className="w-7"/>info@allenmarine.ca</div>
				<div className="flex items-center gap-4"><img src="src/assets/icons/regionicon.svg" alt="" className="w-7"/>2229 McCullough Rd, Nanaimo, BC, V9S 4M7</div>
			</div>
		)
	}
	return (
		<div className="mx-40">
			<TopNav />
			<hr/>
			<div className="flex justify-between items-center my-10 text-xl font-bold">
				<img src="src/assets/images/logo.png" alt="" />
				<div className="flex gap-10 text-white">
					<Link to="#">SHOWROOM</Link>
					<Link to="#">SERVICES</Link>
					<Link to="#">FINANCING</Link>
					<Link to="#">ABOUT US</Link>
					<Link to="#">CONTACT US!</Link>
				</div>
				<Button title="APPLY FOR FINANCING"/>
			</div>
		</div>
	)
}

export default Header;