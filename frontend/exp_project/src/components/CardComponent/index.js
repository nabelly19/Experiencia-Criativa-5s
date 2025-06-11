import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Button, Spinner, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CustomModal from "../ModalComponent";

export default function CardComponent({ data, entity }) {
  const [isLoading, setIsLoading] = useState(false);

  const [showDetail, setShowDetail] = useState(false);
  const [detailData, setDetailData] = useState(null);

  const [showEdit, setShowEdit] = useState(false);
  const [editData, setEditData] = useState(null);

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className={`${styles.card} d-flex justify-content-center align-items-center`}>
        <Spinner animation="border" variant="light" />
      </div>
    );
  }
  if (!data) return null;

  // 2️⃣ Detalhes
  const openDetail = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${data.user_id}/${entity}/${data.id}`);
      if (!res.ok) throw new Error("Erro ao buscar detalhes");
      setDetailData(await res.json());
      setShowDetail(true);
    } catch (err) {
      console.error(err);
      window.alert(err.message);
    }
  };
  const closeDetail = () => {
    setShowDetail(false);
    setDetailData(null);
  };

  // 3️⃣ Edição via modal separado
  const openEdit = () => {
    setEditData({ title: data.title, description: data.description, content: data.content });
    setShowEdit(true);
  };
  const closeEdit = () => {
    setShowEdit(false);
    setEditData(null);
  };
  const saveEdit = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${data.user_id}/${entity}/${data.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      });
      if (!res.ok) throw new Error("Erro ao salvar");
      const updated = await res.json();
      closeEdit();
      closeDetail();
      window.alert("Atualizado com sucesso!");
      //reload page
      window.location.reload();
    } catch (err) {
      console.error(err);
      window.alert(err.message);
    }
  };

  // 4️⃣ Apagar
  const handleDelete = async () => {
    if (!window.confirm("Deseja realmente apagar este item?")) return;
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${data.user_id}/${entity}/${data.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Erro ao deletar");
      window.alert("Deletado com sucesso!");
      navigate("/management");
      //reload page
      window.location.reload();
    } catch (err) {
      console.error(err);
      window.alert(err.message);
    }
  };

  return (
    <>
      <div className={styles.card}>
        <h5 className={styles.title}>{data.title || `#${data.id}`}</h5>
        <p className={styles.description}>{data.description || data.content}</p>
        <div className="d-flex gap-2">
          <Button variant="info" onClick={openDetail}>VER DETALHES</Button>
          <Button variant="warning" onClick={openEdit}>EDITAR</Button>
          <Button variant="danger" onClick={handleDelete} disabled={isLoading}>
            {isLoading ? <Spinner animation="border" size="sm" /> : "APAGAR"}
          </Button>
        </div>
      </div>

      {/* Modal de Detalhes */}
      {detailData && (
        <CustomModal
          show={showDetail}
          handleClose={closeDetail}
          title={`${detailData.title || `#${detailData.id}`}`}
        >
          <p>{detailData.description || detailData.content}</p>
          {/* <p>{detailData.details}</p> */}
          {/* TODO: FAZER EDIÇÃO DE TODOS OS CAMPOS DE FORMA DINAMICA */}
          <Button variant="primary" onClick={openEdit}>
            Editar
          </Button>
        </CustomModal>
      )}

      {/* Modal de Edição */}
      {showEdit && (
        <CustomModal
          show={showEdit}
          handleClose={closeEdit}
          title="Editar"
          onConfirm={saveEdit}
          onCancel={closeEdit}
        >
          {entity !== "reminders" && (
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                value={editData.title}
                onChange={e => setEditData(d => ({ ...d, title: e.target.value }))}
              />
            </Form.Group>
          )}
          {entity !== "reminders" && (
            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={editData.description}
                onChange={e => setEditData(d => ({ ...d, description: e.target.value }))}
              />
            </Form.Group>
          )}

          {entity === "reminders" && (
            <Form.Group className="mb-3">
              <Form.Label>Conteúdo</Form.Label>
              <Form.Control
                value={editData.content}
                onChange={e => setEditData(d => ({ ...d, content: e.target.value }))}
              />
            </Form.Group>
          )}

          {/* <Form.Group className="mb-3">
            <Form.Label>Detalhes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={editData.details}
              onChange={e => setEditData(d => ({ ...d, details: e.target.value }))}
            />
          </Form.Group> */}
          {isLoading && <Spinner animation="border" />}
        </CustomModal>
      )}
    </>
  );
}
