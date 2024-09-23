import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';

function HamburguerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fechar o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // Fechar o menu se o clique for fora do menu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Bloquear o scroll quando o menu estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Bloquear scroll
    } else {
      document.body.style.overflow = 'auto'; // Liberar scroll
    }

    // Limpar o efeito quando o componente for desmontado
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.hamburger} ${isOpen && styles.active}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
      <nav
        ref={menuRef}
        className={`${styles.menuOptions} ${isOpen && styles.showMenu}`}
      >
        <ul>
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#products" onClick={() => setIsOpen(false)}>
              Produtos
            </a>
          </li>
          <li>
            <a href="#about-us" onClick={() => setIsOpen(false)}>
              Sobre nós
            </a>
          </li>
          <li>
            <a href="#contacts" onClick={() => setIsOpen(false)}>
              Contatos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburguerMenu;
