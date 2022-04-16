import React from 'react';

import expert1 from '../../../img/export2/testimonials-1.jpg';
import expert2 from '../../../img/export2/testimonials-2.jpg';
import expert3 from '../../../img/export2/testimonials-3.jpg';
import expert4 from '../../../img/export2/testimonials-4.jpg';
import expert5 from '../../../img/export2/testimonials-5.jpg';
import expert6 from '../../../img/export2/testimonials-1.jpg';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'will Smith', img: expert1 },
    { id: 2, name: 'Chris Rock', img: expert2 },
    { id: 3, name: 'Dwayne Rock', img: expert3 },
    { id: 4, name: 'Ronaldo bro', img: expert4 },
    { id: 5, name: 'Stachy Jhoson', img: expert5 },
    { id: 6, name: 'Stachy Jhoson', img: expert6 }
]

const Experts = () => {
    return (
        <div id="experts" className='container'>
            <h2 className='text-primary text-center'>our exports</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;