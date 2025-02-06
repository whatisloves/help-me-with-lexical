import { SerializedEditor, SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { JSXConvertersFunction, LinkJSXConverter, RichText as RichTextWithoutBlocks } from "@payloadcms/richtext-lexical/react";
import { BannerComponent } from "../blocks/Banner";
import { BannerBlock as BannerBlockProps } from "@payload-types";
import { DefaultNodeTypes, SerializedBlockNode, SerializedLinkNode } from "@payloadcms/richtext-lexical";

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<BannerBlockProps> 

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
     ...defaultConverters, 
     blocks: {
        banner: ({ node }) => <BannerComponent {...node.fields} />,
     }
})

type Props = {
    data: SerializedEditorState
} & React.HTMLAttributes<HTMLDivElement>;

const RichText: React.FC<Props> = ({ data, ...rest }) => {
  return <RichTextWithoutBlocks converters={jsxConverters} data={data} />;
}

export default RichText;