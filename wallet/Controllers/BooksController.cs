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
using Wallet.Models.Stores; 
using Wallet.Models.Database;
using Microsoft.Owin.Security.OAuth;
using Owin;

namespace Wallet.Controllers
{
    [Authorize]
    [RoutePrefix("api/books")]
    public class BooksController : ApiController
    {
        private IBooksDataAccess access = ConfigurationManager.ConnectionStrings["DefaultConnection"].As<IBooksDataAccess>();

        // POST api/books/GetActions
        [HttpPost]
        [Route("GetActions")] 
        public IList<HistoryAction> ActionsHH([FromBody] Dictionary<string, string> input)
        {
            var results = access.GetHistoricalActions(6); 
            return results; 
        }
    }
}
