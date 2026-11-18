import { Banner } from "@/components/banner";
import CallToAction from "@/components/CallToAction";
import Featured from "@/components/Featured";

import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
     
      <Banner />
      <Featured />
      <WhyChooseUs></WhyChooseUs>
      <Testimonials/>
      <CallToAction />
     
      
    </>
  );
}
