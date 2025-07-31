export function log(sServiceName?: any): {
    trace: (oEvent: any, oRequest: any, ...args: any[]) => void;
    debug: (oEvent: any, oRequest: any, ...args: any[]) => void;
    info: (oEvent: any, oRequest: any, ...args: any[]) => void;
    warn: (oEvent: any, oRequest: any, ...args: any[]) => void;
    error: (oEvent: any, oRequest: any, ...args: any[]) => void;
};
