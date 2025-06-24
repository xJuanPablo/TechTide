import Card from "../assets/images/hero-image.jpg"

export type PortfolioSection = {
    title: string;
    image: string;
}

export const PortfolioSection: PortfolioSection[] = [
    {title: "TechTide", image: Card},
    {title: "Express Extract", image: Card},
    {title: "WindWhisper", image: Card},
    {title: "Day Scheduler", image: Card}
]