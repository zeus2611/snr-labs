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
      <div className="z-10 w-full max-w-2xl px-5 xl:px-0">
        <div className="h-24"/>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          AI-first experiences, built end-to-end
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Leveraging Flutter, Google Cloud, and OpenAI to craft intelligent,
          speech-aware, and beautifully designed apps.
        </p>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        Our Team
      </h1>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {team.map((member) => (
          <ProfileCard
            key={member.name}
            name={member.name}
            description={member.description}
            avatar={member.avatar}
            linkedIn={member.linkedIn}
            github={member.github}
            behance={member.behance}
          />
        ))}
      </div>
    </>
  );
}

const team = [
  {
    name: "Nischay",
    description: "Cloud, Backend & Flutter Developer",
    avatar: "/team/nischay.svg",
    linkedIn: "https://www.linkedin.com/in/nischay-2604/",
    github: "https://github.com/zeus2611/",
  },
  {
    name: "Shivanshu Singh",
    description: "Frontend & Flutter Developer",
    avatar: "/team/shivanshu.jpeg",
    linkedIn: "https://www.linkedin.com/in/shivanshu-singh-4454311b8/",
    github: "https://github.com/Shivanshu97i",
  },
  {
    name: "Rithik Kasera",
    description: "Product Designer",
    avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
    linkedIn: "https://www.linkedin.com/in/rithik-kasera310/",
    behance: "https://www.behance.net/",
  },
];

const features = [
  {
    title: "Beautiful, reusable components",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com), and [Framer Motion](https://framer.com/motion). Used in production on [Dub.co](https://dub.co).",
    large: true,
  },
  {
    title: "Project Delivered",
    description:
      "Built with [Flutter](https://flutter.dev/), [Google Cloud](https://cloud.google.com/), and [OpenAI](https://openai.com/) to power AI-driven apps with seamless performance.",
    demo: <WebVitals 
      projects={3}
    />,
  },
  // {
  //   title: "One-click Deploy",
  //   description:
  //     "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
  //   demo: (
  //     <a href={DEPLOY_URL}>
  //       <Image
  //         src="https://vercel.com/button"
  //         alt="Deploy with Vercel"
  //         width={120}
  //         height={30}
  //         unoptimized
  //       />
  //     </a>
  //   ),
  // },
  {
    title: "Nischay",
    description: "Cloud Engineer",
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Built-in Auth",
    description:
      "Precedent comes with authentication via [Clerk](https://clerk.com/)",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Clerk logo" src="/clerk.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Hooks, utilities, and more",
    description:
      "Precedent offers a collection of hooks, utilities, and `@vercel/og`",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold">useIntersectionObserver</span>
        <span className="font-mono font-semibold">useLocalStorage</span>
        <span className="font-mono font-semibold">useScroll</span>
        <span className="font-mono font-semibold">nFormatter</span>
        <span className="font-mono font-semibold">capitalize</span>
        <span className="font-mono font-semibold">truncate</span>
      </div>
    ),
  },
];
