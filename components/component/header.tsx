"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
library.add(faWhatsapp);


export function Header() {
  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center text-white bg-blue-500">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">VVUAT Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={handleScroll}>
            About
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={handleScroll}>
            Project
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={handleScroll}>
            Pricing
          </Link>
          <Link href="#testimoni" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={handleScroll}>
            Testimoni
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=%2B6287742679972&text=Halo+VVUAT.web+saya+mau+konsultasi+website&type=phone_number&app_absent=0"
            target="_blank"
            className="text-sm font-medium hover:underline underline-offset-4 text-green-400"
            prefetch={false}
          >
            Hubungi Kami
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-500">Jasa Pembuatan Website No.1 di Indonesia</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">Layanan kami dirancang untuk membantu Anda menyederhanakan operasi, meningkatkan produktivitas, dan mendorong pertumbuhan.</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="https://api.whatsapp.com/send/?phone=%2B6287742679972&text=Halo+VVUAT.web+saya+mau+konsultasi+website&type=phone_number&app_absent=0"
                    className="bg-white-500 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-blue-500 border border-blue-500 shadow transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Buat Sekarang
                  </a>
                </div>
              </div>
              <header>
                <img src="/globee.png" width="550" height="550" alt="Hero" className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom w-full h-auto lg:order-last lg:aspect-square" />
              </header>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <img src="/kami.png" alt="Descriptive Alt Text" className="rounded-xl" />
              </div>
              <div>
                <div className="space-y-4 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-500">Kenapa VVUAT?</h2>
                  <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Produk dan layanan kami dirancang untuk membantu Anda mencapai tujuan bisnis Anda.</p>
                </div>
                <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-blue-500 rounded-md p-3 flex items-center justify-center">
                      <GaugeIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Alur Kerja Cepat</h3>
                      <p className="text-muted-foreground">Sederhanakan proses Anda dan tingkatkan produktivitas.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-blue-500 rounded-md p-3 flex items-center justify-center">
                      <ShieldIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Solusi Aman</h3>
                      <p className="text-muted-foreground">Lindungi data Anda dan pastikan aman dari ancaman.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-blue-500 rounded-md p-3 flex items-center justify-center">
                      <BoltIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Terjangkau</h3>
                      <p className="text-muted-foreground">Tak perlu khawatir soal biaya.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-blue-500 rounded-md p-3 flex items-center justify-center">
                      <UsersIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Dedikasi Dukungan</h3>
                      <p className="text-muted-foreground">Dapatkan dukungan yang dipersonalisasi dari para ahli kami..</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <a
  href="https://api.whatsapp.com/send/?phone=%2B6287742679972&text=Halo+VVUAT.web+saya+mau+konsultasi+website&type=phone_number&app_absent=0"
  target="_blank"
  className="fixed bottom-4 left-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center"
>
  <FontAwesomeIcon icon={['fab', 'whatsapp']} className="w-6 h-6 mr-2" /> Tanya dulu
</a>
    </div>
  );
}

function BoltIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function GaugeIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
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

function ShieldIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 12a9.5 9.5 0 1 1-17.8-4.2L2 2l5.8 1.7A9.5 9.5 0 0 1 21.5 12z" />
      <path d="M16.5 15.5c-.5 0-1-.2-1.4-.4l-1.4-.7c-.3-.2-.6-.2-.9 0l-.5.3c-1.2-.6-2.2-1.6-2.8-2.8l.3-.5c.2-.3.2-.6 0-.9l-.7-1.4c-.2-.4-.4-.9-.4-1.4 0-.5.2-1 .6-1.4l.5-.5c.4-.4 1-.6 1.5-.6.5 0 1 .2 1.4.6l.7.7c.4.4.6.9.6 1.4 0 .5-.2 1-.6 1.4l-.5.5c-.2.2-.2.5 0 .7l.7.7c.2.2.5.2.7 0l.5-.5c.4-.4 1-.6 1.4-.6.5 0 1 .2 1.4.6l.7.7c.4.4.6.9.6 1.4 0 .5-.2 1-.6 1.4l-.5.5c-.4.4-.9.6-1.4.6z" />
    </svg>
  );
}
