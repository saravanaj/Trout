namespace Trout.Server.Models
{
    public class ConnectOptions
    {
        public string Name { get; set; }
        public string Host { get; set; }
        public int Port { get; set; }
        public string Password { get; set; }
        public bool EnableSsl { get; set; }
        public string Nick { get; set; }
        public string RealName { get; set; }
        public string Channels { get; set; }
    }
}