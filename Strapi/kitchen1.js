import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { config } from '../../config/config';
const apiUrl = config.strapi.url;



export default function Kitchen1() {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/kitchen-tittles`, {
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
        <div>

            <div className='container-fluid body'>
                {data.map((item) => (
                    <div key={item.id}>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <img
                                        src={`http://localhost:1337${item.attributes.kitchen_image.data[0].attributes.formats.medium.url}`}
                                        className="kitchen-img1"
                                        alt={item.images}
                                    />
                                </div>
                                <div className='col-lg-6'>
                                <div className='left-cont1 mt-5'>
                                    <h1 className='kit-h1 '>{item.attributes.kitchen_title}</h1>
                                    <p className='kit-p2'>{item.attributes.kitchen_content}</p>
                                    <p className='kit-p2'>{item.attributes.kitchen_content1}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {}


        </div>
    )
}
