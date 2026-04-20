/**
 * impl module
 */
export type ServiceEvents = import("../service").service.events;
export type ServiceEventInterceptor = (oService: object) => Promise<void>;
/**
 * impl module
 * @class
 * @public
 * @typedef {import('../service').service.events} ServiceEvents
 */
/**
 * @callback ServiceEventInterceptor
 * @param {object} oService - Service object for which request to be executed
 * @returns {Promise<void>}
 */
export class impl {
    /**
     * @param {object} oService - Service object for which request to be executed
     * @param {Partial<Record<keyof ServiceEvents, ServiceEventInterceptor>>} oEvent
     * @returns {Promise<void>}
     */
    static DBService(oService: object, oEvent: Partial<Record<keyof ServiceEvents, ServiceEventInterceptor>>): Promise<void>;
    /**
     * @param {object} oService - Service object for which request to be executed
     * @param {string} sServiceName - Service Name
     * @param {Partial<Record<keyof ServiceEvents, ServiceEventInterceptor>>} oEvent
     * @param {string|any[]} oLocalEntities
     * @param {Partial<Record<keyof ServiceEvents, ServiceEventInterceptor>>} oRemoteEvent
     * @param {string|any[]} [oRemoteEntities]
     * @param {any[]} [oRemoteHandlers]
     * @param {boolean} bRefreshUserContext
     * @returns {Promise<void>}
     */
    static LocalService(oService: object, sServiceName: string, oEvent?: Partial<Record<keyof ServiceEvents, ServiceEventInterceptor>>, oLocalEntities?: string | any[], oRemoteEvent?: Partial<Record<keyof ServiceEvents, ServiceEventInterceptor>>, oRemoteEntities?: string | any[], oRemoteHandlers?: any[], bRefreshUserContext?: boolean): Promise<void>;
    /**
     * @param {object} oService - Service object for which request to be executed
     * @param {Partial<Record<keyof ServiceEvents, ServiceEventInterceptor>>} oEvent
     * @param {string|any[]} oEntities
     * @param {any[]} [oHandlers]
     * @param {boolean} bRefreshUserContext
     * @returns {Promise<void>}
     */
    static RemoteService(oService: object, oEvent?: Partial<Record<keyof ServiceEvents, ServiceEventInterceptor>>, oEntities?: string | any[], oHandlers?: any[], bRefreshUserContext?: boolean): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map