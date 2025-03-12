"use client";

import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";

interface TransitionLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function TransitionLink({
    href,
    children,
    className,
    onClick,
}: TransitionLinkProps) {
    const router = useRouter();
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (isTransitioning) return;

        setIsTransitioning(true);
        document.body.classList.add("transitioning");

        setTimeout(() => {
            router.push(href);
            if (onClick) onClick();

            setTimeout(() => {
                document.body.classList.remove("transitioning");
                setIsTransitioning(false);
            }, 200);
        }, 300);
    };

    return (
        <a href={href} className={className} onClick={handleClick}>
            {children}
        </a>
    );
}