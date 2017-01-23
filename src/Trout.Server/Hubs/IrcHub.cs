using System;
using System.Linq;
using IrcDotNet;
using Microsoft.AspNetCore.SignalR;
using Trout.Server.Models;

namespace Trout.Server.Hubs
{
    public class IrcHub : Hub
    {
        private StandardIrcClient ircClient;

        public IrcHub()
        {
            ircClient = new StandardIrcClient();
        }

        public void Send(string message)
        {
            // Call the broadcastMessage method to update clients.
            Clients.All.broadcastMessage(message);
        }

        public void Connect(ConnectOptions connectOptions)
        {
            ircClient.Connect(connectOptions.Host, connectOptions.EnableSsl, new IrcUserRegistrationInfo
            {
                NickName = connectOptions.Nick,
                UserName = connectOptions.Name,
                Password = connectOptions.Password,
                RealName = connectOptions.RealName
            });

            ircClient.RawMessageReceived += (obj, ea) =>
            {
                this.Clients.Client(this.Context.ConnectionId).conected("test");
            };
            ircClient.Connected += (obj, ea) =>
            {
                this.Clients.Client(this.Context.ConnectionId).conected("test");
            };

            ircClient.ConnectFailed += (obj, ea) =>
            {
                this.Clients.Client(this.Context.ConnectionId).conected("test");
            };
        }
    }
}