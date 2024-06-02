import { ButtonProps } from "../types/type";

const Button: React.FC<ButtonProps> = ({ title }) => {
    return <div><button className="bg-[#BF9550] text-white text-lg font-bold uppercase px-5 py-2 rounded-full">{title}</button></div>;
};

export default Button;