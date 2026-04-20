"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ParallaxBackground from "./ParallaxBackground";

export default function SiteThemeController() {
  const pathname = usePathname() || "/";
  const isAdminRoute = pathname.startsWith("/admin");

  useEffect(() => {
    document.body.classList.toggle("admin-site-body", isAdminRoute);
    document.body.classList.toggle("public-site-body", !isAdminRoute);

    return () => {
      document.body.classList.remove("admin-site-body");
      document.body.classList.remove("public-site-body");
    };
  }, [isAdminRoute]);

  return isAdminRoute ? <ParallaxBackground /> : null;
}
