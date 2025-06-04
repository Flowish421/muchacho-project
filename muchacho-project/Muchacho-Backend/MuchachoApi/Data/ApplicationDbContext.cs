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

        // Om du behöver konfigurera mer (t.ex. tabellnamn etc.)
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Booking>(entity =>
            {
                entity.HasKey(b => b.Id);
                entity.Property(b => b.Name).IsRequired();
                entity.Property(b => b.Email).IsRequired();
                entity.Property(b => b.Date).IsRequired();
                entity.Property(b => b.Time).IsRequired();
                entity.Property(b => b.People).IsRequired();
            });
        }
    }
}
