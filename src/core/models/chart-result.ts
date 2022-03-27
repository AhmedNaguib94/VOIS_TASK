import { Months } from "./months";

export default class ChartResult {
    constructor (
        public months: Months = new Months(),
        public name: string = '',
        public color: string = '',
        public checked: boolean = false
    ) { }
}