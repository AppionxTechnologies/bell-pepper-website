import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { config } from '../../config/config';
import './kitchen.css';
import Kitchen1 from './kitchen1';
import Kitchen2 from './kitchen2';

const apiUrl = config.strapi.url;
export default function Kitchen() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/kitchens`, {
                params: {
                    populate: '*'
                }
            });

            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className='body'>
                <div className='container'>
                    {data.map((item) => (
                        <div key={item.id}>
                            <div className='col-lg-12 main-div'>
                                <div className='row'>
                                    <div className='col-lg-6 mt-5'>
                                        <div className='left-cont mt-5'>
                                            <h1 className='kit-h1 '>{item.attributes.kitchen_heading}</h1>
                                            <p className='kit-p1'>{item.attributes.kitchen_content}</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <img
                                            src={`http://localhost:1337${item.attributes.kitchen_image.data[0].attributes.formats.medium.url}`}
                                            className="kitchen-img1"
                                            alt={item.images}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {<Kitchen1 />}
            {<Kitchen2 />}
        </>
    );
}
