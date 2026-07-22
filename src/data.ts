import { Medicine, Category, Testimonial, FAQ, HealthTip, GalleryItem } from './types';

export const BUSINESS_INFO = {
  name: "Maa Tara Medical Hall",
  category: "Pharmacy | Medical Store",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  location: "WRVV+68R, Khachiya Rd, Tekari, Bihar 824236",
  shortLocation: "Khachiya Road, Tekari, Bihar",
  phone: "08804210306",
  phoneFormatted: "+91 88042 10306",
  email: "maataramedicalhall@gmail.com",
  workingHours: {
    weekdays: "08:00 AM - 09:30 PM",
    sunday: "08:30 AM - 08:00 PM",
    emergency: "24/7 Available for Emergencies (Call us directly)"
  },
  owner: "Mr. Rajeev Kumar",
  established: "2015",
  whatsappUrl: "https://wa.me/918804210306"
};

export const CATEGORIES: Category[] = [
  {
    id: "cat-tablets",
    name: "Tablets",
    slug: "tablets",
    iconName: "Pill",
    description: "Prescription and general tablets for all common ailments and treatments."
  },
  {
    id: "cat-capsules",
    name: "Capsules",
    slug: "capsules",
    iconName: "Container",
    description: "Softgels and hard capsules for antibiotics, pain relief, and supplements."
  },
  {
    id: "cat-syrups",
    name: "Syrups & Suspensions",
    slug: "syrups",
    iconName: "Droplet",
    description: "Liquid medicines, cough syrups, pediatric suspensions, and digestive tonics."
  },
  {
    id: "cat-injection",
    name: "Injections & Vaccines",
    slug: "injection",
    iconName: "Syringe",
    description: "Insulins, life-saving drugs, and critical vaccines under cold-chain storage."
  },
  {
    id: "cat-equipment",
    name: "Medical Equipment",
    slug: "equipment",
    iconName: "Activity",
    description: "BP monitors, nebulizers, thermometers, pulse oximeters, and more."
  },
  {
    id: "cat-vitamins",
    name: "Vitamins & Supplements",
    slug: "vitamins",
    iconName: "Sparkles",
    description: "Multivitamins, calcium, iron supplements, and general health tonics."
  },
  {
    id: "cat-skincare",
    name: "Skin Care & Cosmetics",
    slug: "skin-care",
    iconName: "Smile",
    description: "Dermatological creams, moisturizers, sunscreen, and daily skin health products."
  },
  {
    id: "cat-baby",
    name: "Baby Care Products",
    slug: "baby-products",
    iconName: "Baby",
    description: "Baby food, formula milk, premium diapers, baby oil, and gentle soaps."
  },
  {
    id: "cat-hygiene",
    name: "Personal Hygiene",
    slug: "personal-hygiene",
    iconName: "ShieldAlert",
    description: "Sanitizers, handwashes, face masks, antiseptic solutions, and hygiene kits."
  },
  {
    id: "cat-ortho",
    name: "Orthopedic Support",
    slug: "orthopedic-support",
    iconName: "Layers",
    description: "Knee braces, crepe bandages, cervical collars, and back support belts."
  },
  {
    id: "cat-diabetic",
    name: "Diabetic Care",
    slug: "diabetic-care",
    iconName: "Activity",
    description: "Metformin, Glucometers, testing strips, sugar-free supplements, and insulin pen needles."
  }
];

