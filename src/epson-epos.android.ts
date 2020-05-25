import { Common } from './epson-epos.common';
import { android } from "tns-core-modules/application";
declare let com: any;
const Printer: any = com.epson.epos2.printer.Printer;

export class EpsonEpos extends Common {
    printer: com.epson.epos2.printer.Printer;
    context: any;
    connectionListener: any;

    constructor() {
      super();
      this.context = android.context;

      const myListener = new com.epson.epos2.printer.ReceiveListener({
        onPtrReceive: (param0, parm1, param2, param3) => {
          const info: com.epson.epos2.printer.PrinterStatusInfo = param2;
          console.log(info.getOnline());
          console.log(info.getErrorStatus());
          console.log(info.getConnection());
        },
      });

      const statusListener = new com.epson.epos2.printer.StatusChangeListener({
        onPtrStatusChange: (param0, param1) => {
          console.log("status: " + param1);
          // switch (param1) {
          //   case Printer.:

          //     break;

          //   default:
          //     break;
          // }
        },
      });

      this.connectionListener = new com.epson.epos2.ConnectionListener({
        onConnection: (param0, param1) => {
          console.log("connection: " + param1);
        },
      });

      // = {
      //   onPtrReceive: (info)=> {
      //     console.log(info)
      //   }

      // }

      this.printer = new Printer(Printer.TM_M30, Printer.MODEL_ANK, this.context);
      this.printer.setReceiveEventListener(myListener);
      this.printer.setConnectionEventListener(
        new com.epson.epos2.ConnectionListener({
          onConnection: (param0, param1) => {
            console.log("connection: " + param1);
          },
        })
      );

      this.printer.setStatusChangeEventListener(statusListener);
    }

    disconnect() {
      this.printer.stopMonitor();
      this.printer.disconnect();
    }

    connect(IP: string) {
      // "TCP:192.168.0.16"

      if (this.printer.getStatus().getOnline() !== -3) {
        console.log("already connected");
        return;
      }

      try {
        this.printer.connect(IP, Printer.PARAM_DEFAULT);
        const bb: com.epson.epos2.printer.PrinterStatusInfo = this.printer.getStatus();

        console.log(bb.getOnline());

        this.printer.setInterval(1000);
        this.printer.startMonitor();
      } catch (error) {
        const myError: com.epson.epos2.Epos2Exception = error;
        console.log(myError);
      }
    }

    addTextAlign() {
      this.printer.addTextAlign(Printer.ALIGN_CENTER);
    }

    addText(text) {
      this.printer.addText(text);
    }

    beginTransaction() {
      this.printer.beginTransaction();
    }

    sendData() {
      this.printer.sendData(Printer.PARAM_DEFAULT);
    }

    clearCommandBuffer() {
      this.printer.clearCommandBuffer();
    }

    public greet() {
      return "Hello, pachin pachin pachin";
    }
  }
