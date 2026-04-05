"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const locations = [
  { id: "overview", name: "Overview", active: true },
  { id: "antarctica-2026", name: "Antarctica 2026", active: true },
  { id: "buenos-aires-2026", name: "Buenos Aires 2026", active: true },
  { id: "bilbao-2026", name: "Bilbao 2026", active: true },
  { id: "sri-lanka-2025", name: "Sri Lanka 2025", active: true },
  { id: "glastonbury-2025", name: "Glastonbury 2025", active: true },
  { id: "new-zealand-2025", name: "New Zealand 2025", active: true },
  { id: "dublin-2024", name: "Dublin 2024", active: true },
  { id: "portugal-2024", name: "Portugal 2024", active: true },
  { id: "krakow-2024", name: "Krakow 2024", active: true },
  { id: "greece-2024", name: "Greece 2024", active: true },
  { id: "paris-2024", name: "Paris 2024", active: true },
  { id: "barcelona-2023", name: "Barcelona 2023", active: true },
]

const antarcticaPhotos = [
  {
    src: "/images/antarctica-2026-01.jpeg",
    alt: "Polar plunge in icy Antarctic water",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-02.jpeg",
    alt: "Antarctica expedition — DSC 0071",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-03.jpeg",
    alt: "Antarctica expedition — DSC 0097",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-04.jpeg",
    alt: "Antarctica expedition — DSC 0155",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-05.jpeg",
    alt: "Antarctica expedition — DSC 0177",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-06.jpeg",
    alt: "Antarctica expedition — DSC 0222",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-07.jpeg",
    alt: "Antarctica expedition — DSC 0229",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-08.jpeg",
    alt: "Antarctica expedition — DSC 0250",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-09.jpeg",
    alt: "Antarctica expedition — DSC 0255",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-10.jpeg",
    alt: "Antarctica expedition — DSC 0295",
    orientation: "portrait",
  },
  {
    src: "/images/antarctica-2026-11.jpeg",
    alt: "Antarctica expedition — DSC 0330",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-12.jpeg",
    alt: "Antarctica expedition — DSC 0342",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-13.jpeg",
    alt: "Antarctica expedition — DSC 0370",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-14.jpeg",
    alt: "Antarctica expedition — DSC 0375",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-15.jpeg",
    alt: "Antarctica expedition — DSC 0376",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-16.jpeg",
    alt: "Antarctica expedition — DSC 0377",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-17.jpeg",
    alt: "Antarctica expedition — DSC 0381",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-18.jpeg",
    alt: "Antarctica expedition — DSC 0403",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-19.jpeg",
    alt: "Antarctica expedition — DSC 0405",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-20.jpeg",
    alt: "Antarctica expedition — DSC 0406",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-21.jpeg",
    alt: "Antarctica expedition — DSC 0407",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-22.jpeg",
    alt: "Antarctica expedition — DSC 0513",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-23.jpeg",
    alt: "Antarctica expedition — DSC 0633",
    orientation: "portrait",
  },
  {
    src: "/images/antarctica-2026-24.jpeg",
    alt: "Antarctica expedition — DSC 0671",
    orientation: "portrait",
  },
  {
    src: "/images/antarctica-2026-25.jpeg",
    alt: "Antarctica expedition — DSC 0689",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-26.jpeg",
    alt: "Antarctica expedition — DSC 0695",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-27.jpeg",
    alt: "Antarctica expedition — IMG 5754",
    orientation: "portrait",
  },
  {
    src: "/images/antarctica-2026-28.jpeg",
    alt: "Antarctica expedition — IMG 5755",
    orientation: "portrait",
  },
  {
    src: "/images/antarctica-2026-29.jpeg",
    alt: "Antarctica expedition — IMG 5756",
    orientation: "portrait",
  },
  {
    src: "/images/antarctica-2026-30.jpeg",
    alt: "Antarctica expedition — IMG 5759",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-31.jpeg",
    alt: "Antarctica expedition — IMG 5761",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-32.jpeg",
    alt: "Antarctica expedition — IMG 5767",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-33.jpeg",
    alt: "Antarctica expedition — IMG 5802",
    orientation: "portrait",
  },
  {
    src: "/images/antarctica-2026-34.jpeg",
    alt: "Antarctica expedition — IMG 5812",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-35.jpeg",
    alt: "Antarctica expedition — IMG 5865",
    orientation: "portrait",
  },
  {
    src: "/images/antarctica-2026-36.jpeg",
    alt: "Antarctica expedition — IMG 5890",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-37.jpeg",
    alt: "Antarctica expedition — IMG 5910",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-38.jpeg",
    alt: "Antarctica expedition — IMG 5928",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-39.jpeg",
    alt: "Antarctica expedition — IMG 5966",
    orientation: "portrait",
  },
  {
    src: "/images/antarctica-2026-40.jpeg",
    alt: "Antarctica expedition — IMG 5996",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-41.jpeg",
    alt: "Antarctica expedition — IMG 6010",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-42.jpeg",
    alt: "Antarctica expedition — IMG 6056",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-43.jpeg",
    alt: "Antarctica expedition — IMG 6091",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-44.jpeg",
    alt: "Antarctica expedition — IMG 6211",
    orientation: "portrait",
  },
  {
    src: "/images/antarctica-2026-45.jpeg",
    alt: "Antarctica expedition — IMG 6231",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-46.jpeg",
    alt: "Antarctica expedition — IMG 6296",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-47.jpeg",
    alt: "Antarctica expedition — IMG 6311",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-48.jpeg",
    alt: "Antarctica expedition — IMG 6357",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-49.jpeg",
    alt: "Antarctica moment (Snapchat)",
    orientation: "portrait",
  },
  {
    src: "/images/antarctica-2026-50.jpeg",
    alt: "Antarctica expedition photo",
    orientation: "portrait",
  },
  {
    src: "/images/antarctica-2026-51.jpeg",
    alt: "Antarctica expedition photo",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-52.jpeg",
    alt: "Antarctica expedition photo",
    orientation: "portrait",
  },
  {
    src: "/images/antarctica-2026-53.jpeg",
    alt: "Antarctica expedition photo",
    orientation: "landscape",
  },
  {
    src: "/images/antarctica-2026-54.jpeg",
    alt: "Antarctica expedition photo",
    orientation: "landscape",
  },
]


