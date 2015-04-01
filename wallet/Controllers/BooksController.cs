using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Data.SqlClient;
using System.Configuration;
using System.Threading.Tasks; 
using Insight.Database;
using Microsoft.AspNet.Identity;
using Microsoft.SqlServer;
using Microsoft.Owin;
using Wallet.Models.Books;
using Wallet.Models.Database;

namespace Wallet.Controllers
{
    [Authorize]
    [RoutePrefix("api/books")]
    public class BooksController : ApiController
    {
        private IBooksDataAccess hacts;

        public BooksController()
        {
            hacts = HttpContext.Current.GetOwinContext().Get<SqlConnection>().As<IBooksDataAccess>(); 
        }

        // POST api/books/GetActions
        [HttpPost]
        [Route("GetActions")] 
        public Task<IList<HistoryAction>> ActionsHH([FromBody] Dictionary<string, string> input)
        {
            return hacts.GetHistoricalActions(1); 
        }
    }
}
