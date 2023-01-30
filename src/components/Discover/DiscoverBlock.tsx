import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import DiscoverItem from "./DiscoverItem";

interface DiscoverBlockType {
  text: string;
  id: string;
  data: any;
  imagesKey?: any;
  isLoading?: boolean;
}

function scrollContainer(
  id: string,
  { isNegative }: { isNegative?: boolean } = {}
) {
  return () => {
    const scrollableContainer: any = document.getElementById(id);
    const amount = isNegative
      ? -scrollableContainer.offsetWidth
      : scrollableContainer.offsetWidth;

    scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
  };
}

export default function DiscoverBlock({
  text,
  id,
  data,
  isLoading,
  imagesKey = "images",
}: DiscoverBlockType) {
  return (
    <div className="discover-block">
      <div className="discover-block__header">
        <h2>{text}</h2>
        <span />
        {data?.length ? (
          <div className="animate__animated animate__fadeIn">
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={scrollContainer(id, { isNegative: true })}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={scrollContainer(id)}
            />
          </div>
        ) : null}
      </div>
      <div className="discover-block__row" id={id}>
        {!isLoading ? (
          data?.map(({ [imagesKey as number]: images, name }: any) => (
            <DiscoverItem key={name} images={images} name={name} />
          ))
        ) : (
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
}
