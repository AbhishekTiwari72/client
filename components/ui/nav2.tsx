import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { usePathname } from "next/navigation";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
    href: string;
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  const pathName = usePathname();

  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 py-2 sm:py-2"
      >
        <nav className="px-2">
          <div className={`grid gap-4 ${isCollapsed ? "hidden sm:flex flex-col" : "grid-cols-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5"}`}>
            {links.map((link, index) => (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      buttonVariants({
                        variant: link.href === pathName ? "default" : "ghost",
                        size: "icon",
                      }),
                      "h-9 w-9",
                      link.variant === "default" && "dark:bg-muted dark:text-muted-foreground dark:hover:bg-primary dark:hover:text-white"
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-tertiary">{link.label}</span>
                  )}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </nav>
      </div>
    </TooltipProvider>
  );
}
