import { Checkbox } from "antd";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { ReactElement } from "react";

import './lessons-details.scss';
import { TOGGLE_CHART } from "../../../core/store/actions";
import ChartResult from '../../../core/models/chart-result';

const LessonsDetails: React.FC = (): ReactElement => {
    const dispatch = useDispatch();
    const state: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const originalData: ChartResult[] = useSelector((state: RootStateOrAny) => state.originalDataSet);

    const toggleSchool = (event: any, record: ChartResult, index: number) => {        
        originalData[index].checked = event.target.checked;
        if (event.target.checked) {
            state.chartDataSet.splice(index, 0, record);
        } else {            
            state.chartDataSet[index] = null;
        }
        dispatch({type: TOGGLE_CHART, payload: state.chartDataSet});
    }

    return (
        <div className="flex column lessons-details-container" role="container">
            <div>
                {state.totalLessons !== 0 ? <h3>{state.totalLessons} Lessons</h3> : ''}
                {state.selectedCamp && state.totalLessons !== 0 ? <p>in {state.selectedCamp}</p> : ''}
            </div>
            <div className="flex column list" role="list">
                {originalData.map((record, index) => {
                    return(
                        <div className="flex align-center element" key={index}>
                            <Checkbox value={index} checked={record.checked} onChange={(e) => toggleSchool(e, record, index)} />
                            <span style={{color: record?.color}}>
                                <span>
                                    {Object.values(record.months).reduce((a, b) => +a + +b, 0)}
                                </span>
                                lessons <br /> in {record.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LessonsDetails;