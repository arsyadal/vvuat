import { Button } from "@/components/ui/button";

export default function Price() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-400">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">Pilih Paket Anda</h2>
          <p className="mx-auto max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Temukan paket sempurna yang sesuai dengan kebutuhan Anda.</p>
        </div>
        <div className="w-full max-w-sm">
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Satu Untuk Semua</h3>
              <p className="text-muted-foreground"></p>
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
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-red-500">
                  <del>Rp1.499.000</del>
                </span>
                <span className="text-4xl font-bold">Rp999.000</span>
              </div>
              <Button className="w-full">Pilih Paket</Button>
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
