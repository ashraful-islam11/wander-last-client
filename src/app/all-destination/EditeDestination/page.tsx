// "use client";

// import { useState, type FormEvent } from "react";
// import { CalendarIcon, PlusIcon, Trash2 } from "lucide-react";


// import { Calendar } from "@/components/ui/calendar";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { cn } from "cn";
// import { format } from "date-fns";


// const initialForm = {
//   name: "",
//   country: "",
//   category: "",
//   price: "",
//   duration: "",
//   departureDate: undefined as Date | undefined,
//   imageUrl: "",
//   description: "",
// };


// import { Button, buttonVariants } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Pencil } from "lucide-react"
// import Link from "next/link"
// import { toast } from "sonner";




// const UpdateDestinationDailogPage = () => {

//       const [form, setForm] = useState(initialForm);
    
//       const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
    
//         if (
//           !form.name ||
//           !form.country || 
//           !form.category ||
//           !form.price ||
//           !form.duration ||
//           !form.departureDate ||
//           !form.imageUrl ||
//           !form.description
//         ) {
//           alert("Please fill in all fields!");
//           return;
//         }
    
      
         
//         // console.log('form data : ', form);
//         setForm(initialForm);
    
//         const res = await fetch('http://localhost:8000/add-destination', {
//             method :  'POST',
//             headers : {
//                 'content-type' : 'application/json'
//             },
//             body: JSON.stringify(form)
//         })
    
//         const data = await res.json()
//         console.log(data);
    
//           toast.success('successfully added destination !')
       
    
//       };
//     return (
//         <section >
//             <Dialog>
//       <form >
//         <DialogTrigger render={<Button variant="outline">
//             <Link
//               href=""
//               className={buttonVariants({
//                 variant: "outline",
//                 size: "sm",
//                 className: "h-8 gap-2 px-3",
//               })}
//             >
//               <Pencil className="size-3.5" aria-hidden="true" />
//               Edit
//             </Link></Button>} />
//         <DialogContent className="flex max-h-[90dvh] flex-col overflow-hidden sm:max-w-2xl">
//           <DialogHeader>
//             <DialogTitle>Update Travel Package</DialogTitle>
//             <DialogDescription>
              
//               Make changes to the travel package details below
//             </DialogDescription>
//           </DialogHeader>
//                <Card className="mx-auto w-full max-w-xl gap-0 rounded-lg p-0 shadow-sm ring-1 ring-slate-200">
//                         <CardContent className="p-5 sm:p-7">
//                           <form
//                             id="destination-form"
//                             onSubmit={handleSubmit}
//                             className="grid grid-cols-1 gap-5 sm:grid-cols-2"
//                           >
//                             {/* Destination Name */}
//                             <div className="flex flex-col gap-2 sm:col-span-2">
//                               <Label htmlFor="name">Destination Name</Label>
//                               <Input
//                                 id="name"
//                                 placeholder="Bali Paradise"
//                                 value={form.name}
//                                 onChange={(e) =>
//                                   setForm({ ...form, name: e.target.value })
//                                 }
//                                 className="h-10 bg-slate-50"
//                               />
//                             </div>
              
//                             {/* Country */}
//                             <div className="flex flex-col gap-2">
//                               <Label htmlFor="country">Country</Label>
//                               <Input
//                                 id="country"
//                                 placeholder="Indonesia"
//                                 value={form.country}
//                                 onChange={(e) =>
//                                   setForm({ ...form, country: e.target.value })
//                                 }
//                                 className="h-10 bg-slate-50"
//                               />
//                             </div>
              
//                             {/* Category */}
//                             <div className="flex flex-col gap-2">
//                               <Label>Category</Label>
//                               <Select
//                                 value={form.category}
//                                 onValueChange={(value) =>
//                                   setForm({ ...form, category: value ?? "" })
//                                 }
//                               >
//                                 <SelectTrigger className="h-10 w-full bg-slate-50">
//                                   <SelectValue placeholder="Select category" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                   {[
//                                     "Beach",
//                                     "Mountain",
//                                     "City",
//                                     "Adventure",
//                                     "Island",
//                                     "Cultural",
//                                   ].map((item) => (
//                                     <SelectItem key={item} value={item}>
//                                       {item}
//                                     </SelectItem>
//                                   ))}
//                                 </SelectContent>
//                               </Select>
//                             </div>
              
//                             {/* Price */}
//                             <div className="flex flex-col gap-2">
//                               <Label htmlFor="price">Price (USD)</Label>
//                               <Input
//                                 id="price"
//                                 type="number"
//                                 placeholder="e.g. 1299"
//                                 value={form.price}
//                                 onChange={(e) =>
//                                   setForm({ ...form, price: e.target.value })
//                                 }
//                                 className="h-10 bg-slate-50"
//                               />
//                             </div>
              
