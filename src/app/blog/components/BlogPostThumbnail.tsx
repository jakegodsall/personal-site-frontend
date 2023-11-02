import Image from "next/image";

import TagItem from "./TagItem";

interface Props {
    createdDate: string;
    title: string;
    description: string;
    imagePath: string;
    tags: string[];
}

export default function BlogPostThumbnail({
    createdDate,
    title,
    description,
    imagePath,
    tags,
}: Props) {
    return (
        <div>
            <Image src={imagePath} alt={title} width="250" height="100" />
            <p>{createdDate}</p>
            <p>{title}</p>
            <p>{description}</p>
            <ul>
                {tags.map((tag) => {
                    console.log(tag);
                    return (
                        <li>
                            <TagItem tag={tag} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
