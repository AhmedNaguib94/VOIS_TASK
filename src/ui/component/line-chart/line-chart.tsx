import { Line } from 'react-chartjs-2';
import { useNavigate } from "react-router-dom";
import { useSelector, RootStateOrAny } from 'react-redux';
import { ReactElement } from 'react';

import './line-chart.scss';
import BaseChart from '../base-chart/base-chart';
import LessonsDetails from '../lessons-details/lessons-details';
import ChartResult from '../../../core/models/chart-result';

const LineChart: React.FC = (): ReactElement => {
    const navigate = useNavigate();
    const data: ChartResult[] = useSelector((state: RootStateOrAny) => state.chartDataSet);    

    const onPointClicked = (event: any, activeElements: any) => {
        localStorage.setItem('selectedSchool', data[activeElements[0].datasetIndex].name);
        localStorage.setItem('selectedMonth', Object.keys(data[activeElements[0].datasetIndex].months)[activeElements[0].index]);
        localStorage.setItem('noOfLessons', String(Object.values(data[activeElements[0].datasetIndex].months)[activeElements[0].index]));
        navigate('/chart-details');
    }

    return (
        <BaseChart>
            <div className="flex line-chart-container wrap" role="line-chart-container">
                <div className="flex chart" role="chart">
                    <Line 
                        role="canvas"
                        data={{
                            // labels: data.chartLabels,
                            datasets: data.map(record => {                        
                                return {
                                    label: record?.name,
                                    data: record?.months,
                                    backgroundColor: record?.color,
                                    borderColor: record?.color
                                }
                            })
                        }} 
                        options={{
                            onClick: onPointClicked
                        }}
                    />
                </div>
                <div className="flex wrap details">
                    <LessonsDetails />
                </div>
            </div>
        </BaseChart>
    )
}

export default LineChart;