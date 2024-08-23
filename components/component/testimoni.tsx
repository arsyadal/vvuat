import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Testimoni() {
  return (
    <section id="testimoni" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center gap-10 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-500">Kata Pelanggan Kami</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Dengarkan pengalaman pelanggan kami yang puas dengan produk dan layanan kami.</p>
        </div>
        <div className="w-full max-w-md">
          <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src="/dudin.jpeg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold text-blue-500">Raihan Nurdiasnyah</h3>
                <p className="text-sm text-muted-foreground">Founder De Duke</p>
              </div>
            </div>
            <blockquote className="text-lg leading-relaxed text-blue-500">
              &quot;Luar biasa! Saya sangat puas dengan hasil website yang dibuat oleh VVUAT. Desainnya elegan dan fungsional, sesuai dengan kebutuhan bisnis saya. Tim mereka sangat profesional, responsif, dan cepat dalam menangani semua
              permintaan saya. Website saya sekarang tidak hanya menarik secara visual, tetapi juga mudah digunakan oleh pengunjung. Terima kasih banyak!&quot;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