export const MEDICINES: Medicine[] = [
  {
    id: "med-1",
    name: "Paracetamol 650mg (Dolo)",
    category: "tablets",
    description: "Effective for relieving mild to moderate pain and reducing fever.",
    price: 32,
    packSize: "15 Tablets / Strip",
    isAvailable: true,
    requiresPrescription: false,
    manufacturer: "Micro Labs Ltd"
  },
  {
    id: "med-2",
    name: "Amoxycillin & Potassium Clavulanate 625mg (Augmentin)",
    category: "capsules",
    description: "Broad-spectrum penicillin-type antibiotic used to treat bacterial infections.",
    price: 201,
    packSize: "10 Tablets / Strip",
    isAvailable: true,
    requiresPrescription: true,
    manufacturer: "GSK Pharmaceuticals"
  },
  {
    id: "med-3",
    name: "Pantoprazole Gastro-resistant 40mg (Pan-40)",
    category: "tablets",
    description: "Reduces the amount of acid produced in your stomach. Used for heartburn and acid reflux.",
    price: 155,
    packSize: "15 Tablets / Strip",
    isAvailable: true,
    requiresPrescription: true,
    manufacturer: "Alkem Laboratories"
  },
  {
    id: "med-4",
    name: "Benadryl DR Cough Syrup (100ml)",
    category: "syrups",
    description: "Soothes dry cough and provides fast relief from throat irritation and congestion.",
    price: 140,
    packSize: "100ml Bottle",
    isAvailable: true,
    requiresPrescription: false,
    manufacturer: "Johnson & Johnson"
  },
  {
    id: "med-5",
    name: "Metformin Hydrochloride 500mg (Glycomet)",
    category: "diabetic-care",
    description: "An oral diabetes medicine that helps control blood sugar levels in Type-2 diabetes.",
    price: 24,
    packSize: "10 Tablets / Strip",
    isAvailable: true,
    requiresPrescription: true,
    manufacturer: "USV Private Ltd"
  },
  {
    id: "med-6",
    name: "Dr. Trust Fully Automatic Blood Pressure Monitor",
    category: "equipment",
    description: "Professional digital upper-arm blood pressure monitor for accurate heart rate & pressure logs.",
    price: 1850,
    packSize: "1 Unit",
    isAvailable: true,
    requiresPrescription: false,
    manufacturer: "Dr. Trust USA"
  },
  {
    id: "med-7",
    name: "Lantus Solostar Insulin Injection (100 IU/ml)",
    category: "injection",
    description: "Long-acting insulin pen used to improve blood sugar control in adults and children with diabetes.",
    price: 680,
    packSize: "3ml Pen",
    isAvailable: true,
    requiresPrescription: true,
    manufacturer: "Sanofi India Ltd"
  },
  {
    id: "med-8",
    name: "Limcee Vitamin C Chewable Tablets 500mg",
    category: "vitamins",
    description: "Provides daily essential Vitamin C boost to improve immune system defenses.",
    price: 28,
    packSize: "15 Tablets / Strip",
    isAvailable: true,
    requiresPrescription: false,
    manufacturer: "Abbott India"
  },
  {
    id: "med-9",
    name: "Cetaphil Gentle Skin Cleanser (125ml)",
    category: "skin-care",
    description: "Dermatologist-recommended daily hydrating cleanser for all skin types, especially sensitive skin.",
    price: 335,
    packSize: "125ml Bottle",
    isAvailable: true,
    requiresPrescription: false,
    manufacturer: "Galderma India"
  },
  {
    id: "med-10",
    name: "MamyPoko Pants Standard Diapers (Medium)",
    category: "baby-products",
    description: "Premium absorbent pants-style baby diapers with soft elastic fit.",
    price: 499,
    packSize: "42 Pants / Pack",
    isAvailable: true,
    requiresPrescription: false,
    manufacturer: "Unicharm"
  },
  {
    id: "med-11",
    name: "Dettol Antiseptic Liquid (250ml)",
    category: "personal-hygiene",
    description: "Universal germ protection formula for first aid, surface disinfection, and personal hygiene.",
    price: 110,
    packSize: "250ml Bottle",
    isAvailable: true,
    requiresPrescription: false,
    manufacturer: "Reckitt Benckiser"
  },
  {
    id: "med-12",
    name: "Flamingo Orthopaedic Knee Cap Pair",
    category: "orthopedic-support",
    description: "Provides compression, support, and warmth to arthritic knees and sports sprains.",
    price: 320,
    packSize: "1 Pair",
    isAvailable: true,
    requiresPrescription: false,
    manufacturer: "Flamingo"
  },
  {
    id: "med-13",
    name: "Accu-Chek Active Test Strips",
    category: "diabetic-care",
    description: "Highly accurate blood glucose test strips for use with the Accu-Chek Active glucometer.",
    price: 975,
    packSize: "50 Strips / Vial",
    isAvailable: true,
    requiresPrescription: false,
    manufacturer: "Roche Diagnostics"
  },
  {
    id: "med-14",
    name: "Zandu Pure Honey (500g)",
    category: "vitamins",
    description: "100% pure premium honey with zero added sugar and loaded with natural antioxidants.",
    price: 199,
    packSize: "500g Jar",
    isAvailable: true,
    requiresPrescription: false,
    manufacturer: "Emami Ltd"
  },
  {
    id: "med-15",
    name: "Ibuprofen 400mg (Brufen)",
    category: "tablets",
    description: "Nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain, fever, and inflammation.",
    price: 18,
    packSize: "15 Tablets / Strip",
    isAvailable: true,
    requiresPrescription: true,
    manufacturer: "Abbott Healthcare"
  },
  {
    id: "med-16",
    name: "Becosules Capsules (B-Complex + Vitamin C)",
    category: "capsules",
    description: "Essential multi-vitamin capsules with Vitamin B-Complex and Vitamin C for energy and oral ulcers.",
    price: 45,
    packSize: "20 Capsules / Strip",
    isAvailable: true,
    requiresPrescription: false,
    manufacturer: "Pfizer India"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Ramesh Prasad Singh",
    location: "Tekari, Bihar",
    rating: 5,
    text: "Maa Tara Medical Hall is my go-to pharmacy. They always have the authentic medicines I need for my parents' heart conditions, and they even offer discounts. Best pharmacy in Tekari!",
    date: "2026-05-18",
    verified: true
  },
  {
    id: "rev-2",
    name: "Suman Kumari",
    location: "Khachiya Road, Tekari",
    rating: 5,
    text: "The behavior of the owner and staff is very polite. I sent my prescription via WhatsApp, and they kept all my medicines ready in a packet. It saved so much of my time. Highly recommended!",
    date: "2026-06-02",
    verified: true
  },
  {
    id: "rev-3",
    name: "Dr. Alok Ranjan",
    location: "Gaya (Practicing in Tekari)",
    rating: 5,
    text: "Excellent service and genuine drugs. I always refer my local patients to Maa Tara Medical Hall because I trust their storage conditions, especially for vaccines and temperature-sensitive drugs.",
    date: "2026-06-25",
    verified: true
  },
  {
    id: "rev-4",
    name: "Vikash Kumar Gupta",
    location: "Tekari Bazar",
    rating: 5,
    text: "Very reasonable prices on baby products and diapers. Their stock is always updated and they never sell near-expiry products. Outstanding local business.",
    date: "2026-07-01",
    verified: true
  },
  {
    id: "rev-5",
    name: "Md. Shahnawaz",
    location: "Tekari, Bihar",
    rating: 4,
    text: "Good store with modern equipment. I bought my glucometer and BP machine here. The staff showed me exactly how to use it step-by-step. Very helpful service.",
    date: "2026-07-08",
    verified: true
  },
  {
    id: "rev-6",
    name: "Priyanka Devi",
    location: "Chakand Rd, Tekari",
    rating: 5,
    text: "During an emergency late at night, I called their number. They opened the pharmacy and provided life-saving medicines. I am extremely grateful for their care and service.",
    date: "2026-07-10",
    verified: true
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "How can I order medicines online from Maa Tara Medical Hall?",
    answer: "You can easily order via our website by filling out the WhatsApp Order Form. You can upload your prescription, fill in your medicine details, and hit 'Send via WhatsApp'. A structured message will open in WhatsApp. You can also directly call us at 08804210306 to place your order.",
    category: "Ordering"
  },
  {
    id: "faq-2",
    question: "Do you supply only genuine medicines?",
    answer: "Yes, 100%. We source our medicines directly from authorized pharmaceutical distributors. We maintain a strict policy against counterfeit drugs and guarantee that every medicine sold is 100% genuine and safe.",
    category: "Quality"
  },
  {
    id: "faq-3",
    question: "Is a prescription required for all medicines?",
    answer: "Prescription-only medicines (marked with 'Rx' on packaging like Antibiotics, heavy painkillers, psychiatric drugs) strictly require a valid prescription signed by a registered medical practitioner. Over-The-Counter (OTC) medicines like basic paracetamol, supplements, and skin creams do not require a prescription.",
    category: "Prescription"
  },
  {
    id: "faq-4",
    question: "Do you have home delivery services in Tekari?",
    answer: "Yes! We offer doorstep medicine delivery within Tekari and nearby areas for orders exceeding a certain amount. For remote areas, please call us to confirm if delivery is available.",
    category: "Delivery"
  },
  {
    id: "faq-5",
    question: "What are your store hours?",
    answer: "Our store is open from 08:00 AM to 09:30 PM from Monday to Saturday, and 08:30 AM to 08:00 PM on Sundays. In case of critical night-time medical emergencies, we are available on call at 08804210306.",
    category: "Store Timing"
  },
  {
    id: "faq-6",
    question: "Can I buy surgical supplies and medical equipment like BP Monitors?",
    answer: "Absolutely. We keep a robust inventory of high-quality surgical goods, bandages, thermometers, digital BP monitors, glucometers, nebulizers, and orthopedic supports like knee caps and belts.",
    category: "Inventory"
  },
  {
    id: "faq-7",
    question: "What payment methods do you accept?",
    answer: "We accept all major payment modes including Cash, Google Pay, PhonePe, Paytm, UPI bank transfers, and Credit/Debit cards.",
    category: "Payment"
  },
  {
    id: "faq-8",
    question: "Do you offer discounts on monthly chronic medicines?",
    answer: "Yes, we support our chronic patients (diabetes, blood pressure, thyroid) with special loyalty discounts on long-term monthly medications. Please visit our store or message us on WhatsApp with your prescription to find your customized pricing.",
    category: "Discounts"
  },
  {
    id: "faq-9",
    question: "How do you ensure proper storage of vaccines and insulins?",
    answer: "We have state-of-the-art pharmaceutical refrigerators equipped with continuous power backup. This ensures critical medications like insulin, vaccines, and eye drops are kept strictly within their specified cold-chain temperatures (2°C to 8°C).",
    category: "Storage"
  },
  {
    id: "faq-10",
    question: "What should I do if a medicine I need is out of stock?",
    answer: "If a specific drug is currently out of stock, we can special-order it for you. It typically arrives from our primary distributors within 12 to 24 hours. Alternatively, our trained pharmacist can assist in showing you safe, bio-equivalent alternatives from reputed brands under your doctor's supervision.",
    category: "Inventory"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Maa Tara Medical Hall Storefront",
    category: "storefront",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=600",
    description: "Welcome to Maa Tara Medical Hall at Khachiya Road, Tekari. Your reliable local healthcare partner."
  },
  {
    id: "gal-2",
    title: "Well-Organized Medicine Shelves",
    category: "shelves",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    description: "Systematically arranged racks categorized alphabetically to ensure quick and error-free retrieval."
  },
  {
    id: "gal-3",
    title: "Genuine Healthcare Products",
    category: "products",
    imageUrl: "https://images.unsplash.com/photo-1607619056574-7b8d304b3b86?auto=format&fit=crop&q=80&w=600",
    description: "We stock premium health supplements, baby foods, skincare regimens, and hygiene products."
  },
  {
    id: "gal-4",
    title: "Digital BP Monitors & Medical Kits",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=600",
    description: "Modern self-use medical monitoring instruments from authorized global brands."
  },
  {
    id: "gal-5",
    title: "Surgical Supplies & First Aid",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=80&w=600",
    description: "Comprehensive trauma kits, crepe bandages, antiseptic solutions, and emergency surgical goods."
  },
  {
    id: "gal-6",
    title: "Customer Support & Counseling",
    category: "customers",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    description: "Our pharmacist provides safe administration advice, checks dosages, and clarifies usage directions."
  }
];

