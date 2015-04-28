﻿namespace Wallet.Models.Books
 {
     using System;
     using System.Globalization;
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
         DateTime _created;
         decimal _amount; 

         public string Description { get; set; }
         public string Name { get; set; }
         public string Household { get; set; }
         public string Created 
         {
             get { return _created.ToString("D"); }
             set { _created = Convert.ToDateTime(value); } 
         }
         public string Pool { get; set; }
         public bool Reconciled { get; set; }
         public string Amount 
         {
             get { return "$" + _amount.ToString("N0"); }
             set { _amount = Convert.ToDecimal(value); }
         }
         public bool Flow { get; set; }
     }
 }