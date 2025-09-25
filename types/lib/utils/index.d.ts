export namespace date {
    function isValid(sDate: string): Promise<boolean>;
}
export namespace xml {
    export function isValid_1(oXML: object): Promise<boolean>;
    export { isValid_1 as isValid };
}
export namespace json {
    export function isValid_2(oJson: object): boolean;
    export { isValid_2 as isValid };
    export function replace(oJson: object, sOldValue: string, sNewValue: string, oEvaluate?: object): void;
    export function getValue(oJson: object, sPropertyPath: string): any;
    export function unique(oNestedArray: any[]): any[];
    export function order(oJson: object, oKeyOrder: string[]): object;
    export function projection(oJson: object, oColumns: string[], bHasAssociattion?: boolean): object;
    export function map(oJson: object, oMap: object): object;
    export function merge(oJson1: object, oJson2: object): object;
    export function flat(oJson: object, sFlattenedProperty: string): object;
}
export namespace array {
    export function add(oArray: any[], oItem: any): any[];
    export function topN(oSortedArray: any[], iTop: number): any[];
    export function flat_1(oArray: any[], sFlattenedProperty: string): any[];
    export { flat_1 as flat };
    export function unique_1(oArray: any[]): any;
    export { unique_1 as unique };
    export function order_1(oArray: any[], oOrder: string[]): any[];
    export { order_1 as order };
    export function projection_1(oArray: any[], oColumns: string[], bHasAssociattion?: boolean): any[];
    export { projection_1 as projection };
    export function map_1(oArray: any[], oMap: any[]): any[];
    export { map_1 as map };
    export function sort(oArray: any[], oOrderBy: object): any;
    export function filter(oArray: any[], oFilterCondition: {
        /**
         * - The property name to filter by.
         */
        name: string;
        /**
         * - The comparison operator.
         */
        op: "=" | "!=" | ">" | "<" | ">=" | "<=";
        /**
         * - The value to compare against.
         */
        value: string | number | boolean;
    }[]): any[];
    export function hasElement(oArray: any[], oElement: any): any;
    export function toArray(oArray: any): any[];
    export function toDisArray(oArray: any[]): any;
    export function toInterleavedArray(oArray: any[], oElement: any): any[];
    export function toArrayProjection(oArray: any[], sProjectionFieldName: string): any[];
    export function findProperty(oArray: any[], sProjectionFieldName: string): any[];
    export function toGroupByPropertyName(oArray: any[], sPropertyName: string): any[];
    export function toGroupByPropertyList(oArray: any[], oPropertyList: string[]): any[];
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
    private static #instance;
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
