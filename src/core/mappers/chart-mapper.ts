import MapperInterface from "./mapper.interface";
import ChartModel from '../models/chart-model';

export default class ChartMapper implements MapperInterface<ChartModel> {
    mapFromJson(json: any): ChartModel {
        return new ChartModel(
            json['id'],
            json['month'],
            json['camp'],
            json['country'],
            json['school'],
            json['lessons'],
        )
    }

    mapFromList(json: any): ChartModel[] {
        const list: ChartModel[] = [];
        if (json) {
            json.forEach((element: any) => {
                list.push(this.mapFromJson(element));
            });
        }

        return list;
    }
}