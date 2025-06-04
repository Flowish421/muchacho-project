using MediatR;
using Microsoft.AspNetCore.Mvc;
using Application.Commands.CreateBooking;


[ApiController]
[Route("api/[controller]")]
public class BookingController : ControllerBase
{
    private readonly IMediator _mediator;

    public BookingController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateBookingCommand command)
    {
        var id = await _mediator.Send(command);
        return Ok(new { id });
    }
}
