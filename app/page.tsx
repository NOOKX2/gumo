import Image from "next/image";
import { Faq } from "@/components/Faq";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { ProductVisual } from "@/components/ProductVisual";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/brand";
import {
  AUDIENCES,
  DIFFERENCE_POINTS,
  HIGHLIGHTS,
  PLANTS,
  PRODUCT_POINTS,
  STANDARDS,
  TIKTOK_SHOP_URL,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* 02 — Hero */}
        <section
          id="home"
          className="relative overflow-hidden bg-cream-mist md:min-h-[100svh]"
        >
          {/* Desktop product — right half background */}
          <div className="absolute inset-y-0 right-0 hidden w-[58%] md:block lg:w-[60%]">
            <ProductVisual className="h-full min-h-[100svh]" />
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[50%] bg-gradient-to-r from-cream-mist via-cream-mist/75 to-transparent md:block" />

          <div className="relative mx-auto flex max-w-6xl flex-col px-5 pt-24 pb-12 md:min-h-[100svh] md:justify-center md:px-8 md:pt-32 md:pb-20">
            <div className="max-w-xl">
              <div className="animate-rise relative h-12 w-[200px] sm:h-14 sm:w-[240px] md:h-20 md:w-[320px]">
                <Logo variant="wordmark" priority />
              </div>

              <h1 className="animate-rise-delay-1 font-display mt-6 text-3xl leading-[1.1] font-semibold tracking-tight text-accent-deep sm:text-4xl md:mt-8 md:text-5xl">
                EVERYDAY WELLNESS,
                <br />
                SIMPLIFIED.
              </h1>

              <p className="animate-rise-delay-2 font-display mt-4 text-xl text-accent md:text-2xl">
                Good habits. Made easy.
              </p>
              <p className="animate-rise-delay-2 font-thai mt-3 text-lg text-muted">
                ดูแลตัวเองให้ง่าย เหมือนกินขนม
              </p>
              <p className="animate-rise-delay-2 font-thai mt-5 text-base leading-relaxed text-muted">
                กัมมี่ผักผลไม้ 12 ชนิด 5 สี พร้อมพรีไบโอติก ในรูปแบบซองพกพา
                ออกแบบมาให้เข้ากับไลฟ์สไตล์ของคุณในทุกวัน
              </p>

              <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-3 md:mt-9">
                <a
                  href={TIKTOK_SHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-deep px-6 py-3.5 text-sm tracking-wide text-cream-mist transition-colors hover:bg-accent"
                >
                  Shop Now
                  <span aria-hidden>↗</span>
                </a>
                <a
                  href="#product"
                  className="inline-flex items-center gap-2 border border-accent-deep/25 bg-cream-mist/70 px-6 py-3.5 text-sm tracking-wide text-accent-deep transition-colors hover:border-accent-deep hover:bg-cream-mist"
                >
                  Discover GUMO
                </a>
              </div>
            </div>

            {/* Mobile product — normal image below copy */}
            <div className="animate-rise-delay-3 mt-10 md:hidden">
              <ProductVisual compact className="min-h-[420px] rounded-none" />
            </div>
          </div>
        </section>

        {/* 03 — Highlights */}
        <section className="border-y border-line bg-accent-deep text-cream-mist">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-6">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="px-5 py-8 text-center md:px-4 md:py-10"
              >
                <p className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 text-xs tracking-[0.14em] text-cream-mist/70 uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 04 — Philosophy */}
        <section
          id="about"
          className="scroll-mt-24 bg-cream-mist px-5 py-24 md:px-8 md:py-32"
        >
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
            <Reveal>
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-accent-deep md:min-h-[440px]">
                <div className="absolute inset-0 bg-leaf-grid opacity-20" />
                <div className="relative h-44 w-44 md:h-56 md:w-56">
                  <Image
                    src={BRAND.markCream}
                    alt="GUMO mark"
                    fill
                    className="object-contain"
                    sizes="224px"
                  />
                </div>
                <div className="absolute right-6 bottom-6 left-6">
                  <p className="font-display text-sm tracking-[0.2em] text-cream-mist uppercase">
                    Everyday lifestyle
                  </p>
                  <p className="font-thai mt-2 text-cream-mist/90">
                    Simple, effortless self-care.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="font-display text-sm tracking-[0.22em] text-accent uppercase">
                Our Philosophy
              </p>
              <h2 className="font-display mt-4 text-4xl leading-tight font-semibold text-accent-deep md:text-5xl">
                Self-care should be simple.
              </h2>
              <p className="font-thai mt-6 text-lg leading-relaxed text-muted">
                เราเชื่อว่าการดูแลตัวเองที่ดี ไม่จำเป็นต้องเริ่มจากการเปลี่ยนแปลงครั้งใหญ่
              </p>
              <p className="font-thai mt-5 text-base leading-relaxed text-muted">
                ในวันที่ชีวิตเต็มไปด้วยความเร่งรีบ
                การดูแลตัวเองมักกลายเป็นเรื่องที่ถูกมองข้าม GUMO
                จึงเกิดขึ้นจากความตั้งใจที่จะทำให้การดูแลตัวเองเป็นเรื่องง่าย สนุก
                และเข้ากับชีวิตประจำวันได้จริง
              </p>
              <p className="font-thai mt-5 text-base leading-relaxed text-muted">
                เราอยากเป็นส่วนเล็กๆ ใน Routine ของคุณ
                ที่ช่วยให้การดูแลตัวเองเป็นเรื่องง่ายขึ้นในทุกวัน
              </p>
              <p className="font-display mt-8 text-xl text-accent">
                A small part of your routine that makes self-care easier.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 05 — Audience */}
        <section className="bg-atmosphere px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="font-display text-sm tracking-[0.22em] text-accent uppercase">
                Made for Real Life
              </p>
              <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight font-semibold text-accent-deep md:text-5xl">
                Made for people like you.
              </h2>
              <p className="font-thai mt-5 max-w-2xl text-base leading-relaxed text-muted">
                ไม่ว่าแต่ละวันของคุณจะเป็นแบบไหน
                การดูแลตัวเองก็ไม่จำเป็นต้องเป็นเรื่องยาก
              </p>
            </Reveal>

            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {AUDIENCES.map((audience, index) => (
                <Reveal key={audience.title} delay={index * 80}>
                  <article className="group">
                    <div className="relative mb-5 aspect-[4/5] overflow-hidden bg-surface-strong">
                      <div
                        className="absolute inset-0 opacity-80 transition-transform duration-700 group-hover:scale-105"
                        style={{
                          background: [
                            "linear-gradient(160deg,#d5e4d9,#8fb89a)",
                            "linear-gradient(160deg,#e8f0c8,#c8e6b8)",
                            "linear-gradient(160deg,#cde0d4,#6ea87d)",
                            "linear-gradient(160deg,#e7efe9,#2f6b45)",
                          ][index],
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-accent-deep/55 via-transparent to-transparent" />
                      <p className="absolute bottom-4 left-4 font-display text-xs tracking-[0.18em] text-cream-mist uppercase">
                        {audience.tone}
                      </p>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-accent-deep">
                      {audience.title}
                    </h3>
                    <p className="font-thai mt-3 text-sm leading-relaxed text-muted">
                      {audience.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 06 — Product */}
        <section
          id="product"
          className="scroll-mt-24 bg-cream-mist px-5 py-24 md:px-8 md:py-32"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <ProductVisual compact className="min-h-[420px]" />
            </Reveal>

            <Reveal delay={100}>
              <p className="font-display text-sm tracking-[0.22em] text-accent uppercase">
                Meet Your New Daily Habit
              </p>
              <h2 className="font-display mt-4 text-4xl leading-tight font-semibold text-accent-deep md:text-5xl">
                GUMO Daily
              </h2>
              <p className="font-display mt-3 text-xl text-accent">
                Your daily greens, simplified.
              </p>
              <p className="font-thai mt-6 text-base leading-relaxed text-muted">
                กัมมี่ผักผลไม้รวม 12 ชนิด 5 สี พร้อมพรีไบโอติกจากรากชิโครี
                ในรสชาติองุ่นมัสแคท หอม อร่อย ไม่เหม็นเขียว
              </p>
              <p className="font-thai mt-4 text-base leading-relaxed text-muted">
                ออกแบบมาในรูปแบบซองพกพา เพื่อให้การดูแลตัวเองเป็นเรื่องง่าย
                ไม่ว่าคุณจะอยู่ที่ไหน
              </p>

              <ul className="mt-8 space-y-3">
                {PRODUCT_POINTS.map((point) => (
                  <li
                    key={point}
                    className="font-thai flex items-start gap-3 text-base text-accent-deep"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href={TIKTOK_SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 bg-accent-deep px-6 py-3.5 text-sm tracking-wide text-cream-mist transition-colors hover:bg-accent"
              >
                Shop on TikTok
                <span aria-hidden>↗</span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* 07 — Ingredients */}
        <section
          id="ingredients"
          className="scroll-mt-24 bg-atmosphere px-5 py-24 md:px-8 md:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="font-display text-sm tracking-[0.22em] text-accent uppercase">
                What&apos;s Inside
              </p>
              <h2 className="font-display mt-4 text-4xl leading-tight font-semibold text-accent-deep md:text-5xl">
                Goodness in every color.
              </h2>
              <p className="font-thai mt-5 max-w-3xl text-base leading-relaxed text-muted">
                เราใส่ใจในการคัดเลือกส่วนประกอบ เพื่อให้ทุกซองของ GUMO
                เป็นส่วนหนึ่งของการดูแลตัวเองในชีวิตประจำวัน
              </p>
              <p className="font-thai mt-4 max-w-3xl text-base leading-relaxed text-muted">
                ด้วยส่วนประกอบจากพืชหลากหลายชนิด ผสานพรีไบโอติกจากธรรมชาติ
                ในรูปแบบกัมมี่ที่รับประทานง่าย
              </p>
            </Reveal>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <Reveal>
                <article className="border-t border-accent pt-8">
                  <p className="font-display text-xs tracking-[0.2em] text-accent uppercase">
                    Key Ingredient 01
                  </p>
                  <h3 className="font-display mt-3 text-3xl font-semibold text-accent-deep">
                    SUPERFINOL™
                  </h3>
                  <p className="font-display mt-2 text-lg text-accent">
                    12 Plant Ingredients. 5 Colors.
                  </p>
                  <p className="font-thai mt-4 text-base leading-relaxed text-muted">
                    ส่วนประกอบจากพืช 12 ชนิด 5 สี จากประเทศมาเลเซีย
                    รวบรวมความหลากหลายของสารพฤกษเคมีจากพืชไว้ในหนึ่งสูตร
                  </p>
                </article>
              </Reveal>

              <Reveal delay={100}>
                <article className="border-t border-accent pt-8">
                  <p className="font-display text-xs tracking-[0.2em] text-accent uppercase">
                    Key Ingredient 02
                  </p>
                  <h3 className="font-display mt-3 text-3xl font-semibold text-accent-deep">
                    Orafti® Inulin
                  </h3>
                  <p className="font-display mt-2 text-lg text-accent">
                    Naturally sourced prebiotic fiber.
                  </p>
                  <p className="font-thai mt-4 text-base leading-relaxed text-muted">
                    พรีไบโอติกจากรากชิโครี จากประเทศชิลี
                    เป็นใยอาหารชนิดหนึ่งที่สามารถเป็นอาหารให้กับจุลินทรีย์บางชนิดในลำไส้
                  </p>
                </article>
              </Reveal>
            </div>

            <Reveal delay={80}>
              <h3 className="font-display mt-16 text-2xl font-semibold text-accent-deep">
                Our 12 Plant Ingredients
              </h3>
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                {PLANTS.map((plant) => (
                  <div key={plant.en} className="border-t border-line pt-4">
                    <p className="font-display text-base font-semibold text-accent-deep">
                      {plant.en}
                    </p>
                    <p className="font-thai mt-1 text-sm text-muted">
                      {plant.th}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 08 — Difference */}
        <section className="bg-cream-mist px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-end gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <Reveal>
                <p className="font-display text-sm tracking-[0.22em] text-accent uppercase">
                  Designed for Your Lifestyle
                </p>
                <h2 className="font-display mt-4 text-4xl leading-tight font-semibold text-accent-deep md:text-5xl">
                  GUMO, On to GO.
                </h2>
                <p className="font-thai mt-4 text-xl text-accent">
                  ทุกที่ ทุกเวลา ทุกไลฟ์สไตล์
                </p>
                <p className="font-thai mt-6 max-w-xl text-base leading-relaxed text-muted">
                  เราออกแบบ GUMO ให้มาในรูปแบบซองพกพา
                  โดยแบ่งปริมาณสำหรับการรับประทานในแต่ละวันไว้อย่างลงตัว
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="flex items-center gap-6 border border-line bg-surface/70 px-6 py-8">
                  <div className="relative h-36 w-28 shrink-0">
                    <Image
                      src={BRAND.sachet}
                      alt="GUMO sachet"
                      fill
                      unoptimized
                      className="object-contain"
                      sizes="112px"
                    />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold text-accent-deep">
                      1 Sachet = 1 Portion
                    </p>
                    <p className="font-display mt-1 text-accent">(4 Gummies)</p>
                    <p className="font-thai mt-4 text-sm text-muted">
                      เพียงหยิบ ฉีก และทานได้เลย
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {DIFFERENCE_POINTS.map((point, index) => (
                <Reveal key={point.title} delay={index * 70}>
                  <div className="border-t border-accent pt-5">
                    <h3 className="font-display text-xl font-semibold text-accent-deep">
                      {point.title}
                    </h3>
                    <p className="font-thai mt-3 text-sm leading-relaxed text-muted">
                      {point.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="font-display mt-14 text-2xl text-accent">
                Good habits go wherever you go.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 09 — Taste & Nutrition */}
        <section className="bg-atmosphere px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="font-display text-sm tracking-[0.22em] text-accent uppercase">
                Good Taste. Simple Routine.
              </p>
              <h2 className="font-display mt-4 text-4xl leading-tight font-semibold text-accent-deep md:text-5xl">
                More than a gummy.
              </h2>
              <p className="font-thai mt-5 text-lg text-accent">
                หอมองุ่นมัสแคท อร่อย ไม่เหม็นเขียว
              </p>
              <p className="font-thai mt-5 max-w-lg text-base leading-relaxed text-muted">
                เพราะเราเชื่อว่าการดูแลตัวเองควรเป็นสิ่งที่คุณมีความสุขกับมัน
                ไม่ใช่สิ่งที่ต้องฝืนทำในแต่ละวัน
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="border border-line bg-cream-mist/80 p-8 md:p-10">
                <p className="font-display text-xs tracking-[0.2em] text-accent uppercase">
                  Nutrition Facts · Per Sachet
                </p>
                <div className="mt-8 grid grid-cols-2 gap-8">
                  {[
                    { value: "25kcal", label: "Energy" },
                    { value: "0g", label: "Sugar" },
                    { value: "0g", label: "Fat" },
                    { value: "0mg", label: "Sodium" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-display text-3xl font-bold text-accent-deep">
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm tracking-wide text-muted uppercase">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-line pt-6">
                  <p className="font-display text-sm text-accent-deep">
                    Shine Muscat Flavor · Plant-based Pectin
                  </p>
                  <p className="font-thai mt-2 text-sm text-muted">
                    Net Weight 14 g / 4 Gummies
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 10 — Standards */}
        <section
          id="standards"
          className="scroll-mt-24 bg-cream-mist px-5 py-24 md:px-8 md:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="font-display text-sm tracking-[0.22em] text-accent uppercase">
                Our Commitment to Quality
              </p>
              <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight font-semibold text-accent-deep md:text-5xl">
                Quality in every detail.
              </h2>
              <p className="font-thai mt-5 max-w-3xl text-base leading-relaxed text-muted">
                เราเชื่อว่าความไว้วางใจเริ่มต้นจากความโปร่งใส
              </p>
              <p className="font-thai mt-4 max-w-3xl text-base leading-relaxed text-muted">
                ตั้งแต่การคัดเลือกวัตถุดิบ การพัฒนาสูตร กระบวนการผลิต
                ไปจนถึงการออกแบบบรรจุภัณฑ์ GUMO
                ให้ความสำคัญกับคุณภาพและรายละเอียดของผลิตภัณฑ์
              </p>
              <p className="font-thai mt-4 max-w-3xl text-base leading-relaxed text-muted">
                เพราะทุกสิ่งที่คุณเลือกรับประทานในแต่ละวันควรมาพร้อมกับข้อมูลที่ชัดเจนและตรวจสอบได้
              </p>
            </Reveal>

            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {STANDARDS.map((item, index) => (
                <Reveal key={item.title} delay={index * 60}>
                  <article className="border-t border-line pt-6">
                    <h3 className="font-display text-xl font-semibold text-accent-deep">
                      {item.title}
                    </h3>
                    <p className="font-thai mt-3 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-14 border border-dashed border-accent/30 bg-surface/50 px-6 py-8 md:px-8">
                <p className="font-display text-sm tracking-[0.18em] text-accent uppercase">
                  Certification information
                </p>
                <p className="font-thai mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                  ข้อมูลใบรับรอง เลขสารบบอาหาร และมาตรฐานการผลิตจะเผยแพร่เมื่อมีการตรวจสอบเอกสารและได้รับอนุญาตให้ใช้เครื่องหมายอย่างถูกต้องแล้ว
                </p>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Thai FDA",
                    "GHP / GMP",
                    "HACCP",
                    "ISO",
                    "Laboratory testing",
                    "Manufacturing facility",
                  ].map((label) => (
                    <div key={label} className="border-t border-line pt-3">
                      <dt className="font-display text-sm text-accent-deep">
                        {label}
                      </dt>
                      <dd className="font-thai mt-1 text-sm text-muted">
                        รอข้อมูลที่ยืนยันแล้ว
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 11 — Story */}
        <section className="bg-atmosphere px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <Reveal>
              <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-soft-panel md:min-h-[480px]">
                <div className="absolute inset-0 bg-leaf-grid opacity-30" />
                <div className="relative h-40 w-40 md:h-52 md:w-52">
                  <Image
                    src={BRAND.markGreen}
                    alt="GUMO bear mark"
                    fill
                    className="object-contain"
                    sizes="208px"
                  />
                </div>
                <div className="absolute right-6 bottom-6 left-6">
                  <p className="font-display text-sm tracking-[0.2em] text-accent-deep uppercase">
                    The GUMO Team
                  </p>
                  <p className="font-thai mt-2 text-sm text-muted">
                    เพิ่มภาพผู้ก่อตั้งหรือทีมจริงในส่วนนี้
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="font-display text-sm tracking-[0.22em] text-accent uppercase">
                The Story Behind GUMO
              </p>
              <h2 className="font-display mt-4 text-4xl leading-tight font-semibold text-accent-deep md:text-5xl">
                Built with purpose.
              </h2>
              <p className="font-thai mt-6 text-lg leading-relaxed text-muted">
                GUMO เริ่มต้นจากคำถามง่ายๆ ว่า
              </p>
              <p className="font-display mt-3 text-2xl text-accent-deep">
                ทำไมการดูแลตัวเองถึงต้องเป็นเรื่องยาก?
              </p>
              <p className="font-thai mt-6 text-base leading-relaxed text-muted">
                เราเข้าใจดีว่าในชีวิตจริง ไม่ใช่ทุกคนที่จะมีเวลาจัดเตรียมอาหาร
                เลือกรับประทานอาหารได้ครบถ้วน
                หรือมีเวลาสำหรับการดูแลตัวเองอย่างที่ตั้งใจ
              </p>
              <p className="font-thai mt-4 text-base leading-relaxed text-muted">
                เราจึงอยากสร้างผลิตภัณฑ์ที่ไม่ได้ขอให้คุณเปลี่ยนไลฟ์สไตล์ทั้งหมด
                แต่สามารถเข้ามาเป็นส่วนหนึ่งของชีวิตที่คุณเป็นอยู่แล้ว
              </p>
              <p className="font-thai mt-4 text-base leading-relaxed text-muted">
                GUMO ไม่ได้ต้องการเปลี่ยนชีวิตคุณในวันเดียว
                แต่เราอยากเป็นจุดเริ่มต้นเล็กๆ
                ของนิสัยการดูแลตัวเองที่ดีขึ้นในทุกวัน
              </p>
              <p className="font-display mt-8 text-xl text-accent">
                Small habits. Better days.
              </p>
              <p className="font-display mt-3 text-sm tracking-wide text-muted">
                — The GUMO Team
              </p>
            </Reveal>
          </div>
        </section>

        {/* 12 — FAQs */}
        <Faq />

        {/* 13 — Final CTA */}
        <section className="relative overflow-hidden bg-accent-deep px-5 py-24 text-cream-mist md:px-8 md:py-32">
          <div className="absolute inset-0 bg-leaf-grid opacity-20" />
          <div className="animate-drift absolute -top-16 right-10 h-48 w-48 rounded-full bg-accent-soft/30 blur-3xl" />
          <div className="relative mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="relative mx-auto mb-8 h-12 w-[200px]">
                <Logo variant="cream" className="object-center" />
              </div>
              <p className="font-display text-sm tracking-[0.22em] text-highlight uppercase">
                Your Daily Routine Starts Here
              </p>
              <h2 className="font-display mt-5 text-4xl leading-tight font-semibold md:text-6xl">
                A little better, every day.
              </h2>
              <p className="font-thai mx-auto mt-5 max-w-xl text-lg text-cream-mist/80">
                เริ่มต้นดูแลตัวเอง ด้วยเรื่องเล็กๆ ในทุกวัน
              </p>
              <a
                href={TIKTOK_SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 bg-cream-mist px-7 py-3.5 text-sm tracking-wide text-accent-deep transition-colors hover:bg-highlight"
              >
                Shop on TikTok
                <span aria-hidden>↗</span>
              </a>
              <p className="font-display mt-10 text-lg tracking-[0.12em]">
                GUMO, On to GO.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      {/* 14 — Footer */}
      <footer className="border-t border-line bg-cream-mist px-5 pt-16 pb-10 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="relative h-10 w-[160px]">
              <Logo variant="wordmark" />
            </div>
            <p className="font-display mt-4 text-accent">
              Everyday wellness, simplified.
            </p>
            <p className="font-thai mt-4 max-w-sm text-sm leading-relaxed text-muted">
              แบรนด์ที่อยากเป็นส่วนเล็กๆ ในทุกวัน
              เพื่อให้การดูแลตัวเองเป็นเรื่องง่ายขึ้น
            </p>
          </div>

          <div>
            <p className="font-display text-sm tracking-[0.18em] text-accent-deep uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {[
                { href: "#about", label: "About Us" },
                { href: "#product", label: "Our Product" },
                { href: "#ingredients", label: "Our Ingredients" },
                { href: "#standards", label: "Our Standards" },
                { href: "#faqs", label: "FAQs" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm tracking-[0.18em] text-accent-deep uppercase">
              Connect with us
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Instagram</li>
              <li>TikTok</li>
              <li>LINE Official Account</li>
              <li>Email</li>
            </ul>

            <p className="font-display mt-8 text-sm tracking-[0.18em] text-accent-deep uppercase">
              Company Information
            </p>
            <ul className="font-thai mt-4 space-y-2 text-sm text-muted">
              <li>รอชื่อบริษัทจดทะเบียน</li>
              <li>รอที่อยู่ธุรกิจจดทะเบียน</li>
              <li>รออีเมลติดต่อ</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-6xl border-t border-line pt-8">
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Terms of Use</span>
          </div>
          <p className="font-thai mt-5 max-w-3xl text-xs leading-relaxed text-muted">
            ผลิตภัณฑ์เสริมอาหาร ไม่มีผลในการป้องกันหรือรักษาโรค
            ควรรับประทานอาหารให้หลากหลายครบ 5 หมู่ ในสัดส่วนที่เหมาะสม
          </p>
          <p className="mt-5 text-xs text-muted">
            © 2026 GUMO. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
