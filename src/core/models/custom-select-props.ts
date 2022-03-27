export default class CustomSelectProps {
    constructor (
        public options: string[] = [],
        public onChange: any,
        public placeholder: string = '',
        public value = ''
    ) { }
}