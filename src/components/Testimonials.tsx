
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const testimonials = [
  {
    id: 1,
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "Michael Chen",
    location: "Singapore",
    image: "/images/person1.png", 
  },
  {
    id: 2,
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/person2.png", // public/images/ ফোল্ডারের ফাইল নেম বসিয়ে নিন
  },
  {
    id: 3,
    quote:
      '"Exploring Japan during cherry blossom season was a dream come true. Seamless booking, amazing hotels, and top-tier support throughout!"',
    name: "David Smith",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    quote:
      '"The safari experience in Kenya was unforgettable. Seeing the wildlife up close was breathtaking. Best travel agency ever!"',
    name: "Emma Watson",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Header & Navigation Buttons */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 tracking-tight mb-2">
                What Travelers Say
              </h2>
              <p className="text-slate-500 text-sm md:text-base">
                Real experiences from our happy travelers
              </p>
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-full" />
              <CarouselNext className="static translate-y-0 h-10 w-10 border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-full" />
            </div>
          </div>

          {/* Carousel Slider Items */}
          <CarouselContent className="-ml-4">
            {testimonials.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-full md:basis-1/2"
              >
                <div className="bg-white border border-slate-100 rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm h-full">
                  {/* Text Content */}
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <p className="text-slate-800 font-medium text-base md:text-lg leading-relaxed mb-6">
                      {item.quote}
                    </p>
                    <div>
                      <h4 className="text-cyan-500 font-medium text-sm flex items-center gap-1">
                        <span className="inline-block w-3 h-[2px] bg-cyan-500"></span>
                        {item.name}
                      </h4>
                      <p className="text-slate-400 text-xs ml-4">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Traveler Image */}
                  <div className="relative w-full md:w-48 h-56 md:h-56 shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}