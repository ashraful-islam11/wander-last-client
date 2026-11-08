// "use client";

// import { useState, type FormEvent, type ReactNode } from "react";
// import { format } from "date-fns";
// import { CalendarIcon, CircleCheckIcon, PlusIcon, Trash2 } from "lucide-react";

// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
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

// type FormData = {
//   name: string;
//   country: string;
//   category: string;
//   price: string;
//   duration: string;
//   departureDate?: Date;
//   imageUrl: string;
//   description: string;
// };

// type FormErrors = Partial<Record<keyof FormData, string>>;

// const categories = [
//   "Beach",
//   "Mountain",
//   "City",
//   "Adventure",
//   "Island",
//   "Cultural",
// ];

// const initialFormData: FormData = {
//   name: "",
//   country: "",
//   category: "",
//   price: "",
//   duration: "",
//   departureDate: undefined,
//   imageUrl: "",
//   description: "",
// };

// const fieldStyles =
//   "h-10 rounded-md border-transparent bg-slate-50 px-3 text-sm shadow-none placeholder:text-slate-400 focus-visible:border-ring focus-visible:bg-white";

// function FormField({
//   id,
//   label,
//   error,
//   className,
//   children,
// }: {
//   id: string;
//   label: string;
//   error?: string;
//   className?: string;
//   children: ReactNode;
// }) {
//   return (
//     <div className={cn("flex flex-col gap-2", className)}>
//       <Label
//         htmlFor={id}
//         className={cn(
//           "text-sm font-medium text-slate-700",
//           error && "text-destructive"
//         )}
//       >
//         {label}
//       </Label>
//       {children}
//       {error ? (
//         <p id={`${id}-error`} className="text-xs font-medium text-destructive">
//           {error}
//         </p>
//       ) : null}
//     </div>
//   );
// }

// export default function AddDestinationPage() {
//   const [formData, setFormData] = useState<FormData>(initialFormData);
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [submitted, setSubmitted] = useState(false);

//   const applyChange = (patch: Partial<FormData>) => {
//     setFormData((prev) => ({ ...prev, ...patch }));
//     setErrors((prev) => {
//       const keys = Object.keys(patch) as (keyof FormData)[];
//       if (!keys.some((key) => prev[key])) return prev;
//       const next = { ...prev };
//       keys.forEach((key) => delete next[key]);
//       return next;
//     });
//     setSubmitted(false);
//   };

//   const validate = (data: FormData): FormErrors => {
//     const nextErrors: FormErrors = {};
//     const urlPattern = /^https?:\/\/[^\s]+\.[^\s]+$/i;

//     if (data.name.trim().length < 3) {
//       nextErrors.name = "Destination name must be at least 3 characters.";
//     }
//     if (!data.country.trim()) {
//       nextErrors.country = "Country is required.";
//     }
//     if (!data.category) {
//       nextErrors.category = "Please select a category.";
//     }
//     if (!data.price.trim()) {
//       nextErrors.price = "Price is required.";
//     } else if (Number.isNaN(Number(data.price)) || Number(data.price) <= 0) {
//       nextErrors.price = "Enter a valid price greater than 0.";
//     }
//     if (!data.duration.trim()) {
//       nextErrors.duration = "Duration is required.";
//     }
//     if (!data.departureDate) {
//       nextErrors.departureDate = "Departure date is required.";
//     }
//     if (!data.imageUrl.trim()) {
//       nextErrors.imageUrl = "Image URL is required.";
//     } else if (!urlPattern.test(data.imageUrl.trim())) {
//       nextErrors.imageUrl =
//         "Enter a valid URL starting with http:// or https://.";
//     }
//     if (data.description.trim().length < 10) {
//       nextErrors.description =
//         "Describe the package in at least 10 characters.";
//     }

//     return nextErrors;
//   };

//   const resetForm = () => {
//     setFormData(initialFormData);
//     setErrors({});
//     setSubmitted(false);
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const nextErrors = validate(formData);
//     setErrors(nextErrors);

