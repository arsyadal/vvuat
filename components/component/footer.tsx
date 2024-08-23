/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CG56J7CGoIG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <footer className="bg-muted py-6 md:py-8 bg-blue-100">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row ">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center" prefetch={false}>
            <MountainIcon className="h-6 w-6 text-blue-500" />
            <span className="sr-only">VVUAT | Jasa Pembuatan No.1 di Indonesia</span>
          </Link>
          <p className="text-xs  text-blue-500 ">&copy; VVUAT | Jasa Pembuatan No.1 di Indonesia . All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 ">
          <Link href="#" aria-label="Twitter" className="text-blue-500 hover:text-blue-600" prefetch={false}>
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="linkedin" className="text-blue-500 hover:text-blue-600" prefetch={false}>
            <LinkedinIcon className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="gitlab" className="text-blue-500 hover:text-blue-600" prefetch={false}>
            <GitlabIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function GitlabIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
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

function TwitterIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
