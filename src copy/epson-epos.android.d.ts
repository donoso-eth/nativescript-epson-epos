import { Common } from './epson-epos.common';
export declare class EpsonEpos extends Common {
    printer: com.epson.epos2.printer.Printer;
    context: any;
    connectionListener: any;
    constructor();
    disconnect(): void;
    connect(IP: string): void;
    addTextAlign(): void;
    addText(text: any): void;
    beginTransaction(): void;
    sendData(): void;
    clearCommandBuffer(): void;
    greet(): string;
}
