import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./contact.module.scss";

const COUNTRY_CODES =
  "AF AL DZ AD AO AG AR AM AU AT AZ BS BH BD BB BY BE BZ BJ BT BO BA BW BR BN BG BF BI CV KH CM CA CF TD CL CN CO KM CG CD CR CI HR CU CY CZ DK DJ DM DO EC EG SV GQ ER EE SZ ET FJ FI FR GA GM GE DE GH GR GD GT GN GW GY HT HN HU IS IN ID IR IQ IE IT JM JP JO KZ KE KI KW KG LA LV LB LS LR LY LI LT LU MG MW MY MV ML MT MH MR MU MX FM MD MC MN ME MA MZ MM NA NR NP NL NZ NI NE NG KP MK NO OM PK PW PS PA PG PY PE PH PL PT QA RO RU RW KN LC VC WS SM ST SA SN RS SC SL SG SK SI SB SO ZA KR SS ES LK SD SR SE CH SY TW TJ TZ TH TL TG TO TT TN TR TM TV UG UA AE GB US UY UZ VU VA VE VN YE ZM ZW".split(
    " ",
  );

interface Props {
  id: string;
  value: string; // English country name (what gets sent to the backend)
  onChange: (englishName: string) => void;
  placeholder: string;
  noResultsText: string;
}

interface Country {
  code: string;
  english: string;
  label: string;
}

function CountrySelect({ id, value, onChange, placeholder, noResultsText }: Props) {
  const { i18n } = useTranslation();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const countries = useMemo<Country[]>(() => {
    const lang = i18n.language?.split("-")[0] || "en";
    const en = new Intl.DisplayNames(["en"], { type: "region" });
    const local = new Intl.DisplayNames([lang], { type: "region" });
    return COUNTRY_CODES.map((code) => ({
      code,
      english: en.of(code) ?? code,
      label: local.of(code) ?? code,
    })).sort((a, b) => a.label.localeCompare(b.label, lang));
  }, [i18n.language]);

  const selected = countries.find((c) => c.english === value);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter(
      (c) => c.label.toLowerCase().includes(q) || c.english.toLowerCase().includes(q),
    );
  }, [countries, query]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    if (open) {
      // Scroll only the list itself (scrollIntoView would also scroll the page)
      const list = listRef.current;
      const el = list?.children[active] as HTMLElement | undefined;
      if (list && el) {
        if (el.offsetTop < list.scrollTop) list.scrollTop = el.offsetTop;
        else if (el.offsetTop + el.offsetHeight > list.scrollTop + list.clientHeight)
          list.scrollTop = el.offsetTop + el.offsetHeight - list.clientHeight;
      }
    }
  }, [active, open]);

  const choose = (c: Country) => {
    onChange(c.english);
    setQuery("");
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && open) {
      e.preventDefault();
      if (filtered[active]) choose(filtered[active]);
    } else if (e.key === "Escape") {
      setOpen(false);
      setQuery("");
    }
  };

  return (
    <div className={styles.countrySelect} ref={wrapRef}>
      <input
        type="text"
        id={id}
        className="form-control"
        autoComplete="off"
        role="combobox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        placeholder={placeholder}
        value={open ? query : (selected?.label ?? "")}
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          if (value) onChange("");
        }}
        onKeyDown={onKeyDown}
      />
      <span className={`${styles.countryArrow} ${open ? styles.countryArrowOpen : ""}`} aria-hidden />
      {/* Hidden proxy so native "required" validation works */}
      <input
        tabIndex={-1}
        aria-hidden
        className={styles.countryRequired}
        value={value}
        onChange={() => {}}
        required
      />
      {open && (
        <ul className={styles.countryList} id={`${id}-list`} role="listbox" ref={listRef}>
          {filtered.length === 0 && <li className={styles.countryEmpty}>{noResultsText}</li>}
          {filtered.map((c, i) => (
            <li
              key={c.code}
              role="option"
              aria-selected={c.english === value}
              className={`${styles.countryOption} ${i === active ? styles.countryActive : ""} ${
                c.english === value ? styles.countrySelected : ""
              }`}
              onMouseEnter={() => setActive(i)}
              onMouseDown={(e) => {
                e.preventDefault();
                choose(c);
              }}
            >
              {c.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CountrySelect;