//                             {/* Duration */}
//                             <div className="flex flex-col gap-2">
//                               <Label htmlFor="duration">Duration</Label>
//                               <Input
//                                 id="duration"
//                                 placeholder="e.g. 7 Days / 8 Nights"
//                                 value={form.duration}
//                                 onChange={(e) =>
//                                   setForm({ ...form, duration: e.target.value })
//                                 }
//                                 className="h-10 bg-slate-50"
//                               />
//                             </div>
              
//                             {/* Departure Date */}
//                             <div className="flex flex-col gap-2 sm:col-span-2">
//                               <Label>Departure Date</Label>
//                               <Popover>
//                                 <PopoverTrigger
//                                   render={
//                                     <Button
//                                       type="button"
//                                       variant="outline"
//                                       className={cn(
//                                         "h-10 w-full justify-start bg-slate-50 text-left font-normal",
//                                         !form.departureDate && "text-slate-400"
//                                       )}
//                                     />
//                                   }
//                                 >
//                                   <CalendarIcon className="mr-2 size-4" />
//                                   {form.departureDate
//                                     ? format(form.departureDate, "MM/dd/yyyy")
//                                     : "mm/dd/yyyy"}
//                                 </PopoverTrigger>
//                                 <PopoverContent align="start" className="w-auto p-0">
//                                   <Calendar
//                                     mode="single"
//                                     selected={form.departureDate}
//                                     onSelect={(date) =>
//                                       setForm({ ...form, departureDate: date })
//                                     }
//                                   />
//                                 </PopoverContent>
//                               </Popover>
//                             </div>
              
//                             {/* Image URL */}
//                             <div className="flex flex-col gap-2 sm:col-span-2">
//                               <Label htmlFor="imageUrl">Image URL</Label>
//                               <Input
//                                 id="imageUrl"
//                                 type="url"
//                                 placeholder="https://example.com/image.jpg"
//                                 value={form.imageUrl}
//                                 onChange={(e) =>
//                                   setForm({ ...form, imageUrl: e.target.value })
//                                 }
//                                 className="h-10 bg-slate-50"
//                               />
//                             </div>
              
//                             {/* Description */}
//                             <div className="flex flex-col gap-2 sm:col-span-2">
//                               <Label htmlFor="description">Description</Label>
//                               <Textarea
//                                 id="description"
//                                 rows={4}
//                                 placeholder="Describe the travel experience..."
//                                 value={form.description}
//                                 onChange={(e) =>
//                                   setForm({ ...form, description: e.target.value })
//                                 }
//                                 className="min-h-28 resize-y bg-slate-50"
//                               />
//                             </div>
//                           </form>
//                         </CardContent>
              
//                         <CardFooter className="flex flex-col-reverse gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:justify-end sm:px-7">
//                           <Button
//                             type="button"
//                             variant="outline"
//                             onClick={() => setForm(initialForm)}
//                             className="h-10 w-full gap-2 border-destructive/40 text-destructive hover:bg-destructive/10 sm:w-auto"
//                           >
//                             <Trash2 className="size-4" />
//                             Cancel
//                           </Button>
              
//                           <Button
//                             type="submit"
//                             form="destination-form"
//                             className="h-10 w-full gap-2 bg-[#00a8e8] text-white hover:bg-[#0b95cc] sm:w-auto"
//                           >
//                             <PlusIcon className="size-4" />
//                             Add Travel Package
//                           </Button>
//                         </CardFooter>
//                       </Card>
//         </DialogContent>
//       </form>
//     </Dialog>
            
//         </section>
//     );
// };

// export default UpdateDestinationDailogPage;


"use client";

import { useState, type FormEvent } from "react";

