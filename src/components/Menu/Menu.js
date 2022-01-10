import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { categories } from "../../data/categories";
import { selectOpenMenu } from "../../redux/reducers/app/app.selectors";
import { colors } from "../../_consts/colors/colors";
import { NavMenuContainer, NavMenuLi, NavMenuUl } from "./menu.style";

const Menu = () => {
  const menuOpen = useSelector(selectOpenMenu);
  return (
    <NavMenuContainer className="nav-menu" open={menuOpen}>
      <NavMenuUl>
        {categories.map((category) => (
          <NavMenuLi>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? { color: `${colors.red}`, textDecoration: "underline" }
                  : { color: `${colors.gold}` }
              }
              to={`produits/${category.slug}`}
            >
              {category.name}
            </NavLink>
          </NavMenuLi>
        ))}
      </NavMenuUl>
    </NavMenuContainer>
  );
};

export default Menu;
