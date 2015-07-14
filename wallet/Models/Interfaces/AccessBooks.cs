﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Wallet.Models;
using Wallet.Models.Books;
using Insight.Database;

namespace Wallet.Models.Database
{
    [Sql(Schema = "Models")]
    public interface IBooksDataAccess
    {
        IList<HistoryAction> GetHistoricalActions(string UserName);

        int InsertTransaction(InsertTransaction tx);
        IList<Transaction> GetTransactionsByUser(string username);

        int UserByName(string username); 

        // Household //
        int HhOfUser(int userId); 
        int HhByHead(int userId); 
        string HhById(int Id);
        int HhDeclare(string Name, int UserId);
        int HhRevokeUser(int UserId); 
        int HhAddUser(int HhId, int UserId);

        // Invitation // 
        int InvitationRespond(int Id, bool Action);
        int InsertInvitation(int From, int Recipient, int House);

        // Lists
        List<User> ListUsers(); 
        List<Invitation> InvitationsOfHouse(int House); 
        List<Invitation> InvitationsReceived(int UserId); 
    }
}