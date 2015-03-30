using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using Insight.Database;
using System.Configuration;

namespace Wallet.Controllers
{
    [Authorize]
    public class ProcController : ApiController
    {
        // POST api/proc
        public IEnumerable<string> Post(List<string> procedure)
        {
            var name = procedure[0];
            procedure.RemoveAt(0);
            var ps = procedure;

            switch (name)
            {
                case "actionsOfHH":
                    Procs.actionsOfHH(ps[0]);
                    break;
                default:
                    break;
            }
            return new string[] { "value1", "value2" };
        }
    }

    public class Procs
    {
        private static string connString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        private static SqlConnection conn = new SqlConnection(connString);
        public static List<Dictionary<string, string>> actionsOfHH(string hh)
        {
            List<Dictionary<string, string>> values = new List<Dictionary<string, string>>(); 
            conn.Execute("ActionsOfHH", new { HouseholdId = 22 });
            return values;
        }
    }
}
