using System;

namespace ConsoleUI
{
    class Program
    {
        static void Main(string[] args)
        {
            AppController app = new AppController();
            app.Run();

            Console.ReadKey();
        }
    }
}
