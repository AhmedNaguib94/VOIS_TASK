import { ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import './chart-page.scss';
import { getChartDataApi } from "../../../core/api/chart-api";
import SelectComponent from "../../component/select-component/select-component";
import LineChart from "../../component/line-chart/line-chart";
import { LOADING } from '../../../core/store/actions';
import ChartMapper from '../../../core/mappers/chart-mapper';
import ChartModel from '../../../core/models/chart-model';

const ChartPage: React.FC = (): ReactElement => {
    const dispatch = useDispatch();
    const [apiData, setApiData] = useState<ChartModel[]>([]);
    const chartDataMapper: ChartMapper = new ChartMapper();
    
    useEffect(() => {
        localStorage.removeItem('selectedCamp');
        localStorage.removeItem('selectedCountry');
        dispatch({type: LOADING, payload: true});

        getChartDataApi().then(
            res => {
                setApiData(chartDataMapper.mapFromList(res.data));
                dispatch({type: LOADING, payload: false});
            })
    }, [])

    return (
        <div className="flex column chart-page-container" role="chart-page-container">
            <h1 role="header">Analysis Chart</h1>
            <h3 role="sub-header">Number of Lessons</h3>
            <SelectComponent apiData={apiData} />
            <LineChart />
        </div>
    )
}

export default ChartPage;