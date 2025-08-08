// components/CardLink.js
import Link from "next/link";
import Image from "next/image";

interface CardLinkProps {
  logo: string;
  title: string;
  subtitle: string;
  link: string;
}

export default function CardLink({ logo, title, subtitle, link }: CardLinkProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-[330px] flex flex-col bg-neutral-200 p-2 rounded-2xl hover:bg-secondary-400 hover:cursor-pointer hover:scale-105 transition-all duration-300 items-center">
        <Image
          className="dark:invert"
          src={logo}
          alt={title}
          width={189}
          height={189}
          priority
        />
        <div className="flex flex-col items-center">
          <span className="font-inter text-[28px] text-black italic font-bold">
            {title}
          </span>
          <span className="font-inter text-[20px] text-black italic font-bold">
            {subtitle}
          </span>
        </div>
      </div>
    </Link>
  );
}
