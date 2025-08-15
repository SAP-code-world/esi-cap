export namespace date {
    function isValid(sDate: any): Promise<boolean>;
}
export namespace xml {
    export function isValid_1(oXML: any): Promise<boolean>;
    export { isValid_1 as isValid };
}
export namespace json {
    export function isValid_2(oJson: any): boolean;
    export { isValid_2 as isValid };
    export function getValue(oJson: any, sPropertyPath: any): any;
    export function unique(oNestedArray: any): any;
    export function order(oJson: any, oKeyOrder: any): {};
    export function projection(oJson: any, oColumns: any): any;
    export function map(oJson: any, oMap: any): {};
    export function merge(oJson1: any, oJson2: any): any;
    export function flat(oJson: any, sFlattenedProperty: any): {};
}
export namespace array {
    export function unique_1(oArray: any): any;
    export { unique_1 as unique };
    export function order_1(oArray: any, oOrder: any): any;
    export { order_1 as order };
    export function projection_1(oArray: any, oColumns: any): any;
    export { projection_1 as projection };
    export function map_1(oArray: any, oMap: any): any;
    export { map_1 as map };
    export function sort(oArray: object, oOrderBy: object): any;
    export function hasElement(oArray: any, oElement: any): any;
    export function toArray(oArray: any): any[];
    export function toDisArray(oArray: any): any;
    export function toInterleavedArray(oArray: any, oElement: any): any;
    export function toArrayProjection(oArray: any, sProjectionFieldName: any): any[];
    export function toGroupByPropertyName(oArray: any, sPropertyName: any): any;
    export function toGroupByPropertyList(oArray: any, oPropertyList: any): any;
}
/**
 * UUID handles UUID related API's.
 *
 * @class
 * @public
 */
export class UUID {
    /**
     * Internal configuration — not part of public API.
     *
     * @private
     * @static
     */
    private static "__#1@#instance";
    /** Internal configuration — not part of public API @private @type {object} */
    private _Config;
    /** Returns a UUID representation of the input Json Data
     * @param {object} oJsonData - Json Object that reperesents data for converting it into UUID
     * @returns {string} UUID
     */
    converse(oJsonData: object): string;
    /** Returns a Json Data representation of the input UUID
     * @returns {object} - Json Object that reperesents data generated from UUID
     * @param {string} sUUID - UUID representation of json data
     */
    inverse(sUUID: string): object;
}
export { _LOG };
