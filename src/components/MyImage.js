import React from 'react';
import Image from "next/image";

export default function MyImage({ src, layout, height, width }) {
    return (
        <Image
          src={src}
          layout={layout}
          alt="Picture of the author"
          width={!width ? "100%" : width}
          height={!height ? "100%" : height}
        />
      );
}
