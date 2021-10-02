import React, { useContext } from "react";
import { Context } from "..";
import { Navbar, Nav, NavLink, Button, Container } from "react-bootstrap";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          Купи Девайс
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button 
              variant={"outline-light"} 
              onClick={() => history.push(ADMIN_ROUTE)}>
              Админ Панель
            </Button>
            <Button
              variant={"outline-light"}
              style={{ marginLeft: "10px" }}
              onClick={() => logOut()}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
