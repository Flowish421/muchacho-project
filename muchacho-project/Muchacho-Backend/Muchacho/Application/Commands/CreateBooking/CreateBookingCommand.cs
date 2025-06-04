using MediatR;

namespace Application.Commands.CreateBooking;

public record CreateBookingCommand(string Name, string Email, DateTime ReservationTime, int People) : IRequest<Guid>;
