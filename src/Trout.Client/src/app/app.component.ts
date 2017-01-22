import {
    Component,
    OnInit
} from '@angular/core';
import "jquery";
import "signalr";

declare let $: JQueryStatic;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';

    ngOnInit() {
        let ircHub = $.hubConnection("http://localhost:6001/signalr/");
        let ircHubProxy = ircHub.createHubProxy('ircHub');
        ircHubProxy.on('broadcastMessage', function (name) {
            console.log(name);
        });
        ircHub.start().then(function () {
            ircHubProxy.invoke('send', "Started");
        });
    }
}
