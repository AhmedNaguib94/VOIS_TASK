import axios from "./base-api";

export const getChartDataApi = () => 
    axios({
        method: 'get',
        url: `https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json`
    })