//     if (Object.keys(nextErrors).length > 0) {
//       setSubmitted(false);
//       document.getElementById(Object.keys(nextErrors)[0])?.focus();
//       return;
//     }

//     console.log("New travel package", {
//       name: formData.name.trim(),
//       country: formData.country.trim(),
//       category: formData.category,
//       price: Number(formData.price),
//       duration: formData.duration.trim(),
//       departureDate: formData.departureDate
//         ? format(formData.departureDate, "yyyy-MM-dd")
//         : null,
//       imageUrl: formData.imageUrl.trim(),
//       description: formData.description.trim(),
//     });

//     setFormData(initialFormData);
//     setErrors({});
//     setSubmitted(true);
//   };

//   const handleCancel = () => {
//     resetForm();
//   };

//   return (
//     <section className="w-full">
//       <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:px-8 md:py-14">
//         <h1 className="mb-6 font-heading text-2xl font-light tracking-tight text-slate-900 sm:mb-8 sm:text-3xl md:text-4xl">
//           Add New Travel Package
//         </h1>

//         <Card className="mx-auto w-full max-w-xl gap-0 rounded-lg p-0 shadow-[0_1px_3px_rgba(15,23,42,0.06)] ring-1 ring-slate-200">
//           <CardContent className="p-5 sm:p-7">
//             {submitted ? (
//               <Alert
//                 role="status"
//                 className="mb-5 border-emerald-200 bg-emerald-50 text-emerald-900 [&>svg]:text-emerald-600"
//               >
//                 <CircleCheckIcon />
//                 <AlertTitle>Travel package added</AlertTitle>
//                 <AlertDescription className="text-emerald-700">
//                   The package details were logged to the console and the form
//                   has been reset.
//                 </AlertDescription>
//               </Alert>
//             ) : null}

//             <form
//               id="add-destination-form"
//               noValidate
//               onSubmit={handleSubmit}
//               className="grid grid-cols-1 gap-5 sm:grid-cols-2"
//             >
//               <FormField
//                 id="name"
//                 label="Destination Name"
//                 error={errors.name}
//                 className="sm:col-span-2"
//               >
//                 <Input
//                   id="name"
//                   placeholder="Bali Paradise"
//                   value={formData.name}
//                   onChange={(event) => applyChange({ name: event.target.value })}
//                   aria-invalid={Boolean(errors.name)}
//                   aria-describedby={errors.name ? "name-error" : undefined}
//                   className={fieldStyles}
//                 />
//               </FormField>

//               <FormField id="country" label="Country" error={errors.country}>
//                 <Input
//                   id="country"
//                   placeholder="Indonesia"
//                   value={formData.country}
//                   onChange={(event) =>
//                     applyChange({ country: event.target.value })
//                   }
//                   aria-invalid={Boolean(errors.country)}
//                   aria-describedby={errors.country ? "country-error" : undefined}
//                   className={fieldStyles}
//                 />
//               </FormField>

//               <FormField id="category" label="Category" error={errors.category}>
//                 <Select
//                   value={formData.category}
//                   onValueChange={(value) =>
//                     applyChange({ category: value ?? "" })
//                   }
//                 >
//                   <SelectTrigger
//                     type="button"
//                     id="category"
//                     aria-invalid={Boolean(errors.category)}
//                     className="h-10 w-full rounded-md border-transparent bg-slate-50 px-3 text-sm data-[size=default]:h-10 data-[size=default]:rounded-md"
//                   >
//                     <SelectValue placeholder="Select category" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {categories.map((category) => (
//                       <SelectItem key={category} value={category}>
//                         {category}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </FormField>

//               <FormField id="price" label="Price (USD)" error={errors.price}>
//                 <Input
//                   id="price"
//                   type="number"
//                   min="0"
//                   step="0.01"
//                   inputMode="decimal"
//                   placeholder="e.g. 1299"
//                   value={formData.price}
//                   onChange={(event) => applyChange({ price: event.target.value })}
//                   aria-invalid={Boolean(errors.price)}
//                   aria-describedby={errors.price ? "price-error" : undefined}
//                   className={fieldStyles}
//                 />
//               </FormField>

