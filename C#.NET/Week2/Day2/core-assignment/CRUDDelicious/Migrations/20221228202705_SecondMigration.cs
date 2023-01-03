using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CRUDDelicious.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Height",
                table: "Deliciouss",
                newName: "Tastiness");

            migrationBuilder.AddColumn<int>(
                name: "Calories",
                table: "Deliciouss",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Calories",
                table: "Deliciouss");

            migrationBuilder.RenameColumn(
                name: "Tastiness",
                table: "Deliciouss",
                newName: "Height");
        }
    }
}
