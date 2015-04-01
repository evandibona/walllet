﻿namespace Wallet.Models.Books
 {
     using System;
     using Insight.Database; 
     public class HistoryAction
     {
         [Column("HouseholdId")] 
         public int         HouseholdId { get; set; }

         [Column("UserId")]
         public int         UserId { get; set; }

         [Column("Action")]
         public string      What { get; set; }

         [Column("When")]
         public DateTime    When { get; set; }
     }
 }