'use client'

import Link from 'next/link'

export default function SophrologieEnfants() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="floral-accent">Sophrologie Ludique pour Enfants</h1>
            <p className="hero-subtitle">
              Une adaptation spéciale de la sophrologie pour les enfants, 
              où les techniques sont proposées sous forme de jeux amusants et éducatifs.
            </p>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que la sophrologie ludique */}
      <section className="section">
        <div className="container">
          <h2 className="text-center floral-accent fade-in">Qu'est-ce que la sophrologie ludique ?</h2>
          
          <div className="intro-content fade-in">
            <div className="intro-card">
              <p className="intro-text">
                C'est une adaptation spéciale de la sophrologie pour les enfants, qui propose 
                les mêmes techniques bienfaisantes sous forme de <strong>jeux</strong>. 
                La structure et les propositions sont identiques à celles des adultes, 
                seule la forme change pour s'adapter au monde de l'enfant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Le cadre adapté */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center fade-in">Un cadre adapté aux enfants</h2>
          <p className="text-center section-description fade-in">
            Le cadre est simplifié et adapté pour être compréhensible par les enfants :
          </p>
          
          <div className="framework-grid">
            <div className="framework-card fade-in">
              <div className="card-icon">🤫</div>
              <h3>Le Secret</h3>
              <p>
                Il s'agit de ne pas parler à l'extérieur de tout ce que les autres enfants vivent.
              </p>
              <div className="note">
                <p>
                  <small>
                    Le déroulé de la séance, le propre vécu de l'enfant et les paroles de la sophrologue 
                    ne rentrent pas dans le secret. La sophrologue est liée par le secret concernant 
                    le vécu et les dires des enfants.
                  </small>
                </p>
              </div>
            </div>

            <div className="framework-card fade-in">
              <div className="card-icon">🤝</div>
              <h3>Le Respect</h3>
              <ul>
                <li>Respect de soi et des autres</li>
                <li>Garder le silence pendant les activités</li>
                <li>Pas de perturbations de la séance</li>
                <li>Laisser parler sans interrompre</li>
                <li>Chacun à son tour (balle de parole)</li>
              </ul>
            </div>

            <div className="framework-card fade-in">
              <div className="card-icon">🙋‍♂️</div>
              <h3>L'Autonomie</h3>
              <p>
                Droit de ne pas suivre une proposition à condition de rester dans le respect 
                (silence et calme).
              </p>
              <p className="autonomy-note">
                L'enfant peut choisir de ne pas participer à un exercice tout en restant calme et silencieux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement d'une séance */}
      <section className="section">
        <div className="container">
          <h2 className="text-center floral-accent fade-in">Déroulement d'une séance type</h2>
          
          <div className="session-flow fade-in">
            <div className="flow-intro">
              <p>
                Le déroulé est identique à celui des adultes, mais les propositions sont faites sous forme de jeux, 
                et la description se fait par le dessin plutôt que par l'écriture.
              </p>
            </div>
            
            <div className="flow-steps">
              <div className="flow-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>🌤️ Météo des émotions</h4>
                  <p>Chaque enfant exprime son état émotionnel :</p>
                  <div className="weather-emotions">
                    <div className="emotion">☀️ SOLEIL = Joie</div>
                    <div className="emotion">⛈️ ORAGE = Colère</div>
                    <div className="emotion">🌧️ PLUIE = Tristesse</div>
                    <div className="emotion">☁️ NUAGES = Peur</div>
                  </div>
                </div>
              </div>
              
              <div className="flow-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>📋 Règles du jeu</h4>
                  <p>Présentation ou rappel des règles du jeu durant la séance</p>
                </div>
              </div>
              
              <div className="flow-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>🎮 Présentation des jeux</h4>
                  <p>Explication des jeux qui vont être proposés durant la séance</p>
                </div>
              </div>
              
              <div className="flow-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>🚪 SAS de préparation</h4>
                  <p>Petite pratique pour se mettre en condition : étirements, respirations</p>
                </div>
              </div>
              
              <div className="flow-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4>🎯 Activations ludiques</h4>
                  <p>Détente du corps et pratiques sous forme de jeux : respiration, petits mouvements, visualisation</p>
                </div>
              </div>
              
              <div className="flow-step">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h4>🔄 Retour en douceur</h4>
                  <p>Sortie de la séance avec reprise du tonus habituel</p>
                </div>
              </div>
              
              <div className="flow-step">
                <div className="step-number">7</div>
                <div className="step-content">
                  <h4>🎨 Dessin</h4>
                  <p>Dessin sur la séance (permet l'ancrage de l'expérience vécue)</p>
                </div>
              </div>
              
              <div className="flow-step">
                <div className="step-number">8</div>
                <div className="step-content">
                  <h4>💬 Partage</h4>
                  <p>Partage de l'expérience vécue par les enfants à tour de rôle</p>
                </div>
              </div>
              
              <div className="flow-step">
                <div className="step-number">9</div>
                <div className="step-content">
                  <h4>👨‍👩‍👧‍👦 Retour aux parents</h4>
                  <p>Sortie et retour avec les parents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postures et spécificités */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center fade-in">Spécificités des séances enfants</h2>
          
          <div className="specifics-grid">
            <div className="specific-card fade-in">
              <div className="card-icon">🧘‍♂️</div>
              <h3>Postures adaptées</h3>
              <p>
                Les postures proposées sont <strong>debout</strong> ou <strong>allongé</strong> 
                sur des tapis, plus adaptées aux enfants que les positions assises.
              </p>
            </div>

            <div className="specific-card fade-in">
              <div className="card-icon">🎨</div>
              <h3>Expression par le dessin</h3>
              <p>
                La description de la séance se fait sous forme de <strong>dessin</strong> 
                plutôt que par l'écriture, permettant aux enfants d'exprimer leur ressenti 
                de manière créative.
              </p>
            </div>

            <div className="specific-card fade-in">
              <div className="card-icon">🎭</div>
              <h3>Approche ludique</h3>
              <p>
                Toutes les techniques sont présentées sous forme de <strong>jeux</strong> 
                ou d'<strong>histoires</strong>, rendant l'apprentissage amusant et engageant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices pour l'enfant */}
      <section className="section">
        <div className="container">
          <h2 className="text-center floral-accent fade-in">Les bienfaits pour votre enfant</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card fade-in">
              <div className="benefit-icon">😌</div>
              <h3>Gestion des émotions</h3>
              <p>
                Apprendre à reconnaître et exprimer ses émotions de manière saine et constructive.
              </p>
            </div>

            <div className="benefit-card fade-in">
              <div className="benefit-icon">🧠</div>
              <h3>Concentration</h3>
              <p>
                Développer sa capacité d'attention et de concentration de manière ludique.
              </p>
            </div>

            <div className="benefit-card fade-in">
              <div className="benefit-icon">💪</div>
              <h3>Confiance en soi</h3>
              <p>
                Renforcer l'estime de soi et développer une image positive de soi.
              </p>
            </div>

            <div className="benefit-card fade-in">
              <div className="benefit-icon">😴</div>
              <h3>Relaxation</h3>
              <p>
                Apprendre des techniques de détente pour mieux gérer le stress et l'anxiété.
              </p>
            </div>

            <div className="benefit-card fade-in">
              <div className="benefit-icon">🤗</div>
              <h3>Relation aux autres</h3>
              <p>
                Améliorer les interactions sociales et développer l'empathie.
              </p>
            </div>

            <div className="benefit-card fade-in">
              <div className="benefit-icon">🎯</div>
              <h3>Autonomie</h3>
              <p>
                Développer l'autonomie et la capacité à faire des choix éclairés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="section section-cta">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Offrez à votre enfant un moment de bien-être</h2>
            <p>Découvrez les séances ludiques et consultez le planning pour inscrire votre enfant.</p>
            <div className="cta-actions">
              <Link href="/prestations" className="btn btn-primary">
                Voir les formules enfants
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
          background: linear-gradient(135deg, var(--color-cream) 0%, var(--color-ivory) 100%);
          padding: 4rem 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -15%;
          width: 35%;
          height: 140%;
          background: linear-gradient(45deg, transparent, var(--color-lavender), transparent);
          opacity: 0.3;
          transform: rotate(15deg);
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
        
        .section-description {
          font-size: 1.1rem;
          color: var(--color-text-medium);
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 3rem;
        }
        
        .intro-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .intro-card {
          background: var(--color-white);
          padding: 2.5rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          text-align: center;
        }
        
        .intro-text {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--color-text-medium);
          margin: 0;
        }
        
        .framework-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .framework-card {
          background: var(--color-white);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .framework-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-medium);
        }
        
        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .framework-card h3 {
          color: var(--color-sage);
          margin-bottom: 1.5rem;
        }
        
        .framework-card p {
          color: var(--color-text-medium);
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .framework-card ul {
          list-style: none;
          padding: 0;
          text-align: left;
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
        
        .note {
          background: var(--color-ivory);
          padding: 1rem;
          border-radius: var(--border-radius);
          margin-top: 1rem;
        }
        
        .note p {
          margin: 0;
          color: var(--color-text-medium);
        }
        
        .autonomy-note {
          font-style: italic;
          background: var(--color-ivory);
          padding: 1rem;
          border-radius: var(--border-radius);
          margin-top: 1rem;
        }
        
        .session-flow {
          max-width: 1100px;
          margin: 0 auto;
        }
        
        .flow-intro {
          background: var(--color-cream);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .flow-intro p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--color-text-dark);
          margin: 0;
        }
        
        .flow-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .flow-step {
          background: var(--color-white);
          padding: 1.5rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          transition: all 0.3s ease;
        }
        
        .flow-step:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
        }
        
        .step-number {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: var(--color-sage);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1rem;
          margin: 0 auto 1rem;
        }
        
        .step-content h4 {
          font-size: 1rem;
          margin-bottom: 0.75rem;
          color: var(--color-text-dark);
          text-align: center;
        }
        
        .step-content p {
          font-size: 0.9rem;
          color: var(--color-text-medium);
          margin-bottom: 0.75rem;
          text-align: center;
        }
        
        .weather-emotions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }
        
        .emotion {
          background: var(--color-ivory);
          padding: 0.5rem;
          border-radius: var(--border-radius);
          font-size: 0.8rem;
          text-align: center;
          color: var(--color-text-dark);
        }
        
        .specifics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .specific-card {
          background: var(--color-white);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .specific-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-medium);
        }
        
        .specific-card h3 {
          color: var(--color-sage);
          margin-bottom: 1rem;
        }
        
        .specific-card p {
          color: var(--color-text-medium);
          line-height: 1.6;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
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
        
        .benefit-card h3 {
          color: var(--color-sage);
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        
        .benefit-card p {
          color: var(--color-text-medium);
          line-height: 1.6;
          font-size: 0.95rem;
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
          
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .framework-grid,
          .specifics-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .flow-steps {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .benefits-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
          }
          
          .intro-card {
            padding: 2rem;
          }
          
          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
        }
        
        @media (max-width: 480px) {
          .flow-step {
            padding: 1.25rem;
          }
          
          .framework-card,
          .specific-card,
          .benefit-card {
            padding: 1.5rem;
          }
          
          .weather-emotions {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}