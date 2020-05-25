import { Component, OnInit } from "@angular/core";
import { EpsonEpos } from 'nativescript-epson-epos';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    printer: EpsonEpos;
    constructor() {
        this.printer = new  EpsonEpos()
        // Use the component constructor to inject providers.
    }

    print() {

        console.log(35)
        try {




        // this.printer.addTextAlign(com.epson.epos2.this.printer.this.Printer.ALIGN_CENTER);
         this.printer.addText("Hello World   ya estoy qui");

        // console.log(8);



         this.printer.addTextAlign();
         this.printer.sendData();
         //this.printer.beginTransaction()
        // this.printer.disconnect();

        } catch (error) {
            console.log(error)

        }

    }


    connect(){

        this.printer.connect("TCP:192.168.0.16");
       // this.printer.sendData()
       // this.printer.sendData();
    }

    disconnect(){
        this.printer.disconnect()
    }
    ngOnInit(): void {
        // Init your component properties here.
    }
}
