﻿namespace Wallet.Models.Books
 {
     using System;
     using Insight.Database; 

     public class Invitation
     {
         public int Id { get; set; }
         public string Username { get; set; }
         public string Name { get; set; }
     }
 }