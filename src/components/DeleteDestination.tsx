'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from "next/link";
import { cn } from "@/lib/utils";
import {Button, buttonVariants } from "./ui/button";
import { Trash2 } from "lucide-react";
import { redirect,  } from "next/navigation";

const DeleteDestination = ( {id} :{id : string}) => {

 
 
    console.log(id);
    
   const handleDestinationDelete = async ()=> {
      
    const res = await fetch(`http://localhost:8000/destination/${id}`, {
        method: 'DELETE'
    })
    const data = await res.json() ;
    console.log(data);
    redirect('/all-destination')
     
   }

    return (
        <section>
            <AlertDialog>
                <AlertDialogTrigger render={
                     <Button>
                         <Link
                              href="#"
                              className={cn(
                                buttonVariants({
                                  variant: "outline",
                                  size: "sm",
                                  className: "h-8 gap-2 px-3",
                                }),
                                "border-red-200 text-red-500 hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                              )}
                            >
                            <Trash2 className="size-3.5" aria-hidden="true" />
                              Cancel 
                            </Link>
                     </Button>
                     }>
                           
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        from our servers.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDestinationDelete}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            
        </section>
    );
};

export default DeleteDestination;