﻿namespace Wallet.Models.Books
 {
     using System;
     using Insight.Database; 
     public class HistoryAction
     {
         [Column("Name")]
         public string          who { get; set; }

         [Column("Action")]
         public string          what { get; set; }

         [Column("When")]
         public string          when { get; set; }
     }
 }