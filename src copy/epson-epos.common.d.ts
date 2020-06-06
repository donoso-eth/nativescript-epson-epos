import { Observable } from 'tns-core-modules/data/observable';
export declare class Common extends Observable {
    message: string;
    constructor();
    connect(ip: string): void;
    disconnect(): void;
    addTextAlign(): void;
    beginTransaction(): void;
    sendData(): void;
    clearCommandBuffer(): void;
    addText(text: string): void;
    greet(): string;
}
export declare class Utils {
    static SUCCESS_MSG(): string;
}
