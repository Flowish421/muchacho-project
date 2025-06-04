using Domain.Entities;

namespace Application.Interfaces
{
    // Detta är ett serviceinterface som definierar kontraktet för bokningslogik
    public interface IBookingService
    {
        // Asynkron metod för att skapa en bokning
        // Tar in ett Booking-objekt och returnerar det genererade boknings-ID:t
        Task<Guid> CreateBookingAsync(Booking booking);
    }
}
