import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export type SocialData = {
  site: string;
  url: string;
  img: React.ComponentType<any>;
};

export type ContactData = {
  method: string;
  info: string;
  to: string;
};

export const SocialLinks: SocialData[] = [
  { site: "GitHub", url: "https://github.com/xJuanPablo", img: FaSquareGithub as any },
  { site: "LinkedIn", url: "https://www.linkedin.com/in/juan-pablo-archuleta/", img: FaLinkedin as any }
];

export const ContactLinks: ContactData [] = [
  {method: "Call:", info: "(254) 624-5415", to: "tel:2546245415"},
  {method: "Email:", info: "Pabloarchuleta@gmail.com", to: "mailto:pabloarchuleta@gmail.com"},
  {method: "Location:", info: "Lubbock, Tx", to: "https://www.google.com/maps/place/Lubbock,+TX/@33.5778174,-101.9729551,12z/data=!3m1!4b1!4m6!3m5!1s0x86fe12add37ddd39:0x1af0042922e84287!8m2!3d33.5845235!4d-101.8552139!16zL20vMDEwNXky?entry=ttu&g_ep=EgoyMDI1MTExNi4wIKXMDSoASAFQAw%3D%3D"}
]