export const TIMELINE_EVENTS = [
  {
    year: "2015",
    title: "The Beginning",
    description: "Maa Tara Medical Hall was established by Mr. Rajeev Kumar in Tekari to provide reliable, authentic pharmacy services to the local community."
  },
  {
    year: "2018",
    title: "Infrastructure Expansion",
    description: "Installed medical cold-storage systems and doubled our shelf inventory, introducing a vast collection of baby care and orthopedic supportive products."
  },
  {
    year: "2021",
    title: "Pandemic Care & Delivery",
    description: "Served as an essential frontline medical service in Tekari, delivering sanitization supplies, oxygen-monitors, and medicines safely to doorsteps."
  },
  {
    year: "2024",
    title: "Digital Integration",
    description: "Launched WhatsApp ordering systems to simplify medicine inquiries and prescription submissions for rural and urban customers alike."
  },
  {
    year: "2026",
    title: "Modern Online Showcase",
    description: "Introduced our responsive, SEO-optimized web platform allowing easy online inquiries, digital availability checks, and quick-form support."
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: "tip-1",
    title: "Understanding Antibiotics: Why Dose Completion is Critical",
    summary: "Stopping your antibiotic course early can cause bacteria to mutate, leading to antibiotic resistance. Learn how to take them safely.",
    content: "Antibiotics are powerful medications designed to cure bacterial infections. Many patients stop taking their tablets the moment they feel better (often day 3 or 4). However, doing this leaves the strongest, most resilient bacteria alive in your body. These surviving bacteria learn to defend themselves against the drug, creating 'superbugs' that are resistant to treatments. Always complete your prescribed course, even if you feel completely healthy!",
    category: "Medicine Safety",
    date: "July 05, 2026",
    readTime: "3 min read",
    author: "Rajeev Kumar (Pharmacist)",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "tip-2",
    title: "How to Correctly Monitor Blood Pressure at Home",
    summary: "Avoid common errors when reading your BP with home digital monitors. Find out how rest, posture, and arm positioning impact readings.",
    content: "Monitoring your blood pressure at home helps track cardiovascular health. For accurate results: 1. Sit quietly for 5 minutes before checking. 2. Sit with your back straight, feet flat on the floor (no crossed legs). 3. Support your arm on a table so the cuff is at the exact height of your heart. 4. Do not talk or move during the reading. Note down 2-3 readings over consecutive days for your doctor to review.",
    category: "Daily Health",
    date: "June 28, 2026",
    readTime: "4 min read",
    author: "Maa Tara Medical Support",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "tip-3",
    title: "Essential First-Aid Kit Checklist for Every Home",
    summary: "Accidents can happen anytime. Ensure your household first-aid kit contains these vital supplies for burn, cut, and sprain emergencies.",
    content: "A well-stocked emergency kit in your house can manage minor injuries and prevent infections. Your kit should contain: Antiseptic lotion (Dettol/Savlon), sterile cotton rolls, medical gauze pieces, adhesive bandages (band-aids) in multiple sizes, micro-pore surgical tape, burn creams (Burnol), crepe bandage for muscle sprains, fever reducer tablets (Paracetamol), pair of scissors, and tweezers. Store in a cool, dry place out of children's reach.",
    category: "First Aid",
    date: "May 15, 2026",
    readTime: "5 min read",
    author: "Rajeev Kumar (Pharmacist)",
    imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400"
  }
];

export const OFFERS = [
  {
    id: "off-1",
    title: "Chronic Care Loyalty Program",
    description: "Get up to 15% discount on regular monthly refills of Diabetes, Blood Pressure, and Thyroid medications.",
    badge: "Monthly Refills"
  },
  {
    id: "off-2",
    title: "Free BP & Health Checkup",
    description: "Visit our store on any Sunday morning for a complimentary Digital Blood Pressure and blood sugar monitoring check.",
    badge: "Sunday Special"
  },
  {
    id: "off-3",
    title: "First WhatsApp Order Deal",
    description: "Save 10% on your first medicine order placed through our WhatsApp Web Order form. Coupon: FIRSTTARA10",
    badge: "Online Order"
  }
];
