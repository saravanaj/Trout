import { Component, OnInit } from '@angular/core';
import { ConnectOptions } from './connect.options';
import { environment } from '../../environments/environment';
import "jquery";
import "signalr";

declare let $: JQueryStatic;

@Component({
    selector: 'app-connect',
    templateUrl: './connect.component.html',
    styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

    // Setup default values
    private connectOptions: ConnectOptions = {
        host: "chat.freenode.net",
        port: 6667,
        channels: "#git",
        enableSsl: false,
        name: "trout-user",
        nick: "trout-user",
        realName: "trout-user"
    };
    
    ngOnInit() {
    }

    connect(event: Event) {
        debugger

        let ircHub = $.hubConnection(environment.signalrUri);
        let ircHubProxy = ircHub.createHubProxy('ircHub');
        ircHubProxy.on('conected', (name: string) => {
            console.log(name);
        });
        ircHub.start().then(() => {
            ircHubProxy.invoke('connect', this.connectOptions);
        });
    }
}
