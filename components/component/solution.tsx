export function Solution() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <nav className="ml-auto flex gap-4 sm:gap-6" />
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <img src="/orang.png" alt="Descriptive Alt Text" className="rounded-xl" />
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-blue-500 border border-blue-500">Layanan Kami</div>{" "}
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-500 ">Solusi Khusus untuk Bisnis Anda</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Dari pengembangan web hingga pemasaran digital, kami menawarkan rangkaian layanan komprehensif untuk membantu kesuksesan bisnis Anda.
                  </p>
                </div>
                <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold text-blue-500">Web Development</h3>
                    <p className="text-sm text-muted-foreground">Situs web dan aplikasi web mutakhir yang disesuaikan dengan kebutuhan bisnis Anda.</p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold text-blue-500">Digital Marketing</h3>
                    <p className="text-sm text-muted-foreground">Strategi pemasaran digital yang komprehensif untuk meningkatkan kehadiran online Anda.</p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold text-blue-500">Branding</h3>
                    <p className="text-sm text-muted-foreground">Menciptakan identitas merek yang unik dan mudah diingat untuk bisnis Anda.</p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold text-blue-500">SEO</h3>
                    <p className="text-sm text-muted-foreground">Mengoptimalkan kehadiran bisnis anda di jejaring sosial Anda untuk meningkatkan visibilitas dan mengarahkan lebih banyak pelanggan.</p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold text-blue-500">Social Media</h3>
                    <p className="text-sm text-muted-foreground">Melibatkan dan mengembangkan audiens Anda di platform media sosial.</p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold text-blue-500">Content Creation</h3>
                    <p className="text-sm text-muted-foreground">Buat konten yang menarik dan informatif untuk menunjukkan keahlian Anda.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
