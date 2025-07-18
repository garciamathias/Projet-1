'use client'

import Link from 'next/link'

export default function SophrologieAdultesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="floral-accent">Sophrologie pour Adultes</h1>
            <p className="hero-subtitle">
              Un ensemble de techniques pour acquérir une perception plus fine de vos ressentis, 
              sensations et émotions, et retrouver la pleine possession de vos moyens.
            </p>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que la sophrologie */}
      <section className="section">
        <div className="container">
          <h2 className="text-center floral-accent fade-in">Qu'est-ce que la sophrologie ?</h2>
          
          <div className="definition-card fade-in">
            <p className="definition-text">
              C'est un ensemble de techniques permettant d'acquérir progressivement une perception plus fine 
              de ses ressentis, sensations et émotions. C'est un entraînement dont les effets augmentent 
              au fur et à mesure de la pratique.
            </p>
          </div>

          <h3 className="section-subtitle text-center fade-in">
            Les techniques vous permettront de :
          </h3>
          
          <div className="benefits-grid">
            <div className="benefit-card fade-in">
              <div className="benefit-icon">🧘‍♀️</div>
              <h4>Connaissance de soi</h4>
              <ul>
                <li>Mieux se connaître</li>
                <li>Prendre conscience de ses capacités</li>
                <li>Favoriser la créativité et l'intuition</li>
              </ul>
            </div>

            <div className="benefit-card fade-in">
              <div className="benefit-icon">🌸</div>
              <h4>Détente & Bien-être</h4>
              <ul>
                <li>Apprendre à se détendre</li>
                <li>Améliorer sa concentration</li>
                <li>Aider à la récupération physique</li>
              </ul>
            </div>

            <div className="benefit-card fade-in">
              <div className="benefit-icon">💪</div>
              <h4>Confiance & Émotions</h4>
              <ul>
                <li>Accueillir ses émotions pour mieux les gérer</li>
                <li>Rétablir et renforcer la confiance en soi</li>
                <li>Développer l'optimisme</li>
              </ul>
            </div>
          </div>

          <div className="goal-statement fade-in">
            <p>
              <strong>L'objectif :</strong> retrouver la pleine possession de ses moyens.
            </p>
          </div>
        </div>
      </section>

      {/* Comment ça fonctionne */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center fade-in">Comment ça fonctionne ?</h2>
          
          <div className="mechanism-card fade-in">
            <div className="mechanism-content">
              <p>
                Grâce à la <strong>modification de l'état de conscience</strong> (état de détente identique 
                à la méditation de pleine conscience), les activations vont être mémorisées par le corps 
                et pourront être refaites facilement en dehors des séances.
              </p>
              <div className="effect-highlight">
                <p>
                  Ces activations ont un <strong>effet physiologique</strong> qui se répercute dans toutes 
                  les dimensions de la personne : <em>la détente du corps entraîne la détente de l'esprit 
                  et vice versa.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Séances en groupe */}
      <section className="section">
        <div className="container">
          <h2 className="text-center floral-accent fade-in">Séances en groupe</h2>
          
          <div className="grid grid-2">
            <div className="group-benefit fade-in">
              <h3>Apprentissage progressif</h3>
              <p>
                L'apprentissage des techniques suit une progression au cours du trimestre. 
                Au fur et à mesure des séances, vous expérimentez différentes techniques, 
                retenez celles qui sont le plus adaptées pour vous et devenez ensuite 
                <strong>autonome dans votre pratique</strong>.
              </p>
            </div>
            
            <div className="group-benefit fade-in">
              <h3>Richesse du groupe</h3>
              <p>
                La pratique en groupe permet de bénéficier des effets de l'entraînement, 
                des interactions entre les personnes, du partage d'une expérience commune 
                et d'une ouverture au vécu de l'autre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Le cadre */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center fade-in">Le cadre bienveillant</h2>
          <p className="text-center section-description fade-in">
            Le cadre de la séance est important et l'accent est mis sur ces points essentiels :
          </p>
          
          <div className="framework-grid">
            <div className="framework-card fade-in">
              <h3>🤐 Confidentialité</h3>
              <p>
                Tout ce qui se passe en séance est confidentiel tant pour le sophrologue 
                que pour les membres du groupe.
              </p>
            </div>

            <div className="framework-card fade-in">
              <h3>⏰ Ponctualité</h3>
              <p>
                Une arrivée après le début de la séance perturberait le groupe. 
                Le respect des horaires est essentiel.
              </p>
            </div>

            <div className="framework-card fade-in">
              <h3>🤝 Présence bienveillante</h3>
              <ul>
                <li>Vivre l'instant comme si c'était la première fois</li>
                <li>Pas de jugement sur soi et sur les autres</li>
                <li>Partage à tour de rôle sans s'interrompre</li>
                <li>Respect des phases de sortie de la pratique</li>
              </ul>
            </div>

            <div className="framework-card fade-in">
              <h3>🙋‍♀️ Autonomie</h3>
              <ul>
                <li>Responsable de soi et de son confort</li>
                <li>Liberté d'action et d'initiative</li>
                <li>Arrêt possible à tout moment si nécessaire</li>
                <li>Rester silencieux sur place jusqu'à la fin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement */}
      <section className="section">
        <div className="container">
          <h2 className="text-center floral-accent fade-in">Déroulement d'une séance</h2>
          <p className="text-center section-description fade-in">
            Une séance se déroule toujours de la même façon, dans un rythme apaisant et structuré :
          </p>
          
          <div className="session-flow fade-in">
            <div className="flow-steps">
              <div className="flow-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Accueil</h4>
                  <p>Accueil des personnes, météo personnelle</p>
                </div>
              </div>
              
              <div className="flow-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Cadre</h4>
                  <p>Rappel du cadre, présentation des techniques proposées</p>
                </div>
              </div>
              
              <div className="flow-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Préparation</h4>
                  <p>Petit exercice de mise en condition</p>
                </div>
              </div>
              
              <div className="flow-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Détente</h4>
                  <p>Détente du corps</p>
                </div>
              </div>
              
              <div className="flow-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4>Activation</h4>
                  <p>Proposition d'une ou plusieurs techniques</p>
                </div>
              </div>
              
              <div className="flow-step">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h4>Reprise</h4>
                  <p>Retour à l'état de veille habituel</p>
                </div>
              </div>
              
              <div className="flow-step">
                <div className="step-number">7</div>
                <div className="step-content">
                  <h4>Écriture</h4>
                  <p>Description personnelle de la séance</p>
                </div>
              </div>
              
              <div className="flow-step">
                <div className="step-number">8</div>
                <div className="step-content">
                  <h4>Partage</h4>
                  <p>Échange avec le groupe si souhaité</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center fade-in">Informations pratiques</h2>
          
          <div className="practical-info fade-in">
            <div className="info-grid">
              <div className="info-item">
                <h3>👥 Postures</h3>
                <p>Plusieurs postures assises sont proposées ainsi que la posture debout pour réaliser la séance.</p>
              </div>
              
              <div className="info-item">
                <h3>👕 Tenue</h3>
                <p>Aucune tenue particulière n'est nécessaire. Venez simplement dans des vêtements confortables.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="section section-cta">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Prêt(e) à commencer votre parcours ?</h2>
            <p>Découvrez les différentes thématiques proposées et consultez le planning pour réserver votre place.</p>
            <div className="cta-actions">
              <Link href="/prestations" className="btn btn-primary">
                Voir les thématiques
              </Link>
              <Link href="/planning" className="btn btn-secondary">
                Consulter le planning
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, var(--color-ivory) 0%, var(--color-white) 100%);
          padding: 4rem 0;
          text-align: center;
          position: relative;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: -30%;
          left: -10%;
          width: 30%;
          height: 160%;
          background: linear-gradient(45deg, transparent, var(--color-sage), transparent);
          opacity: 0.08;
          transform: rotate(-15deg);
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-text-dark);
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--color-text-medium);
          line-height: 1.7;
        }
        
        .text-center {
          text-align: center;
        }
        
        .section-subtitle {
          font-size: 1.3rem;
          margin: 2rem 0 3rem;
          color: var(--color-text-dark);
        }
        
        .section-description {
          font-size: 1.1rem;
          color: var(--color-text-medium);
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 3rem;
        }
        
        .definition-card {
          background: var(--color-white);
          padding: 2.5rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          max-width: 800px;
          margin: 0 auto 3rem;
          text-align: center;
        }
        
        .definition-text {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--color-text-medium);
          margin: 0;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .benefit-card {
          background: var(--color-white);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .benefit-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-medium);
        }
        
        .benefit-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .benefit-card h4 {
          color: var(--color-sage);
          margin-bottom: 1.5rem;
        }
        
        .benefit-card ul {
          list-style: none;
          padding: 0;
          text-align: left;
        }
        
        .benefit-card li {
          padding: 0.5rem 0;
          color: var(--color-text-medium);
          position: relative;
          padding-left: 1.5rem;
        }
        
        .benefit-card li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-sage);
          font-weight: bold;
        }
        
        .goal-statement {
          background: var(--color-cream);
          padding: 1.5rem;
          border-radius: var(--border-radius);
          text-align: center;
          margin-top: 2rem;
        }
        
        .goal-statement p {
          margin: 0;
          font-size: 1.1rem;
          color: var(--color-text-dark);
        }
        
        .mechanism-card {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .mechanism-content {
          background: var(--color-white);
          padding: 3rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          text-align: center;
        }
        
        .mechanism-content p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--color-text-medium);
          margin-bottom: 2rem;
        }
        
        .effect-highlight {
          background: var(--color-lavender);
          padding: 1.5rem;
          border-radius: var(--border-radius);
          margin-top: 2rem;
        }
        
        .effect-highlight p {
          margin: 0;
          font-size: 1.05rem;
          color: var(--color-text-dark);
        }
        
        .group-benefit {
          background: var(--color-white);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
        }
        
        .group-benefit h3 {
          color: var(--color-sage);
          margin-bottom: 1rem;
        }
        
        .group-benefit p {
          line-height: 1.7;
          color: var(--color-text-medium);
        }
        
        .framework-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .framework-card {
          background: var(--color-white);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          transition: all 0.3s ease;
        }
        
        .framework-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
        }
        
        .framework-card h3 {
          color: var(--color-sage);
          margin-bottom: 1rem;
        }
        
        .framework-card p {
          color: var(--color-text-medium);
          line-height: 1.6;
        }
        
        .framework-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .framework-card li {
          padding: 0.4rem 0;
          color: var(--color-text-medium);
          position: relative;
          padding-left: 1.5rem;
        }
        
        .framework-card li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-sage);
          font-weight: bold;
        }
        
        .session-flow {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .flow-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        
        .flow-step {
          text-align: center;
          padding: 1.5rem;
          background: var(--color-white);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          transition: all 0.3s ease;
        }
        
        .flow-step:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
        }
        
        .step-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--color-sage);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.1rem;
          margin: 0 auto 1rem;
        }
        
        .step-content h4 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: var(--color-text-dark);
        }
        
        .step-content p {
          font-size: 0.9rem;
          color: var(--color-text-medium);
          margin: 0;
        }
        
        .practical-info {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .info-item {
          background: var(--color-white);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          text-align: center;
        }
        
        .info-item h3 {
          color: var(--color-sage);
          margin-bottom: 1rem;
        }
        
        .info-item p {
          color: var(--color-text-medium);
          line-height: 1.6;
          margin: 0;
        }
        
        .section-cta {
          background: linear-gradient(135deg, var(--color-sage) 0%, #7A9A83 100%);
          color: white;
          text-align: center;
        }
        
        .section-cta h2 {
          color: white;
          margin-bottom: 1rem;
        }
        
        .section-cta p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        
        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .cta-actions .btn-secondary {
          background-color: transparent;
          color: white;
          border-color: white;
        }
        
        .cta-actions .btn-secondary:hover {
          background-color: white;
          color: var(--color-sage);
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 3rem 0;
          }
          
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .framework-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .flow-steps {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1rem;
          }
          
          .definition-card,
          .mechanism-content {
            padding: 2rem;
          }
          
          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
        }
        
        @media (max-width: 480px) {
          .flow-steps {
            grid-template-columns: 1fr;
          }
          
          .flow-step {
            padding: 1.25rem;
          }
          
          .benefit-card,
          .framework-card,
          .group-benefit {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}