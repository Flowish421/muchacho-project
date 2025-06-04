using Microsoft.AspNetCore.Mvc;
using MuchachoApi.Data;
using MuchachoApi.Models;
using System.Threading.Tasks;

namespace MuchachoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookingController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BookingController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateBooking([FromBody] Booking booking)
        {
            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Bokningen är mottagen!" });
        }
    }
}
