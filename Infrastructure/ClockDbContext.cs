using Microsoft.EntityFrameworkCore;
using time.Controllers;

namespace time.Infrastructure;

public class ClockDbContext : DbContext
{
    public ClockDbContext(DbContextOptions<ClockDbContext> options) : base(options)
    {
    }

    public DbSet<ClockProps> ClockProps { get; set; } = null!;
}