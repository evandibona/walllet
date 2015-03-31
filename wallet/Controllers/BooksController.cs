using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Data.SqlClient;
using Insight.Database;
using System.Configuration;
using Microsoft.AspNet.Identity;
using Microsoft.SqlServer;
using Wallet.Models.Books;

namespace Wallet.Controllers
{
    [Authorize]
    [RoutePrefix("api/books")]
    public class BooksController : ApiController
    {
        private static string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        private static SqlConnection conn = new SqlConnection(connectionString);

        // POST api/books/HistoricalActions
        [HttpPost]
        // Other methods with more objects will need models. 
        public List<Dictionary<string, string>> ActionsHH([FromBody] Dictionary<string, string> input)
        {
            var household = input["household"];
            var hhs = new List<Dictionary<string, string>>();

            var hhId = 1; // get id for Smith
            var a = conn.Query<List<string>>("[Models].[ActionsOfHH]", new { householdId = hhId }); 

            return hhs;
        }
    }
}
