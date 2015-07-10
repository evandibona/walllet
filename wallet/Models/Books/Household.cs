﻿namespace Wallet.Models.Books
 {
     using System;
     using System.Globalization;
     using Insight.Database; 
     public class Household
     {
         public string Name { get; set; }
         public int Id { get; set; }
         public string HeadName { get; set; }
         public int Head { get; set; }
     }

     public class MyHouse
     {
         public string Name { get; set; }
         public bool InUse { get; set; }
         public string Author { get; set; }
     }
 }