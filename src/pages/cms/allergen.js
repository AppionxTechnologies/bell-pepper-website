import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { config } from '../../config/config';
import './allergen.css';
import "bootstrap/dist/css/bootstrap.css";

const apiUrl = config.strapi.url;

export default function Allergen() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/allergens`);
            setData(response.data.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className='body'>
                <div className='col-lg-12 text-center'>
                    <div className='row '>
                        {data.map((item) => (
                            <div key={item.id}>
                                <h1 className='cont-h1'>{item.attributes.allergen_tittle}</h1>
                                <p className='cont-p1 mt-3 '>{item.attributes.content}</p>
                                <button className='but-1 mt-2'>{item.attributes.allregen_button}</button>
                                <p className='cont-p2 mt-3'>{item.attributes.allergin_content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
