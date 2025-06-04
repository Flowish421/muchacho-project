using Application.Interfaces;
using Application.Validators;
using FluentValidation;
using Infrastructure.Data;
using Infrastructure.Repositories;
using Infrastructure.Services;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using API.Middleware;
using Application.Commands.CreateBooking;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // 🚀 Controllers, Swagger, etc
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // 💾 Database
            builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            // ♻️ Dependency Injection
            builder.Services.AddScoped<IBookingService, BookingService>();
            builder.Services.AddScoped<IBookingRepository, BookingRepository>();

            // 🧠 MediatR
            builder.Services.AddMediatR(AppDomain.CurrentDomain.GetAssemblies());

            // ✅ FluentValidation
            builder.Services.AddValidatorsFromAssemblyContaining<CreateBookingValidator>();

            // 🌐 CORS
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", builder =>
                    builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
            });

            var app = builder.Build();

            // ⚠️ Global error handling
            app.UseMiddleware<ErrorHandlerMiddleware>();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors("AllowAll");
            app.UseAuthorization();
            app.MapControllers();

            app.Run();
        }
    }
}
