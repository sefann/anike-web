"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Eye, X } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  { id: 1, title: "ACCA Event Design", category: "Events & Flyers", image: "/Gallery/ACCA-03.jpg", aspectRatio: "portrait" },
  { id: 2, title: "Wedding Design", category: "Print Design", image: "/Gallery/Adeola and Abiola-01.jpg", aspectRatio: "square" },
  { id: 3, title: "Wedding Invitation", category: "Print Design", image: "/Gallery/Adeola and Abiola-04.jpg", aspectRatio: "portrait" },
  { id: 4, title: "AGS Countdown", category: "Events & Flyers", image: "/Gallery/AGS COUNTDOWN-13.jpg", aspectRatio: "portrait" },
  { id: 5, title: "AGS FPI Event", category: "Events & Flyers", image: "/Gallery/AGS FPI-20.jpg", aspectRatio: "portrait" },
  { id: 6, title: "AGS WAES Design", category: "Events & Flyers", image: "/Gallery/AGS WAES-01.jpg", aspectRatio: "square" },
  { id: 7, title: "AGS WAES Flyer", category: "Events & Flyers", image: "/Gallery/AGS WAES-02.jpg", aspectRatio: "portrait" },
  { id: 8, title: "AGS Event Post", category: "Events & Flyers", image: "/Gallery/AGS WAES-04.jpg", aspectRatio: "portrait" },
  { id: 9, title: "AGS Webinar", category: "Events & Flyers", image: "/Gallery/AGS WEBINAR-19.jpg", aspectRatio: "square" },
  { id: 10, title: "Aishtar IWD", category: "Social Media", image: "/Gallery/Aishtar IWD-22.jpg", aspectRatio: "square" },
  { id: 11, title: "Aishtar June Post", category: "Social Media", image: "/Gallery/AISHTAR JUNE-01.jpg", aspectRatio: "square" },
  { id: 12, title: "AWG POHP Design", category: "Events & Flyers", image: "/Gallery/AWG POHP.jpg", aspectRatio: "portrait" },
  { id: 13, title: "BA Social Media", category: "Social Media", image: "/Gallery/BA SOCIALS 238-33.jpg", aspectRatio: "square" },
  { id: 14, title: "February Event", category: "Events & Flyers", image: "/Gallery/FEB 16TH.jpg", aspectRatio: "portrait" },
  { id: 15, title: "February Design", category: "Events & Flyers", image: "/Gallery/FEB 19TH.jpg", aspectRatio: "portrait" },
  { id: 16, title: "HNM Lugbe Event", category: "Events & Flyers", image: "/Gallery/HNM LUGBE-37.jpg", aspectRatio: "square" },
  { id: 17, title: "ICLF Design Training", category: "Events & Flyers", image: "/Gallery/ICLF DESIGN TRAINING-06.jpg", aspectRatio: "portrait" },
  { id: 18, title: "ICLF ITNBF", category: "Events & Flyers", image: "/Gallery/ICLF ITNBF-01.jpg", aspectRatio: "square" },
  { id: 19, title: "ICLF Event Design", category: "Events & Flyers", image: "/Gallery/ICLF LLLY-02.jpg", aspectRatio: "portrait" },
  { id: 20, title: "ICLF SAW", category: "Events & Flyers", image: "/Gallery/ICLF SAW-07.jpg", aspectRatio: "portrait" },
  { id: 21, title: "ICLF SIPD", category: "Events & Flyers", image: "/Gallery/ICLF SIPD-05.jpg", aspectRatio: "square" },
  { id: 22, title: "ICLF WD Event", category: "Events & Flyers", image: "/Gallery/ICLF WD-01.jpg", aspectRatio: "portrait" },
  { id: 23, title: "ICLF WD Design", category: "Events & Flyers", image: "/Gallery/ICLF WD-11.jpg", aspectRatio: "portrait" },
  { id: 24, title: "Keddy Flyer", category: "Print Design", image: "/Gallery/KEDDY FLYER-03.jpg", aspectRatio: "portrait" },
  { id: 25, title: "Keno Price Review", category: "Print Design", image: "/Gallery/KENO ENG-1PRICE REVIEW.jpg", aspectRatio: "square" },
  { id: 26, title: "Lugbe HNM", category: "Events & Flyers", image: "/Gallery/LUGBE HNM-45.jpg", aspectRatio: "portrait" },
  { id: 27, title: "Lugbe MMOTW", category: "Events & Flyers", image: "/Gallery/LUGBE MMOTW-25.jpg", aspectRatio: "square" },
  { id: 28, title: "Lugbe Trybe Main", category: "Events & Flyers", image: "/Gallery/LUGBE TRYBE MAIN-36.jpg", aspectRatio: "portrait" },
  { id: 29, title: "March Event", category: "Events & Flyers", image: "/Gallery/MARCH 10TH.jpg", aspectRatio: "portrait" },
  { id: 30, title: "May Event", category: "Events & Flyers", image: "/Gallery/MAY 12TH-12.jpg", aspectRatio: "square" },
  { id: 31, title: "MMOTW Design", category: "Events & Flyers", image: "/Gallery/MMOTW-28.jpg", aspectRatio: "portrait" },
  { id: 32, title: "MND 30 POL 5.0", category: "Social Media", image: "/Gallery/MND 30 POL 5.0-01.jpg", aspectRatio: "square" },
  { id: 33, title: "MND 30 POL Post", category: "Social Media", image: "/Gallery/MND 30 POL 5.0-02.jpg", aspectRatio: "square" },
  { id: 34, title: "MND 30 POL", category: "Social Media", image: "/Gallery/MND 30 POL-04.jpg", aspectRatio: "portrait" },
  { id: 35, title: "Mudo Zangl Design", category: "Print Design", image: "/Gallery/Mudo Zangl-01.jpg", aspectRatio: "square" },
  { id: 36, title: "POHP March", category: "Events & Flyers", image: "/Gallery/POHP MARCH-03.jpg", aspectRatio: "portrait" },
  { id: 37, title: "POHP Event", category: "Events & Flyers", image: "/Gallery/POHP-21.jpg", aspectRatio: "portrait" },
  { id: 38, title: "POHPN Design", category: "Events & Flyers", image: "/Gallery/POHPN-01.jpg", aspectRatio: "square" },
  { id: 39, title: "Priout POHP", category: "Events & Flyers", image: "/Gallery/PRIOUT POHP-07.jpg", aspectRatio: "portrait" },
  { id: 40, title: "RCCG Anniversary", category: "Events & Flyers", image: "/Gallery/RCCG ANNIVERSARY-01.jpg", aspectRatio: "portrait" },
  { id: 41, title: "SFL June Design", category: "Social Media", image: "/Gallery/SFL JUNE-01.jpg", aspectRatio: "square" },
  { id: 42, title: "SFL June Post", category: "Social Media", image: "/Gallery/SFL JUNE-07.jpg", aspectRatio: "square" },
  { id: 43, title: "SFL June Event", category: "Social Media", image: "/Gallery/SFL JUNE-08.jpg", aspectRatio: "portrait" },
  { id: 44, title: "SFL June Flyer", category: "Social Media", image: "/Gallery/SFL JUNE-09.jpg", aspectRatio: "square" },
  { id: 45, title: "SFL May", category: "Social Media", image: "/Gallery/SFL MAY-05.jpg", aspectRatio: "portrait" },
  { id: 46, title: "SLC Team Design", category: "Print Design", image: "/Gallery/SLC AB TEAM-01.jpg", aspectRatio: "portrait" },
  { id: 47, title: "WIBA Design", category: "Events & Flyers", image: "/Gallery/WIBA-03.jpg", aspectRatio: "square" },
  { id: 48, title: "WIBA Event", category: "Events & Flyers", image: "/Gallery/WIBA-10.jpg", aspectRatio: "portrait" }
]

const categories = ["All", "Events & Flyers", "Social Media", "Print Design"]

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-gradient-primary text-white shadow-lg"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="break-inside-avoid group relative overflow-hidden rounded-lg border border-border bg-muted/30 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              {/* Real Image */}
              <div className={`
                w-full relative overflow-hidden
                ${image.aspectRatio === "portrait" ? "aspect-[3/4]" : ""}
                ${image.aspectRatio === "square" ? "aspect-square" : ""}
                ${image.aspectRatio === "landscape" ? "aspect-[4/3]" : ""}
              `}>
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  quality={80}
                  loading={index < 6 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <Eye className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">View Image</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                {image.category}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="max-w-5xl w-full mx-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative bg-background rounded-lg overflow-hidden">
                <div className="relative w-full" style={{ maxHeight: "85vh" }}>
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    width={1200}
                    height={1600}
                    quality={90}
                    priority
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "85vh" }}
                  />
                </div>
                <div className="p-6 bg-background">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.category}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

