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
 }