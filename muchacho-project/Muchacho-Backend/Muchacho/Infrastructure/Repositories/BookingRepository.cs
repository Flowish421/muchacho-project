using Application.Interfaces;
using Domain.Entities;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories;

public class BookingRepository : IBookingRepository
{
    private readonly AppDbContext _context;

    public BookingRepository(AppDbContext context)
    {
        _context = context;
    }
    // Syncar alla tid som bokas in och skickar till DB=DataBasen så vi har bokingar under kontroll.
    public async Task<Guid> AddAsync(Booking booking)
    {
        _context.Bookings.Add(booking);
        await _context.SaveChangesAsync();
        return booking.Id;
    }
    // Den här koden är för att inte kunna boka mer än 20 plaster per dag = Samma Datum Date.date som den Rreffrera uneder.
    public async Task<bool> IsDateFullyBookedAsync(DateTime date)
    {
        var count = await _context.Bookings
            .CountAsync(b => b.ReservationTime.Date == date.Date);
        return count >= 20;
    }

}
