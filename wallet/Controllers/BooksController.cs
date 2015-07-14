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

        // POST api/books/AssignedHouse
        [HttpPost]
        [Route("AssignedHouse")] 
        public string AssignedHouse([FromBody] Dictionary<string,string> name)
        {
            int userId = access.UserByName(name["name"]); 
            int houseId = access.HhOfUser(userId);
            if (houseId == 0) { return ""; }
            else { return access.HhById(houseId); } 
        }

        // POST api/books/DeclaredHouse
        [HttpPost]
        [Route("DeclaredHouse")] 
        public string DeclaredHouse([FromBody] Dictionary<string,string> name)
        {
            int userId = access.UserByName(name["name"]); 
            int houseId = access.HhByHead(userId);
            if (houseId == 0) { return ""; }
            else { return access.HhById(houseId); } 
        }

        // POST api/books/DeclareHouse
        [HttpPost]
        [Route("DeclareHouse")] 
        public int DeclareHouse([FromBody] Dictionary<string, string> inparams)
        {
            int userId = access.UserByName(inparams["Username"]); 
            return access.HhDeclare(inparams["Name"], userId);
        }

        // POST api/books/CreateInvitation
        [HttpPost]
        [Route("CreateInvitation")] 
        public int CreateInvitation([FromBody] Dictionary<string, string> invite)
        {
            var headId = access.UserByName(invite["From"]);
            var userId = access.UserByName(invite["To"]);
            var houseId = access.HhOfUser(headId);
            if (houseId != 0)
            {
                return access.InsertInvitation(headId, userId, houseId); 
            }
            return 0; 
        }

        // POST api/books/ListSentInvitations
        [HttpPost]
        [Route("ListSentInvitations")]
        public List<Invitation> ListSentInvites([FromBody] Dictionary<string, string> user)
        {
            int headId = access.UserByName(user["User"]);
            int houseId = access.HhOfUser(headId);
            return access.InvitationsOfHouse(houseId); 
        }

        // POST api/books/ListReceivedInvitations
        [HttpPost]
        [Route("ListReceivedInvitations")]
        public List<Invitation> ListReceivedInvites([FromBody] Dictionary<string, string> user)
        {
            int userId = access.UserByName(user["User"]);
            return access.InvitationsReceived(userId); 
        }

        // POST api/books/DeleteInvitation
        [HttpPost]
        [Route("DeleteInvitation")]
        public int DeleteInvite([FromBody] Dictionary<string, int> choice)
        {
            return access.InvitationRespond(choice["id"], false); 
        }

        // POST api/books/RespondToInvitation
        [HttpPost]
        [Route("RespondToInvitation")]
        public int RespondToInvite([FromBody] Dictionary<string, int> a)
        {
            bool response = false;
            if (a["response"] > 0)
            {
                response = true; 
            }
            return access.InvitationRespond(a["id"], response); 
        }
    }
}
