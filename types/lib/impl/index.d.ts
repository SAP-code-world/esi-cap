/**
 * impl module
 */
export type Service = typeof import("../service").service;
/**
 * impl module
 */
export type ServiceEvents = Service["events"];
/**
 * impl module
 */
export type ServiceEventsKey = keyof ServiceEvents;
export type ServiceEventInterceptor = (oService: object) => Promise<void>;
/**
 * impl module
 * @class
 * @public
 * @typedef {typeof import('../service').service} Service
 * @typedef {Service['events']} ServiceEvents
 * @typedef {keyof ServiceEvents} ServiceEventsKey
 */
/**
 * @callback ServiceEventInterceptor
 * @param {object} oService - Service object for which request to be executed
 * @returns {Promise<void>}
 */
export class impl {
    /**
     * @param {object} oService - Service object for which request to be executed
     * @param {Partial<Record<ServiceEventsKey, ServiceEventInterceptor>>} oEvent
     * @returns {Promise<void>}
     */
    static DBService(oService: object, oEvent: Partial<Record<ServiceEventsKey, ServiceEventInterceptor>>): Promise<void>;
    /**
     * @param {object} oService - Service object for which request to be executed
     * @param {string} sServiceName - Service Name
     * @param {Partial<Record<ServiceEventsKey, ServiceEventInterceptor>>} oEvent
     * @param {string|any[]} oLocalEntities
     * @param {Partial<Record<ServiceEventsKey, ServiceEventInterceptor>>} oRemoteEvent
     * @param {string|any[]} [oRemoteEntities]
     * @param {any[]} [oRemoteHandlers]
     * @param {boolean} bRefreshUserContext
     * @returns {Promise<void>}
     */
    static LocalService(oService: object, sServiceName: string, oEvent?: Partial<Record<ServiceEventsKey, ServiceEventInterceptor>>, oLocalEntities?: string | any[], oRemoteEvent?: Partial<Record<ServiceEventsKey, ServiceEventInterceptor>>, oRemoteEntities?: string | any[], oRemoteHandlers?: any[], bRefreshUserContext?: boolean): Promise<void>;
    /**
     * @param {object} oService - Service object for which request to be executed
     * @param {Partial<Record<ServiceEventsKey, ServiceEventInterceptor>>} oEvent
     * @param {string|any[]} oEntities
     * @param {any[]} [oHandlers]
     * @param {boolean} bRefreshUserContext
     * @returns {Promise<void>}
     */
    static RemoteService(oService: object, oEvent?: Partial<Record<ServiceEventsKey, ServiceEventInterceptor>>, oEntities?: string | any[], oHandlers?: any[], bRefreshUserContext?: boolean): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map