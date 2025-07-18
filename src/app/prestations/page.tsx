'use client'

import Link from 'next/link'

export default function PrestationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="floral-accent">Prestations & Lieux</h1>
            <p className="hero-subtitle">
              Séances de groupe, individuelles, pour adultes et enfants. 
              Trouvez la formule qui correspond à vos besoins et objectifs.
            </p>
          </div>
        </div>
      </section>

      {/* Séances en groupe adultes */}
      <section className="section">
        <div className="container">
          <h2 className="text-center floral-accent fade-in">Séances en groupe - Adultes</h2>
          <div className="session-info fade-in">
            <div className="info-card">
              <h3>Informations pratiques</h3>
              <ul>
                <li><strong>Participants :</strong> 3 à 10 personnes</li>
                <li><strong>Durée :</strong> 1 heure</li>
                <li><strong>Logistique :</strong> Salle au calme avec 11 chaises sans accoudoirs</li>
                <li><strong>Enregistrement :</strong> Autorisé pour pratiquer chez soi</li>
              </ul>
            </div>
          </div>

          <h3 className="section-subtitle text-center fade-in">Cinq thématiques proposées</h3>
          
          <div className="themes-grid">
            <div className="theme-card fade-in">
              <h4>Séance découverte</h4>
              <div className="theme-content">
                <ul>
                  <li>Accueil des participants</li>
                  <li>Présentation de la sophrologie et de son fonctionnement</li>
                  <li>Pratiques de détente et relaxation</li>
                  <li>Échanges</li>
                </ul>
              </div>
            </div>

            <div className="theme-card fade-in">
              <h4>Gestion du stress*</h4>
              <p className="theme-goal">Donner des outils pour faire baisser son niveau de stress</p>
              <div className="theme-content">
                <ul>
                  <li>Accueil des participants</li>
                  <li>Présentation des mécanismes du stress</li>
                  <li>Pratiques pour apprendre à baisser son niveau de stress</li>
                  <li>Échanges</li>
                </ul>
              </div>
            </div>

            <div className="theme-card fade-in">
              <h4>Libérer son esprit des pensées envahissantes*</h4>
              <div className="theme-content">
                <ul>
                  <li>Accueil des participants</li>
                  <li>Présentation du principe de retour aux sensations du corps</li>
                  <li>Pratiques pour apprendre à se concentrer sur sa respiration et les ressentis</li>
                  <li>Échanges</li>
                </ul>
              </div>
            </div>

            <div className="theme-card fade-in">
              <h4>Renforcement de la confiance en soi*</h4>
              <div className="theme-content">
                <ul>
                  <li>Accueil des participants</li>
                  <li>Présentation du principe de l'action positive, des postures aidantes</li>
                  <li>Pratiques pour apprendre à renforcer l'estime de soi</li>
                  <li>Échanges</li>
                </ul>
              </div>
            </div>

            <div className="theme-card fade-in">
              <h4>Récupération physique ou mentale*</h4>
              <div className="theme-content">
                <ul>
                  <li>Accueil des participants</li>
                  <li>Présentation de la relaxation profonde</li>
                  <li>Pratiques pour apprendre à récupérer après un effort physique ou une grande fatigue</li>
                  <li>Échanges</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="note fade-in">
            <p><em>* Il est préférable d'avoir suivi la séance de découverte pour de meilleurs résultats.</em></p>
          </div>
        </div>
      </section>

      {/* Séance extérieure */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center fade-in">Séance à l'extérieur</h2>
          
          <div className="outdoor-session fade-in">
            <div className="outdoor-card">
              <h3>Marche en conscience</h3>
              <p className="outdoor-description">
                La marche est lente et l'accent est mis sur le ressenti. 
                Distance à parcourir : moins de 1 km.
              </p>
              <div className="outdoor-content">
                <h4>Déroulement :</h4>
                <ul>
                  <li>Accueil des participants</li>
                  <li>Présentation de la marche en conscience</li>
                  <li>Pratiques pour se connecter à ses sensations, ses sens et son environnement</li>
                  <li>Échanges</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Séances enfants */}
      <section className="section">
        <div className="container">
          <h2 className="text-center floral-accent fade-in">Sophrologie ludique - Enfants</h2>
          
          <div className="grid grid-2">
            <div className="children-card fade-in">
              <h3>Séances pour enfants (6-10 ans)</h3>
              <div className="session-details">
                <ul className="info-list">
                  <li><strong>Participants :</strong> 4 à 10 enfants</li>
                  <li><strong>Durée :</strong> 40 minutes</li>
                  <li><strong>Logistique :</strong> Salle au calme avec tapis</li>
                </ul>
                <h4>Déroulement :</h4>
                <ul>
                  <li>Accueil des enfants</li>
                  <li>Mise en place du cadre des activités</li>
                  <li>Pratiques de détente et relaxation basées sur le jeu ou une histoire</li>
                  <li>Dessin des enfants en relation avec leur expérience vécue</li>
                </ul>
              </div>
            </div>

            <div className="children-card fade-in">
              <h3>Séances parents/enfants</h3>
              <div className="session-details">
                <ul className="info-list">
                  <li><strong>Participants :</strong> 3 à 5 binômes (1 parent/1 enfant)</li>
                  <li><strong>Durée :</strong> 50 minutes</li>
                  <li><strong>Logistique :</strong> Salle au calme avec tapis</li>
                </ul>
                <h4>Déroulement :</h4>
                <ul>
                  <li>Accueil des enfants</li>
                  <li>Mise en place du cadre des activités</li>
                  <li>Pratiques de détente et relaxation basées sur le jeu ou une histoire</li>
                  <li>Dessin des enfants en relation avec leur expérience vécue</li>
                  <li>Échanges des parents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Séances individuelles */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center fade-in">Séances individuelles</h2>
          
          <div className="grid grid-2">
            <div className="individual-card fade-in">
              <h3>Séances adultes</h3>
              <div className="individual-info">
                <ul>
                  <li><strong>Durée :</strong> 1h15</li>
                  <li><strong>Logistique :</strong> Salle au calme avec 2 chaises sans accoudoirs</li>
                </ul>
                <p>
                  Un accompagnement personnalisé pour répondre à vos besoins spécifiques 
                  et avancer à votre rythme.
                </p>
              </div>
            </div>

            <div className="individual-card fade-in">
              <h3>Séances enfants</h3>
              <div className="individual-info">
                <ul>
                  <li><strong>Durée :</strong> 40 minutes</li>
                  <li><strong>Logistique :</strong> Salle au calme avec tapis</li>
                </ul>
                <p>
                  Un suivi adapté à l'enfant avec des techniques ludiques 
                  pour l'aider dans son développement personnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="section section-cta">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Prêt(e) à commencer ?</h2>
            <p>Consultez le planning pour voir les créneaux disponibles ou contactez-moi pour plus d'informations.</p>
            <div className="cta-actions">
              <Link href="/planning" className="btn btn-primary">
                Voir le planning
              </Link>
              <Link href="/qui-suis-je" className="btn btn-secondary">
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, var(--color-sage) 0%, #7A9A83 100%);
          color: white;
          padding: 4rem 0;
          text-align: center;
        }
        
        .hero h1 {
          color: white;
          margin-bottom: 1rem;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin: 0 auto;
        }
        
        .text-center {
          text-align: center;
        }
        
        .section-subtitle {
          font-size: 1.3rem;
          margin: 3rem 0 2rem;
          color: var(--color-text-dark);
        }
        
        .session-info {
          max-width: 600px;
          margin: 0 auto 3rem;
        }
        
        .info-card {
          background: var(--color-cream);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          text-align: center;
        }
        
        .info-card h3 {
          margin-bottom: 1.5rem;
          color: var(--color-text-dark);
        }
        
        .info-card ul {
          list-style: none;
          padding: 0;
          text-align: left;
        }
        
        .info-card li {
          padding: 0.5rem 0;
          color: var(--color-text-medium);
        }
        
        .themes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .theme-card {
          background: var(--color-white);
          border-radius: var(--border-radius-lg);
          padding: 2rem;
          box-shadow: var(--shadow-soft);
          transition: all 0.3s ease;
        }
        
        .theme-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-medium);
        }
        
        .theme-card h4 {
          color: var(--color-sage);
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        
        .theme-goal {
          font-style: italic;
          color: var(--color-text-medium);
          margin-bottom: 1rem;
          background: var(--color-ivory);
          padding: 0.75rem;
          border-radius: var(--border-radius);
        }
        
        .theme-content ul {
          list-style: none;
          padding: 0;
        }
        
        .theme-content li {
          padding: 0.4rem 0;
          color: var(--color-text-medium);
          position: relative;
          padding-left: 1.5rem;
        }
        
        .theme-content li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-sage);
          font-weight: bold;
        }
        
        .note {
          background: var(--color-lavender);
          padding: 1.5rem;
          border-radius: var(--border-radius);
          text-align: center;
          margin-top: 2rem;
        }
        
        .note p {
          margin: 0;
          color: var(--color-text-dark);
        }
        
        .outdoor-session {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .outdoor-card {
          background: var(--color-white);
          padding: 2.5rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          text-align: center;
        }
        
        .outdoor-card h3 {
          color: var(--color-sage);
          margin-bottom: 1rem;
        }
        
        .outdoor-description {
          font-size: 1.1rem;
          color: var(--color-text-medium);
          margin-bottom: 2rem;
          background: var(--color-ivory);
          padding: 1rem;
          border-radius: var(--border-radius);
        }
        
        .outdoor-content {
          text-align: left;
        }
        
        .outdoor-content h4 {
          margin-bottom: 1rem;
          color: var(--color-text-dark);
        }
        
        .outdoor-content ul {
          list-style: none;
          padding: 0;
        }
        
        .outdoor-content li {
          padding: 0.4rem 0;
          color: var(--color-text-medium);
          position: relative;
          padding-left: 1.5rem;
        }
        
        .outdoor-content li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-sage);
          font-weight: bold;
        }
        
        .children-card {
          background: var(--color-white);
          border-radius: var(--border-radius-lg);
          padding: 2rem;
          box-shadow: var(--shadow-soft);
          height: 100%;
        }
        
        .children-card h3 {
          color: var(--color-sage);
          margin-bottom: 1.5rem;
        }
        
        .info-list {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
          background: var(--color-ivory);
          padding: 1rem;
          border-radius: var(--border-radius);
        }
        
        .info-list li {
          padding: 0.3rem 0;
          color: var(--color-text-medium);
        }
        
        .session-details h4 {
          margin: 1.5rem 0 1rem;
          color: var(--color-text-dark);
        }
        
        .session-details ul:not(.info-list) {
          list-style: none;
          padding: 0;
        }
        
        .session-details ul:not(.info-list) li {
          padding: 0.4rem 0;
          color: var(--color-text-medium);
          position: relative;
          padding-left: 1.5rem;
        }
        
        .session-details ul:not(.info-list) li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-sage);
          font-weight: bold;
        }
        
        .individual-card {
          background: var(--color-white);
          border-radius: var(--border-radius-lg);
          padding: 2rem;
          box-shadow: var(--shadow-soft);
          text-align: center;
        }
        
        .individual-card h3 {
          color: var(--color-sage);
          margin-bottom: 1.5rem;
        }
        
        .individual-info ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
          background: var(--color-ivory);
          padding: 1rem;
          border-radius: var(--border-radius);
          text-align: left;
        }
        
        .individual-info li {
          padding: 0.3rem 0;
          color: var(--color-text-medium);
        }
        
        .individual-info p {
          color: var(--color-text-medium);
          line-height: 1.7;
        }
        
        .section-cta {
          background: linear-gradient(135deg, var(--color-lavender) 0%, #C4B5E1 100%);
          color: var(--color-text-dark);
          text-align: center;
        }
        
        .section-cta h2 {
          color: var(--color-text-dark);
          margin-bottom: 1rem;
        }
        
        .section-cta p {
          color: var(--color-text-medium);
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        
        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 3rem 0;
          }
          
          .themes-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .theme-card {
            padding: 1.5rem;
          }
          
          .outdoor-card {
            padding: 2rem;
          }
          
          .children-card,
          .individual-card {
            padding: 1.5rem;
          }
          
          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
        }
        
        @media (max-width: 480px) {
          .themes-grid {
            gap: 1rem;
          }
          
          .theme-card {
            padding: 1.25rem;
          }
          
          .session-info {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </>
  )
}