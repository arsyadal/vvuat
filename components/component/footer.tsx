import Link from "next/link";

export default function Component() {
  return (
    <footer className="bg-muted py-6 md:py-8 bg-blue-100">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row ">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center" prefetch={false}>
            <span className="sr-only">VVUAT | Jasa Pembuatan No.1 di Indonesia</span>
          </Link>
          <p className="text-xs text-blue-500">&copy; VVUAT | Jasa Pembuatan No.1 di Indonesia. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://api.whatsapp.com/send/?phone=%2B6287742679972&text=Halo+VVUAT.web+saya+mau+konsultasi+website&type=phone_number&app_absent=0"
            aria-label="WhatsApp"
            className="text-blue-500 hover:text-blue-600"
            prefetch={false}
          >
            <WhatsappIcon className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Instagram" className="text-blue-500 hover:text-blue-600" prefetch={false}>
            <InstagramIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function MountainIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function WhatsappIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.72 11.06a1.2 1.2 0 0 0-1.2-1.2h-1.2a1.2 1.2 0 0 0-1.2 1.2v1.2a1.2 1.2 0 0 0 1.2 1.2h1.2a1.2 1.2 0 0 0 1.2-1.2v-1.2zM12 2a10 10 0 0 0-10 10 10 10 0 0 0 1.45 5.18L2 22l4.82-1.45A10 10 0 1 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
