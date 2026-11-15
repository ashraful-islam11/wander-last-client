"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "sonner";

const navLinks = [
  { label: "Home", href: "/" ,active: true},
  { label: "Add-Destinations", href: "/add-destination" ,active:false},
  { label: "My Bookings", href: "/my-bookings" ,active:false},
  { label: "All-Destinations", href: "/all-destination",active:false },
  
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {data: session} = authClient.useSession() ;
  const user = session?.user ; 

  const handleSignOut = ()=> {
        authClient.signOut() ;
        toast.success('successfully signout compete')
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        {/* Left: navigation links (desktop) / hamburger toggle (mobile) */}
        <div className="flex flex-1 items-center">
          <nav className="hidden md:flex" aria-label="Main navigation">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-neutral-600 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-neutral-100 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Centered brand */}
        <Link
          href="/"
          className="text-xl  font-semibold tracking-tight text-[#15A1BF] sm:text-2xl"
        >
          Wanderlast
        </Link>

        {/* Right: auth actions (desktop) */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Profile
            </Button>

           
              {
                user ?  <Popover>
        <PopoverTrigger render={ <button>
            <Avatar>
                <AvatarImage referrerPolicy="no-referrer" src={user?.image as string} />
                <AvatarFallback className='text-red-500 font-bold bg-green-400'>{user?.name.charAt(0)}</AvatarFallback>
            </Avatar>
           </button> } />

        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle className ="text-green-500 font-bold ">{user?.name}</PopoverTitle>
            <PopoverDescription className='flex gap-3 items-center'>

            
              {user?.email}
       
                <Button onClick={handleSignOut} variant ='destructive' className =' cursor-pointer'>SignOut</Button>
       
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
                        </Popover> : <>

                         <Link href="/login" >
                            <Button variant="outline" size="sm">
                                Login
                            </Button>
                         </Link>     
                              
                        <Link href='sign-UP'>
                           <Button size="sm">Sign Up</Button>
                        </Link>                       
                                      </>
              }
            
         
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <nav className="flex flex-col px-4 pt-3" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-md px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-neutral-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-2 border-t border-neutral-200 px-4 py-4">
            
              <Button variant="outline" className="w-full">
              Login
            </Button>
  
         
             <Button className="w-full">Sign Up</Button>

          </div>
        </div>
      )}
    </header>
  );
}
