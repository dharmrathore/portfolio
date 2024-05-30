import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <div className=" px-4 wrapper-site  max-w-7xl w-full mx-auto ">
		<Header/>
		
		<main className="relative flex place-items-center mt-16 gap-4 md:gap-10 pt-12 flex-col">
			<HeroBanner/>
			<About/>
		</main>

		<footer className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
			<Footer/>
		</footer>
    </div>
  );
}
