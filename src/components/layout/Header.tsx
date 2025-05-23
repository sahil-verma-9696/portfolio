"use client";
import { APP_NAME } from "@/constants/app";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail } from "lucide-react";

const navItems = [
  { link: "/", title: "Home" },
  { link: "#about", title: "About" },
  { link: "#projects", title: "Projects" },
  { link: "#contact", title: "Contact" },
];

const socialLinks = [
  {
    icon: <Github size={20} />,
    url: "https://github.com/sahil-verma-9696",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={20} />,
    url: "https://www.linkedin.com/in/sahilverma200",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={20} />,
    url: "mailto:sahils.verma.1000@gmail.com",
    label: "Email",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex flex-col md:flex-row justify-between items-center py-4">
      <h1 className="text-xl font-bold">{APP_NAME}</h1>

      <div className="flex flex-col md:flex-row items-center gap-4 mt-2 md:mt-0">
        {/* Social Links */}
        <div className="flex gap-3 ml-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="hover:opacity-90"
            >
              {social.icon}
            </a>
          ))}
        </div>
        {/* Nav Items */}
        <ul className="flex gap-4">
          {navItems.map((item) => {
            const isActive =
              item.link === "/"
                ? pathname === "/"
                : pathname.includes(item.link);
            return (
              <li key={item.link}>
                <Link
                  className={`hover:underline ${
                    isActive
                      ? "font-semibold underline"
                      : "font-extralight opacity-50"
                  }`}
                  href={item.link}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
