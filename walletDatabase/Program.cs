﻿using System;
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
            var schema = new SchemaObjectCollection();
            schema.Load(Assembly.GetExecutingAssembly()); 

            var c2 = "Data Source=tcp:mbmuw7kmu9.database.windows.net,1433;Database=dibonae-folio_db;User Id=CoderFoundry@mbmuw7kmu9;Password=LearnToCode1";
            //var connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString; 
            var dbName = "dibonae-folio_db";
            SchemaInstaller.CreateDatabase(c2);

            // automatically install it, or upgrade it
            using (SqlConnection connection = new SqlConnection(c2))
            {
                connection.Open();
                SchemaInstaller installer = new SchemaInstaller(connection);
                new SchemaEventConsoleLogger().Attach(installer);
                installer.Install(dbName, schema);
            }

            Thread.Sleep(2 * 1000); 
        }
    }
}
