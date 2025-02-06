import type { Block } from "payload";
import React from "react";
import type{ BannerBlock as BannerBlockProps } from "@payload-types";
import RichText from "../components/RichText";

const BannerComponent: React.FC<BannerBlockProps> = ({ content }) => {
  return (
    <p className="text-xl leading-relaxed text-purple-900 font-semibold border-l-4 border-purple-300 pl-6">
        <RichText data={content} />
    </p>
  );
};

const BannerBlock: Block = {
    slug: "banner",
    fields: [
        {
            name: "content",
            type: "richText",
            required: true,
        },
    ],
    interfaceName: "BannerBlock",
}

export { BannerBlock, BannerComponent };