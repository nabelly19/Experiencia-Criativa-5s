import styles from "./styles.module.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// components
import DataList from "../../components/DataListComponent/Index";
import WaveBackground from "../../components/WaveComponent/index";
import Footer from "../../components/FooterComponent";

// store
import useUserStore from "../../store/useUserStore";

export default function ManagementPage() {
  // Acessando o estado do usuário da store
  const { user, isAuthenticated } = useUserStore();
  const navigate = useNavigate();
  
  // Verificar se o usuário está autenticado
  useEffect(() => {
    if (!isAuthenticated) {
      // Se não estiver autenticado, redirecionar para a página de login
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Se não estiver autenticado, não renderizar o conteúdo
  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <div className={styles.managementContainer}>
        <h2 className={styles.pageTitle}>Meus Dados</h2>
        {user && (
          <>
            <p className={styles.welcomeMessage}>Bem-vindo(a), {user.name || user.email}!</p>
            {/* Aqui chamamos o HabitList, passando o userId */}
            <DataList userId={user.id} />
          </>
        )}
      </div>

      <div className={styles.waveContainer}>
        <WaveBackground />
      </div>

      <Footer/>
    </>
  );
}
