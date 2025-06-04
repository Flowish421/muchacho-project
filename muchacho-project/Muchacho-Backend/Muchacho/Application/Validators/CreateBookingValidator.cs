using FluentValidation;
using Application.Commands.CreateBooking;

namespace Application.Validators;


//Validerar framtida datum, e-post, antal personer
public class CreateBookingValidator : AbstractValidator<CreateBookingCommand>
{
    public CreateBookingValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty()
            .WithMessage("Name is required.");

        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress()
            .WithMessage("A valid email is required.");

        RuleFor(x => x.People)
            .GreaterThan(0)
            .WithMessage("At least one person must be included.");

        RuleFor(x => x.ReservationTime)
            .Must(date => date > DateTime.Now)
            .WithMessage("Reservation date must be in the future.");
    }
}
