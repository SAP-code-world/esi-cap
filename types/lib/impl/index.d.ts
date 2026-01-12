export namespace impl {
    function DBService(oService: any, oEvent: any): Promise<void>;
    function LocalService(oService: any, sServiceName: any, oEvent?: {}, oLocalEntities?: string, oRemoteEvent?: {}, oRemoteEntities?: any, oRemoteHandlers?: any, bRefreshUserContext?: boolean): Promise<void>;
    function RemoteService(oService: any, oEvent?: {}, oEntities?: string, oHandlers?: any, bRefreshUserContext?: boolean): Promise<void>;
}