const buenosAiresPhotos = [
  {
    src: "/images/buenos-aires-2026-05.jpeg",
    alt: "Couple smiling in the sun at the Floralis Genérica sculpture",
    orientation: "portrait",
  },
  {
    src: "/images/buenos-aires-2026-01.jpeg",
    alt: "Choripán from Choripaneria on a wooden board with chimichurri",
    orientation: "portrait",
  },
  {
    src: "/images/buenos-aires-2026-02.jpeg",
    alt: "Couple toasting with beer and sangria at a sidewalk café",
    orientation: "landscape",
  },
  {
    src: "/images/buenos-aires-2026-03.jpeg",
    alt: "Selfie with the Argentine flag against a bright blue sky",
    orientation: "landscape",
  },
  {
    src: "/images/buenos-aires-2026-04.jpeg",
    alt: "Couple in front of a grand gilded bronze door",
    orientation: "portrait",
  },
  {
    src: "/images/buenos-aires-2026-06.jpeg",
    alt: "Selfie in front of colourful corrugated houses in La Boca",
    orientation: "landscape",
  },
  {
    src: "/images/buenos-aires-2026-07.jpeg",
    alt: "Balconies, dome, and red curtains inside El Ateneo Grand Splendid bookstore",
    orientation: "landscape",
  },
  {
    src: "/images/buenos-aires-2026-08.jpeg",
    alt: "Couple toasting with red wine on a sunny rooftop terrace",
    orientation: "landscape",
  },
  {
    src: "/images/buenos-aires-2026-09.jpeg",
    alt: "Choripanería Imperial stall with chalk art in a covered market",
    orientation: "landscape",
  },
  {
    src: "/images/buenos-aires-2026-10.jpeg",
    alt: "Raising a beer on a cobblestone street at dusk",
    orientation: "portrait",
  },
  {
    src: "/images/buenos-aires-2026-11.jpeg",
    alt: "Ornate mausoleums along a path in Recoleta Cemetery",
    orientation: "landscape",
  },
  {
    src: "/images/buenos-aires-2026-12.jpeg",
    alt: "Thick steak sandwich with cheese, ham, and tomato held above the plate",
    orientation: "portrait",
  },
  {
    src: "/images/buenos-aires-2026-13.jpeg",
    alt: "Pond, columned pergola, and palms in a sunny Buenos Aires park",
    orientation: "landscape",
  },
  {
    src: "/images/buenos-aires-2026-14.jpeg",
    alt: "Patagonian mara resting on the grass beside a visitor",
    orientation: "landscape",
  },
  {
    src: "/images/buenos-aires-2026-15.jpeg",
    alt: "Patagonian mara sitting on a green lawn",
    orientation: "landscape",
  },
  {
    src: "/images/buenos-aires-2026-16.jpeg",
    alt: "Peahen with chicks and a Muscovy duck on a lawn near water",
    orientation: "landscape",
  },
  {
    src: "/images/buenos-aires-2026-17.jpeg",
    alt: "Flock of pink flamingos wading in a green pond",
    orientation: "landscape",
  },
  {
    src: "/images/buenos-aires-2026-18.jpeg",
    alt: "Red bridge, pond, rocks, and torii gate at the Japanese Garden",
    orientation: "landscape",
  },
  {
    src: "/images/buenos-aires-2026-19.jpeg",
    alt: "Japanese-fusion spread on a wooden table at Meiji restaurant",
    orientation: "landscape",
  },
]

const bilbaoPhotos = [
  {
    src: "/images/bilbao-2026-11.jpeg",
    alt: "Pintxos plate with jamón, avocado toast, and cherry tomatoes",
    orientation: "landscape",
  },
  {
    src: "/images/bilbao-2026-03.jpeg",
    alt: "Lucio Fontana slashed canvas in a gallery",
    orientation: "portrait",
  },
  {
    src: "/images/bilbao-2026-29.jpeg",
    alt: "Jamón ibérico pintxos on a perforated tray at a pintxos bar",
    orientation: "portrait",
  },
  {
    src: "/images/bilbao-2026-07.jpeg",
    alt: "Gallery installation with chairs, straw, and living grass",
    orientation: "landscape",
  },
  {
    src: "/images/bilbao-2026-30.jpeg",
    alt: "Grilled chipirones with chives on a long rectangular ceramic plate",
    orientation: "portrait",
  },
  {
    src: "/images/bilbao-2026-08.jpeg",
    alt: "Glowing pink and purple jellyfish in deep blue water",
    orientation: "portrait",
  },
  {
    src: "/images/bilbao-2026-31.jpeg",
    alt: "Guggenheim Bilbao’s titanium curves and stone wings from above, with hills beyond",
    orientation: "landscape",
  },
  {
    src: "/images/bilbao-2026-12.jpeg",
    alt: "Richard Serra’s The Matter of Time seen from above in the Guggenheim",
    orientation: "portrait",
  },
  {
    src: "/images/bilbao-2026-32.jpeg",
    alt: "Couple with Jeff Koons’ flower Puppy and the Guggenheim titanium façade",
    orientation: "portrait",
  },
  {
    src: "/images/bilbao-2026-16.jpeg",
    alt: "Breakfast at a café table with the Guggenheim visible through the windows",
    orientation: "landscape",
  },
  {
    src: "/images/bilbao-2026-33.jpeg",
    alt: "Couple selfie in front of Jeff Koons’ Puppy outside the Guggenheim",
    orientation: "portrait",
  },
  {
    src: "/images/bilbao-2026-19.jpeg",
    alt: "Museum gallery with a grass mound, trees in planters, and visitors",
    orientation: "landscape",
  },
  {
    src: "/images/bilbao-2026-34.jpeg",
    alt: "Smiling in front of Louise Bourgeois’ Maman with La Salve Bridge behind",
    orientation: "portrait",
  },
  {
    src: "/images/bilbao-2026-20.jpeg",
    alt: "Nervión riverfront with Ribera Market, colourful façades, and San Antón Bridge",
    orientation: "landscape",
  },
  {
    src: "/images/bilbao-2026-35.jpeg",
    alt: "Bilbao Refoto 93 flyer held up with Maman and La Salve Bridge behind",
    orientation: "portrait",
  },
  {
    src: "/images/bilbao-2026-23.jpeg",
    alt: "Anish Kapoor’s Tall Tree and the Eye mirrored spheres at the Guggenheim",
    orientation: "portrait",
  },
  {
    src: "/images/bilbao-2026-36.jpeg",
    alt: "Couple selfie inside Richard Serra’s weathered steel curves at the Guggenheim",
    orientation: "portrait",
  },
  {
    src: "/images/bilbao-2026-25.jpeg",
    alt: "Classic Gilda pintxos with olive, anchovy, and guindilla",
    orientation: "landscape",
  },
  {
    src: "/images/bilbao-2026-37.jpeg",
    alt: "Smiling in a curving Corten steel corridor at the Guggenheim",
    orientation: "portrait",
  },
  {
    src: "/images/bilbao-2026-26.jpeg",
    alt: "Grilled prawns, beer, and an orange drink at a pintxos bar",
    orientation: "portrait",
  },
  {
    src: "/images/bilbao-2026-38.jpeg",
    alt: "Couple cheering under Louise Bourgeois’ Maman by the Nervión promenade",
    orientation: "landscape",
  },
  {
    src: "/images/bilbao-2026-27.jpeg",
    alt: "Traditional pintxos bar with marble counter, wine barrels, and hanging glassware",
    orientation: "landscape",
  },
  {
    src: "/images/bilbao-2026-39.jpeg",
    alt: "Jenny Holzer’s red LED pillars reflected on the floor at the Guggenheim Bilbao",
    orientation: "portrait",
  },
  {
    src: "/images/bilbao-2026-40.jpeg",
    alt: "Grilled chipirones and jamón pintxos on two plates at a restaurant table",
    orientation: "portrait",
  },
  {
    src: "/images/bilbao-2026-41.jpeg",
    alt: "Large glass of sangria with citrus in a wood-panelled bar (on-screen caption: Someone stop her!!!!)",
    orientation: "portrait",
  },
]

const sriLankaPhotos = [
  {
    src: "/images/img-3649.jpeg",
    alt: "Elephants by the water in Sri Lanka",
    orientation: "portrait",
  },
  {
    src: "/images/img-3939.jpeg",
    alt: "Baby sea turtle on the beach",
    orientation: "portrait",
  },
  {
    src: "/images/img-3381.jpeg",
    alt: "Blue tuk-tuk in Sri Lanka",
    orientation: "portrait",
  },
  {
    src: "/images/img-3563.jpeg",
    alt: "Herd of elephants walking by the lake",
    orientation: "landscape",
  },
  {
    src: "/images/img-3773.jpeg",
    alt: "Chase and Lien at a formal event",
    orientation: "portrait",
  },
  {
    src: "/images/img-3816.jpeg",
    alt: "Chase and Lien selfie",
    orientation: "portrait",
  },
  {
    src: "/images/img-3451.jpeg",
    alt: "Chase and Lien at a restaurant in matching shirts",
    orientation: "landscape",
  },
  {
    src: "/images/img-3659.jpeg",
    alt: "Elephant standing near bushes",
    orientation: "landscape",
  },
  {
    src: "/images/img-3429.jpeg",
    alt: "Chase and Lien at Hindu temple",
    orientation: "portrait",
  },
  {
    src: "/images/img-3506.jpeg",
    alt: "Local musicians performing at night",
    orientation: "portrait",
  },
  {
    src: "/images/img-3792.jpeg",
    alt: "Lien being fitted for a traditional sari",
    orientation: "portrait",
  },
  {
    src: "/images/img-3395.jpeg",
    alt: "Dried fish market stall",
    orientation: "landscape",
  },
  {
    src: "/images/img-3347.jpeg",
    alt: "Frozen cocktail at beachside restaurant",
    orientation: "portrait",
  },
  {
    src: "/images/sri-lanka-lien-sari.jpeg",
    alt: "Lien in traditional navy sari on red carpet",
    orientation: "portrait",
  },
  {
    src: "/images/sri-lanka-baby-turtle.jpeg",
    alt: "Tiny baby sea turtle hatchling on sandy beach",
    orientation: "portrait",
  },
  {
    src: "/images/sri-lanka-floral-arch.jpeg",
    alt: "Chase and Lien posing in front of elaborate floral arch",
    orientation: "portrait",
  },
  {
    src: "/images/sri-lanka-formal-event.jpeg",
    alt: "Chase and Lien at formal evening event",
    orientation: "portrait",
  },
  {
    src: "/images/sri-lanka-safari-elephants.jpeg",
    alt: "Chase excited on safari with elephants in background",
    orientation: "portrait",
  },
  {
    src: "/images/IMG_3922.jpeg",
    alt: "Lien pointing at a turtle",
    orientation: "landscape",
  },
]

