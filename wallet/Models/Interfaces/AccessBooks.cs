﻿﻿using System.Collections.Generic;
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

        int HhCreate(Household hh); 
        int HhUpdate(Household hh); 
    }
}