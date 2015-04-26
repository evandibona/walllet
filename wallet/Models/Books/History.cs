﻿namespace Wallet.Models.Books
 {
     using System;
     using Insight.Database; 
     public class HistoryAction
     {
         string _when; 

         [Column("When")]
         public string when
         {
             get
             {
                 DateTime w = Convert.ToDateTime(_when); 
                 return w.ToString("D"); 
             }
             set
             { _when = value; }
         }

         [Column("Name")]
         public string          who { get; set; }

         [Column("Action")]
         public string          what { get; set; }
     }
 }