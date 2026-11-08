import { Banner } from "@/components/banner";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
     
      <Banner />
      <WhyChooseUs></WhyChooseUs>
      <Testimonials/>
      <CallToAction />
      <Footer />
      
    </>
  );
}
