using System;

namespace Domain.Entities
{
    // Representerar en bokning – detta är en domänmodell som kommer sparas i databasen
    public class Booking
    {
        // Primärnyckel – används som unikt ID för varje bokning
        public Guid Id { get; set; }

        // Namnet på den som bokar – krävs (initieras till tom sträng)
        public string Name { get; set; } = string.Empty;

        // E-postadress till bokningen – krävs
        public string Email { get; set; } = string.Empty;

        // Tidpunkt för bokningen – t.ex. 2025-06-15 19:00
        public DateTime ReservationTime { get; set; }

        // Hur många personer som man bokar bord för
        public int People { get; set; }
    }
}
