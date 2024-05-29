import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <main className="container px-4">
			<Header/>
		
		<section className="relative flex place-items-center max-w-7xl w-full mx-auto mt-16">
		<HeroBanner/>
		</section>

		<footer className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
		<Footer/>
		</footer>
    </main>
  );
}