import {
  CalendarIcon,
  Trash2,
  Pencil,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";

import { cn } from "cn";
import { format } from "date-fns";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface IUpdateDestinationType  {
  _id?:string, 
  name: string;
  country: string;
  category: string;
  price: string;
  duration: string;
  departureDate: Date | undefined;
  imageUrl: string;
  description: string;
}






const UpdateDestinationDailogPage = ({destination} : {destination : IUpdateDestinationType} ) => {

  const [form, setForm] = useState(destination);
  const [open, setOpen] = useState(false);
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.country ||
      !form.category ||
      !form.price ||
      !form.duration ||
      !form.departureDate ||
      !form.imageUrl ||
      !form.description
    ) {
      toast.error("Please fill in all fields!");
      return;
    }
    const {_id , ...updatedFormData}  = form ; 
    try {
      const res = await fetch(`http://localhost:8000/destination/${destination._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      if (!res.ok) {
        throw new Error("Failed to update destination");
      }

      const data = await res.json();

      console.log(data);

      toast.success("Successfully update destination!");

      setForm(destination);
      setOpen(false);

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }

    router.refresh()
  };


  return (
    <section>

      <Dialog open={open} onOpenChange={setOpen}>

        <DialogTrigger render = {
                 <Button variant="outline" size="sm" className="h-8 gap-2 px-3">
            <Pencil className="size-3.5" />
            Edit
          </Button>
        }>
         
        </DialogTrigger>


        <DialogContent className="flex max-h-[90dvh] flex-col overflow-hidden sm:max-w-2xl">

          {/* Dialog Header */}
          <DialogHeader className="shrink-0 border-b pb-4">

            <DialogTitle>
              Update Travel Package
            </DialogTitle>

            <DialogDescription>
              Make changes to the travel package details below
            </DialogDescription>

          </DialogHeader>


          {/* Scrollable Form */}
          <form
            id="destination-form"
            onSubmit={handleSubmit}
            className="grid min-h-0 flex-1 grid-cols-1 gap-5 overflow-y-auto py-5 sm:grid-cols-2"
          >

            {/* Destination Name */}
            <div className="flex flex-col gap-2 sm:col-span-2">

              <Label htmlFor="name">
                Destination Name
              </Label>

              <Input
                id="name"
                placeholder="Bali Paradise"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="h-10 bg-slate-50"
              />

            </div>


            {/* Country */}
            <div className="flex flex-col gap-2">

              <Label htmlFor="country">
                Country
              </Label>

              <Input
                id="country"
                placeholder="Indonesia"
                value={form.country}
                onChange={(e) =>
                  setForm({ ...form, country: e.target.value })
                }
                className="h-10 bg-slate-50"
              />

            </div>


            {/* Category */}
            <div className="flex flex-col gap-2">

              <Label>
                Category
              </Label>

              <Select
                value={form.category}
                onValueChange={(value) =>
                  setForm({ ...form, category: value ?? "" })
                }
              >

                <SelectTrigger className="h-10 w-full bg-slate-50">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>

                <SelectContent>

                  {[
                    "Beach",
                    "Mountain",
                    "City",
                    "Adventure",
                    "Island",
                    "Cultural",
                  ].map((item) => (

                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>

                  ))}

                </SelectContent>

              </Select>

            </div>


            {/* Price */}
            <div className="flex flex-col gap-2">

              <Label htmlFor="price">
                Price (USD)
              </Label>

              <Input
                id="price"
                type="number"
                placeholder="e.g. 1299"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
                className="h-10 bg-slate-50"
              />

            </div>


            {/* Duration */}
            <div className="flex flex-col gap-2">

              <Label htmlFor="duration">
                Duration
              </Label>

              <Input
                id="duration"
                placeholder="e.g. 7 Days / 8 Nights"
                value={form.duration}
                onChange={(e) =>
                  setForm({ ...form, duration: e.target.value })
                }
                className="h-10 bg-slate-50"
              />

            </div>


            {/* Departure Date */}
            <div className="flex flex-col gap-2 sm:col-span-2">

              <Label>
                Departure Date
              </Label>

              <Popover>

                <PopoverTrigger render={
                         <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "h-10 w-full justify-start bg-slate-50 text-left font-normal",
                      !form.departureDate && "text-slate-400"
                    )}
                  >

                    <CalendarIcon className="mr-2 size-4" />

                    {form.departureDate
                      ? format(form.departureDate, "MM/dd/yyyy")
                      : "mm/dd/yyyy"}

                  </Button>
                }>
                 
                </PopoverTrigger>


                <PopoverContent align="start" className="w-auto p-0">

                  <Calendar
                    mode="single"
                    selected={form.departureDate}
                    onSelect={(date) =>
                      setForm({ ...form, departureDate: date })
                    }
                  />

                </PopoverContent>

              </Popover>

            </div>


            {/* Image URL */}
            <div className="flex flex-col gap-2 sm:col-span-2">

              <Label htmlFor="imageUrl">
                Image URL
              </Label>

              <Input
                id="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={form.imageUrl}
                onChange={(e) =>
                  setForm({ ...form, imageUrl: e.target.value })
                }
                className="h-10 bg-slate-50"
              />

            </div>


            {/* Description */}
            <div className="flex flex-col gap-2 sm:col-span-2">

              <Label htmlFor="description">
                Description
              </Label>

              <Textarea
                id="description"
                rows={4}
                placeholder="Describe the travel experience..."
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="min-h-28 resize-y bg-slate-50"
              />

            </div>

          </form>


          {/* Dialog Footer */}
          <div className="flex shrink-0 flex-col-reverse gap-3 border-t pt-4 sm:flex-row sm:justify-end">

            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setForm(initialForm);
                setOpen(false);
              }}
              className="h-10 w-full gap-2 sm:w-auto"
            >

              <Trash2 className="size-4" />

              Cancel

            </Button>


            <Button
              type="submit"
              form="destination-form"
              className="h-10 w-full gap-2 bg-[#00a8e8] text-white hover:bg-[#0b95cc] sm:w-auto"
            >

              <Pencil className="size-4" />

              Update Travel Package

            </Button>

          </div>

        </DialogContent>

      </Dialog>

    </section>
  );
};


export default UpdateDestinationDailogPage;

