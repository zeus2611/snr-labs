"use client";

import { Mail, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="z-10 mx-auto max-w-xl px-6 py-24 text-gray-900">
      <h1 className="text-center text-4xl font-semibold tracking-tight md:text-5xl">
        Let’s build something together
      </h1>
      <p className="mt-4 text-center text-gray-500 md:text-lg">
        Reach out with your ideas, questions, or just to say hi — we’ll respond
        soon.
      </p>

      <form className="mt-12 space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your message"
          required
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-md bg-black px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>

      <section className="mt-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center gap-2">
            <hr className="w-6 border-t border-gray-300" />
            <span className="text-xl text-gray-400">•</span>
            <hr className="w-6 border-t border-gray-300" />
          </div>
          <p className="bg-gradient-to-r from-black via-stone-600 to-stone-500 bg-clip-text text-xl font-extrabold text-transparent">
            Or connect with us on
          </p>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="mailto:hello@snrlabs.com" aria-label="Email">
            <Mail className="h-5 w-5 text-gray-500 transition hover:text-black" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            rel="noreferrer"
          >
            <Linkedin className="h-5 w-5 text-gray-500 transition hover:text-black" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            aria-label="Twitter"
            rel="noreferrer"
          >
            <Twitter className="h-5 w-5 text-gray-500 transition hover:text-black" />
          </a>
        </div>
      </section>
    </div>
  );
}
