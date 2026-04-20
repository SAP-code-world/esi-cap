export type ServiceEventInterceptor = (oService: object) => Promise<void>;
export type Service = typeof import("../service").service;
export type ServiceEvents = Service["events"];
export type ServiceEventsKey = keyof ServiceEvents;
export type ServieEventsHandler = Partial<Record<ServiceEventsKey, ServiceEventInterceptor>>;
/**
 * impl module
 * @class
 * @public
 */
/**
 * @callback ServiceEventInterceptor
 * @param {object} oService - Service object for which request to be executed
 * @returns {Promise<void>}
 */
/**
 * @typedef {typeof import('../service').service} Service
 * @typedef {Service['events']} ServiceEvents
 * @typedef {keyof ServiceEvents} ServiceEventsKey
 * @typedef {Partial<Record<ServiceEventsKey, ServiceEventInterceptor>>} ServieEventsHandler
 */
export class impl {
    /**
     * @param {object} oService - Service object for which request to be executed
     * @param {ServieEventsHandler} oEvent
     * @returns {Promise<void>}
     */
    static DBService(oService: object, oEvent: ServieEventsHandler): Promise<void>;
    /**
     * @param {object} oService - Service object for which request to be executed
     * @param {string} sServiceName - Service Name
     * @param {ServieEventsHandler} oEvent
     * @param {string|any[]} oLocalEntities
     * @param {ServieEventsHandler} oRemoteEvent
     * @param {string|any[]} [oRemoteEntities]
     * @param {any[]} [oRemoteHandlers]
     * @param {boolean} bRefreshUserContext
     * @returns {Promise<void>}
     */
    static LocalService(oService: object, sServiceName: string, oEvent?: ServieEventsHandler, oLocalEntities?: string | any[], oRemoteEvent?: ServieEventsHandler, oRemoteEntities?: string | any[], oRemoteHandlers?: any[], bRefreshUserContext?: boolean): Promise<void>;
    /**
     * @param {object} oService - Service object for which request to be executed
     * @param {ServieEventsHandler} oEvent
     * @param {string|any[]} oEntities
     * @param {any[]} [oHandlers]
     * @param {boolean} bRefreshUserContext
     * @returns {Promise<void>}
     */
    static RemoteService(oService: object, oEvent?: ServieEventsHandler, oEntities?: string | any[], oHandlers?: any[], bRefreshUserContext?: boolean): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map