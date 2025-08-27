export namespace service {
    namespace events {
        let PreBefore: string;
        let PostBefore: string;
        let PreOn: string;
        let PreOnAssociation: string;
        let PreMeshUp: string;
        let PostOn: string;
        let PreAfter: string;
        let PostAfter: string;
        let None: string;
    }
    function sanitizeData(oData: any, oFieldsArray: any, includeID?: boolean): any;
    function get(oRequest: any, sServiceName?: any, sEntityName?: any, sFor?: string): any;
    function sendQuery(oService: object, oRequest: object, oQuery: object): Promise<any>;
    function executeRequest(oService: object, oRequest: object): Promise<any>;
    namespace iflow {
        function call(oService: object, oRequest: object, oJsonData: object): Promise<void>;
    }
    function handleReadByID(oService: any, oRequest: any, oID: any): Promise<any>;
    function handleDeleteByID(oService: any, oRequest: any, oID: any): Promise<any>;
    function handleCreate(oService: object, oRequest: object, fPreInsert?: Function): Promise<any>;
    function handleInsert(oService: object, oRequest: object, fPreInsert?: Function): Promise<any>;
    function handleUpdate(oService: object, oRequest: object, fPreUpdate: Function, oWhere: any, isOldDataRequired?: boolean): Promise<any>;
    function handleCount(oData: object, oRequest: object): Promise<void>;
    function handleRead(oService: object, oRequest: object, fNextHandler: Function): Promise<any>;
    function handlePostOn(oRequest: object): Promise<any>;
    function handleAction(oService: any, oRequest: any): Promise<any>;
}
