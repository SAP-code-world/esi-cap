export namespace impl {
    function DBService(oService: any, oEvent: any): Promise<void>;
    function LocalService(oService: any, sServiceName: any, oEvent?: {}, oLocalEntities?: string, oRemoteEvent?: {}, oRemoteEntities?: any): Promise<void>;
    function RemoteService(oService: any, oEvent?: {}, oEntities?: string): Promise<void>;
}
