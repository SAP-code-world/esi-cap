export namespace service {
    namespace events {
        let PreBefore: string;
        let PostBefore: string;
        let PreOn: string;
        let PreOnAssociation: string;
        let PostOn: string;
        let PreAfter: string;
        let PostAfter: string;
        let None: string;
    }
    function sanitizeData(oData: any, oFieldsArray: any, includeID?: boolean): any;
    function get(oRequest: any, sServiceName?: any, sEntityName?: any, sFor?: string): Promise<any>;
    function executeRequest(oService: object, oRequest: object): Promise<any>;
    function handleReadByID(oService: any, oRequest: any, oID: any): Promise<any>;
    function handleDeleteByID(oService: any, oRequest: any, oID: any): Promise<any>;
    function handleCreate(oService: object, oRequest: object, fPreInsert?: Function): Promise<any>;
    function handleInsert(oService: object, oRequest: object, fPreInsert?: Function): Promise<any>;
    function handleUpdate(oService: object, oRequest: object, fPreUpdate: Function, oWhere: any, isOldDataRequired?: boolean): Promise<any>;
    function handleCount(oData: object, oRequest: object): Promise<void>;
    namespace iflow {
        function call(oService: object, oRequest: object, oJsonData: object): Promise<void>;
    }
    namespace soap {
        function handleRead(oRequest: object, fNextHandler: any): Promise<any>;
    }
    namespace odata {
        export function handlePostOn(oRequest: object): Promise<any>;
        export function handleRead_1(oRequest: object, fNextHandler: Function): Promise<any>;
        export { handleRead_1 as handleRead };
        export function handleReadForAssociationWithKey(oRequest: object, fNextHandler: Function): Promise<any>;
        export function handleReadForAssociation(oRequest: object, fNextHandler: Function): Promise<any>;
    }
}
