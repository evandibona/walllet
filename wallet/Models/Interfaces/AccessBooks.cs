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
        int InsertTransaction(Dictionary<string, string> transaction); 
        //ohhh 'int' is the return type!// int InsertHistoricalAction(HistoryAction action);
    }
}