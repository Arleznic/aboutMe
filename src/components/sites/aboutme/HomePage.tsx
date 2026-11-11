import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import { projects, site } from "./content";

const underlineLink =
  "border-b border-b-transparent duration-300 hover:border-b-[rgb(0_157_206)]";

export function HomePage() {
  return (
    <div className="mm-site">
      <header className="mm-contain flex justify-between py-6">
        <Link className="text-2xl" href="/">
          👋
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <a className="mm-link" href="#projects">
            Projects
          </a>
          <a className="mm-link" href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>

      <main>
        <section className="py-24 sm:py-36">
          <div className="mm-contain grid grid-cols-2 items-center gap-6 sm:gap-12">
            {/* flex gap, not space-y: the paragraph is hidden on mobile and must not leave a margin */}
            <div className="flex flex-col gap-6 text-right">
              <h1 className="text-3xl font-bold">{site.greeting}</h1>
              <p className="hidden sm:block">{site.intro}</p>
            </div>
            <div className="relative aspect-[5/6] w-full">
              {/* multiply blends the photo's white background into the blue panel */}
              <Image
                src={site.photo.src}
                alt={site.photo.alt}
                fill
                preload
                sizes="(max-width: 480px) 170px, (max-width: 1024px) 350px, 450px"
                className="z-10 rounded-[6px] object-cover object-center mix-blend-multiply"
              />
              <div className="absolute bottom-0 h-[85%] w-full rounded-[6px] bg-[rgb(217_244_255)]" />
            </div>
            <p className="col-span-2 text-center sm:hidden">{site.intro}</p>
          </div>
        </section>

        <section className="py-24 sm:py-36" id="projects">
          <div className="mm-contain space-y-12">
            <div className="space-y-3 text-center">
              <h2 className="text-2xl font-bold">Projects</h2>
              <p>These are the things you&apos;ll find me working on.</p>
            </div>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.name} className="mm-card space-y-6 rounded-[8px] bg-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1.5">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 ${underlineLink}`}
                        href={project.url}
                      >
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        <LinkIcon size={18} strokeWidth={2.5} aria-hidden />
                      </a>
                      <p className="text-sm text-[rgb(156_163_175)]">{project.category}</p>
                    </div>
                    <div className="relative h-10 w-10">
                      <Image
                        src={project.logo}
                        alt={project.name}
                        fill
                        sizes="50px"
                        unoptimized={project.logo.endsWith(".svg")}
                        className="rounded-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12">
        <div className="mm-contain text-center opacity-50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
