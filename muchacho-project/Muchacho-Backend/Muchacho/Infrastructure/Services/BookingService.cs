using Application.Interfaces;
using Infrastructure.Data;
using Domain.Entities;


namespace Infrastructure.Services;

// Implementerar interfacet IBookingService, vilket innebär att denna klassen
// måste definiera alla metoder som specificeras i det gränssnittet
public class BookingService : IBookingService
{
    // Privat fält för att lagra referensen till databasens DbContext
    private readonly AppDbContext _context;

    // Konstruktor som tar in en AppDbContext via dependency(av en anna klass aka IbookingService) injection
    public BookingService(AppDbContext context)
    {
        _context = context;
    }

    // Asynkron metod för att skapa en ny bokning i databasen
    public async Task<Guid> CreateBookingAsync(Booking booking)
    {
        // Skapar ett nytt unikt ID för bokningen
        booking.Id = Guid.NewGuid();

        // Lägger till bokningen i DbContextens Bookings-tabell
        _context.Bookings.Add(booking);

        // Sparar ändringarna asynkront till databasen
        await _context.SaveChangesAsync();

        // Returnerar det genererade boknings-ID:t
        return booking.Id;
    }
}
