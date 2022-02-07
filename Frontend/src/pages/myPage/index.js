import React from "react";

import { Container } from "../../components/Container/style";
export function MyPage() {
  return (
    <Container>
      Account Settings
      <Link to="/goal">목표 설정</Link>
    </Container>
  );
}
