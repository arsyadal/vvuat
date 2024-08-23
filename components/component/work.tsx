export function Work() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container grid gap-6 lg:grid-cols-2 lg:gap-12 px-4 md:px-6">
        <div className="flex items-center justify-center">
          <img src="/work.png" alt="Descriptive Alt Text" className="rounded-xl" />
        </div>
        <div className="grid items-center justify-center gap-4 text-center lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-blue-500 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cara Kerja Kami</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Di Acme, kami percaya pada pendekatan yang terstruktur namun fleksibel untuk memberikan hasil yang luar biasa bagi klien kami. Proses kami dirancang untuk memastikan kolaborasi yang lancar, penyelesaian masalah yang efisien,
              dan berfokus pada kualitas.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center gap-4 rounded-lg bg-500 p-6 shadow-l border border-blue-500">
              <div className="bg-white rounded-md p-3 flex border-blue-500 items-center justify-center">
                <ClipboardIcon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-blue-500">Discovery</h3>
              <p className="text-blue-500">Kami mulai memahami bisnis, sasaran, dan tantangan Anda secara mendalam. Hal ini memungkinkan kami untuk menyusun solusi khusus yang menjawab kebutuhan Anda.</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg border bg-background p-6 shadow-sm bg-blue-500">
              <div className="bg-secondary rounded-md p-3 flex items-center justify-center">
                <LayersIcon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-white">Design</h3>
              <p className="text-white">Proses desain kami bersifat kolaboratif dan berulang, memastikan bahwa produk akhir tidak hanya tampak hebat tetapi juga memberikan pengalaman pengguna yang baik.</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg border bg-background p-6 shadow-sm">
              <div className="bg-muted rounded-md p-3 flex items-center justify-center">
                <CodeIcon className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Development</h3>
              <p className="text-muted-foreground">Tim pengembang kami yang berpengalaman memanfaatkan teknologi terkini dan praktik terbaik untuk mewujudkan visi Anda, memastikan solusi yang tangguh dan terukur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClipboardIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LayersIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}
