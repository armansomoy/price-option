import axios from "axios";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data));

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then( data => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map(phone => {
            const obj ={
                name: phone.phone_name,
                price: parseInt(phone.slug.split('-')[1])
            }
            return obj;
        })
        setPhones(phonesWithFakeData);
        console.log(phonesWithFakeData)
    })
  }, []);
  return <div>
    <h2>Phones :{phones.length} </h2>
    <BarChart width={1200} height={400} data={phones}>
        <Bar dataKey='price' fill="#ffff"></Bar>
        <XAxis dataKey="name">  </XAxis>
    </BarChart>
  </div>;
};

export default Phones;