const glastonburyPhotos = [
  {
    src: "/images/img-1839.jpeg",
    alt: "Chase and Lien selfie with massive crowd and stages at Glastonbury",
    orientation: "landscape",
  },
  {
    src: "/images/img-1762.jpeg",
    alt: "Octopus cutout photo opportunity at Glastonbury",
    orientation: "portrait",
  },
  {
    src: "/images/img-1794.jpeg",
    alt: "Main stage with massive crowd at Glastonbury",
    orientation: "landscape",
  },
  {
    src: "/images/img-1732.jpeg",
    alt: "Illuminated tower at night during Glastonbury",
    orientation: "portrait",
  },
  {
    src: "/images/img-1767.jpeg",
    alt: "Large head sculpture art installation at Glastonbury",
    orientation: "landscape",
  },
  {
    src: "/images/img-1790.jpeg",
    alt: "Chase and Lien with blue umbrella at Glastonbury",
    orientation: "landscape",
  },
  {
    src: "/images/img-1783.jpeg",
    alt: "Festival face glitter and gems at Glastonbury",
    orientation: "portrait",
  },
  {
    src: "/images/img-1803.jpeg",
    alt: "Stacked car art installation at Glastonbury",
    orientation: "landscape",
  },
  {
    src: "/images/img-1777.jpeg",
    alt: "Poodle costume performance at Glastonbury",
    orientation: "landscape",
  },
  {
    src: "/images/img-1654.jpeg",
    alt: "Wooden archway entrance at Glastonbury",
    orientation: "portrait",
  },
  {
    src: "/images/img-1831.jpeg",
    alt: "White decorative jellyfish installations hanging from trees",
    orientation: "landscape",
  },
  {
    src: "/images/img-1861.jpeg",
    alt: "Illuminated tree with colorful lights and art installations at night",
    orientation: "landscape",
  },
  {
    src: "/images/img-1877.jpeg",
    alt: "Flower-covered figures creating an archway at the festival",
    orientation: "portrait",
  },
  {
    src: "/images/img-1818.jpeg",
    alt: "Dramatic stage lighting at night with crowd",
    orientation: "landscape",
  },
  {
    src: "/images/img-1875.jpeg",
    alt: "Post covered in hundreds of lost keys and tags",
    orientation: "portrait",
  },
  {
    src: "/images/img-1812.jpeg",
    alt: "Speaker presenting on stage in festival tent",
    orientation: "portrait",
  },
  {
    src: "/images/img-1905.jpeg",
    alt: "Rustic wooden art installation with We Believe in Humans sign",
    orientation: "landscape",
  },
  {
    src: "/images/img-1856.jpeg",
    alt: "Pyramid stage with massive crowd during performance",
    orientation: "landscape",
  },
]

const newZealandPhotos = [
  {
    src: "/images/nz-hot-tub-view.jpeg",
    alt: "Chase and Lien relaxing in hot tub with mountain valley view",
    orientation: "landscape",
  },
  {
    src: "/images/img-0507.jpeg",
    alt: "Sunset at Queenstown harbor with boats and mountains",
    orientation: "landscape",
  },
  {
    src: "/images/img-0401.jpeg",
    alt: "Chase and Lien outside Soul restaurant",
    orientation: "portrait",
  },
  {
    src: "/images/img-0446.jpeg",
    alt: "Colorful kiwi bird sculpture on the Kiwi Art Trail",
    orientation: "landscape",
  },
  {
    src: "/images/img-0403.jpeg",
    alt: "Chase and Lien at the harbor during golden hour",
    orientation: "portrait",
  },
  {
    src: "/images/img-0515.jpeg",
    alt: "Lake Wakatipu with crystal clear water and mountains",
    orientation: "landscape",
  },
  {
    src: "/images/a3a6d005-9f5b-4816-9d77-b3a24b7ae10a.jpeg",
    alt: "Chase and Lien holding a python with tropical foliage",
    orientation: "landscape",
  },
  {
    src: "/images/img-0477.jpeg",
    alt: "Arnott's Shapes snack box in the kitchen",
    orientation: "portrait",
  },
  {
    src: "/images/dea7c543-52f0-40c1-b7ef-af95609f1526.jpeg",
    alt: "Anime-style illustration of Chase and Lien with python",
    orientation: "landscape",
  },
  {
    src: "/images/img-0410.jpeg",
    alt: "Lien sitting on the Auckland sign at the waterfront",
    orientation: "landscape",
  },
  {
    src: "/images/img-0480.jpeg",
    alt: "Northern Line Bar & Social with London Underground theme",
    orientation: "landscape",
  },
  {
    src: "/images/img-0622.jpeg",
    alt: "Stone cairns on beach with Lake Wakatipu and mountains",
    orientation: "landscape",
  },
  {
    src: "/images/d7e33eaa-5146-469e-a292-1b817bd2f3f4.jpeg",
    alt: "Chase and Lien in hot tub with snow-capped mountains",
    orientation: "landscape",
  },
  {
    src: "/images/img-0576.jpeg",
    alt: "Aerial view of Queenstown and Lake Wakatipu at sunset",
    orientation: "landscape",
  },
  {
    src: "/images/img-0523.jpeg",
    alt: "Chase and Lien on the beach with Lake Wakatipu",
    orientation: "portrait",
  },
  {
    src: "/images/635551a3-6e07-4f38-b1be-5616f9f35295.jpeg",
    alt: "Lien feeding alpacas at a New Zealand farm",
    orientation: "landscape",
  },
  {
    src: "/images/img-0542.jpeg",
    alt: "Highland cow with long horns at a farm",
    orientation: "landscape",
  },
  {
    src: "/images/554ca648-74fd-4370-bacf-9d88d53ca2af.jpeg",
    alt: "Chase and Lien on a boat on Lake Wakatipu",
    orientation: "landscape",
  },
  {
    src: "/images/img-0539.jpeg",
    alt: "Sheep in a pen at a New Zealand farm",
    orientation: "landscape",
  },
  {
    src: "/images/img-0604.jpeg",
    alt: "Family photo in front of a stone church building",
    orientation: "landscape",
  },
  {
    src: "/images/img-0581.jpeg",
    alt: "Chase and Lien with family at Skyline Queenstown photo backdrop",
    orientation: "landscape",
  },
  {
    src: "/images/img-0649.jpeg",
    alt: "Chase and Lien descending historic lighthouse stairs with ocean view",
    orientation: "landscape",
  },
  {
    src: "/images/img-0630.jpeg",
    alt: "Lien posing in giant New Zealand penny stamp photo frame at Arrowtown Post Office",
    orientation: "portrait",
  },
  {
    src: "/images/88c707f8-e6e4-4d00-80ca-c8fefc091343.jpeg",
    alt: "Chase and Lien gold panning at historic gold mining experience",
    orientation: "landscape",
  },
  {
    src: "/images/img-0629.jpeg",
    alt: "Thrilling Shotover Jet boat ride with dramatic water spray",
    orientation: "landscape",
  },
  {
    src: "/images/img-0653.jpeg",
    alt: "Friends gathering around keg at party with string lights",
    orientation: "portrait",
  },
  {
    src: "/images/a59d9d71-6ed0-460a-8ccc-c84966407634.jpeg",
    alt: "Pub quiz night sign at Pig & Whistle in Queenstown",
    orientation: "portrait",
  },
  {
    src: "/images/c658b848-e0d0-439b-8615-8d30594e2ad5.jpeg",
    alt: "Chase and Lien proudly showing their gold panning finds",
    orientation: "portrait",
  },
  {
    src: "/images/img-0685.jpeg",
    alt: "Traditional Chinese dragon dance performance on Lake Wakatipu",
    orientation: "landscape",
  },
  {
    src: "/images/img-0694.jpeg",
    alt: "Giant sheep building housing a souvenir shop and cafe",
    orientation: "landscape",
  },
  {
    src: "/images/img-0726.jpeg",
    alt: "Serene lake view with tree reflections and distant hills",
    orientation: "landscape",
  },
  {
    src: "/images/img-0778.jpeg",
    alt: "Chase and Lien posing in white floral frame at sunset with scenic hills",
    orientation: "portrait",
  },
  {
    src: "/images/img-0777.jpeg",
    alt: "Chase and Lien in white picture frame with rolling countryside backdrop",
    orientation: "portrait",
  },
  {
    src: "/images/0cf7ef5b-9e64-4f83-bc95-22dd3c036fb6.jpeg",
    alt: "Chase and Lien inside The Castle Pub with mini golf setup and kitchen",
    orientation: "landscape",
  },
  {
    src: "/images/img-0737.jpeg",
    alt: "Chase wearing a captain's hat on the boat",
    orientation: "portrait",
  },
  {
    src: "/images/23e3896e-13a8-4a21-ad3c-41c930c234a3.jpeg",
    alt: "Chase and Lien kayaking together with jet ski in background",
    orientation: "landscape",
  },
  {
    src: "/images/img-0739.jpeg",
    alt: "Evening lake scene with boats, jet ski, kayaks and New Zealand flag",
    orientation: "landscape",
  },
  {
    src: "/images/49d9060c-ef6e-4954-997a-fea8e9c00806.jpeg",
    alt: "Lien enjoying ice cream at Rob Roy Dairy",
    orientation: "portrait",
  },
]

