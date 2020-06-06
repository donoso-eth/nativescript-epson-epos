import { Common } from './epson-epos.common';
export declare class EpsonEpos extends Common {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
  message: string;
    constructor();
    public  connect(ip:string) 
    public  addText(text:string) 
    public  disconnect();
    public addTextAlign()
    public beginTransaction() 
    public sendData() 
    public clearCommandBuffer()
    public greet() 

}
