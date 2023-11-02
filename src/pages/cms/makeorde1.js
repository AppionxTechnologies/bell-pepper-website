import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { config } from '../../config/config';
import './makeorder.css'
const apiUrl = config.strapi.url;

export default function Makeorder1() {

    const [data, setData] = useState([]);
    const [datas, setDatas] = useState([]);
    const [datas1, setDatas1] = useState([]);
    const [datas2, setDatas2] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/makeorder-page1s`, {
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
            const response = await axios.get(`${apiUrl}/api/whybells`, {
                params: {
                    populate: '*'
                }
            });

            setDatas(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchDatas1 = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/getsratrteds`);
            setDatas1(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchDatas2 = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/franchisings`);
            setDatas2(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        fetchData();
        fetchDatas();
        fetchDatas1();
        fetchDatas2();
    }, []);

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='left-box-2 mt-5 '>

                                    <h1 className='order-h1-1 '>{item.attributes.makeorder_heading}</h1>
                                    <h1 className='order-h1-2'>{item.attributes.makeorder_heading1}</h1>

                                    <p className='order-p2-1'>{item.attributes.makeorder_content}</p>
                                    <p className='order-p2-1'>{item.attributes.makeorder_content1}</p>
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

            <h1 className='text-center h1-title'>Why Bell Pepper</h1>

            <div className='sec-body mt-5'>

                {datas.map((item) => (
                    <div key={item.id}>
                        <div className='bell-content'>
                            <div>
                                <img
                                    src={`http://localhost:1337${item.attributes.bell_image.data[0].attributes.url}`}
                                    className="bell_image1"
                                    alt={item.images} />
                            </div>
                            <div>
                                <h6 className='bell-h1-1 '>{item.attributes.bell_heading}</h6>
                                <p className='bell-p2-1'>{item.attributes.bell_content}</p>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>



            {datas1.map((item) => (
                <div key={item.id}>
                    <div className='col-lg-12 text-center mt-5 third_body'>
                        <div className='row'>
                            <h6 className='get-h1-1 '>{item.attributes.get_heading}</h6>
                            <p className='get-p2-1'>{item.attributes.get_content}</p>
                            <button className='get-but'>{item.attributes.get_button}</button>
                        </div>
                    </div>
                </div>
            ))}

           <h1 className='fran-h1 mt-5 '>Our franchising process</h1>
           <div className='fourth_body mt-5'>
            
           {datas2.map((item) => (
                    <div key={item.id}>
                        <div className='franchising_content'>
                            <div>
                                <h1 className='franc-h1-1'>{item.id} .<span className='span-cont'>{item.attributes.franchising_title}</span></h1>
                                <p className='franc-p2-1'>{item.attributes.franchising_content}</p>
                            </div>
                            </div>
                        </div>))}
            
           </div>


        </div>
    )
}

