import { useMemo, useState } from "react";
import {
  Header,
  Breadcrumbs,
  Sidebar,
  AppliedFilters,
  SortBy,
  ProductGrid,
  Pagination,
  InfoSection,
  FreeShipping,
  Footer,
  ChatBubble,
  CartDrawer,
} from "../components";
import { products } from "../data/mockData";
import type { AppliedFilter } from "../types";
import styles from "./CatalogPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import {
  setGender,
  toggleSize,
  toggleType,
  toggleBrand,
  togglePriceRange,
  setSort,
  setPage,
} from "../store/catalogFiltersSlice";

const PRODUCTS_PER_PAGE = 12;

export function CatalogPage() {
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const {
    selectedGender,
    selectedSizes,
    selectedTypes,
    selectedBrands,
    selectedPriceRanges,
    sortBy,
    page,
  } = useSelector((state: RootState) => state.catalogFilters);

  const removeFilter = (key: string, value: string) => {
    if (key === "gender") dispatch(setGender(undefined));
    else if (key === "size") dispatch(toggleSize(Number(value)));
    else if (key === "type") {
      value.split(", ").forEach((v) => dispatch(toggleType(v.trim())));
    } else if (key === "brand") {
      value.split(", ").forEach((v) => dispatch(toggleBrand(v.trim())));
    } else if (key === "price") {
      value.split(", ").forEach((v) => dispatch(togglePriceRange(v.trim())));
    }
    dispatch(setPage(1));
  };

  const appliedFilters = useMemo((): AppliedFilter[] => {
    const list: AppliedFilter[] = [];

    if (selectedGender) {
      list.push({
        key: "gender",
        label: "Gender",
        value: selectedGender,
      });
    }

    selectedSizes.forEach((size) =>
      list.push({
        key: "size",
        label: "Size",
        value: String(size),
      }),
    );

    if (selectedTypes.length) {
      list.push({
        key: "type",
        label: "Type",
        value: selectedTypes.join(", "),
      });
    }

    if (selectedBrands.length) {
      list.push({
        key: "brand",
        label: "Brand",
        value: selectedBrands.join(", "),
      });
    }

    if (selectedPriceRanges.length) {
      list.push({
        key: "price",
        label: "Price",
        value: selectedPriceRanges.join(", "),
      });
    }

    return list;
  }, [
    selectedGender,
    selectedSizes,
    selectedTypes,
    selectedBrands,
    selectedPriceRanges,
  ]);

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (selectedGender === "mens") {
      list = list.filter((p) => p.name.startsWith("Men's"));
    }

    if (selectedGender === "womens") {
      list = list.filter((p) => p.name.startsWith("Women's"));
    }

    const hasTrail = selectedTypes.includes("Trail Running");
    const hasTrack = selectedTypes.includes("Track");

    if (hasTrail && !hasTrack) {
      list = list.filter((p) => p.id.startsWith("t"));
    } else if (hasTrack && !hasTrail) {
      list = list.filter((p) => !p.id.startsWith("t"));
    }

    switch (sortBy) {
      case "price-asc":
        list.sort(
          (a, b) => (a.priceRange?.min ?? 0) - (b.priceRange?.min ?? 0),
        );
        break;
      case "price-desc":
        list.sort(
          (a, b) => (b.priceRange?.max ?? 0) - (a.priceRange?.max ?? 0),
        );
        break;
      case "newest":
        list.reverse();
        break;
    }

    return list;
  }, [selectedGender, selectedTypes, sortBy]);

  const totalPages =
    Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE) || 1;

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, page]);

  return (
    <div className={styles.layout}>
      <Header onCartClick={() => setIsCartOpen(true)} />
      <Breadcrumbs />

      <div className={styles.body}>
        <Sidebar
          selectedGender={selectedGender}
          selectedSizes={selectedSizes}
          selectedTypes={selectedTypes}
          selectedBrands={selectedBrands}
          selectedPriceRanges={selectedPriceRanges}
          onGenderChange={(gender) => dispatch(setGender(gender))}
          onSizeToggle={(size) => dispatch(toggleSize(size))}
          onTypeClick={(type) => dispatch(toggleType(type))}
          onBrandClick={(brand) => dispatch(toggleBrand(brand))}
          onPriceRangeToggle={(id) => dispatch(togglePriceRange(id))}
        />

        <main className={styles.main}>
          <h1 className={styles.pageTitle}>Running Shoes</h1>

          <div className={styles.toolbar}>
            <AppliedFilters filters={appliedFilters} onRemove={removeFilter} />
            <SortBy
              value={sortBy}
              onChange={(value) => dispatch(setSort(value))}
            />
          </div>

          <ProductGrid products={paginatedProducts} />

          <Pagination
            currentPage={page}
            hasNext={page < totalPages}
            onNext={() => dispatch(setPage(Math.min(page + 1, totalPages)))}
            onPrev={() => dispatch(setPage(Math.max(page - 1, 1)))}
          />

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
          <FreeShipping />
        </main>
      </div>

      <Footer />
      <ChatBubble />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