//               <FormField
//                 id="duration"
//                 label="Duration"
//                 error={errors.duration}
//               >
//                 <Input
//                   id="duration"
//                   placeholder="e.g. 7 Days / 8 Nights"
//                   value={formData.duration}
//                   onChange={(event) =>
//                     applyChange({ duration: event.target.value })
//                   }
//                   aria-invalid={Boolean(errors.duration)}
//                   aria-describedby={
//                     errors.duration ? "duration-error" : undefined
//                   }
//                   className={fieldStyles}
//                 />
//               </FormField>

//               <FormField
//                 id="departureDate"
//                 label="Departure Date"
//                 error={errors.departureDate}
//                 className="sm:col-span-2"
//               >
//                 <Popover
//                   key={
//                     formData.departureDate
//                       ? formData.departureDate.toISOString()
//                       : "empty"
//                   }
//                 >
//                   <PopoverTrigger
//                     render={
//                       <Button
//                         type="button"
//                         id="departureDate"
//                         variant="outline"
//                         aria-invalid={Boolean(errors.departureDate)}
//                         className={cn(
//                           "h-10 w-full justify-start gap-2 rounded-md border-transparent bg-slate-50 px-3 text-sm font-normal shadow-none hover:bg-slate-100",
//                           formData.departureDate
//                             ? "text-slate-700"
//                             : "text-slate-400"
//                         )}
//                       />
//                     }
//                   >
//                     <CalendarIcon className="size-4 text-slate-400" />
//                     {formData.departureDate
//                       ? format(formData.departureDate, "MM/dd/yyyy")
//                       : "mm/dd/yyyy"}
//                   </PopoverTrigger>
//                   <PopoverContent align="start" className="w-auto p-0">
//                     <Calendar
//                       mode="single"
//                       selected={formData.departureDate}
//                       onSelect={(value) =>
//                         applyChange({
//                           departureDate:
//                             value instanceof Date ? value : undefined,
//                         })
//                       }
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </FormField>

//               <FormField
//                 id="imageUrl"
//                 label="Image URL"
//                 error={errors.imageUrl}
//                 className="sm:col-span-2"
//               >
//                 <Input
//                   id="imageUrl"
//                   type="url"
//                   placeholder="https://example.com/image.jpg"
//                   value={formData.imageUrl}
//                   onChange={(event) =>
//                     applyChange({ imageUrl: event.target.value })
//                   }
//                   aria-invalid={Boolean(errors.imageUrl)}
//                   aria-describedby={
//                     errors.imageUrl ? "imageUrl-error" : undefined
//                   }
//                   className={fieldStyles}
//                 />
//               </FormField>

//               <FormField
//                 id="description"
//                 label="Description"
//                 error={errors.description}
//                 className="sm:col-span-2"
//               >
//                 <Textarea
//                   id="description"
//                   rows={4}
//                   placeholder="Describe the travel experience…"
//                   value={formData.description}
//                   onChange={(event) =>
//                     applyChange({ description: event.target.value })
//                   }
//                   aria-invalid={Boolean(errors.description)}
//                   aria-describedby={
//                     errors.description ? "description-error" : undefined
//                   }
//                   className="min-h-28 resize-y rounded-md border-transparent bg-slate-50 px-3 py-2.5 text-sm shadow-none placeholder:text-slate-400 focus-visible:border-ring focus-visible:bg-white"
//                 />
//               </FormField>
//             </form>
//           </CardContent>