const dublinPhotos = [
  {
    src: "/images/img-5224.jpeg",
    alt: "Guinness beer with custom foam art at Guinness Storehouse",
    orientation: "portrait",
  },
  {
    src: "/images/img-5197.jpeg",
    alt: "The Temple Bar at night with Christmas lights",
    orientation: "landscape",
  },
  {
    src: "/images/img-5183.jpeg",
    alt: "Large metallic sphere sculpture in Dublin",
    orientation: "portrait",
  },
  {
    src: "/images/img-5205.jpeg",
    alt: "Christmas display at Guinness Storehouse with decorated trees",
    orientation: "landscape",
  },
  {
    src: "/images/img-5190.jpeg",
    alt: "Trinity College Library with illuminated Earth globe",
    orientation: "portrait",
  },
  {
    src: "/images/img-5176.jpeg",
    alt: "Irish pub quiz interactive screen showing New Zealand fact",
    orientation: "portrait",
  },
  {
    src: "/images/img-5220.jpeg",
    alt: "Custom Guinness foam art with faces at Guinness Storehouse",
    orientation: "portrait",
  },
  {
    src: "/images/img-5213.jpeg",
    alt: "Modern chandelier with cascading lights at Guinness facility",
    orientation: "portrait",
  },
  {
    src: "/images/img-5181.jpeg",
    alt: "Chase at the Manning Clan family history display",
    orientation: "landscape",
  },
  {
    src: "/images/img-5172.jpeg",
    alt: "Chase and Lien eating chicken fillet rolls",
    orientation: "portrait",
  },
  {
    src: "/images/img-5229.jpeg",
    alt: "Chase and Lien at Guinness Storehouse Christmas photo frame",
    orientation: "landscape",
  },
  {
    src: "/images/img-5228.jpeg",
    alt: "Chase and Lien making silly faces at Guinness Storehouse",
    orientation: "landscape",
  },
  {
    src: "/images/img-5230.jpeg",
    alt: "Chase and Lien at Guinness Storehouse Christmas photo booth",
    orientation: "landscape",
  },
  {
    src: "/images/img-5204.jpeg",
    alt: "Beautiful Christmas market with festive decorations and diners",
    orientation: "landscape",
  },
  {
    src: "/images/img-5165.jpeg",
    alt: "Christmas at the Castle entrance at night with lights",
    orientation: "landscape",
  },
]

const portugalPhotos = [
  {
    src: "/images/portugal-tram-28.jpeg",
    alt: "Iconic yellow Lisbon tram number 28 on the street",
    orientation: "portrait",
  },
  {
    src: "/images/portugal-umbrellas.jpeg",
    alt: "Chase and Lien on colorful umbrella street in Portugal",
    orientation: "portrait",
  },
  {
    src: "/images/portugal-vintage-car.jpeg",
    alt: "Group photo in vintage black car on palace tour",
    orientation: "landscape",
  },
  {
    src: "/images/portugal-tram-selfie.jpeg",
    alt: "Chase and Lien excited selfie on historic wooden tram",
    orientation: "portrait",
  },
  {
    src: "/images/portugal-pena-palace.jpeg",
    alt: "Lien celebrating with arms raised at colorful Pena Palace",
    orientation: "portrait",
  },
  {
    src: "/images/portugal-lisbon-view.jpeg",
    alt: "Stunning sunset view over Lisbon cityscape",
    orientation: "landscape",
  },
  {
    src: "/images/portugal-queluz-palace.jpeg",
    alt: "Lien in white dress at ornate blue Queluz Palace with fountain",
    orientation: "landscape",
  },
  {
    src: "/images/portugal-palace-doorway.jpeg",
    alt: "Chase in ornate stone palace doorway looking surprised",
    orientation: "portrait",
  },
  {
    src: "/images/portugal-family-photo.jpeg",
    alt: "Family group photo at palace with Chase's parents",
    orientation: "landscape",
  },
  {
    src: "/images/portugal-tunnel-faces.jpeg",
    alt: "Chase and Lien making funny faces in narrow stone tunnel",
    orientation: "portrait",
  },
  {
    src: "/images/portugal-porto-view.jpeg",
    alt: "Scenic view of Porto with Dom Luís I Bridge and traditional rabelo boats on the Douro River",
    orientation: "landscape",
  },
  {
    src: "/images/portugal-viaduct-couple.jpeg",
    alt: "Chase and Lien posing at a historic stone viaduct with boats in the background",
    orientation: "portrait",
  },
  {
    src: "/images/portugal-segway-selfie.jpeg",
    alt: "Segway tour selfie in narrow Porto street",
    orientation: "landscape",
  },
  {
    src: "/images/portugal-sardine-shop.jpeg",
    alt: "Interior of Portuguese sardine shop with colorful tin displays",
    orientation: "landscape",
  },
  {
    src: "/images/portugal-pina-colada.jpeg",
    alt: "Chase and friend enjoying pina coladas at vibrant pink neon bar",
    orientation: "landscape",
  },
  {
    src: "/images/portugal-outdoor-dining.jpeg",
    alt: "Group dining outdoors under fringed umbrella with tropical plants",
    orientation: "portrait",
  },
  {
    src: "/images/portugal-segway-group.jpeg",
    alt: "Group of five on Segways in front of Porto Cathedral",
    orientation: "portrait",
  },
  {
    src: "/images/portugal-buddha-group.jpeg",
    alt: "Group photo in front of large reclining Buddha statue",
    orientation: "portrait",
  },
  {
    src: "/images/portugal-cable-car.jpeg",
    alt: "Cable car selfie with Porto cityscape and Douro River view",
    orientation: "landscape",
  },
  {
    src: "/images/portugal-boat-selfie.jpeg",
    alt: "Chase and Lien boat selfie on the Douro River",
    orientation: "landscape",
  },
  {
    src: "/images/portugal-terrace-dining.jpeg",
    alt: "Outdoor terrace restaurant overlooking the Douro River and viaduct with group enjoying coffee",
    orientation: "landscape",
  },
  {
    src: "/images/portugal-boat-lien.jpeg",
    alt: "Lien steering a boat on the Douro River with terraced vineyards in the background",
    orientation: "landscape",
  },
  {
    src: "/images/portugal-viaduct-group.jpeg",
    alt: "Family group of five posing at the marina with historic stone viaduct bridge behind",
    orientation: "landscape",
  },
  {
    src: "/images/portugal-surfing-couple.jpeg",
    alt: "Chase and Lien carrying red surfboard on the beach in wetsuits",
    orientation: "portrait",
  },
  {
    src: "/images/portugal-surfing-group.jpeg",
    alt: "Group of four people doing playful pose with colorful surfboards on the beach",
    orientation: "landscape",
  },
]

