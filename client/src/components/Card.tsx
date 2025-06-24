import React from "react";
import { PortfolioSection } from "../data/Portfolio";

type CardProps = {
    section: PortfolioSection
}

const Card: React.FC<CardProps> = ({ section }) => {
    return (
    <article className="g-col-12 g-col-md-6 g-col-xl-4 px-3 border rounded shadow">
    <div>
        <h3 className="text-center py-3">{section.title}</h3>
        <img src={section.image} alt="" className="img-fluid border rounded"/>
        <div className="d-flex justify-content-center">
            <div className="mt-3 mb-4">
                <button className="btn btn-secondary">Learn More</button>
            </div>
        </div>
    </div>
    </article>
    );
};

export default Card;
