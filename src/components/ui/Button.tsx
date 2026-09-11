import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export function PrimaryButton({ href, children, external, className = "" }: PrimaryButtonProps) {
  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4" />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`btn-primary ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`btn-primary ${className}`}>
      {content}
    </Link>
  );
}

type OutlineButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export function OutlineButton({ href, children, external, className = "" }: OutlineButtonProps) {
  const classes = `btn-outline ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function ExternalLinkText({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-black hover:underline">
      {children}
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
}
