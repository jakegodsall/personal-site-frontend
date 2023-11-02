interface Props {
    tag: string;
}

export default function TagItem({ tag }: Props) {
    function getRandomColour() {
        const colours = ["#6941C6", "#3538CD", "#C11574"];
        const randomIndex = Math.floor(Math.random() * colours.length);

        return colours[randomIndex];
    }

    const colour = getRandomColour();

    return (
        <div
            className={`px-[1rem] py-[0.6rem] text-[1.4rem] capitalize text-[${colour}]`}
        >
            {tag}
        </div>
    );
}
