import styled from "styled-components";
import Tags from "../Tags";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
`;

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela Galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem
                aoZoomSolicitado={aoFotoSelecionada}
                key={foto.id}
                foto={foto}
                aoAlternarFavorito={aoAlternarFavorito}
              />
            ))}
          </ImagensContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
