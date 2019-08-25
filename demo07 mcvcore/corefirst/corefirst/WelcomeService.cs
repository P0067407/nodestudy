namespace corefirst
{
    public class WelcomeService : IWelcomeService
    {
        public string getMessage()
        {
            return "Hello from IWelcome service";
        }
    }
}