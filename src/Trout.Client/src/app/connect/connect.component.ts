import { Component, OnInit } from '@angular/core';
import { ConnectModel } from './connect.model';

@Component({
    selector: 'app-connect',
    templateUrl: './connect.component.html',
    styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

    // Setup default values
    private connectModel: ConnectModel = {
        address: "irc.freenode.net:6667",
        channels: "#trout",
        enableSsl: true,
        name: "trout-user",
        nick: "trout-user",
        realName: "trout-user"
    };

    ngOnInit() {
    }

    connect(event: Event) {
        debugger
    }
}