const krakowPhotos = [
  {
    src: "/images/krakow-shooting-range-2.jpeg",
    alt: "Lien shooting at the gun range with instructor",
    orientation: "portrait",
  },
  {
    src: "/images/krakow-pigeons.jpeg",
    alt: "Chase feeding pigeons in Krakow's main square with colorful buildings",
    orientation: "portrait",
  },
  {
    src: "/images/krakow-sunset-river.jpeg",
    alt: "Sunset view over the river with ferris wheel in Krakow",
    orientation: "landscape",
  },
  {
    src: "/images/krakow-shooting-range-1.jpeg",
    alt: "Chase and instructor at the shooting range with ear protection",
    orientation: "portrait",
  },
  {
    src: "/images/krakow-sunset-selfie.jpeg",
    alt: "Chase and Lien selfie at sunset by the water with photobomber",
    orientation: "landscape",
  },
  {
    src: "/images/krakow-segway.jpeg",
    alt: "Chase riding a Segway with arms outstretched on Krakow street",
    orientation: "portrait",
  },
  {
    src: "/images/krakow-vodka-tasting.jpeg",
    alt: "Flight of colorful vodka samples on wooden board",
    orientation: "landscape",
  },
  {
    src: "/images/krakow-bread-bowl-soup.jpeg",
    alt: "Traditional Polish soup served in a bread bowl",
    orientation: "landscape",
  },
  {
    src: "/images/krakow-formal-gardens.jpeg",
    alt: "Formal castle gardens with ornate hedge patterns and colorful flowers viewed from above",
    orientation: "landscape",
  },
  {
    src: "/images/krakow-segway-dragon.jpeg",
    alt: "Chase and Lien on Segways in front of dragon sculpture monument",
    orientation: "portrait",
  },
  {
    src: "/images/krakow-glass-panels.jpeg",
    alt: "Colorful transparent glass art installation with geometric panels",
    orientation: "portrait",
  },
  {
    src: "/images/krakow-target-practice.jpeg",
    alt: "Lien proudly showing shooting target with bullet holes and spent bullet",
    orientation: "landscape",
  },
  {
    src: "/images/krakow-travel-documents.jpeg",
    alt: "Travel documents for Krakow trip including easyJet boarding passes, Airbnb booking, and car rental papers",
    orientation: "portrait",
  },
]

const greece2024Photos = [
  {
    src: "/images/greece-parthenon.jpeg",
    alt: "The Parthenon at the Acropolis",
    orientation: "landscape",
  },
  {
    src: "/images/greece-chase-peace-signs.jpeg",
    alt: "Chase making playful peace signs",
    orientation: "portrait",
  },
  {
    src: "/images/greece-acropolis-view.jpeg",
    alt: "Acropolis view from Athens",
    orientation: "landscape",
  },
  {
    src: "/images/greece-taverna-musicians.jpeg",
    alt: "Live music at a Greek taverna",
    orientation: "landscape",
  },
  {
    src: "/images/greece-acropolis-couple.jpeg",
    alt: "Chase and Lien at the Acropolis entrance",
    orientation: "portrait",
  },
  {
    src: "/images/greece-lien-city-view.jpeg",
    alt: "Lien with arms outstretched overlooking Athens",
    orientation: "portrait",
  },
  {
    src: "/images/greece-monemvasia-coast.jpeg",
    alt: "Chase and Lien by the coast in Monemvasia",
    orientation: "portrait",
  },
  {
    src: "/images/greece-pool-cats.jpeg",
    alt: "Adorable cats by the pool",
    orientation: "landscape",
  },
  {
    src: "/images/greece-wedding-guests.jpeg",
    alt: "Well-dressed wedding guests",
    orientation: "landscape",
  },
  {
    src: "/images/greece-breakfast-cat.jpeg",
    alt: "Cat trying to steal breakfast",
    orientation: "landscape",
  },
  {
    src: "/images/greece-ruins-selfie.jpeg",
    alt: "Selfie at the ancient ruins with Acropolis backdrop",
    orientation: "landscape",
  },
]

const parisPhotos = [
  {
    src: "/images/paris-lien-dinner-view.jpeg",
    alt: "Lien enjoying champagne with Eiffel Tower view",
    orientation: "portrait",
  },
  {
    src: "/images/paris-dinner-together.jpeg",
    alt: "Chase and Lien at dinner with Eiffel Tower view",
    orientation: "portrait",
  },
  {
    src: "/images/paris-street-selfie.jpeg",
    alt: "Chase and Lien taking a happy selfie on a Paris street",
    orientation: "landscape",
  },
  {
    src: "/images/paris-bus-excited.jpeg",
    alt: "Chase and Lien excited on the bus in Paris",
    orientation: "portrait",
  },
  {
    src: "/images/paris-bus-smiling.jpeg",
    alt: "Chase and Lien smiling on the bus in Paris",
    orientation: "portrait",
  },
  {
    src: "/images/paris-eiffel-tower.jpeg",
    alt: "Chase and Lien at the Eiffel Tower in Paris",
    orientation: "landscape",
  },
  {
    src: "/images/paris-escalator-tunnel.jpeg",
    alt: "In the modern glass escalator tunnel in Paris",
    orientation: "portrait",
  },
  {
    src: "/images/paris-marathon-arc.jpeg",
    alt: "Chase at Arc de Triomphe after completing the Paris Marathon",
    orientation: "portrait",
  },
  {
    src: "/images/paris-versailles-gardens.jpeg",
    alt: "Gardens of Versailles with ornate patterns and fountains",
    orientation: "landscape",
  },
  {
    src: "/images/paris-sacre-coeur-sunset.jpeg",
    alt: "Sacré-Cœur basilica at sunset with crowds on the steps",
    orientation: "landscape",
  },
  {
    src: "/images/paris-city-hall-olympics.jpeg",
    alt: "Paris City Hall decorated with Paris 2024 Olympics banners",
    orientation: "landscape",
  },
  {
    src: "/images/paris-lien-tunnel-arms.jpeg",
    alt: "Lien with arms raised in the modern glass tunnel",
    orientation: "portrait",
  },
  {
    src: "/images/paris-hotel-bed.jpeg",
    alt: "Relaxing in the Paris hotel room",
    orientation: "landscape",
  },
  {
    src: "/images/paris-escalator-excited.jpeg",
    alt: "Chase excited in the glass escalator tunnel",
    orientation: "portrait",
  },
  {
    src: "/images/paris-eiffel-couple.jpeg",
    alt: "Chase and Lien together in front of the Eiffel Tower",
    orientation: "portrait",
  },
  {
    src: "/images/paris-heart-glasses.jpeg",
    alt: "Photo booth fun with heart-shaped sunglasses - Drunk in Love",
    orientation: "portrait",
  },
  {
    src: "/images/paris-james-bond.jpeg",
    alt: "James Bond style photo with Chase and Lien's father in tuxedos",
    orientation: "portrait",
  },
  {
    src: "/images/paris-institute-archway.jpeg",
    alt: "Beautiful view of Institut de France through an archway",
    orientation: "portrait",
  },
  {
    src: "/images/paris-restaurant-flowers.jpeg",
    alt: "Chase excited about brunch at a fancy Paris restaurant with flowers",
    orientation: "portrait",
  },
  {
    src: "/images/paris-lien-pompidou-tunnel.jpeg",
    alt: "Lien celebrating in the futuristic Pompidou Center tunnel",
    orientation: "portrait",
  },
  {
    src: "/images/paris-lien-mom.jpeg",
    alt: "Lien with her mother in Paris",
    orientation: "portrait",
  },
]