//           <CardFooter className="flex flex-col-reverse items-stretch gap-3 border-t border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-end sm:px-7">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={handleCancel}
//               className="h-10 w-full gap-2 border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive sm:w-auto"
//             >
//               <Trash2 className="size-4" />
//               Cancel
//             </Button>
//             <Button
//               type="submit"
//               form="add-destination-form"
//               className="h-10 w-full gap-2 bg-[#00a8e8] text-white hover:bg-[#0b95cc] sm:w-auto"
//             >
//               <PlusIcon className="size-4" />
//               Add Travel Package
//             </Button>
//           </CardFooter>
//         </Card>
//       </div>
//     </section>
//   );
// }





// "use client";

// import { useState, type FormEvent } from "react";
// import { format } from "date-fns";
// import {
//   CalendarIcon,
//   PlusIcon,
//   Trash2,
//   CheckCircle2,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Calendar } from "@/components/ui/calendar";
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
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { cn } from "cn";

// // Initial Form Data
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

// export default function AddDestinationPage() {
//   // Single useState
//   const [form, setForm] = useState(initialForm);
//   const [errors, setErrors] = useState<string[]>([]);
//   const [submitted, setSubmitted] = useState(false);

//   // Update Function
//   const update = (
//     field: keyof typeof initialForm,
//     value: string | Date | undefined
//   ) => {
//     setForm((current) => {
//       const updatedForm = {
//         ...current,
//         [field]: value,
        
//       };

//         console.log("Form Data:", updatedForm);
//       return updatedForm;
//     });
    

//     setSubmitted(false);
//   };

//   // Reset Function
//   const resetForm = () => {
//     setForm(initialForm);
//     setErrors([]);
//     setSubmitted(false);
//   };

//   // Submit Function
//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const newErrors: string[] = [];

//     if (!form.name.trim()) newErrors.push("Destination Name is required");
//     if (!form.country.trim()) newErrors.push("Country is required");
//     if (!form.category) newErrors.push("Category is required");
//     if (!form.price || Number(form.price) <= 0)
//       newErrors.push("Enter a valid price");
//     if (!form.duration.trim()) newErrors.push("Duration is required");
//     if (!form.departureDate) newErrors.push("Departure Date is required");

//     try {
//       if (!form.imageUrl.trim()) {
//         newErrors.push("Image URL is required");
//       } else {
//         new URL(form.imageUrl);
//         if (!/^https?:$/.test(new URL(form.imageUrl).protocol)) {
//           newErrors.push("Enter a valid HTTP or HTTPS URL");
//         }
//       }
//     } catch {
//       if (form.imageUrl.trim()) {
//         newErrors.push("Enter a valid Image URL");
//       }
//     }

//     if (!form.description.trim())
//       newErrors.push("Description is required");

//     if (newErrors.length > 0) {
//       setErrors(newErrors);
//       setSubmitted(false);
//       return;
//     }

//     console.log("Submitted Travel Package:", {
//       ...form,
//       price: Number(form.price),
//       departureDate: form.departureDate
//         ? format(form.departureDate, "yyyy-MM-dd")
//         : null,
//     });

//     setErrors([]);
//     setSubmitted(true);
//     setForm(initialForm);
//   };

//   return (
//     <section className="w-full">
//       <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:px-8 md:py-14">

//         <h1 className="mb-8 font-heading text-2xl font-light tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
//           Add New Travel Package
//         </h1>

//         <Card className="mx-auto w-full max-w-xl gap-0 rounded-lg p-0 shadow-sm ring-1 ring-slate-200">

//           <CardContent className="p-5 sm:p-7">

//             {/* Success Message */}
//             {submitted && (
//               <Alert className="mb-5 border-emerald-200 bg-emerald-50 text-emerald-900">
//                 <CheckCircle2 className="size-4" />
//                 <AlertTitle>Travel Package Added!</AlertTitle>
//                 <AlertDescription>
//                   Your package has been submitted successfully.
//                 </AlertDescription>
//               </Alert>
//             )}

