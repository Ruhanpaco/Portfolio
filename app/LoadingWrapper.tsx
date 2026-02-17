"use client";

import { useState, useEffect } from "react";
import Loading from "./loading";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Ensure the "Technical Boot" sequence has time to play out
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500); // 2.5 seconds for a premium reveal

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return <>{children}</>;
}
