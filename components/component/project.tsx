"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-dvh bg-blue-100">
      <main className="flex-1">
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-500">Projek Kami</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Berikut beberapa proyek yang pernah kami kerjakan.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative overflow-hidden rounded-lg group w-full sm:w-1/2 lg:w-1/3" onClick={handleCardClick}>
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Project</span>
                </Link>
                <img src="/deduke.png" alt="Project 1" width={400} height={300} className="object-cover w-full h-60" style={{ aspectRatio: "400/300", objectFit: "cover" }} />
                <div className="p-4 bg-background">
                  <Link href="https://dedukeid.com/" target="_blank" rel="noopener noreferrer" prefetch={false}>
                    <h3 className="text-lg font-semibold md:text-xl text-blue-500">dedukeid.com</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground">Aplikasi web untuk product knowledge customer. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-4 rounded-lg">
            <button className="absolute top-2 right-2 text-black" onClick={handleCloseModal}>
              &times;
            </button>
            <img src="/deduke.png" alt="Project 1" className="object-cover w-full h-auto" style={{ maxWidth: "90vw", maxHeight: "90vh" }} />
          </div>
        </div>
      )}
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
