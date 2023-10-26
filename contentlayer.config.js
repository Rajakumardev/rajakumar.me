import { defineDocumentType, makeSource } from 'contentlayer/source-files';


export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.md`,
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        featuredImage: { type: "string", required: true },
        metaDescription: { type: "string", required: true},
    },
    computedFields: {
        url: { type: "string", resolve: (post) => `/posts/${post._raw.flattenedPath}`.toLowerCase() }
    }
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });