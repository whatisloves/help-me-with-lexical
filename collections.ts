import { CollectionConfig } from "payload";
import { BlocksFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { BannerBlock } from "./src/app/blocks/Banner";
export const Posts: CollectionConfig = {
    slug: "posts",
    admin: {
      defaultColumns: ["title", "slug", "createdAt"],
      useAsTitle: "title",
    },
    fields: [
      {
        name: "title",
        type: "text",
        required: true,
      },
      {
        name: "content",
        type: "richText",
        editor: lexicalEditor({ features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            BlocksFeature({ blocks: [BannerBlock] })
          ]
        } 
      }), 
        required: true,
  
      },
      {
        name: "publishedAt",
        type: "date",
        required: true,
      }
    ]
}