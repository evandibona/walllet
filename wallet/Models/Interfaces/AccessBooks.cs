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
        Task<IList<HistoryAction>> GetHistoricalActions(int HouseholdId);

        // auto procs
        Task<int> InsertHistoricalAction(HistoryAction action);
    }
}