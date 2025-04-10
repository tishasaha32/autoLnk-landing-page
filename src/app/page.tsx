import type { Metadata } from "next";
import Hero from "@/components/hero";
import Header from "@/components/header";
// import Footer from "@/components/footer"
// import Categories from "@/components/categories"
// import Newsletter from "@/components/newsletter"
// import Testimonials from "@/components/testimonials"
// import FeaturedEvents from "@/components/featured-events"

export const metadata: Metadata = {
	title: "AutoLnk - Car Shows & Racing Events",
	description:
		"Join the most exciting car shows, racing events, and automotive experiences with AutoLnk.",
};

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="">
				<Hero />
				{/*<Categories />
        <FeaturedEvents />
        <Testimonials />
        <Newsletter /> */}
			</main>
			{/* <Footer /> */}
		</div>
	);
}
