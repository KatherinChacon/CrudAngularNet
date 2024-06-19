using ApiProductos.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiProductos.Data
{
    public class ProductoDbContext : DbContext
    {
        // Propiedades de la clase  mapea el modelo de producto con la base de datos
        public DbSet<Producto> Productos { get; set; }

        public ProductoDbContext(DbContextOptions options) : base(options)
        {
        }
    }
}
