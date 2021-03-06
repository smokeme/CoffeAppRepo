import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";

// Components
import CoffeList from "../CoffeList";
import CoffeDetail from "../CoffeDetail";
import CoffeCart from "../CoffeCart";
import MyHeader from "../MyHeader";

// Background Image
import background from "../../images/b1.png";

// Style
import styles from "./styles";

class HomePage extends Component {
  render() {
    return (
      <ImageBackground
        source={background}
        style={{ height: null, width: null, flex: 1 }}
      >
        <View style={styles.overlay} />
        <Container>
          <MyHeader />
          <Content>
            <CoffeCart />
          </Content>
          <Footer style={{ backgroundColor: "transparent" }}>
            <FooterTab>
              <Button full>
                <Text style={styles.footerbutton}>
                  <Icon name="cart" style={styles.footericon} />
                  Cart
                </Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </ImageBackground>
    );
  }
}

export default HomePage;
