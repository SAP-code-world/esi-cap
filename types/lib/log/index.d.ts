export function log(sServiceName?: any): {
    trace: (oEvent: any, oRequest: any, ...oArgs: any[]) => void;
    debug: (oEvent: any, oRequest: any, ...oArgs: any[]) => void;
    info: (oEvent: any, oRequest: any, ...oArgs: any[]) => void;
    warn: (oEvent: any, oRequest: any, ...oArgs: any[]) => void;
    error: (oEvent: any, oRequest: any, ...oArgs: any[]) => void;
    fatal: (oEvent: any, oRequest: any, ...oArgs: any[]) => void;
};
