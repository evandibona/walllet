﻿namespace Wallet.Models.Books
 {
     using System;
     using Insight.Database; 
     public class InsertTransaction
     {
         public string Description { get; set; }
         public bool Reconciled { get; set; }
         public decimal Amount { get; set; }
         public bool Flow { get; set; }
         public string Username { get; set; }
     }

     public class Transaction
     {
         [Column("Description")] 
         public string Description { get; set; }
         [Column("Reconciled")] 
         public bool Reconciled { get; set; }
         public decimal Amount { get; set; }
         public bool Flow { get; set; }
         public string Username { get; set; }
         public string Household { get; set; }
         public string Pool { get; set; }
     }
 }