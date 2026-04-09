"use client";
import React from "react";
import { Radar, IconContainer } from "./ui/radar-effect";
import { FileText, Smartphone, Palette, Wrench, Server, Github, Database } from "lucide-react";

export default function RadarEffectDemo() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Sistem Mimarisi
          </h2>
          <p className="mt-4 text-slate-400 md:text-xl max-w-[700px] mx-auto">
            Gelişmiş radar analizi ile sistem izleme ve entegrasyon çözümleri.
          </p>
        </div>
        <div className="flex min-h-[600px] w-full items-center justify-center bg-black">
          <div className="relative flex h-96 w-full max-w-3xl flex-col items-center justify-center space-y-4 overflow-hidden px-4">
            {/* Row 1 */}
            <div className="mx-auto w-full max-w-3xl">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
                <IconContainer
                  text="Web Development"
                  delay={0.2}
                  icon={<FileText className="h-8 w-8 text-slate-600" />}
                />
                <IconContainer
                  delay={0.4}
                  text="Mobile apps"
                  icon={<Smartphone className="h-8 w-8 text-slate-600" />}
                />
                <IconContainer
                  text="Designing"
                  delay={0.3}
                  icon={<Palette className="h-8 w-8 text-slate-600" />}
                />
              </div>
            </div>
            {/* Row 2 */}
            <div className="mx-auto w-full max-w-md">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
                <IconContainer
                  text="Maintenance"
                  delay={0.5}
                  icon={<Wrench className="h-8 w-8 text-slate-600" />}
                />
                <IconContainer
                  text="Server management"
                  delay={0.8}
                  icon={<Server className="h-8 w-8 text-slate-600" />}
                />
              </div>
            </div>
            {/* Row 3 */}
            <div className="mx-auto w-full max-w-3xl">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
                <IconContainer
                  delay={0.6}
                  text="GitHub Integration"
                  icon={<Github className="h-8 w-8 text-slate-600" />}
                />
                <IconContainer
                  delay={0.7}
                  text="CMS Integration"
                  icon={<Database className="h-8 w-8 text-slate-600" />}
                />
              </div>
            </div>

            <Radar className="absolute -bottom-12" />
            <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
