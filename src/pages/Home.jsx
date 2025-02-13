import Bar from "../components/bar";
import Button from "../components/button";
import styled from "styled-components";
import Nav from "../components/nav";
import Item from "../components/item";
import {useState } from "react";
import Modal from "../components/modal";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Content = styled.div`
  min-height: 60vh;
  width: 100%;
  overflow-y: scroll;
`;
const Shadow = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Home = () => {
  const [disabled, setDisabled] = useState(false);
  const handleClose = () => {
    setShowCreate(false);
    setInfo(null)
    setDisabled(false);
  };
  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product ?"
    );
    if (confirm) {
      return
    } else {
      return;
    }
  };
  const [info, setInfo] = useState(null);
  const handleView = async (id) => {
    
  };
  const handleUpdate = async (id) => {

   
  };
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const [showCreate, setShowCreate] = useState(false);

  return (
    <>
      <Nav />
      <Container>
        <Bar />
        <Content>
          {list.map((item, index) => {
            return (
              <Item
                id={item.id}
                nmber={index}
                name={item.name}
                quantity={item.quantity}
                onDelete={handleDelete}
                onView={handleView}
                onUpdate={handleUpdate}
              />
            );
          })}
        </Content>
        <Button
          text="Ajouter Un Article"
          handleClick={(e) => {
            e.preventDefault();
            setShowCreate(true);
          }}
        />
      </Container>
      {showCreate && (
        <Shadow>
          <Modal onClose={handleClose} disabled={disabled} object={info} />
        </Shadow>
      )}
    </>
  );
};
export default Home;
