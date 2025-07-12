import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import ProfileCard from "@/components/profile-card";

export default async function Home() {
  return (
    <>
      <section className="z-10 flex w-full max-w-2xl flex-col items-center px-5 xl:px-0">
        <div className="h-16" />
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-extrabold tracking-[-0.01em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[4.5rem]"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          Discover our{" "}
          <span className="bg-gradient-to-br from-black to-stone-500 bg-clip-text">
            Projects
          </span>
        </h1>
        <p
          className="mt-4 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-lg"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Handpicked AI-powered creations, crafted for innovation.
          <br />
          Minimal, modern, and open for exploration.
        </p>
        <div className="mt-10 flex w-full flex-col items-center gap-4">
          <div
            className="flex animate-fade-up items-center gap-2 opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            <span className="text-xs text-gray-400">Always growing</span>
          </div>
        </div>
      </section>
    </>
  );
}
