import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Button, Spinner, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CustomModal from "../ModalComponent";

export default function CardComponent({ habitId, userId }) {
  const [habit, setHabit] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showDetail, setShowDetail] = useState(false);
  const [detailData, setDetailData] = useState(null);

  const [showEdit, setShowEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const [saving, setSaving] = useState(false);

  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  // 1️⃣ Busca inicial do hábito
  useEffect(() => {
    async function fetchHabit() {
      try {
        const res = await fetch(`/api/users/${userId}/habits/${habitId}`);
        if (!res.ok) throw new Error('Erro ao buscar hábito');
        const data = await res.json();
        setHabit(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchHabit();
  }, [userId, habitId]);

  if (loading) {
    return (
      <div className={`${styles.card} d-flex justify-content-center align-items-center`}>
        <Spinner animation="border" variant="light" />
      </div>
    );
  }
  if (!habit) return null;

  // 2️⃣ Detalhes
  const openDetail = async () => {
    try {
      const res = await fetch(`/api/habits/${habit.id}`);
      if (!res.ok) throw new Error("Erro ao buscar detalhes");
      setDetailData(await res.json());
      setShowDetail(true);
    } catch (err) {
      console.error(err);
    }
  };
  const closeDetail = () => {
    setShowDetail(false);
    setDetailData(null);
  };

  // 3️⃣ Edição via modal separado
  const openEdit = () => {
    setEditData({ title: habit.title, description: habit.description, details: habit.details });
    setShowEdit(true);
  };
  const closeEdit = () => {
    setShowEdit(false);
    setEditData(null);
  };
  const saveEdit = async () => {
    setSaving(true);
    try {
      const res = await fetch(`/api/habits/${habit.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      });
      if (!res.ok) throw new Error("Erro ao salvar");
      const updated = await res.json();
      setHabit(updated);
      closeEdit();
      closeDetail();
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  // 4️⃣ Apagar
  const handleDelete = async () => {
    if (!window.confirm("Deseja realmente apagar este hábito?")) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/habits/${habit.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Erro ao deletar");
      navigate("/habits");
    } catch (err) {
      console.error(err);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <>
      <div className={styles.card}>
        <h5 className={styles.title}>{habit.title}</h5>
        <p className={styles.description}>{habit.description}</p>
        <div className="d-flex gap-2">
          <Button variant="info" onClick={openDetail}>VER DETALHES</Button>
          <Button variant="warning" onClick={openEdit}>EDITAR</Button>
          <Button variant="danger" onClick={handleDelete} disabled={deleting}>
            {deleting ? <Spinner animation="border" size="sm" /> : "APAGAR"}
          </Button>
        </div>
      </div>

      {/* Modal de Detalhes */}
      {detailData && (
        <CustomModal
          show={showDetail}
          handleClose={closeDetail}
          title={`Detalhes: ${detailData.title}`}
        >
          <p><strong>Descrição:</strong> {detailData.description}</p>
          <p><strong>Detalhes:</strong> {detailData.details}</p>
          <Button variant="secondary" onClick={openEdit}>
            Editar Aqui
          </Button>
        </CustomModal>
      )}

      {/* Modal de Edição */}
      {showEdit && (
        <CustomModal
          show={showEdit}
          handleClose={closeEdit}
          title="Editar Hábito"
          onConfirm={saveEdit}
        >
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
              value={editData.title}
              onChange={e => setEditData(d => ({ ...d, title: e.target.value }))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={editData.description}
              onChange={e => setEditData(d => ({ ...d, description: e.target.value }))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Detalhes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={editData.details}
              onChange={e => setEditData(d => ({ ...d, details: e.target.value }))}
            />
          </Form.Group>
          {saving && <Spinner animation="border" />}
        </CustomModal>
      )}
    </>
  );
}
