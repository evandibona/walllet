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
                 var w = _when.Split(' ')[0]; 
                 return w; 
             }
             set
             {
                 _when = value; 
             }
         }

         [Column("Name")]
         public string          who { get; set; }

         [Column("Action")]
         public string          what { get; set; }
     }
 }