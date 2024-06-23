
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
	title: "Portfolio designed development in user interfaces, web design, and front-end development",
	description: "Welcome to UI Developer portfolio of [Dharmendra Rathore] - Explore a curated collection of my focus area [coding, design, UI development, Mobile Responsive,] projects. Discover innovative solutions, creative designs, and professional work that showcases my skills in [React js, JavaScript, Jquery, HTML, CSS, Bootstrap, Tailwind Css]",
	keyword: ["Mobile Responsive", "Resume", "Servies", "Skills", "UI Developer", "Website Design", "Designer", "Coding"],
	author: 'Dharmendra Rathore',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
  	);
}
