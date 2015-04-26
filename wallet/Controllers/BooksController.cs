﻿using System; 
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
using Microsoft.AspNet.Identity.Owin;
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
        private IBooksDataAccess access; 
        public BooksController()
        {
            access = HttpContext.Current.GetOwinContext().Get<SqlConnection>()
                .As<IBooksDataAccess>(); 
        }

        // POST api/books/GetActions
        [HttpPost]
        [Route("GetActions")] 
        public IList<HistoryAction> ActionsHH([FromBody] Dictionary<string, string> input)
        {
            var name = input["name"]; 
            var results = access.GetHistoricalActions(name); 
            return results; 
        }

        // POST api/books/InsertTransaction
        [HttpPost]
        [Route("InsertTransaction")] 
        public int InsertTx([FromBody] InsertTransaction tx)
        {
            return access.InsertTransaction(tx); 
        }

        // POST api/books/GetTransactionsByUser
        [HttpPost]
        [Route("GetTransactionsByUser")] 
        public IList<Transaction> GetTxByUser([FromBody] Dictionary<string,string> user)
        {
            var abc = access.GetTransactionsByUser(user["user"]); 
            return abc; 
        }
    }
}
