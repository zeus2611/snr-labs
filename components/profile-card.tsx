import { Linkedin } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Github } from "./shared/icons";
import Image  from "next/image";

export default function Card({
  name,
  description,
  avatar,
  linkedIn,
  github,
  behance,
}: {
  name: string;
  description: string;
  avatar?: string;
  linkedIn?: string;
  github?: string;
  behance?: string;
}) {
  return (
    <div className="relative col-span-1 overflow-hidden rounded-xl border border-gray-200 bg-white px-4 py-6 shadow-md">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Image
          src={avatar || "/default-avatar.png"}
          alt={name}
          width={192}
          height={192}
          className="h-48 w-48 rounded-full object-cover"
        />
        <h2 className="text-center font-display text-xl font-bold text-gray-900 md:text-2xl">
          {name}
        </h2>
        <div className="flex space-x-3">
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {behance && (
            <a
              href={behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
                <img src="/behance.svg" alt="Behance" className="h-5 w-5" />
              </a>
          )}
        </div>
        <div className="prose-sm max-w-md text-center text-gray-600">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  target="_blank"
                  {...props}
                  className="font-medium text-gray-800 underline transition-colors"
                />
              ),
              code: ({ node, ...props }) => (
                <code
                  {...props}
                  // @ts-ignore
                  inline="true"
                  className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                />
              ),
            }}
          >
            {description}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
