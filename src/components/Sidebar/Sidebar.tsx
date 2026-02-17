import {
  genderOptions,
  sizes,
  runningTypes,
  brands,
  priceRanges,
} from "../../data/mockData";
import { FilterGroup } from "./FilterGroup";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  selectedGender?: string;
  selectedSizes?: number[];
  selectedTypes?: string[];
  selectedBrands?: string[];
  selectedPriceRanges?: string[];
  onGenderChange?: (id: string) => void;
  onSizeToggle?: (size: number) => void;
  onWidthToggle?: (id: string) => void;
  onTypeClick?: (type: string) => void;
  onBrandClick?: (brand: string) => void;
  onPriceRangeToggle?: (id: string) => void;
}

export function Sidebar({
  selectedGender,
  selectedSizes = [],
  selectedTypes = [],
  selectedBrands = [],
  selectedPriceRanges = [],
  onGenderChange,
  onSizeToggle,
  onTypeClick,
  onBrandClick,
  onPriceRangeToggle,
}: SidebarProps) {
  const isSelected = (id: string, list: string[]) => list.includes(id);
  const isSizeSelected = (s: number) => selectedSizes.includes(s);

  return (
    <aside className={styles.sidebar}>
      <FilterGroup title="Gender">
        {genderOptions.map((opt) => (
          <label key={opt.id} className={styles.optionLabel}>
            <input
              type="radio"
              name="gender"
              checked={selectedGender === opt.id}
              onChange={() => onGenderChange?.(opt.id)}
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Running Types">
        {runningTypes.map((type) => (
          <button
            key={type}
            type="button"
            className={`${styles.linkBtn} ${
              isSelected(type, selectedTypes) ? styles.linkBtnActive : ""
            }`}
            onClick={() => onTypeClick?.(type)}
          >
            {type}
          </button>
        ))}
      </FilterGroup>

      <FilterGroup title="Size">
        <div className={styles.sizeGrid}>
          {sizes.map((s) => (
            <button
              key={s}
              type="button"
              className={`${styles.sizeBtn} ${
                isSizeSelected(s) ? styles.sizeBtnActive : ""
              }`}
              onClick={() => onSizeToggle?.(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Brand">
        {brands.map((brand) => (
          <button
            key={brand}
            type="button"
            className={`${styles.linkBtn} ${
              isSelected(brand, selectedBrands) ? styles.linkBtnActive : ""
            }`}
            onClick={() => onBrandClick?.(brand)}
          >
            {brand}
          </button>
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {priceRanges.map((pr) => (
          <button
            key={pr.id}
            type="button"
            className={`${styles.linkBtn} ${
              isSelected(pr.id, selectedPriceRanges) ? styles.linkBtnActive : ""
            }`}
            onClick={() => onPriceRangeToggle?.(pr.id)}
          >
            {pr.label}
          </button>
        ))}
      </FilterGroup>
    </aside>
  );
}
