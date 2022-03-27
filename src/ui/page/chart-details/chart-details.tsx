import { ReactElement, useEffect, useState } from "react";

import './chart-details.scss';

const ChartDetails: React.FC = (): ReactElement => {
    const [month, setMonth] = useState<string>();
    const [country, setCountry] = useState<string>();
    const [camp, setCamp] = useState<string>();
    const [school, setSchool] = useState<string>();
    const [lessons, setLessons] = useState<string>();

    useEffect(() => {
        setMonth(localStorage.getItem('selectedMonth'));
        setLessons(localStorage.getItem('noOfLessons'));
        setSchool(localStorage.getItem('selectedSchool'));
        setCountry(localStorage.getItem('selectedCountry'));
        setCamp(localStorage.getItem('selectedCamp'));
    }, [])

    return(
        <div className="flex justify-space-between wrap chart-details-container" role="chart-details-container" >
            {country &&<div className="element flex column" role="element">
                <h3>Country</h3>
                <p>{country}</p>
            </div>}
            {camp && <div className="element flex column" role="element">
                <h3>Camp</h3>
                <p>{camp}</p>
            </div>}
            <div className="element flex column" role="element">
                <h3>School</h3>
                <p>{school}</p>
            </div>
            <div className="element flex column" role="element">
                <h3>Month</h3>
                <p>{month}</p>
            </div>
            <div className="element flex column" role="element">
                <h3>No of Lessons</h3>
                <p>{lessons}</p>
            </div>
        </div>
    )
}

export default ChartDetails;