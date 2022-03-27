import { ReactElement, useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import SelectOptions from "../../../core/models/select-options";
import CustomSelect from "../../shared-component/custom-select/custom-select";
import { Months } from "../../../core/models/months";
import { SET_CAMP, SET_CHART_DATA, SET_COUNTRY, SET_SCHOOL, SET_TOTAL_LESSONS } from "../../../core/store/actions";
import ChartModel from "../../../core/models/chart-model";
import ChartResult from "../../../core/models/chart-result";
import { FunctionHelper } from "../../../core/helper/function-helper";

let selectedDataCountries: ChartModel[] = [];

const SelectComponent: React.FC<any> = ({apiData}): ReactElement => {
    let schoolMonths: {[key: string]: ChartResult} = {};
    let totalLessons: number = 0;
    const selectOptionsData: SelectOptions = new SelectOptions();
    const dispatch = useDispatch();
    const state = useSelector((state: RootStateOrAny) => state);
    const [schools, setSchools] = useState<Set<string>>(new Set<string>());
    const [camps, setCamps] = useState<Set<string>>(new Set<string>());
    const [countries, setCountries] = useState<Set<string>>(new Set<string>());

    useEffect(() => {
        apiData?.forEach((ele: ChartModel) => {
            selectOptionsData.schools.add(ele.school);
            selectOptionsData.camps.add(ele.camp);
            selectOptionsData.countries.add(ele.country);
        });
        setSchools(selectOptionsData.schools);
        setCamps(selectOptionsData.camps);
        setCountries(selectOptionsData.countries);
    }, [apiData])

    const onSelectCountry = (event: any): void => {
        const dataSource: ChartModel[] =  apiData;
        selectedDataCountries = [];
        schoolMonths = {};
        totalLessons = 0;
        dataSource.forEach((record: ChartModel) => {
            if (record.country === event.target.value) {
                if (!schoolMonths[record.school]){
                    schoolMonths[record.school] = {name: record.school , checked: true, color: FunctionHelper.generateColor(),  "months":new Months()}
                }
                schoolMonths[record.school]["months"][record.month] += record.lessons;
                totalLessons += record.lessons;
                selectedDataCountries.push(record);
            }
        })
        console.log(schoolMonths);
        
        dispatch({type: SET_CHART_DATA, payload: schoolMonths});
        dispatch({type: SET_COUNTRY, payload: event.target.value});
        dispatch({type: SET_TOTAL_LESSONS, payload: totalLessons});
        localStorage.setItem('selectedCountry', event.target.value);
    }

    const onSelectCamp = (event: any): void => {
        const dataSource: ChartModel[] = selectedDataCountries?.length > 0 ? selectedDataCountries : apiData;
        selectedDataCountries = [];
        schoolMonths = {};
        totalLessons = 0;
        dataSource.forEach(record => {
            if (record.camp === event.target.value) {
                if (!schoolMonths[record.school]){
                    schoolMonths[record.school] = {name: record.school , checked: true, color: FunctionHelper.generateColor(), "months":new Months()}
                }
                schoolMonths[record.school]["months"][record.month] += record.lessons;
                totalLessons += record.lessons;
                selectedDataCountries.push(record);
            }
        })
        dispatch({type: SET_CHART_DATA, payload: schoolMonths});
        dispatch({type: SET_CAMP, payload: event.target.value});
        dispatch({type: SET_TOTAL_LESSONS, payload: totalLessons});
        localStorage.setItem('selectedCamp', event.target.value);
    }

    const onSelectSchool = (event: any): void => {
        const dataSource: ChartModel[] = selectedDataCountries?.length > 0 ? selectedDataCountries : apiData;
        schoolMonths = {};
        totalLessons = 0;
        dataSource.forEach(record => {
            if (record.school === event.target.value) {
                if (!schoolMonths[record.school]){
                    schoolMonths[record.school] = {name: record.school , checked: true, color: FunctionHelper.generateColor(), "months":new Months()}
                }
                schoolMonths[record.school]["months"][record.month] += record.lessons;
                totalLessons += record.lessons;
            } else if (event.target.value === '') {
                if (!schoolMonths[record.school]){
                    schoolMonths[record.school] = {name: record.school, checked: true, color: FunctionHelper.generateColor(), "months":new Months()}
                }
                schoolMonths[record.school]["months"][record.month] += record.lessons;
                totalLessons += record.lessons;
            }
            
        })
        dispatch({type: SET_CHART_DATA, payload: schoolMonths});
        dispatch({type: SET_SCHOOL, payload: event.target.value});
        dispatch({type: SET_TOTAL_LESSONS, payload: totalLessons});
    }

    return(
        <div className="flex align-center wrap" role="select-component-container">
            <label role="title">Select Country</label>
            <CustomSelect 
                options={[...countries]}
                onChange={onSelectCountry}
                placeholder="Select Country"
                value={state.selectedCountry}
            />
            <label>Select Camp</label>
            <CustomSelect 
                options={[...camps]}
                onChange={onSelectCamp}
                placeholder="Select Camp"
                value={state.selectedCamp}
            />
            <label>Select School</label>
            <CustomSelect 
                options={[...schools]}
                onChange={onSelectSchool}
                placeholder="Show All"
                value={state.selectedSchool}
            />
        </div>
    )
}

export default SelectComponent;
