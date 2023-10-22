import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page"></Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
