using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using Insight.Database;
using System.Configuration;
using Microsoft.AspNet.Identity;

namespace Wallet.Controllers
{
    [Authorize]
    [RoutePrefix("api/books")] 
    public class BooksController : ApiController
    {
        // POST api/books/HistoricalActions
        [HttpPost] 
        public string[] actions(string household)
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet] 
        public string test()
        {
            return "This is a test that has succeded!";
        }

        // POST api/books/HistoricalActions
        [HttpPost] 
        public string[] historicalActions(string household)
        {
            return new string[] { "value1", "value2" };
        }
    }
}
