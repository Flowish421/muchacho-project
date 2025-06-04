using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MuchachoApi.Migrations
{
    /// <inheritdoc />
    public partial class UpdateBookingFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ReservationTime",
                table: "Bookings",
                newName: "Date");

            migrationBuilder.AddColumn<TimeSpan>(
                name: "Time",
                table: "Bookings",
                type: "time",
                nullable: false,
                defaultValue: new TimeSpan(0, 0, 0, 0, 0));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Time",
                table: "Bookings");

            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Bookings",
                newName: "ReservationTime");
        }
    }
}