const barcelonaPhotos = [
  {
    src: "/images/barcelona-sagrada-familia.jpeg",
    alt: "Sagrada Familia cathedral in Barcelona",
    orientation: "landscape",
  },
  {
    src: "/images/barcelona-art-installation.jpeg",
    alt: "Art installation in Barcelona",
    orientation: "landscape",
  },
  {
    src: "/images/barcelona-casa-batllo.jpeg",
    alt: "Casa Batlló by Gaudí in Barcelona",
    orientation: "landscape",
  },
  {
    src: "/images/barcelona-polygonal-art.jpeg",
    alt: "Polygonal art in Barcelona",
    orientation: "landscape",
  },
  {
    src: "/images/barcelona-bed.jpeg",
    alt: "Bed in Barcelona accommodation",
    orientation: "landscape",
  },
  {
    src: "/images/barcelona-time-magazine.jpeg",
    alt: "Time magazine in Barcelona",
    orientation: "landscape",
  },
  {
    src: "/images/barcelona-miro-sculpture.jpeg",
    alt: "Joan Miró sculpture in Barcelona",
    orientation: "landscape",
  },
  {
    src: "/images/barcelona-night-lights.jpeg",
    alt: "Night lights in Barcelona",
    orientation: "landscape",
  },
  {
    src: "/images/barcelona-diamonds.jpeg",
    alt: "Diamonds display in Barcelona",
    orientation: "landscape",
  },
  {
    src: "/images/barcelona-cocktail.jpeg",
    alt: "Cocktail in Barcelona",
    orientation: "landscape",
  },
  {
    src: "/images/barcelona-gaudi-tunnel.jpeg",
    alt: "Gaudí tunnel in Barcelona",
    orientation: "landscape",
  },
  {
    src: "/images/barcelona-park-guell.jpeg",
    alt: "Park Güell in Barcelona",
    orientation: "landscape",
  },
  {
    src: "/images/barcelona-caganer-shop.jpeg",
    alt: "Caganer shop in Barcelona",
    orientation: "landscape",
  },
  {
    src: "/images/barcelona-park-guell-dragon.jpeg",
    alt: "Dragon sculpture at Park Güell in Barcelona",
    orientation: "landscape",
  },
]

