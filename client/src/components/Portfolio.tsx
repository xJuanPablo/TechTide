import React from 'react';
import { PortfolioSection } from '../data/Portfolio';
import Card from './Card';

const Portfolio: React.FC = () => {
  return (
    <section>
        <div className='container'>
            <div className='grid grid-column-12'>
                {PortfolioSection.map((section, index) => (
                    <Card key={index} section={section}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Portfolio;