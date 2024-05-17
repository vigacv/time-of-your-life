﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using time.Infrastructure;

#nullable disable

namespace time_of_your_life.Migrations
{
    [DbContext(typeof(ClockDbContext))]
    [Migration("20240517020827_Init")]
    partial class Init
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.5");

            modelBuilder.Entity("time.Controllers.ClockProps", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<bool>("BlinkColons")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClockFontColor")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("ClockFontSize")
                        .HasColumnType("INTEGER");

                    b.Property<string>("FontFamily")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("TitleFontColor")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("TitleFontSize")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("ClockProps");
                });
#pragma warning restore 612, 618
        }
    }
}