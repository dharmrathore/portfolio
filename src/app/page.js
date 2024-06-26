import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="wrapper-site relative">
		<Header/>
		
		<main className=" w-full relative flex place-items-center gap-4 md:gap-10 pt-12 flex-col">
			<Suspense fallback={<p>Loading...</p>}>
				<HeroBanner/>
			</Suspense>
			<Suspense fallback={<p>Loading...</p>}>
				<About/>
			</Suspense>
			<Suspense fallback={<p>Loading...</p>}>
				<Services/>
			</Suspense>
			<Suspense fallback={<p>Loading...</p>}>
				<Resume/>
			</Suspense>
			<Suspense fallback={<p>Loading...</p>}>
				<Projects/>
			</Suspense>
			
		</main>
		<Suspense fallback={<p>Loading...</p>}>
			<Footer/>
		</Suspense>
		
		
    </div>
  );
}
