using Microsoft.AspNetCore.SignalR;

namespace Trout.Server.Hubs
{
    public class IrcHub : Hub
    {
        public void Send(string message)
        {
            // Call the broadcastMessage method to update clients.
            Clients.All.broadcastMessage(message);
        }
    }
}