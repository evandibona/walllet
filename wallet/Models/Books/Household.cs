﻿namespace Wallet.Models.Books
 {
     using System;
     using System.Globalization;
     using Insight.Database; 
     public class Household
     {
         public string Name { get; set; }
         public string Creator { get; set; }
     }

     public class MyHouse
     {
         public string Name { get; set; }
         public bool InUse { get; set; }
         public string Author { get; set; }
     }
 }