//             {/* Validation Errors */}
//             {errors.length > 0 && (
//               <Alert variant="destructive" className="mb-5">
//                 <AlertTitle>Please check your form</AlertTitle>
//                 <AlertDescription>
//                   <ul className="list-disc pl-4">
//                     {errors.map((error, index) => (
//                       <li key={index}>{error}</li>
//                     ))}
//                   </ul>
//                 </AlertDescription>
//               </Alert>
//             )}

//             <form
//               id="destination-form"
//               onSubmit={handleSubmit}
//               className="grid grid-cols-1 gap-5 sm:grid-cols-2"
//             >

//               {/* Destination Name */}
//               <div className="flex flex-col gap-2 sm:col-span-2">
//                 <Label htmlFor="name">Destination Name</Label>
//                 <Input
//                   id="name"
//                   placeholder="Bali Paradise"
//                   value={form.name}
//                   onChange={(e) => update("name", e.target.value)}
//                   className="h-10 bg-slate-50"
//                 />
//               </div>

//               {/* Country */}
//               <div className="flex flex-col gap-2">
//                 <Label htmlFor="country">Country</Label>
//                 <Input
//                   id="country"
//                   placeholder="Indonesia"
//                   value={form.country}
//                   onChange={(e) => update("country", e.target.value)}
//                   className="h-10 bg-slate-50"
//                 />
//               </div>

//               {/* Category */}
//               <div className="flex flex-col gap-2">
//                 <Label>Category</Label>
//                 <Select
//                   value={form.category}
//                   onValueChange={(value) => update("category", value ?? "")}
//                 >
//                   <SelectTrigger className="h-10 w-full bg-slate-50">
//                     <SelectValue placeholder="Select category" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {[
//                       "Beach",
//                       "Mountain",
//                       "City",
//                       "Adventure",
//                       "Island",
//                       "Cultural",
//                     ].map((category) => (
//                       <SelectItem key={category} value={category}>
//                         {category}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Price */}
//               <div className="flex flex-col gap-2">
//                 <Label htmlFor="price">Price (USD)</Label>
//                 <Input
//                   id="price"
//                   type="number"
//                   min="0"
//                   placeholder="e.g. 1299"
//                   value={form.price}
//                   onChange={(e) => update("price", e.target.value)}
//                   className="h-10 bg-slate-50"
//                 />
//               </div>

//               {/* Duration */}
//               <div className="flex flex-col gap-2">
//                 <Label htmlFor="duration">Duration</Label>
//                 <Input
//                   id="duration"
//                   placeholder="e.g. 7 Days / 8 Nights"
//                   value={form.duration}
//                   onChange={(e) => update("duration", e.target.value)}
//                   className="h-10 bg-slate-50"
//                 />
//               </div>

//               {/* Departure Date */}
//               <div className="flex flex-col gap-2 sm:col-span-2">
//                 <Label>Departure Date</Label>

//                 <Popover>
//                   <PopoverTrigger
//                     render={
//                       <Button
//                         type="button"
//                         variant="outline"
//                         className={cn(
//                           "h-10 w-full justify-start bg-slate-50 text-left font-normal",
//                           !form.departureDate && "text-muted-foreground"
//                         )}
//                       />
//                     }
//                   >
//                     <CalendarIcon className="mr-2 size-4" />
//                     {form.departureDate
//                       ? format(form.departureDate, "MM/dd/yyyy")
//                       : "mm/dd/yyyy"}
//                   </PopoverTrigger>

//                   <PopoverContent align="start" className="w-auto p-0">
//                     <Calendar
//                       mode="single"
//                       selected={form.departureDate}
//                       onSelect={(date) => update("departureDate", date)}
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>

//               {/* Image URL */}
//               <div className="flex flex-col gap-2 sm:col-span-2">
//                 <Label htmlFor="imageUrl">Image URL</Label>
//                 <Input
//                   id="imageUrl"
//                   type="url"
//                   placeholder="https://example.com/image.jpg"
//                   value={form.imageUrl}
//                   onChange={(e) => update("imageUrl", e.target.value)}
//                   className="h-10 bg-slate-50"
//                 />
//               </div>

