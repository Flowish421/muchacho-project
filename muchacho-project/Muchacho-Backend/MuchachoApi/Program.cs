using Microsoft.EntityFrameworkCore;
using MuchachoApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// CORS setup
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// ❗ KOMMENTERA UT HTTPS-redirection – annars blockeras HTTP-anrop
// app.UseHttpsRedirection();

// CORS måste komma före UseAuthorization
app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
