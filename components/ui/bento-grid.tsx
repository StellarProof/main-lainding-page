import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const BentoGrid = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)}>
    {children}
  </div>
);

const BentoCard = ({ name, className, background, Icon, description, href, cta }: {
  name: string; className: string; background: ReactNode;
  Icon: any; description: string; href: string; cta: string;
}) => (
  <div className={cn(
    "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
    "bg-[#0A0A12] border border-[#06B6D4]/20",
    "dark:[box-shadow:0_-20px_80px_-20px_rgba(6,182,212,0.1)_inset]",
    className
  )}>
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left text-[#06B6D4] transition-all duration-300 group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="max-w-lg text-gray-400">{description}</p>
    </div>
    <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <a href={href} className="pointer-events-auto flex items-center text-sm text-[#06B6D4] hover:underline">
        {cta}<ArrowRightIcon className="ml-2 h-4 w-4" />
      </a>
    </div>
    <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-[#06B6D4]/[.03]" />
  </div>
);

export { BentoCard, BentoGrid };