import React from "react";
import { PortfolioSection } from "../data/Portfolio";

type CardProps = {
    section: PortfolioSection
}

const Card: React.FC<CardProps> = ({ section }) => {
    return (
    <article className="g-col-4 border rounded">
    <div>
        <header>{section.title}</header>
        <img src="" alt="" />
        <div>
            <button>Learn More</button>
        </div>
    </div>
    </article>
    );
};

export default Card;
