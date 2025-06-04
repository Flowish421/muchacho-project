using Microsoft.EntityFrameworkCore;
using Domain.Entities;


namespace Infrastructure.Data;

// AppDbContext ärver från EF Core's DbContext-klass och representerar databasanslutningen
public class AppDbContext : DbContext
{
    // Konstruktor som tar in DbContextOptions med typ AppDbContext
    // Dessa options specificerar t.ex. databasleverantör och anslutningssträng
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    // DbSet representerar en tabell i databasen.
    // Genom att använda => Set<Booking>() skapas ett dynamiskt DbSet från den generiska typen.
    // Detta ger oss CRUD-funktionalitet för Booking-entiteter.
    public DbSet<Booking> Bookings => Set<Booking>();
}
