using Microsoft.EntityFrameworkCore;
using MuchachoApi.Models;

namespace MuchachoApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Booking> Bookings { get; set; }
    }
}
