import React from "react";

interface DiscoverItemType {
  images: Array<any>;
  name: string;
}

export default function DiscoverItem({ images, name }: DiscoverItemType) {
  return (
    <div className="discover-item animate__animated animate__fadeIn">
      <div
        className="discover-item__art"
        style={{ backgroundImage: `url(${images[0].url})` }}
      />
      <p className="discover-item__title">{name}</p>
    </div>
  );
}
