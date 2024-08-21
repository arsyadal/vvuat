/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/xPFL59XOymZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button";

export default function Price() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pilih Paket Anda</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Temukan paket sempurna yang sesuai dengan kebutuhan Anda.</p>
        </div>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Starter</h3>
              <p className="text-muted-foreground">Sempurna untuk individu atau tim kecil</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />5 GB storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />1 user
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  Basic features
                </li>
              </ul>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-bold">Rp1.000.000</span>
              </div>
              <Button className="w-full">Pilih Paket</Button>
            </div>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-muted-foreground">For growing teams and small businesses.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  50 GB storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />5 users
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  Advanced features
                </li>
              </ul>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-muted-foreground">For large teams and growing businesses.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  Unlimited storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  Unlimited users
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  Enterprise features
                </li>
              </ul>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
