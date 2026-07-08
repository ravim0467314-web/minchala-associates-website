type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-[#061724] py-20 text-white md:py-28">
      <div className="container">
        <p className="eyebrow text-[#d0ad68]">{eyebrow}</p>
        <h1 className="display mt-6 max-w-5xl text-5xl leading-[1.02] tracking-[-0.04em] md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{description}</p>
      </div>
    </section>
  );
}
