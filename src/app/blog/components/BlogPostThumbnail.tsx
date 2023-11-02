import Image from "next/image";

import TagItem from "./TagItem";

import { convertIsoToCustomDateFormat } from "@/utils/dateTimeUtils";
import { create } from "domain";

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
        <div className="mb-[3.5rem]">
            <Image
                src={imagePath}
                alt={title}
                width="250"
                height="100"
                className="mb-[2.4rem] rounded-[0.25rem]"
            />
            <p className="mb-[1.2rem] text-[1.4rem] font-semibold text-[#6941C6]">
                {convertIsoToCustomDateFormat(createdDate)}
            </p>
            <p className="mb-[1.2rem] text-[2.4rem] font-semibold">{title}</p>
            <p className="mb-[2.6rem] text-[1.6rem] leading-[2.4rem] text-[#667075]">
                {description}
            </p>
            <ul className="flex gap-[0.5rem]">
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
