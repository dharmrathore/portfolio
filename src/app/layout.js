
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
	weight: "500",
	subsets: ["latin"] ,
	display: "swap",
    variable: "--font-montserrat",
    display: "swap",
});

export const metadata = {
	title: "My Portfolio Dharmendra  Rathore",
	description: "UI Development Library for Google",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
  	);
}
