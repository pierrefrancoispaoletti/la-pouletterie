import React from "react";

//redux
import { useDispatch, useSelector } from "react-redux";

//selectors
import { selectOpenMenu } from "../../redux/reducers/app/app.selectors";

//router
import { NavLink } from "react-router-dom";

//data
import { categories } from "../../data/categories";

//variables
import { colors } from "../../_consts/colors/colors";

//styles
import { NavMenuContainer, NavMenuLi, NavMenuUl } from "./menu.style";
import { toggleMenu } from "../../redux/reducers/app/app.actions";

const Menu = () => {
  const menuOpen = useSelector(selectOpenMenu);
  const dispatch = useDispatch();
  return (
    <NavMenuContainer className="nav-menu" open={menuOpen}>
      <NavMenuUl>
        {categories.map((category) => (
          <NavMenuLi>
            <NavLink
              onClick={() => dispatch(toggleMenu())}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: `${colors.red}`,
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }
                  : { color: `${colors.gold}`, fontWeight: "bold" }
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
