import { FaReact, FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

import {
  SiTailwindcss,
  SiStyledcomponents,
  SiNextdotjs,
  SiFlyway,
  SiPrisma,
  SiZod,
  SiReacthookform,
  SiAuth0,
  SiFastify,
  SiPhp,
  SiSpring,
  SiSqlite,
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";
import { BiKey, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";
import { DiMysql } from "react-icons/di";
import { TbBrandNodejs, TbDeviceMobileCode } from "react-icons/tb";

export enum stacks {
  "FULL-STACK" = "FULL-STACK",
  "BACK-END" = "BACK-END",
  "FRONT-END" = "FRONT-END",
}

export const skill = [
  {
    nome: "JAVASCRIPT",
    icon: <RiJavascriptFill size={24} />,
    stack: stacks["FULL-STACK"],
  },
  {
    nome: "TYPESCRIPT",
    icon: <BiLogoTypescript size={24} />,
    stack: stacks["FULL-STACK"],
  },
  {
    nome: "JAVA",
    icon: <FaJava size={24} />,
    stack: stacks["BACK-END"],
  },
  {
    nome: "PHP",
    icon: <SiPhp size={24} />,
    stack: stacks["FULL-STACK"],
  },
  {
    nome: "SPRING",
    icon: <SiSpring size={24} />,
    stack: stacks["BACK-END"],
  },
  {
    nome: "REACT",
    icon: <FaReact size={24} />,
    stack: stacks["FRONT-END"],
  },
  {
    nome: "NEXT",
    icon: <SiNextdotjs size={24} />,
    stack: stacks["FRONT-END"],
  },

  {
    nome: "TAILWIND",
    icon: <SiTailwindcss size={24} />,
    stack: stacks["FRONT-END"],
  },
  {
    nome: "STYLED COMPONENTS",
    icon: <SiStyledcomponents size={24} />,
    stack: stacks["FRONT-END"],
  },
  {
    nome: "Git",
    icon: <FaGitAlt size={24} />,
    stack: "Outros",
  },
  {
    nome: "GitHub",
    icon: <PiGithubLogoFill size={24} />,
    stack: "Outros",
  },
  {
    nome: "Postgresql",
    icon: <BiLogoPostgresql size={24} />,
    stack: stacks["BACK-END"],
  },
  {
    nome: "MYSQL",
    icon: <DiMysql size={32} />,
    stack: stacks["BACK-END"],
  },
  {
    nome: "SQLite",
    icon: <SiSqlite size={32} />,
    stack: stacks["BACK-END"],
  },
  {
    nome: "PRISMA",
    icon: <SiPrisma size={24} />,
    stack: stacks["BACK-END"],
  },
  {
    nome: "FLYWAY",
    icon: <SiFlyway size={24} />,
    stack: stacks["BACK-END"],
  },
  {
    nome: "NODE",
    icon: <TbBrandNodejs size={24} />,
    stack: stacks["BACK-END"],
  },
  {
    nome: "ZOD",
    icon: <SiZod size={24} />,
    stack: stacks["FRONT-END"],
  },
  {
    nome: "HOOKFORM",
    icon: <SiReacthookform size={24} />,
    stack: stacks["FRONT-END"],
  },
  {
    nome: "CLERK",
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="Clerk--Streamline-Simple-Icons"
        height="24"
        width="24"
      >
        <path
          d="m21.47 20.829 -2.881 -2.881a0.572 0.572 0 0 0 -0.7 -0.084 6.854 6.854 0 0 1 -7.081 0 0.576 0.576 0 0 0 -0.7 0.084l-2.881 2.881a0.576 0.576 0 0 0 -0.103 0.69 0.57 0.57 0 0 0 0.166 0.186 12 12 0 0 0 14.113 0 0.58 0.58 0 0 0 0.239 -0.423 0.576 0.576 0 0 0 -0.172 -0.453Zm0.002 -17.668 -2.88 2.88a0.569 0.569 0 0 1 -0.701 0.084A6.857 6.857 0 0 0 8.724 8.08a6.862 6.862 0 0 0 -1.222 3.692 6.86 6.86 0 0 0 0.978 3.764 0.573 0.573 0 0 1 -0.083 0.699l-2.881 2.88a0.567 0.567 0 0 1 -0.864 -0.063A11.993 11.993 0 0 1 6.771 2.7a11.99 11.99 0 0 1 14.637 -0.405 0.566 0.566 0 0 1 0.232 0.418 0.57 0.57 0 0 1 -0.168 0.448Zm-7.118 12.261a3.427 3.427 0 1 0 0 -6.854 3.427 3.427 0 0 0 0 6.854Z"
          className="fill-zinc-50 hover:fill-primary"
          stroke-width="1"
        ></path>
      </svg>
    ),
    stack: stacks["FULL-STACK"],
  },
  {
    nome: "KEYCLOAK",
    icon: <BiKey size={24} />,
    stack: stacks["BACK-END"],
  },
  {
    nome: "AUTH0",
    icon: <SiAuth0 size={24} />,
    stack: stacks["BACK-END"],
  },
  {
    nome: "FASTIFY",
    icon: <SiFastify size={24} />,
    stack: stacks["BACK-END"],
  },
  {
    nome: "NEST",
    icon: <SiFastify size={24} />,
    stack: stacks["BACK-END"],
  },

  {
    nome: "REACT NATIVE",
    icon: <TbDeviceMobileCode size={24} />,
    stack: "Outros",
  },
];
