import React, {useEffect, useState} from 'react';
import About from "../components/About";
import BestOfTheDay from "../components/bestOfTheDay";
import axios from "axios";

const fetchData = async () => {
    try {
        const response = await axios.get('../info.json');
        const temp = response.data;
        const currentDate = new Date();
        const dayOfWeek = currentDate.getDay();
        const randomValue = (dayOfWeek + 1) % 5;
        const toShow = temp[randomValue];

        return toShow;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

const PageAbout = () => {
    const [dataToShow, setDataToShow] = useState(null);

    useEffect(() => {
        fetchData().then(result => {
            setDataToShow(result);
        });
    }, []);

    return (
        <div>
            <About />
            {dataToShow && <BestOfTheDay toShow={dataToShow} />}
        </div>
    );
};

export default PageAbout;