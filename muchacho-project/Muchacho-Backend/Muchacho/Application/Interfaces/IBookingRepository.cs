using Domain.Entities;

public interface IBookingRepository
{
    Task<Guid> AddAsync(Booking booking);
}
