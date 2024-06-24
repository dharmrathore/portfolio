
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
	title: "Dharmendra Rathore | UI Developer Portfolio - Specializing in Web Design, Front-End Development, and Mobile Responsiveness",
	description: "Welcome to the UI Developer portfolio of Dharmendra Rathore. Explore a curated collection of projects focusing on coding, design, UI development, and mobile responsiveness. Discover innovative solutions, creative designs, and professional work showcasing skills in React.js, JavaScript, jQuery, HTML, CSS, Bootstrap, and Tailwind CSS.",
	keyword: ["Mobile Responsive", "Resume", "Services", "Skills", "UI Developer", "Website Design", "Designer", "Coding"],
	author: "Dharmendra Rathore",
};


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
  	);
}
