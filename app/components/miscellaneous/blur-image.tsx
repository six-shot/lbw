"use client";

import Image from "next/image";
import { useState } from "react";

import type { ComponentProps } from "react";

export default function BlurImage(props: ComponentProps<typeof Image>) {
  const [isLoading, setLoading] = useState(true);
  const mergedClassName = [
    "duration-500 ease-in-out",
    isLoading ? "blur-md" : "blur-0",
    props.className ?? "",
  ]
    .join(" ")
    .trim();

  return (
    <Image
      {...props}
      alt={props.alt}
      className={mergedClassName}
      onLoad={() => {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }}
    />
  );
}


