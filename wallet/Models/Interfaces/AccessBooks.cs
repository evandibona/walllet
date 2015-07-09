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

        Household HhOfAuthor(string username);
        Household HhOfUser(string username); 
        int HhCreate(string Name, string CreatorName); 
    }
}