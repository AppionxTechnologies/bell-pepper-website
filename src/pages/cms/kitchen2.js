import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { config } from '../../config/config';
import './kitchen.css';

const apiUrl = config.strapi.url;

export default function Kitchen2() {
    const [data, setData] = useState([]);
    const [datas, setDatas] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/kitchen-footer1s`, {
                params: {
                    populate: '*'
                }
            });

            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchDatas = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/kitchen-footers`);
            setDatas(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    useEffect(() => {
        fetchData();
        fetchDatas();
    }, []);

    return (
        <div>
            <div className='col-lg-12 '>
                <div className='row'>
                
                    <div className='col-lg-6 mt-5 '>
                        <div className='left-box'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <div className='first-div'>
                                    <h1 className='kit-h1'>{item.attributes.kitchen_tittle}</h1>
                                    <p className='kit-p1'>{item.attributes.kitchen_content}</p>
                                </div>
                            </div>
                       ) )}
                        <div className='second_div'>
                            {datas.map((item) => (
                                <div key={item.id}>
                                    <div className='content-1'>
                                        <h6 className='kit-h6'>{item.attributes.kitchen_title}</h6>
                                        <p className='kit-p3'>{item.attributes.kitchen_content}</p>
                                    </div>
                                </div>
                              )  )}
                        </div>
                    </div>
                    </div>
                    <div className='col-lg-6 img-div'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img
                                    src={`http://localhost:1337${item.attributes.kitchen_image.data[0].attributes.formats.medium.url}`}
                                    className="kitchen-img2"
                                    alt={item.images}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
