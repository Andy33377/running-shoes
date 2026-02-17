import { useState, useMemo } from "react";
import {
  Header,
  Breadcrumbs,
  Sidebar,
  AppliedFilters,
  SortBy,
  ProductGrid,
  Pagination,
  InfoSection,
  Footer,
  ChatBubble,
} from "../components";
import { products, infoLinks } from "../data/mockData";
import type { AppliedFilter, SortOption } from "../types";
import styles from "./CatalogPage.module.css";

const PRODUCTS_PER_PAGE = 12;

export function CatalogPage() {
  const [selectedGender, setSelectedGender] = useState<string | undefined>();
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [page, setPage] = useState(1);

  const appliedFilters = useMemo((): AppliedFilter[] => {
    const list: AppliedFilter[] = [];
    if (selectedGender)
      list.push({ key: "gender", label: "Gender", value: selectedGender });
    selectedSizes.forEach((s) =>
      list.push({ key: "size", label: "Size", value: String(s) })
    );
    if (selectedTypes.length)
      list.push({
        key: "type",
        label: "Type",
        value: selectedTypes.join(", "),
      });
    if (selectedBrands.length)
      list.push({
        key: "brand",
        label: "Brand",
        value: selectedBrands.join(", "),
      });
    if (selectedPriceRanges.length)
      list.push({
        key: "price",
        label: "Price",
        value: selectedPriceRanges.join(", "),
      });
    return list;
  }, [
    selectedGender,
    selectedSizes,
    selectedTypes,
    selectedBrands,
    selectedPriceRanges,
  ]);

  const toggleSize = (s: number) => {
    setSelectedSizes((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
    setPage(1);
  };
  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((x) => x !== type) : [...prev, type]
    );
    setPage(1);
  };
  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((x) => x !== brand) : [...prev, brand]
    );
    setPage(1);
  };
  const togglePriceRange = (id: string) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
    setPage(1);
  };

  const removeFilter = (key: string, value: string) => {
    if (key === "gender") setSelectedGender(undefined);
    else if (key === "size")
      setSelectedSizes((prev) => prev.filter((s) => String(s) !== value));
    else if (key === "type") setSelectedTypes([]);
    else if (key === "brand") setSelectedBrands([]);
    else if (key === "price") setSelectedPriceRanges([]);
    setPage(1);
  };

  const filteredProducts = useMemo(() => {
    let list = [...products];
    if (selectedGender === "mens")
      list = list.filter((p) => p.name.startsWith("Men's"));
    if (selectedGender === "womens")
      list = list.filter((p) => p.name.startsWith("Women's"));

    const hasTrail = selectedTypes.includes("Trail Running");
    const hasTrack = selectedTypes.includes("Track");
    if (hasTrail && !hasTrack) {
      // только трейловые модели (id начинается с 't')
      list = list.filter((p) => p.id.startsWith("t"));
    } else if (hasTrack && !hasTrail) {
      // только «дорожные»/трек — все из папки shoes (id не начинается с 't')
      list = list.filter((p) => !p.id.startsWith("t"));
    }
    if (sortBy === "price-asc")
      list.sort((a, b) => (a.priceRange?.min ?? 0) - (b.priceRange?.min ?? 0));
    if (sortBy === "price-desc")
      list.sort((a, b) => (b.priceRange?.max ?? 0) - (a.priceRange?.max ?? 0));
    if (sortBy === "newest") list.reverse();
    return list;
  }, [products, selectedGender, selectedTypes, sortBy]);

  const totalPages =
    Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, page]);

  return (
    <div className={styles.layout}>
      <Header />
      <Breadcrumbs />

      <div className={styles.body}>
        <Sidebar
          selectedGender={selectedGender}
          selectedSizes={selectedSizes}
          selectedTypes={selectedTypes}
          selectedBrands={selectedBrands}
          selectedPriceRanges={selectedPriceRanges}
          onGenderChange={setSelectedGender}
          onSizeToggle={toggleSize}
          onTypeClick={toggleType}
          onBrandClick={toggleBrand}
          onPriceRangeToggle={togglePriceRange}
        />

        <main className={styles.main}>
          <h1 className={styles.pageTitle}>Running Shoes</h1>
          <p className={styles.description}>
            Running shoes come in all shapes and sizes. From thick-soled
            maximalist trainers to light and fast racing flats, there are kicks
            for every need—and every runner.
          </p>
          <div className={styles.infoLinks}>
            {infoLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.infoLink}>
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.toolbar}>
            <div className={styles.filtersWrap}>
              <AppliedFilters
                filters={appliedFilters}
                onRemove={removeFilter}
              />
            </div>
            <div className={styles.sortWrap}>
              <SortBy value={sortBy} onChange={setSortBy} />
            </div>
          </div>

          <div className={styles.productsSection}>
            <ProductGrid products={paginatedProducts} />
          </div>

          <Pagination
            currentPage={page}
            hasNext={page < totalPages}
            onNext={() => setPage((p) => Math.min(p + 1, totalPages))}
            onPrev={() => setPage((p) => Math.max(p - 1, 1))}
          />

          <InfoSection id="fit" title="How Should Running Shoes Fit?">
            <p>
              Buying running shoes online can be hard. We&apos;re here to help
              make it easier.
            </p>
            <p>
              Finding the right pair is essential for comfortable, happy miles.
              While nothing beats our unique, in-store outfitting process, we
              can help you find the right gear for you from the comfort of your
              home.
            </p>
            <p>
              Just starting out? Purchase a pair built for everyday training.
              Looking to break your PR? Shop for models tuned for speed.
            </p>
            <p>
              Here are our top 5 tips for choosing the perfect running shoes:
            </p>
          </InfoSection>

          <InfoSection id="types" title="Types of Running Shoes">
            <ul>
              <li>
                <strong>Trail running:</strong> Built for mud, gravel, and
                off-road with sticky rubber outsoles, aggressive lugs, and
                durable uppers.
              </li>
              <li>
                <strong>Race shoes:</strong> Lightweight and minimal for an
                extra pop on race day—less durable and not ideal for daily
                training.
              </li>
            </ul>
            <p>
              Smaller categories include cross country shoes and track
              spikes—built for competition, light and fast for the track or
              cross country course.
            </p>
          </InfoSection>
        </main>
      </div>

      <Footer />
      <ChatBubble />
    </div>
  );
}
