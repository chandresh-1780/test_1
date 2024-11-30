import React from "react";
import style from "./header.module.scss";

const Header = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.logo}>
          <img src="/logoa.png" alt="genxi" />
        </div>
        <div className={style.line} />
      </div>
    </>
  );
};

export default Header;
