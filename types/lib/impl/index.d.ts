export type CDSService = {
    /**
     * - Collection of entities served by this service.
     */
    entities: Record<string, any>;
    /**
     * - Executes a given query against the service.
     */
    run: (query: any) => Promise<any>;
    /**
     * - Starts a new transaction.
     */
    tx: (req: any) => CDSServiceTx;
    /**
     * - Alias for the tx method.
     */
    transaction: (req: any) => CDSServiceTx;
    /**
     * - Registers a handler for specific events.
     */
    on: CDSMethod;
    /**
     * - Registers a handler to run before the standard logic.
     */
    before: CDSMethod;
    /**
     * - Registers a handler to run after the standard logic.
     */
    after: CDSAfterMethod;
    /**
     * - Synchronously or asynchronously triggers an event.
     */
    emit: (event: string, data?: any) => Promise<void>;
    /**
     * - Sends a custom action or function call to the service.
     */
    send: (action: string, params?: any) => Promise<any>;
    /**
     * - Deletes records matching the given criteria.
     */
    delete: (entity: string, where: any) => Promise<number>;
};
/**
 * Handles 'on' and 'before' event registrations.
 * Supports both signatures: (event, entities, handler) AND (event, handler).
 */
export type CDSMethod = (event: string | string[], entitiesOrHandler: any | CDSHandler, handler?: CDSHandler) => void;
/**
 * Handles 'after' event registrations.
 * Supports both signatures: (event, entities, handler) AND (event, handler).
 */
export type CDSAfterMethod = (event: string | string[], entitiesOrHandler: any | CDSAfterHandler, handler?: CDSAfterHandler) => void;
export type CDSHandler = (req: any, next: () => Promise<any>) => any | Promise<any>;
export type CDSAfterHandler = (results: any, req: any) => any | Promise<any>;
export type CDSServiceTx = CDSService;
export type ServiceEventInterceptor = (oService: CDSService) => Promise<void>;
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
 * @typedef {Object} CDSService
 * @property {Record<string, any>} entities - Collection of entities served by this service.
 * @property {(query: any) => Promise<any>} run - Executes a given query against the service.
 * @property {(req: any) => CDSServiceTx} tx - Starts a new transaction.
 * @property {(req: any) => CDSServiceTx} transaction - Alias for the tx method.
 * @property {CDSMethod} on - Registers a handler for specific events.
 * @property {CDSMethod} before - Registers a handler to run before the standard logic.
 * @property {CDSAfterMethod} after - Registers a handler to run after the standard logic.
 * @property {(event: string, data?: any) => Promise<void>} emit - Synchronously or asynchronously triggers an event.
 * @property {(action: string, params?: any) => Promise<any>} send - Sends a custom action or function call to the service.
 * @property {(entity: string, where: any) => Promise<number>} delete - Deletes records matching the given criteria.
 */
/**
 * Handles 'on' and 'before' event registrations.
 * Supports both signatures: (event, entities, handler) AND (event, handler).
 * @callback CDSMethod
 * @param {string | string[]} event - The name of the event (e.g., 'READ', 'UPDATE').
 * @param {any | CDSHandler} entitiesOrHandler - Either the target entity/entities or the handler function.
 * @param {CDSHandler} [handler] - The handler function if an entity was provided as the second argument.
 * @returns {void}
 */
/**
 * Handles 'after' event registrations.
 * Supports both signatures: (event, entities, handler) AND (event, handler).
 * @callback CDSAfterMethod
 * @param {string | string[]} event - The name of the event.
 * @param {any | CDSAfterHandler} entitiesOrHandler - Either the target entity or the handler function.
 * @param {CDSAfterHandler} [handler] - The handler function if an entity was provided.
 * @returns {void}
 */
/**
 * @callback CDSHandler
 * @param {any} req - The incoming request object.
 * @param {() => Promise<any>} next - The function to call the next handler in the chain.
 * @returns {any | Promise<any>}
 */
/**
 * @callback CDSAfterHandler
 * @param {any} results - The results from the primary execution.
 * @param {any} req - The incoming request object.
 * @returns {any | Promise<any>}
 */
/**
 * @typedef {CDSService} CDSServiceTx
 */
/**
 * @callback ServiceEventInterceptor
 * @param {CDSService} oService - Service object for which request to be executed
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