//               {/* Description */}
//               <div className="flex flex-col gap-2 sm:col-span-2">
//                 <Label htmlFor="description">Description</Label>
//                 <Textarea
//                   id="description"
//                   rows={4}
//                   placeholder="Describe the travel experience..."
//                   value={form.description}
//                   onChange={(e) => update("description", e.target.value)}
//                   className="min-h-28 resize-y bg-slate-50"
//                 />
//               </div>

//             </form>
//           </CardContent>

//           {/* Buttons */}
//           <CardFooter className="flex flex-col-reverse gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:justify-end sm:px-7">

//             <Button
//               type="button"
//               variant="outline"
//               onClick={resetForm}
//               className="h-10 w-full gap-2 border-destructive/40 text-destructive hover:bg-destructive/10 sm:w-auto"
//             >
//               <Trash2 className="size-4" />
//               Cancel
//             </Button>

//             <Button
//               type="submit"
//               form="destination-form"
//               className="h-10 w-full gap-2 bg-[#00a8e8] text-white hover:bg-[#0b95cc] sm:w-auto"
//             >
//               <PlusIcon className="size-4" />
//               Add Travel Package
//             </Button>

//           </CardFooter>
//         </Card>
//       </div>
//     </section>
//   );
// }




"use client";

import { useState, type FormEvent } from "react";
import { CalendarIcon, PlusIcon, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "cn";
import { format } from "date-fns";
import { toast } from "sonner";


const initialForm = {
  name: "",
  country: "",
  category: "",
  price: "",
  duration: "",
  departureDate: undefined as Date | undefined,
  imageUrl: "",
  description: "",
};

export default function AddDestinationPage() {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
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
      alert("Please fill in all fields!");
      return;
    }

  
     
    // console.log('form data : ', form);
    setForm(initialForm);

    const res = await fetch('http://localhost:8000/add-destination', {
        method :  'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(form)
    })

    const data = await res.json()
    console.log(data);

      toast.success('successfully added destination !')
   

  };

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:px-8 md:py-14">
        <h1 className="mb-8 font-heading text-2xl font-light tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
          Add New Travel Package
        </h1>

        <Card className="mx-auto w-full max-w-xl gap-0 rounded-lg p-0 shadow-sm ring-1 ring-slate-200">
          <CardContent className="p-5 sm:p-7">
            <form
              id="destination-form"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {/* Destination Name */}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <Label htmlFor="name">Destination Name</Label>
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
                <Label htmlFor="country">Country</Label>
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
                <Label>Category</Label>
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
                <Label htmlFor="price">Price (USD)</Label>
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
                <Label htmlFor="duration">Duration</Label>
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
                <Label>Departure Date</Label>
                <Popover>
                  <PopoverTrigger
                    render={
                      <Button
                        type="button"
                        variant="outline"
                        className={cn(
                          "h-10 w-full justify-start bg-slate-50 text-left font-normal",
                          !form.departureDate && "text-slate-400"
                        )}
                      />
                    }
                  >
                    <CalendarIcon className="mr-2 size-4" />
                    {form.departureDate
                      ? format(form.departureDate, "MM/dd/yyyy")
                      : "mm/dd/yyyy"}
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
                <Label htmlFor="imageUrl">Image URL</Label>
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
                <Label htmlFor="description">Description</Label>
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
          </CardContent>

          <CardFooter className="flex flex-col-reverse gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:justify-end sm:px-7">
            <Button
              type="button"
              variant="outline"
              onClick={() => setForm(initialForm)}
              className="h-10 w-full gap-2 border-destructive/40 text-destructive hover:bg-destructive/10 sm:w-auto"
            >
              <Trash2 className="size-4" />
              Cancel
            </Button>

            <Button
              type="submit"
              form="destination-form"
              className="h-10 w-full gap-2 bg-[#00a8e8] text-white hover:bg-[#0b95cc] sm:w-auto"
            >
              <PlusIcon className="size-4" />
              Add Travel Package
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
