export default interface MapperInterface<T> {
    mapFromJson(json: any): T;
    mapFromList(json: any): T[];
}