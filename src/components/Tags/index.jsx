import styled from "styled-components";
import tags from "./tags.json";
import fotos from "./../../fotos.json";

const TagsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  margin-top: 30px;
`;

const TagTitulo = styled.p`
  font-size: 24px;
  color: #d9d9d9;
`;

const Botoes = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

const Botao = styled.button`
  color: #d9d9d9;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.3);
  padding: 10px 8px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 2px solid #7b78e5;
  }

  &:active {
    transform: scale(0.9);
    background: rgba(217, 217, 217, 0.1);
  }
`;

const Tags = () => {
  

  return (
    <TagsContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      <Botoes>
        {tags.map((tag) => (
          <Botao key={tag.id}>
            {tag.titulo}
          </Botao>
        ))}
      </Botoes>
    </TagsContainer>
  );
};

export default Tags;