export default function TravelGallery() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [enlargedImage, setEnlargedImage] = useState<{
    src: string
    alt: string
  } | null>(null)

  const [selectedLocation, setSelectedLocation] = useState("overview")

  const [carouselIndices, setCarouselIndices] = useState<Record<string, number>>({
    "antarctica-2026": 0,
    "buenos-aires-2026": 0,
    "bilbao-2026": 0,
    "sri-lanka-2025": 0,
    "glastonbury-2025": 0,
    "new-zealand-2025": 0,
    "dublin-2024": 0,
    "portugal-2024": 0,
    "krakow-2024": 0,
    "greece-2024": 0,
    "paris-2024": 0,
    "barcelona-2023": 0,
  })

  const activeLocations = locations.filter((loc) => loc.active)
  const currentIndex = activeLocations.findIndex((loc) => loc.id === selectedLocation)
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < activeLocations.length - 1

  const navigateToPrev = () => {
    if (hasPrev) {
      setSelectedLocation(activeLocations[currentIndex - 1].id)
    }
  }

  const navigateToNext = () => {
    if (hasNext) {
      setSelectedLocation(activeLocations[currentIndex + 1].id)
    }
  }

  const getGalleryData = () => {
    switch (selectedLocation) {
      case "overview":
        return {
          title: "Chase & Lien",
          date: "",
          description: "Highlights from around the world",
          photos: [],
          isOverview: true,
        }
      case "antarctica-2026":
        return {
          title: "Antarctica",
          date: "MARCH 2026",
          description: "The white continent.",
          photos: antarcticaPhotos,
        }
      case "buenos-aires-2026":
        return {
          title: "Buenos Aires",
          date: "MARCH 2026",
          description: "Enough steak sandwiches to need a nap.",
          photos: buenosAiresPhotos,
        }
      case "bilbao-2026":
        return {
          title: "Bilbao",
          date: "JANUARY 2026",
          description:
            "Guggenheim galleries, pintxos bars, and the Basque Country good life.",
          photos: bilbaoPhotos,
        }
      case "sri-lanka-2025":
        return {
          title: "Sri Lanka",
          date: "AUGUST 2025",
          description: "The place where we were nearly abducted by a small boy in a tuk-tuk.",
          photos: sriLankaPhotos,
        }
      case "glastonbury-2025":
        return {
          title: "Glastonbury",
          date: "JUNE 2025",
          description: "We've never been so grateful for flushing toilets and hot showers.",
          photos: glastonburyPhotos,
        }
      case "new-zealand-2025":
        return {
          title: "New Zealand",
          date: "FEBRUARY 2025",
          description: "Including a visit to the most depraved house in the world (The Castle, Dunedin).",
          photos: newZealandPhotos,
        }
      case "dublin-2024":
        return {
          title: "Dublin",
          date: "DECEMBER 2024",
          description: "The home of chicken fillet rolls and Guinness.",
          photos: dublinPhotos,
        }
      case "paris-2024":
        return {
          title: "Paris",
          date: "APRIL & OCTOBER 2024",
          description: "When Chase went to Paris three times in the same year.",
          photos: parisPhotos,
        }
      case "krakow-2024":
        return {
          title: "Krakow",
          date: "JUNE 2024",
          description: "Vodka tasting, shooting and the scariest haunted house ever. All of Lien's favourite things.",
          photos: krakowPhotos,
        }
      case "greece-2024":
        return {
          title: "Greece",
          date: "MAY 2024",
          description: "Athens & Monemvasia for the poshest wedding we'll probably ever be invited to.",
          photos: greece2024Photos,
        }
      case "portugal-2024":
        return {
          title: "Portugal",
          date: "SEPTEMBER 2024",
          description: "When we accidentally visited 3 different palaces before we found the one we were looking for.",
          photos: portugalPhotos,
        }
      case "barcelona-2023":
        return {
          title: "Barcelona",
          date: "DECEMBER 2023",
          description: (
            <>
              Liquid mercury fountains, Olympic swimming pool bars and impressive Gaudi architecture.
              <br />
              Plus having a cocktail confiscated due to bad behaviour.
            </>
          ),
          photos: barcelonaPhotos,
        }
      default:
        return {
          title: "Sri Lanka",
          date: "AUGUST 2025",
          description: "The place where we were nearly abducted by a small boy in a tuk-tuk.",
          photos: sriLankaPhotos,
        }
    }
  }

  const getSectionContent = (locationId: string) => {
    if (locationId === "overview") {
      return {
        title: "Chase & Lien",
        description: "Highlights from around the world",
        date: "",
        photos: [],
        isOverview: true,
      }
    }

    switch (locationId) {
      case "antarctica-2026":
        return {
          title: "Antarctica",
          date: "MARCH 2026",
          description: "The white continent.",
          photos: antarcticaPhotos,
        }
      case "buenos-aires-2026":
        return {
          title: "Buenos Aires",
          date: "MARCH 2026",
          description: "Enough steak sandwiches to need a nap.",
          photos: buenosAiresPhotos,
        }
      case "bilbao-2026":
        return {
          title: "Bilbao",
          date: "JANUARY 2026",
          description:
            "Guggenheim galleries, pintxos bars, and the Basque Country good life.",
          photos: bilbaoPhotos,
        }
      case "sri-lanka-2025":
        return {
          title: "Sri Lanka",
          date: "AUGUST 2025",
          description: "The place where we were nearly abducted by a small boy in a tuk-tuk.",
          photos: sriLankaPhotos,
        }
      case "glastonbury-2025":
        return {
          title: "Glastonbury",
          date: "JUNE 2025",
          description: "We've never been so grateful for flushing toilets and hot showers.",
          photos: glastonburyPhotos,
        }
      case "new-zealand-2025":
        return {
          title: "New Zealand",
          date: "FEBRUARY 2025",
          description: "Including a visit to the most depraved house in the world (The Castle, Dunedin).",
          photos: newZealandPhotos,
        }
      case "dublin-2024":
        return {
          title: "Dublin",
          date: "DECEMBER 2024",
          description: "The home of chicken fillet rolls and Guinness.",
          photos: dublinPhotos,
        }
      case "paris-2024":
        return {
          title: "Paris",
          date: "APRIL & OCTOBER 2024",
          description: "When Chase went to Paris three times in the same year.",
          photos: parisPhotos,
        }
      case "krakow-2024":
        return {
          title: "Krakow",
          date: "JUNE 2024",
          description: "Vodka tasting, shooting and the scariest haunted house ever. All of Lien's favourite things.",
          photos: krakowPhotos,
        }
      case "greece-2024":
        return {
          title: "Greece",
          date: "MAY 2024",
          description: "Athens & Monemvasia for the poshest wedding we'll probably ever be invited to.",
          photos: greece2024Photos,
        }
      case "portugal-2024":
        return {
          title: "Portugal",
          date: "SEPTEMBER 2024",
          description: "When we accidentally visited 3 different palaces before we found the one we were looking for.",
          photos: portugalPhotos,
        }
      case "barcelona-2023":
        return {
          title: "Barcelona",
          date: "DECEMBER 2023",
          description: (
            <>
              Liquid mercury fountains, Olympic swimming pool bars and impressive Gaudi architecture.
              <br />
              Plus having a cocktail confiscated due to bad behaviour.
            </>
          ),
          photos: barcelonaPhotos,
        }
      default:
        return {
          title: "Sri Lanka",
          date: "AUGUST 2025",
          description: "The place where we were nearly abducted by a small boy in a tuk-tuk.",
          photos: sriLankaPhotos,
        }
    }
  }

  const currentGallery = getGalleryData()

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-sidebar-border z-40 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full p-6 pt-16">
          {/* Logo/Title */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-sidebar-foreground">Chase & Lien</h1>
            <p className="text-sm text-sidebar-foreground/60 mt-1 font-sans">Travel Adventures</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            <h2 className="text-xs font-semibold text-sidebar-foreground/50 mb-3 uppercase tracking-wider font-sans">
              Our Travels
            </h2>
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => {
                  setSelectedLocation(location.id)
                  setIsSidebarOpen(false)
                }}
                disabled={!location.active}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedLocation === location.id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    : location.active
                      ? "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/40 cursor-not-allowed"
                }`}
              >
                {location.name}
                {!location.active && <span className="ml-2 text-xs text-sidebar-foreground/30">(Coming soon)</span>}
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="pt-6 border-t border-sidebar-border">
            <p className="text-xs text-sidebar-foreground/50 leading-relaxed">
              All content Copyright © 2025 Chase & Lien
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="container mx-auto px-4 py-8 lg:py-12 bg-white">
          {currentGallery.isOverview ? (
            <>
              <div className="mb-12 lg:mb-16 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{currentGallery.title}</h2>
                <p className="text-foreground/60 font-sans text-sm">{currentGallery.description}</p>
              </div>

              {/* Overview Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {/* Antarctica 2026 */}
                <button onClick={() => setSelectedLocation("antarctica-2026")} className="group text-left">
                  <div className="relative overflow-hidden bg-muted mb-3 aspect-[4/3] rounded-lg">
                    <Image
                      src={antarcticaPhotos[carouselIndices["antarctica-2026"]].src || "/placeholder.svg"}
                      alt="Antarctica 2026"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "antarctica-2026":
                            prev["antarctica-2026"] === 0
                              ? antarcticaPhotos.length - 1
                              : prev["antarctica-2026"] - 1,
                        }))
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "antarctica-2026": (prev["antarctica-2026"] + 1) % antarcticaPhotos.length,
                        }))
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                    Antarctica 2026
                  </h3>
                </button>

                {/* Buenos Aires 2026 */}
                <button onClick={() => setSelectedLocation("buenos-aires-2026")} className="group text-left">
                  <div className="relative overflow-hidden bg-muted mb-3 aspect-[4/3] rounded-lg">
                    <Image
                      src={buenosAiresPhotos[carouselIndices["buenos-aires-2026"]].src || "/placeholder.svg"}
                      alt="Buenos Aires 2026"
                      fill
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                        buenosAiresPhotos[carouselIndices["buenos-aires-2026"]].orientation === "portrait"
                          ? carouselIndices["buenos-aires-2026"] === 0
                            ? "object-[center_30%]"
                            : "object-top"
                          : ""
                      }`}
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "buenos-aires-2026":
                            prev["buenos-aires-2026"] === 0
                              ? buenosAiresPhotos.length - 1
                              : prev["buenos-aires-2026"] - 1,
                        }))
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "buenos-aires-2026": (prev["buenos-aires-2026"] + 1) % buenosAiresPhotos.length,
                        }))
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                    Buenos Aires 2026
                  </h3>
                </button>

                {/* Bilbao 2026 */}
                <button onClick={() => setSelectedLocation("bilbao-2026")} className="group text-left">
                  <div className="relative overflow-hidden bg-muted mb-3 aspect-[4/3] rounded-lg">
                    <Image
                      src={bilbaoPhotos[carouselIndices["bilbao-2026"]].src || "/placeholder.svg"}
                      alt="Bilbao 2026"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "bilbao-2026":
                            prev["bilbao-2026"] === 0 ? bilbaoPhotos.length - 1 : prev["bilbao-2026"] - 1,
                        }))
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "bilbao-2026": (prev["bilbao-2026"] + 1) % bilbaoPhotos.length,
                        }))
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                    Bilbao 2026
                  </h3>
                </button>

                {/* Sri Lanka 2025 */}
                <button onClick={() => setSelectedLocation("sri-lanka-2025")} className="group text-left">
                  <div className="relative overflow-hidden bg-muted mb-3 aspect-[4/3] rounded-lg">
                    <Image
                      src={sriLankaPhotos[carouselIndices["sri-lanka-2025"]].src || "/placeholder.svg"}
                      alt="Sri Lanka 2025"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        console.log(
                          "[v0] Previous button clicked for sri-lanka, current index:",
                          carouselIndices["sri-lanka-2025"],
                        )
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "sri-lanka-2025":
                            prev["sri-lanka-2025"] === 0 ? sriLankaPhotos.length - 1 : prev["sri-lanka-2025"] - 1,
                        }))
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        console.log(
                          "[v0] Next button clicked for sri-lanka, current index:",
                          carouselIndices["sri-lanka-2025"],
                        )
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "sri-lanka-2025": (prev["sri-lanka-2025"] + 1) % sriLankaPhotos.length,
                        }))
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                    Sri Lanka 2025
                  </h3>
                </button>

                {/* Glastonbury 2025 */}
                <button onClick={() => setSelectedLocation("glastonbury-2025")} className="group text-left">
                  <div className="relative overflow-hidden bg-muted mb-3 aspect-[4/3] rounded-lg">
                    <Image
                      src={glastonburyPhotos[carouselIndices["glastonbury-2025"]].src || "/placeholder.svg"}
                      alt="Glastonbury 2025"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        console.log("[v0] Previous button clicked for glastonbury")
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "glastonbury-2025":
                            prev["glastonbury-2025"] === 0
                              ? glastonburyPhotos.length - 1
                              : prev["glastonbury-2025"] - 1,
                        }))
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        console.log("[v0] Next button clicked for glastonbury")
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "glastonbury-2025": (prev["glastonbury-2025"] + 1) % glastonburyPhotos.length,
                        }))
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                    Glastonbury 2025
                  </h3>
                </button>

                {/* New Zealand 2025 */}
                <button onClick={() => setSelectedLocation("new-zealand-2025")} className="group text-left">
                  <div className="relative overflow-hidden bg-muted mb-3 aspect-[4/3] rounded-lg">
                    <Image
                      src={newZealandPhotos[carouselIndices["new-zealand-2025"]].src || "/placeholder.svg"}
                      alt="New Zealand 2025"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "new-zealand-2025":
                            prev["new-zealand-2025"] === 0 ? newZealandPhotos.length - 1 : prev["new-zealand-2025"] - 1,
                        }))
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "new-zealand-2025": (prev["new-zealand-2025"] + 1) % newZealandPhotos.length,
                        }))
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                    New Zealand 2025
                  </h3>
                </button>

                {/* Dublin 2024 */}
                <button onClick={() => setSelectedLocation("dublin-2024")} className="group text-left">
                  <div className="relative overflow-hidden bg-muted mb-3 aspect-[4/3] rounded-lg">
                    <Image
                      src={dublinPhotos[carouselIndices["dublin-2024"]].src || "/placeholder.svg"}
                      alt="Dublin 2024"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "dublin-2024": prev["dublin-2024"] === 0 ? dublinPhotos.length - 1 : prev["dublin-2024"] - 1,
                        }))
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "dublin-2024": (prev["dublin-2024"] + 1) % dublinPhotos.length,
                        }))
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                    Dublin 2024
                  </h3>
                </button>

                {/* Portugal 2024 */}
                <button onClick={() => setSelectedLocation("portugal-2024")} className="group text-left">
                  <div className="relative overflow-hidden bg-muted mb-3 aspect-[4/3] rounded-lg">
                    <Image
                      src={portugalPhotos[carouselIndices["portugal-2024"]].src || "/placeholder.svg"}
                      alt="Portugal 2024"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "portugal-2024":
                            prev["portugal-2024"] === 0 ? portugalPhotos.length - 1 : prev["portugal-2024"] - 1,
                        }))
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "portugal-2024": (prev["portugal-2024"] + 1) % portugalPhotos.length,
                        }))
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                    Portugal 2024
                  </h3>
                </button>

                {/* Krakow 2024 */}
                <button onClick={() => setSelectedLocation("krakow-2024")} className="group text-left">
                  <div className="relative overflow-hidden bg-muted mb-3 aspect-[4/3] rounded-lg">
                    <Image
                      src={krakowPhotos[carouselIndices["krakow-2024"]].src || "/placeholder.svg"}
                      alt="Krakow 2024"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "krakow-2024": prev["krakow-2024"] === 0 ? krakowPhotos.length - 1 : prev["krakow-2024"] - 1,
                        }))
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "krakow-2024": (prev["krakow-2024"] + 1) % krakowPhotos.length,
                        }))
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                    Krakow 2024
                  </h3>
                </button>

                {/* Greece 2024 */}
                <button onClick={() => setSelectedLocation("greece-2024")} className="group text-left">
                  <div className="relative overflow-hidden bg-muted mb-3 aspect-[4/3] rounded-lg">
                    <Image
                      src={greece2024Photos[carouselIndices["greece-2024"]].src || "/placeholder.svg"}
                      alt="Greece 2024"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "greece-2024":
                            prev["greece-2024"] === 0 ? greece2024Photos.length - 1 : prev["greece-2024"] - 1,
                        }))
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "greece-2024": (prev["greece-2024"] + 1) % greece2024Photos.length,
                        }))
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                    Greece 2024
                  </h3>
                </button>

                {/* Paris 2024 */}
                <button onClick={() => setSelectedLocation("paris-2024")} className="group text-left">
                  <div className="relative overflow-hidden bg-muted mb-3 aspect-[4/3] rounded-lg">
                    <Image
                      src={parisPhotos[carouselIndices["paris-2024"]].src || "/placeholder.svg"}
                      alt="Paris 2024"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "paris-2024": prev["paris-2024"] === 0 ? parisPhotos.length - 1 : prev["paris-2024"] - 1,
                        }))
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "paris-2024": (prev["paris-2024"] + 1) % parisPhotos.length,
                        }))
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                    Paris 2024
                  </h3>
                </button>

                {/* Barcelona 2023 */}
                <button onClick={() => setSelectedLocation("barcelona-2023")} className="group text-left">
                  <div className="relative overflow-hidden bg-muted mb-3 aspect-[4/3] rounded-lg">
                    <Image
                      src={barcelonaPhotos[carouselIndices["barcelona-2023"]].src || "/placeholder.svg"}
                      alt="Barcelona 2023"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "barcelona-2023":
                            prev["barcelona-2023"] === 0 ? barcelonaPhotos.length - 1 : prev["barcelona-2023"] - 1,
                        }))
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setCarouselIndices((prev) => ({
                          ...prev,
                          "barcelona-2023": (prev["barcelona-2023"] + 1) % barcelonaPhotos.length,
                        }))
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                    Barcelona 2023
                  </h3>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-8 lg:mb-12">
                <div className="flex items-center justify-center gap-4 lg:gap-6 mb-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={navigateToPrev}
                    disabled={!hasPrev}
                    className="shrink-0"
                    aria-label="Previous location"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center">{currentGallery.title}</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={navigateToNext}
                    disabled={!hasNext}
                    className="shrink-0"
                    aria-label="Next location"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
                <p className="text-foreground text-center text-sm mb-2 font-serif">{currentGallery.date}</p>
                <p className="text-center font-sans text-xs">{currentGallery.description}</p>
              </div>

              {/* Photo Grid */}
              <div className="columns-1 md:columns-2 lg:columns-3 gap-2">
                {currentGallery.photos.map((photo, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden bg-muted group mb-2 break-inside-avoid ${
                      selectedLocation !== "overview" ? "cursor-pointer" : ""
                    }`}
                    onClick={() => {
                      if (selectedLocation !== "overview") {
                        setEnlargedImage({ src: photo.src, alt: photo.alt })
                      }
                    }}
                  >
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      width={800}
                      height={photo.orientation === "portrait" ? 1200 : 600}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* Detailed navigation buttons at the bottom */}
              <div className="mt-12 flex items-center justify-between gap-4">
                {hasPrev ? (
                  <Button
                    variant="outline"
                    onClick={navigateToPrev}
                    className="flex items-center gap-2 group bg-transparent px-6 py-6"
                  >
                    <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    <span className="flex flex-col items-start">
                      <span className="text-xs text-muted-foreground">Back</span>
                      <span className="text-sm font-medium">{activeLocations[currentIndex - 1].name}</span>
                    </span>
                  </Button>
                ) : (
                  <div />
                )}

                {hasNext ? (
                  <Button
                    variant="outline"
                    onClick={navigateToNext}
                    className="flex items-center gap-2 group bg-transparent px-6 py-6"
                  >
                    <span className="flex flex-col items-end">
                      <span className="text-xs text-muted-foreground">Next</span>
                      <span className="text-sm font-medium">{activeLocations[currentIndex + 1].name}</span>
                    </span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                ) : (
                  <div />
                )}
              </div>
            </>
          )}
        </div>
      </main>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      {enlargedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            onClick={() => setEnlargedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-black" />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] p-4">
            <Image
              src={enlargedImage.src || "/placeholder.svg"}
              alt={enlargedImage.alt}
              width={1600}
              height={1200}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}
