export namespace date {
    function isValid(sDate: any): Promise<boolean>;
}
export namespace xml {
    export function isValid_1(oXML: any): Promise<boolean>;
    export { isValid_1 as isValid };
}
export namespace json {
    export function isValid_2(oJSON: any): boolean;
    export { isValid_2 as isValid };
    export function getValue(oData: any, sPropertyPath: any): any;
    export function unique(oNestedArray: any): any;
    export function sort(oData: any, oKeyOrder: any): {};
    export function projection(oJson: any, oColumns: any): any;
    export function map(oJson: any, oMap: any): {};
    export function merge(oJson1: any, oJson2: any): any;
    export function flat(oJson: any, sFlattenedProperty: any): {};
}
export namespace array {
    export function unique_1(oArray: any): any;
    export { unique_1 as unique };
    export function sort_1(oArray: any, oSortOrder: any): any;
    export { sort_1 as sort };
    export function projection_1(oArray: any, oColumns: any): any;
    export { projection_1 as projection };
    export function map_1(oArray: any, oMap: any): any;
    export { map_1 as map };
    export function hasElement(oArray: any, oElement: any): any;
    export function toArray(oData: any): any[];
    export function toDisArray(oData: any): any;
    export function toInterleavedArray(oData: any, oElement: any): any;
    export function toArrayProjection(oData: any, sProjectionFieldName: any): any[];
    export function toGroupByPropertyName(oData: any, sPropertyName: any): any;
    export function toGroupByPropertyList(oData: any, oPropertyList: any): any;
}
