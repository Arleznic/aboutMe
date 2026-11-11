import { asset } from "@/lib/asset";

// Page content, kept in one place so it is easy to edit.

export const site = {
  name: "Nicolas Mogollon",
  greeting: "👋 Hi, I'm Nicolas Mogollon",
  intro:
    "I'm learning web development and enjoy building things for the internet. This page is where I share what I'm working on.",
  // GitHub avatar. Replace the file to use a different photo.
  photo: { src: asset("/sites/aboutme/avatar.jpg"), alt: "Nicolas Mogollon" },
  github: "https://github.com/Arleznic",
};

export type Project = {
  name: string;
  url: string;
  category: string;
  description: string;
  logo: string;
};

export const projects: Project[] = [
  {
    name: "aboutMe",
    url: "https://github.com/Arleznic/aboutMe",
    category: "Personal Website",
    description:
      "This website. Built with Next.js, TypeScript and Tailwind CSS.",
    logo: asset("/sites/aboutme/project-aboutme.svg"),
  },
];
