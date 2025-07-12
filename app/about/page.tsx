// pages/about.tsx
import { NextPage } from "next";
import Image from "next/image";
// react-icons imports removed (none are used in this file)
import ProfileCard from "@/components/profile-card";

const techStack = [
  {
    name: "Flutter",
    link: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
  },
  {
    name: "Google Cloud",
    link: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
  },
  {
    name: "OpenAI",
    link: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/technology/openai-wi0oregrfui0s0fg1v899.png/openai-0fcdwnou9mjkm8ygsz64zp.png?_a=DATAdtXyZAA0",
  },
  {
    name: "Deepgram",
    link: "https://svgicons.com/api/ogimage/?id=188206&n=deepgram",
  },
  {
    name: "Next.js",
    link: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
  },
  {
    name: "Tailwind CSS",
    link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "AWS",
    link: "https://img.icons8.com/?size=512&id=wU62u24brJ44&format=png",
  },
  {
    name: "Python",
    link: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },
  {
    name: "Appwrite",
    link: "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg",
  },
  {
    name: "Firebase",
    link: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  {
    name: "Figma",
    link: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
  },
  {
    name: "MongoDB",
    link: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    name: "PostgreSQL",
    link: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  },
  {
    name: "Git",
    link: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    name: "GitHub Actions",
    link: "https://avatars.githubusercontent.com/u/44036562?s=280&v=4",
  },
  {
    name: "Docker",
    link: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  },
  {
    name: "BLoC",
    link: "https://downloads.marketplace.jetbrains.com/files/12129/784054/icon/default.png",
  },
];

const team = [
  {
    name: "Nischay",
    description:
      "Builds scalable backend systems and cross-platform apps. Specializes in Google Cloud, Firebase, and AI integrations.",
    avatar: "/team/nischay.svg",
    linkedIn: "https://www.linkedin.com/in/nischay-2604/",
    github: "https://github.com/zeus2611/",
  },
  {
    name: "Shivanshu Singh",
    description:
      "Focuses on responsive UIs and smooth cross-platform user experiences using Flutter and modern frontend tools.",
    avatar: "/team/shivanshu.jpeg",
    linkedIn: "https://www.linkedin.com/in/shivanshu-singh-4454311b8/",
    github: "https://github.com/Shivanshu97i",
  },
  {
    name: "Rithik Kasera",
    description:
      "Designs clean, user-centric interfaces with a focus on usability and aesthetic balance across platforms.",
    avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
    linkedIn: "https://www.linkedin.com/in/rithik-kasera310/",
    behance: "https://www.behance.net/",
  },
];

const About: NextPage = () => (
  <main className="z-10 mx-auto max-w-4xl space-y-16 px-6 py-16">
    {/* Hero */}
    <section className="justify-center space-y-8 text-center">
      <h1 className="bg-gradient-to-r from-black via-stone-600 to-stone-500 bg-clip-text text-5xl font-extrabold text-transparent">
        About SNR Labs
      </h1>
      <p className="text-lg text-gray-600">
        Building AI-first experiences end-to-end, with Flutter, Google Cloud,
        AWS & OpenAI.
      </p>
      <Image
        src="/about-banner.webp"
        alt="AI Illustration"
        width={1096}
        height={500}
        className="rounded-2xl"
      />
    </section>

    {/* Mission */}
    <section className="space-y-8 text-center">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center gap-2">
          <hr className="w-6 border-t border-gray-300" />
          <span className="text-xl text-gray-400">•</span>
          <hr className="w-6 border-t border-gray-300" />
        </div>
        <h2 className="bg-gradient-to-r from-black via-stone-600 to-stone-500 bg-clip-text text-3xl font-extrabold text-transparent">
          Shaping Tomorrow, Today
        </h2>
        <p className="text-center text-lg text-gray-500">
          We architect cloud-smart frameworks, engineer seamless mobile
          journeys, and weave adaptive AI that intuitively resonates with
          people. Each line of code is a step toward a more empathetic digital
          world.
        </p>
      </div>
    </section>

    {/* Tech Stack */}
    <section className="space-y-8">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center gap-2">
          <hr className="w-6 border-t border-gray-300" />
          <span className="text-xl text-gray-400">•</span>
          <hr className="w-6 border-t border-gray-300" />
        </div>
        <h2 className="bg-gradient-to-r from-black via-stone-600 to-stone-500 bg-clip-text text-3xl font-extrabold text-transparent">
          Our Tech Odyssey
        </h2>
        <p className="text-center text-sm text-gray-500">
          Sleek tools fueling our AI-driven ventures
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {techStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center space-y-2">
            <div className="text-blue-600">
              <Image
                src={tech.link}
                alt={tech.name}
                width={48}
                height={48}
                objectFit="contain"
              />
            </div>
            <span className="text-gray-800">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Team */}
    <section className="space-y-8">
      <div className="space-y-3 text-center">
        <div className="flex items-center justify-center space-x-2">
          <hr className="w-6 border-t border-gray-300" />
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Meet the Team of
          </p>
          <hr className="w-6 border-t border-gray-300" />
        </div>
        <h2 className="bg-gradient-to-r from-black via-stone-600 to-stone-500 bg-clip-text text-3xl font-extrabold text-transparent">
          Passionate Innovators
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
    </section>
  </main>
);

export default About;
