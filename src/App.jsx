import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecalho from "./components/cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";

import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";

const FundoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const PrincipalContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const GaleriaContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoAlternarFavorito = (foto) => {
    if(foto.id === fotoSelecionada?.id){
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }

    setFotosGaleria(fotosGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Cabecalho />
        <PrincipalContainer>
          <BarraLateral />
          <GaleriaContainer>
            <Banner />
            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              fotos={fotosGaleria}
              aoAlternarFavorito={aoAlternarFavorito}
            />
          </GaleriaContainer>
        </PrincipalContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  );
};

export default App;
