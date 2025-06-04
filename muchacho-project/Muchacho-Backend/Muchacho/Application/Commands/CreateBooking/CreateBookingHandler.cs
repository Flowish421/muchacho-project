using Application.Commands.CreateBooking;
using Application.Interfaces;
using Domain.Entities;
using FluentValidation;
using MediatR;
using Application.Commands.CreateBooking;

namespace Application.Commands.CreateBooking;

public class CreateBookingHandler : IRequestHandler<CreateBookingCommand, Guid>
{
    private readonly IBookingRepository _repository;
    private readonly IValidator<CreateBookingCommand> _validator;

    public CreateBookingHandler(IBookingRepository repository, IValidator<CreateBookingCommand> validator)
    {
        _repository = repository;
        _validator = validator;
    }

    public async Task<Guid> Handle(CreateBookingCommand request, CancellationToken cancellationToken)
    {
        await _validator.ValidateAndThrowAsync(request, cancellationToken);

        var booking = new Booking
        {
            Id = Guid.NewGuid(),
            Name = request.Name,
            Email = request.Email,
            People = request.People,
            ReservationTime = request.ReservationTime
        };

        return await _repository.AddAsync(booking);
    }
}
