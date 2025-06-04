namespace MuchachoApi.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public DateTime Date { get; set; } // t.ex. 2025-06-06
        public TimeSpan Time { get; set; } // t.ex. 18:00
        public int People { get; set; }    // antal personer
    }
}
