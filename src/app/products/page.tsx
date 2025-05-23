"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "~/components/commons/Navbar";
import Footer from "~/components/commons/Footer";
import Button from "~/components/commons/Button";
import Hero from "~/components/Hero";
import ProjectsGrid from "~/components/ProjectsGrid";
import ContactForm from "~/components/ContactForm";
import NewsGrid from "~/components/NewsGrid";
import ProjectShowcase from "~/components/ProjectShowcase";
import CardProduct from "~/components/CardProduct";
import ServiceCard from "~/components/ServiceCard";
import ClippedSection from "~/components/ClippedSection";
import ProductSection from "~/components/ProductSection";
import Breadcrumbs from "~/components/commons/Breadcrumbs";

export default function ProductsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white-10 font-titillium text-white-10">
      <Navbar />

      <section className="flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-gray-base pt-20">
        <div className="hero-container w-full overflow-hidden">
          <Hero
            backgroundImage="/images/product-background.png"
            mobileBackgroundImage="/images/product-background-mobile.png"
            headline="Dari Pasokan hingga Pemeliharaan, Kami Ada untuk Anda"
            subheadline="Mulai dari pengadaan material berkualitas seperti aspal dan beton hingga pelaksanaan proyek konstruksi secara profesional, kami siap menjadi mitra terpercaya Anda."
            ctaText="KONSULTASI SEKARANG"
            ctaHref="/contact"
            breadcrumbItems={[
              { label: "Produk & Layanan", href: "/products" } 
            ]}
            breadcrumbsTopPosition="top-12 md:top-12"
            breadcrumbsLeftPosition="left-2 md:left-12"
          />
        </div>
        <div
          className="custom-clip-path flex w-screen max-w-full flex-col items-center bg-white-10 py-8 text-gray-base md:py-16"
          style={{
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
            width: "100vw",
          }}
        >
          <span className="block px-4 text-center font-noto text-3xl text-black md:text-4xl lg:text-5xl">
            Dari lapisan aspal hingga infrastrukur berat,
            <br className="hidden md:block" />
            Kustomisasi Produk Sesuai Kebutuhanmu
          </span>
          <p className="px-4 pt-4 text-center text-sm text-gray-500 md:pt-8 md:text-base lg:text-[20px]">
            Pilih dan kustomisasi produk sesuai dengan kebutuhan proyek anda,{' '}
            <br className="hidden md:block" />
            tim ahli siap membantu anda menemukan solusi yang tepat
          </p>
          <div className="flex justify-start pt-6 md:pt-8">
            <Button
              text="KONSULTASI SEKARANG"
              height="40px"
              textSize="xl"
              className="text-sm md:text-2xl"
              href="/contact"
              clipPath={{
                outer:
                  "polygon(3% 0%, 97% 0%, 100% 16%, 100% 84%, 97% 100%, 3% 100%, 0% 84%, 0% 16%)",
                inner:
                  "polygon(3% 0%, 97% 0%, 100% 16%, 100% 84%, 97% 100%, 3% 100%, 0% 84%, 0% 16%)",
              }}
            />
          </div>
        </div>

        <style jsx>{`
          .hero-container {
            position: relative;
            height: calc(700px * 0.95); /* 95% dari tinggi asli untuk mobile */
            overflow: hidden;
            margin-top: 0; /* Menghapus margin negatif untuk breadcrumbs */
          }

          .hero-container :global(section) {
            position: absolute;
            top: -5%; /* Geser ke atas sebesar 5% */
            left: 0;
            width: 100%;
          }
          
          .custom-clip-path {
            clip-path: polygon(
              6% 0%,
              94% 0%,
              100% 12%,
              100% 100%,
              94% 100%,
              6% 100%,
              0% 100%,
              0% 12%
            );
          }

          @media (min-width: 640px) {
            .hero-container {
              height: calc(
                964px * 0.95
              ); /* 95% dari tinggi asli untuk desktop */
              margin-top: 0; /* Menghapus margin negatif untuk breadcrumbs pada layar lebih besar */
            }
            
            .custom-clip-path {
              clip-path: polygon(
                4% 0%,
                96% 0%,
                100% 24%,
                100% 100%,
                96% 100%,
                4% 100%,
                0% 100%,
                0% 24%
              );
            }
          }
        `}</style>
      </section>
      <section className="bg-blue-primary">
        <ProductSection
          title="Aspal"
          italicText="(Hot-Mix)"
          description="Produk laston yang dirancang untuk memberikan daya tahan, fleksibilitas, dan performa maksimal pada berbagai infrastruktrur"
          imageSrc="/images/img-product-aspal.png"
          imageAlt="Aspal Hot-Mix"
          imagePosition="left"
          buttonHref="/products/aspal"
        />

        <ProductSection
          title="Beton"
          italicText="(Ready-Mix)"
          description="Memiliki tipe dengan kekuatan tekan 10 MPa hingga 30 MPa, dimana tiap tipe dirancang untuk kebutuhan konstruksi ringan hingga proyek infrastruktur berat."
          imageSrc="/images/img-product-beton.png"
          imageAlt="Beton Ready-Mix"
          imagePosition="right"
          buttonHref="/products/beton"
        />

        <ProductSection
          title=""
          italicText="Precast Concrete"
          description="Produk beton pracetak dengan berbagai bentuk dan ukuran. Dirancang untuk saluran air, pembatas jalan, taman, trotoar, dll."
          imageSrc="/images/img-product-precast.png"
          imageAlt="Precast Concrete"
          imagePosition="left"
          isLastItem={true}
          buttonHref="/products/precast-concrete"
        />
      </section>
      
      <div
        className="relative w-full bg-orange-secondary px-4 py-8 md:py-10 overflow-hidden"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 75%, 95% 100%, 4% 100%, 0 75%)",
        }}
      >
        <div className="marquee-container py-4 flex items-center h-full">
          <div className="marquee-content">
            <span className="marquee-item font-noto text-4xl text-white-10 md:text-6xl px-12">
              Terjamin
            </span>
            <span className="marquee-item font-noto text-4xl text-white-10 md:text-6xl px-12">
              Terpercaya
            </span>
            <span className="marquee-item font-noto text-4xl text-white-10 md:text-6xl px-12">
              Tersertifikat
            </span>
            <span className="marquee-item font-noto text-4xl text-white-10 md:text-6xl px-12">
              Terjamin
            </span>
            <span className="marquee-item font-noto text-4xl text-white-10 md:text-6xl px-12">
              Terpercaya
            </span>
            <span className="marquee-item font-noto text-4xl text-white-10 md:text-6xl px-12">
              Tersertifikat
            </span>
            <span className="marquee-item font-noto text-4xl text-white-10 md:text-6xl px-12">
              Terjamin
            </span>
            <span className="marquee-item font-noto text-4xl text-white-10 md:text-6xl px-12">
              Terpercaya
            </span>
            <span className="marquee-item font-noto text-4xl text-white-10 md:text-6xl px-12">
              Tersertifikat
            </span>
            <span className="marquee-item font-noto text-4xl text-white-10 md:text-6xl px-12">
              Terjamin
            </span>
            <span className="marquee-item font-noto text-4xl text-white-10 md:text-6xl px-12">
              Terpercaya
            </span>
            <span className="marquee-item font-noto text-4xl text-white-10 md:text-6xl px-12">
              Tersertifikat
            </span>
          </div>
        </div>
        <style jsx>{`
          .marquee-container {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            display: flex;
            align-items: center;
            min-height: 80px;
          }
          
          .marquee-content {
            display: inline-block;
            animation: marquee 40s linear infinite;
            padding-right: 50px;
          }
          
          .marquee-item {
            display: inline-block;
            line-height: 1;
          }
          
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-75%);
            }
          }
        `}</style>
      </div>
      <section className="bg-blue-primary mt-[-2px]">

        <div
          className="services-clip-path flex w-screen max-w-full flex-col items-center py-8 md:py-16"
          style={{
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
            width: "100vw",
          }}
        >
          <span className="text-white-base block px-4 text-center font-noto text-3xl md:text-4xl lg:text-5xl">
            Servis Satu Atap
          </span>
          <p className="text-white-base px-4 pt-4 text-center text-sm md:pt-8 md:text-base lg:text-[20px]">
            Dari Konsep hingga Realisasi,
            <br className="hidden md:block" />
            Kami membantu dari perencanaan hingga pelaksanaan
          </p>
          <div className="grid grid-cols-1 px-4 py-8 md:grid-cols-2 md:px-8 md:py-16 lg:md:grid-cols-4 lg:px-24">
            <ServiceCard
              imageSrc="/images/img-jasa-gelar-aspal.png"
              title="JASA GELAR ASPAL"
              description="Jasa pengaspalan hot-mix dengan tim profesional dan peralatan modern."
              italicWords={["hot-mix"]}
              imagePosition="top"
            />
            <ServiceCard
              imageSrc="/images/img-pengecoran-beton.png"
              title="PENGECORAN BETON"
              description="Layanan pengecoran beton langsung di lokasi proyek menggunakan campuran beton berkualitas tinggi."
              imagePosition="bottom"
            />
            <ServiceCard
              imageSrc="/images/img-support-letter.png"
              title="SUPPORT LETTER"
              italicTitle={true}
              description="Surat dukungan resmi untuk memenuhi persyaratan tender dan memastikan kelancaran pengadaan material konstruksi."
              italicWords={["tender"]}
              imagePosition="top"
            />
            <ServiceCard
              imageSrc="/images/img-solusi-khusus.png"
              title="SOLUSI KHUSUS"
              description="Semua kebutuhan dan solusi masalah infrastruktur Proyek Anda."
              imagePosition="bottom"
            />
          </div>
        </div>
      </section>
      <section id="support-letter" className="bg-blue-primary py-16">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-4">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="font-noto text-3xl text-white-10 md:text-4xl lg:text-[40px]">
              Proyek Makin Lancar
            </h2>
            <h3 className="mt-2 font-noto text-3xl text-white-10 md:text-4xl lg:text-[40px]">
              dengan <span className="italic">Support Letter</span>
            </h3>
          </div>

          <div className="mt-24 flex flex-col gap-6 md:flex-row md:gap-[124px]">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <div className="support-letter-image h-full w-full">
                  <Image
                    src="/images/img-support-letter.png"
                    alt="Support Letter"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="w-full text-white-10 md:w-1/2">
              <h3 className="font-titilium mb-4 text-3xl font-semibold md:text-5xl">
                Surat Dukungan Resmi
                <br />
                untuk Pengadaan Anda
              </h3>
              {/* <h4 className="font-titilium text-3xl md:text-4xl mb-6">
                untuk Pengadaan Anda
              </h4> */}

              <p className="mt-4 text-base leading-relaxed md:text-base">
                Surat dukungan resmi ini akan membantu Anda memenuhi persyaratan
                tender, memberikan keyakinan kepada panitia pengadaan, dan
                memastikan kelancaran pasokan material konstruksi dari
                perusahaan kami untuk proyek Anda
              </p>

              <div className="mt-8">
                <Button
                  text="HUBUNGI KAMI"
                  height="48px"
                  textSize="xl"
                  className="bg-orange-500 text-base md:text-lg"
                  href="/contact"
                  clipPath={{
                    outer:
                      "polygon(5% 0%, 95% 0%, 100% 16%, 100% 84%, 95% 100%, 5% 100%, 0% 84%, 0% 16%)",
                    inner:
                      "polygon(5% 0%, 95% 0%, 100% 16%, 100% 84%, 95% 100%, 5% 100%, 0% 84%, 0% 16%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .support-letter-image {
            clip-path: polygon(
              4% 0%,
              96% 0%,
              100% 6%,
              100% 94%,
              96% 100%,
              4% 100%,
              0% 94%,
              0% 6%
            );
          }

          @media (max-width: 768px) {
            .support-letter-image {
              clip-path: polygon(
                6% 0%,
                94% 0%,
                100% 6%,
                100% 94%,
                94% 100%,
                6% 100%,
                0% 94%,
                0% 6%
              );
            }
          }
          
          .services-clip-path {
            clip-path: polygon(
              6% 0%,
              94% 0%,
              100% 4%,
              100% 100%,
              96% 100%,
              4% 100%,
              0% 100%,
              0% 4%
            );
          }
          
          @media (min-width: 768px) {
            .services-clip-path {
              clip-path: polygon(
                4% 0%,
                96% 0%,
                100% 6%,
                100% 100%,
                96% 100%,
                4% 100%,
                0% 100%,
                0% 6%
              );
            }
          }
        `}</style>
      </section>
      <ClippedSection
        title="Proyek Impian Anda,<br>Realisasikan Bersama Kami"
        description="Dengan pengalaman bertahun-tahun, kami telah berhasil menyelesaikan berbagai proyek dengan hasil<br>yang memuaskan. Percayakan proyek Anda pada kami dan rasakan perbedaannya."
        buttonText="MULAI SEKARANG"
        topBgColor="bg-blue-primary"
        bottomBgColor="bg-white-10"
        clipPathBgColor="bg-black"
        buttonHref="/contact"
      />
      <div className="flex w-full flex-col items-center bg-white-10">
        <span className="mb-16 block text-center font-noto text-4xl text-black sm:text-5xl md:text-6xl lg:text-[64px]">
          Lihat Insight Proyek
        </span>

        <NewsGrid
          bgColor="bg-blue-primary"
          textColor="text-black"
          textBadgeColor="text-white-10"
        />
      </div>
      <div className="flex justify-center pb-6 md:pb-12">
        <Button
          text="LIHAT SEMUA"
          height="48px"
          textSize="xl"
          className="bg-orange-500 text-base md:text-lg"
          href="/insights"
          clipPath={{
            outer:
              "polygon(5% 0%, 95% 0%, 100% 16%, 100% 84%, 95% 100%, 5% 100%, 0% 84%, 0% 16%)",
            inner:
              "polygon(5% 0%, 95% 0%, 100% 16%, 100% 84%, 95% 100%, 5% 100%, 0% 84%, 0% 16%)",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
