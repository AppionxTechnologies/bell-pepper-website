import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { config } from '../../config/config';
import './makeorder.css'
const apiUrl = config.strapi.url;

export default function Makeorder() {


    const [data, setData] = useState([]);
    const [datas1, setDatas1] = useState([]);
    const [datas2, setDatas2] = useState([]);


    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/makeorder-pages`, {
                params: {
                    populate: '*'
                }
            });

            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchDatas1 = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/exclusives`);
            setDatas1(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchDatas2 = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/exclusive-contents`, {
                params: {
                    populate: '*'
                }
            });

            setDatas2(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchDatas1();
        fetchDatas2();
    }, []);

    return (
        <div>
            <div className='body3'>
                {data.map((item) => (
                    <div key={item.id}>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-lg-6 ml-4'>
                                    <div className='left-box1'>

                                        <h1 className='order-h1 '>{item.attributes.makeorder_heading}</h1>
                                        <p className='order-p2'>{item.attributes.makeorder_content}</p>
                                        <button className='makeorder_but'>{item.attributes.makeorder_button}</button>
                                    </div>

                                </div>
                                <div className='col-lg-6'>
                                    <img
                                        src={`http://localhost:1337${item.attributes.makeorder_image.data[0].attributes.formats.medium.url}`}
                                        className="makeorder_image1"
                                        alt={item.images}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className='second_div'>
                {datas1.map((item) => (
                    <div key={item.id}>
                        <div className='col-lg-12 text-center'>
                            <div className='row'>
                                <h1>{item.attributes.exclusive_title}</h1>
                                <h1>{item.attributes.exclusive_heading}</h1>

                            </div>
                        </div>
                    </div>))}


                <div className='second-body'>
                    {datas2.map((item) => (
                        <div key={item.id}>
                      
                            <div className='exclusive-icon'>
                                <img
                                    src={`http://localhost:1337${item.attributes.exclusive_image.data[0].attributes.url}`}
                                    className="exclusive_image1"
                                    alt={item.images}
                                />
                                     <h1 className='ex-h1'>{item.attributes.exclusive_content}</h1>
                            </div>
                            

                        </div>))}



                </div>


            </div>

        </div>
    )
}
