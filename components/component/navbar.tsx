import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="flex flex-col h-screen m-0 p-0">
      <header className="bg-blue-500 text-white py-4 px-6 md:px-8 flex items-center justify-between m-0">
        <Link href="#" className="flex items-center gap-2 m-0" prefetch={false}>
          <MountainIcon className="h-6 w-6" />

          <span className="text-lg font-semibold">Acme Inc</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 m-0">
          <Link href="#" className="hover:underline m-0" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline m-0" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline m-0" prefetch={false}>
            Products
          </Link>
          <Link href="#" className="hover:underline m-0" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="icon" className="md:hidden m-0">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
      <main className="flex-1 m-0 p-0" />
      <nav className="bg-blue-500 text-white py-2 px-4 flex justify-around md:hidden m-0">
        <Link href="#" className="flex flex-col items-center gap-1 m-0" prefetch={false}>
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1 m-0" prefetch={false}>
          <UserIcon className="h-6 w-6" />
          <span className="text-xs">About</span>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1 m-0" prefetch={false}>
          <PackageIcon className="h-6 w-6" />
          <span className="text-xs">Products</span>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1 m-0" prefetch={false}>
          <MailIcon className="h-6 w-6" />
          <span className="text-xs">Contact</span>
        </Link>
      </nav>
    </div>
  );
}

function HomeIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PackageIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
