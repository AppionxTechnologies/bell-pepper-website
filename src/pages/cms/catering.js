import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { config } from '../../config/config';
import './caterring.css'
const apiUrl = config.strapi.url;

export default function Catering() {

    const [data, setData] = useState([]);

    const [data1, setData1] = useState([]);

    const [data2, setData2] = useState([]);


    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/caterings`);
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const fetchData1 = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/catering-footers`, {
                params: {
                    populate: '*'
                }
            });

            setData1(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchData2 = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/catering-footer1s`, {
                params: {
                    populate: '*'
                }
            });

            setData2(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchData1();
        fetchData2();

    }, []);
    return (
        <div>
            <div className='container_fluid'>
                {data.map((item) => (
                    <div key={item.id}>
                        <div className='col-lg-12 text-center'>
                            <div className='row'>
                                <div>
                                    <h6 className='cat-h1-1 '>{item.attributes.catering_title}</h6>
                                    <p className='cat-p2-1 mt-3'>{item.attributes.catering_content}</p>
                                </div>
                                <button className='cat-but mt-2'>{item.attributes.catering_button}</button>

                            </div>
                        </div>
                    </div>))}




                <div className='col-lg-12 catering-body '>
                    <div className='row'>

                        <div className='col-lg-7 mt-5 '>
                            <div className='left-box'>
                                {data1.map((item) => (
                                    <div key={item.id}>
                                        <div className='first-div'>
                                            <h1 className='cat-h1'>{item.attributes.footer_heading}</h1>

                                        </div>
                                    </div>
                                ))}


                                <div className='second_div'>
                                    {data2.map((item) => (
                                        <div key={item.id}>
                                            <div className='content-1'>
                                                <img
                                                    src={`http://localhost:1337${item.attributes.footer_images.data[0].attributes.url}`}
                                                    className="catering-img2"
                                                  
                                                />
                                                <h6 className='cat-h6'>{item.attributes.footer_heading}</h6>
                                                <p className='cat-p3'>{item.attributes.footer_content}</p>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>

                        <div className='col-lg-5 img-div'>
                            {data1.map((item) => (
                                <div key={item.id}>
                                    <img
                                        src={`http://localhost:1337${item.attributes.footer_image.data[0].attributes.formats.medium.url}`}
                                        className="catering-img1"
                                        alt={item.images}
                                    />

                                </div>
                            ))}
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}
