using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Reflection;
using System.Threading.Tasks;
using System.Configuration; 
using System.Data.SqlClient; 
using Insight.Database; 
using Insight.Database.Schema;

namespace walletDatabase
{
    class Program
    {
        static void Main()
        {
            // myConnection
            var connectionString = "Server=.\\SQLSERVER; Database=folio; Integrated Security=True"; 
            var dbName = "wallet"; 
            // load your SQL into a SchemaObjectCOllection
            SchemaObjectCollection schema = new SchemaObjectCollection();
            schema.Load(Assembly.GetExecutingAssembly());

            // automatically create the database
            SchemaInstaller.CreateDatabase(connectionString);

            // automatically install it, or upgrade it
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                SchemaInstaller installer = new SchemaInstaller(connection);
                new SchemaEventConsoleLogger().Attach(installer);
                installer.Install(dbName, schema);
            }
        }
    }
}
