'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Layout.module.css'

interface LayoutProps {
  children: React.ReactNode
}

interface MenuItem {
  href: string
  label: string
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems: MenuItem[] = [
    { href: '/', label: 'Accueil' },
    { href: '/prestations', label: 'Prestations & Lieux' },
    { href: '/sophrologie-adultes', label: 'Sophrologie Adultes' },
    { href: '/sophrologie-enfants', label: 'Sophrologie Enfants' },
    { href: '/qui-suis-je', label: 'Qui suis-je ?' },
    { href: '/planning', label: 'Planning' }
  ]

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>Christiane Sophro</span>
              <span className={styles.logoSubtext}>Sophrologie & Bien-être</span>
            </Link>
            
            {/* Navigation desktop */}
            <ul className={styles.navList}>
              {menuItems.map((item) => (
                <li key={item.href} className={styles.navItem}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Bouton menu mobile */}
            <button 
              className={styles.menuToggle}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>

          {/* Menu mobile */}
          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              <ul className={styles.mobileNavList}>
                {menuItems.map((item) => (
                  <li key={item.href} className={styles.mobileNavItem}>
                    <Link 
                      href={item.href} 
                      className={styles.mobileNavLink}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>Contact</h3>
              <p>
                <a href="mailto:christiane.sophro@gmail.com">
                  christiane.sophro@gmail.com
                </a>
              </p>
              <p>@christiane.sophro</p>
            </div>
            
            <div className={styles.footerSection}>
              <h3>Formation</h3>
              <p>Diplômée ISSO Toulouse</p>
              <p>Fédérée FEPS</p>
              <p>Certaines mutuelles remboursent</p>
            </div>
            
            <div className={styles.footerSection}>
              <h3>Navigation</h3>
              <ul className={styles.footerLinks}>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/prestations">Prestations</Link></li>
                <li><Link href="/qui-suis-je">Qui suis-je ?</Link></li>
                <li><Link href="/planning">Planning</Link></li>
              </ul>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p>&copy; 2024 Christiane Sophro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout