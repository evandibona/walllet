using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;
using System.Configuration;
using System.Data.SqlClient;
using Insight.Database;
using Insight.Database.Schema;
using System.Threading; 

namespace walletDatabase
{
    class Program
    {
        static void Main()
        {
            // myConnection
            var connectionString = "Server=.\\SQLSERVER; Database=folio; Integrated Security=True";
            var c2 = "Data Source=tcp:mbmuw7kmu9.database.windows.net,1433;Database=dibonae-folio_db;User Id=CoderFoundry@mbmuw7kmu9;Password=LearnToCode1";
            var dbName = "wallet";
            // load your SQL into a SchemaObjectCOllection
            SchemaObjectCollection schema = new SchemaObjectCollection().LoadFromDir(@"..\..\Sql\");
            //var sFile = Path.Combine(Environment.CurrentDirectory, @"..\..\Sql\Security\"); 

            // automatically create the database
            SchemaInstaller.CreateDatabase(c2);

            // automatically install it, or upgrade it
            using (SqlConnection connection = new SqlConnection(c2))
            {
                connection.Open();
                SchemaInstaller installer = new SchemaInstaller(connection);
                new SchemaEventConsoleLogger().Attach(installer);
                installer.Install(dbName, schema);
            }

            Thread.Sleep(5 * 1000); 
        }
    }
}
namespace Insight.Database.Schema
{
    static class SchemaExtension
    {
        public static SchemaObjectCollection LoadFromDir(this SchemaObjectCollection self, string projectPath)
        {
            var path = Path.Combine(Environment.CurrentDirectory, projectPath);

            foreach (string file in Directory.GetFiles(path))
                self.Load(file);

            string[] dirs = Directory.GetDirectories(path, "*", SearchOption.AllDirectories);
            foreach (string dir in dirs)
            {
                string[] files = Directory.GetFiles(dir);
                foreach (string file in files)
                {
                    self.Load(file);
                }
            }
            return self;
        }
    }
}