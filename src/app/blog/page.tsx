import BlogPostThumbnail from "./components/BlogPostThumbnail";

const BLOGPOSTS: BlogPost[] = [
    {
        id: 1,
        lastModifiedDate: "2023-11-01T12:34:56",
        createdDate: "2023-10-01T10:00:00",
        title: "Sample Post 1",
        description: "This is a description for Sample Post 1",
        content: "Content of Sample Post 1 goes here.",
        imagePath: "/blog.jpg",
        tags: ["design", "research", "presentation"],
    },
    {
        id: 2,
        lastModifiedDate: "2023-11-01T13:34:56",
        createdDate: "2023-10-02T10:05:00",
        title: "Sample Post 2",
        description: "This is a description for Sample Post 2",
        content: "Content of Sample Post 2 goes here.",
        imagePath: "/blog.jpg",
        tags: ["design", "research"],
    },
    {
        id: 3,
        lastModifiedDate: "2023-11-01T14:34:56",
        createdDate: "2023-10-03T10:10:00",
        title: "Sample Post 3",
        description: "This is a description for Sample Post 3",
        content: "Content of Sample Post 3 goes here.",
        imagePath: "/blog.jpg",
        tags: ["design", "research"],
    },
    {
        id: 4,
        lastModifiedDate: "2023-11-01T15:34:56",
        createdDate: "2023-10-04T10:15:00",
        title: "Sample Post 4",
        description: "This is a description for Sample Post 4",
        content: "Content of Sample Post 4 goes here.",
        imagePath: "/blog.jpg",
        tags: ["research"],
    },
    {
        id: 5,
        lastModifiedDate: "2023-11-01T16:34:56",
        createdDate: "2023-10-05T10:20:00",
        title: "Sample Post 5",
        description: "This is a description for Sample Post 5",
        content: "Content of Sample Post 5 goes here.",
        imagePath: "/blog.jpg",
        tags: ["design"],
    },
];

interface BlogPost {
    id: number;
    lastModifiedDate: string;
    createdDate: string;
    title: string;
    description: string;
    content: string;
    imagePath: string;
    tags: string[];
}

export default function Blog() {
    return (
        <div className="flex w-full flex-col items-center px-[3.2rem]">
            <ul className="w-full">
                {BLOGPOSTS.map((blogPost: BlogPost) => {
                    return (
                        <li key={blogPost.id}>
                            <BlogPostThumbnail
                                createdDate={blogPost.createdDate}
                                title={blogPost.title}
                                description={blogPost.description}
                                imagePath={blogPost.imagePath}
                                tags={blogPost.tags}
                            ></BlogPostThumbnail>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
