// components/loader/Loader.tsx

import { useState, useEffect } from "react";
import { subscribe } from "../../../hooks/loader";
import style from "./loader.module.scss"; // Import the CSS

export default function Loader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return subscribe(setLoading);
  }, []);

  if (!loading) return null;

  return (
    <div className={style.loader_overlay}>
      <div className={style.loader_container}>
        <div className={style.spinner}></div>{" "}
        <img
          src="/assets/images/logos/LogoDeewan.svg"
          alt="Logo"
          className={style.logo}
        />
      </div>
    </div>
  );
}
