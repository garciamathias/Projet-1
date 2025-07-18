'use client'

import Link from 'next/link'

export default function QuiSuisJe() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="floral-accent">Qui suis-je ?</h1>
            <p className="hero-subtitle">
              Un parcours de reconversion guidé par la passion du développement personnel 
              et l'envie de transmettre l'autonomie dans la pratique de la sophrologie.
            </p>
          </div>
        </div>
      </section>

      {/* Mon parcours */}
      <section className="section">
        <div className="container">
          <div className="story-content">
            <div className="story-card fade-in">
              <h2 className="floral-accent">Mon parcours</h2>
              <div className="story-text">
                <p>
                  Venue du monde de l'entreprise et de la gestion, je me suis reconvertie 
                  grâce à la sophrologie dans le <strong>développement personnel</strong>.
                </p>
                <p>
                  Ce que j'aime dans la sophrologie, c'est la possibilité pour chacun de 
                  <strong>s'approprier les techniques</strong> qui lui conviennent et de devenir 
                  <strong>autonome dans sa pratique</strong>.
                </p>
                <p>
                  C'est vraiment ce que j'ai envie de transmettre lors des séances que je guide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ma mission */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center fade-in">Ma mission</h2>
          
          <div className="mission-content">
            <div className="mission-card fade-in">
              <div className="mission-icon">🌱</div>
              <h3>Accompagnement personnalisé</h3>
              <p>
                Je suis là pour permettre à chacun de <strong>vivre un moment pour lui-même</strong>, 
                d'expérimenter des techniques et de faire le choix qui lui convient.
              </p>
            </div>

            <div className="mission-card fade-in">
              <div className="mission-icon">🤗</div>
              <h3>Cadre bienveillant</h3>
              <p>
                Tous nos échanges se déroulent dans un <strong>cadre bienveillant</strong>, 
                respectueux et sans jugement, où chacun peut s'exprimer librement.
              </p>
            </div>

            <div className="mission-card fade-in">
              <div className="mission-icon">🎯</div>
              <h3>Autonomie</h3>
              <p>
                Mon objectif est de vous rendre <strong>autonome</strong> dans votre pratique, 
                en vous donnant les outils adaptés à vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ma formation */}
      <section className="section">
        <div className="container">
          <h2 className="text-center floral-accent fade-in">Ma formation et qualifications</h2>
          
          <div className="formation-content">
            <div className="formation-card fade-in">
              <div className="formation-header">
                <h3>Diplôme de Sophrologue</h3>
                <div className="formation-duration">2 ans de formation</div>
              </div>
              
              <div className="formation-details">
                <div className="formation-school">
                  <h4>🎓 École ISSO Toulouse</h4>
                  <p>
                    <a href="https://www.sophrologie-sudouest.com" target="_blank" rel="noopener noreferrer">
                      www.sophrologie-sudouest.com
                    </a>
                  </p>
                </div>
                
                <div className="formation-accreditation">
                  <h4>🏛️ Fédération FEPS</h4>
                  <p>
                    École fédérée à la FEPS (Fédération des Écoles Professionnelles de Sophrologie)
                  </p>
                  <p>
                    <a href="https://www.feps-sophrologie.fr" target="_blank" rel="noopener noreferrer">
                      www.feps-sophrologie.fr
                    </a>
                  </p>
                </div>

                <div className="formation-syndicat">
                  <h4>👥 Syndicat SSP</h4>
                  <p>Affiliée au Syndicat des Sophrologues Professionnels (SSP)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remboursement */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center fade-in">Remboursement par les mutuelles</h2>
          
          <div className="reimbursement-info fade-in">
            <div className="reimbursement-card">
              <div className="reimbursement-icon">💳</div>
              <h3>Prise en charge possible</h3>
              <p>
                Certaines mutuelles remboursent des séances de sophrologie. 
                N'hésitez pas à vous renseigner auprès de votre mutuelle pour connaître 
                les conditions de prise en charge.
              </p>
              <div className="reimbursement-tip">
                <p>
                  <strong>Conseil :</strong> Contactez votre mutuelle en mentionnant que vous consultez 
                  une sophrologue diplômée et affiliée au Syndicat des Sophrologues Professionnels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section section-contact">
        <div className="container">
          <h2 className="text-center fade-in">Restons en contact</h2>
          
          <div className="contact-content fade-in">
            <div className="contact-card">
              <h3>Contactez-moi</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <a href="mailto:christiane.sophro@gmail.com">
                      christiane.sophro@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <h4>Réseaux sociaux</h4>
                    <p>@christiane.sophro</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-message">
                <p>
                  N'hésitez pas à me contacter pour toute question sur la sophrologie, 
                  les séances proposées ou pour réserver votre place. Je me ferai un plaisir 
                  de vous répondre et de vous accompagner dans votre démarche.
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
            <h2>Prêt(e) à commencer votre parcours ?</h2>
            <p>Découvrez mes prestations et consultez le planning pour réserver votre séance.</p>
            <div className="cta-actions">
              <Link href="/prestations" className="btn btn-primary">
                Découvrir les prestations
              </Link>
              <Link href="/planning" className="btn btn-secondary">
                Voir le planning
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, var(--color-lavender) 0%, var(--color-cream) 100%);
          padding: 4rem 0;
          text-align: center;
          position: relative;
        }
        
        .hero-content {
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
        
        .story-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .story-card {
          background: var(--color-white);
          padding: 3rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          text-align: center;
        }
        
        .story-card h2 {
          margin-bottom: 2rem;
        }
        
        .story-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--color-text-medium);
          margin-bottom: 1.5rem;
        }
        
        .story-text p:last-child {
          margin-bottom: 0;
        }
        
        .mission-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .mission-card {
          background: var(--color-white);
          padding: 2.5rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .mission-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-medium);
        }
        
        .mission-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        
        .mission-card h3 {
          color: var(--color-sage);
          margin-bottom: 1rem;
        }
        
        .mission-card p {
          color: var(--color-text-medium);
          line-height: 1.7;
        }
        
        .formation-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .formation-card {
          background: var(--color-white);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          overflow: hidden;
        }
        
        .formation-header {
          background: var(--color-sage);
          color: white;
          padding: 2rem;
          text-align: center;
        }
        
        .formation-header h3 {
          color: white;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }
        
        .formation-duration {
          font-size: 1.1rem;
          opacity: 0.9;
        }
        
        .formation-details {
          padding: 2.5rem;
        }
        
        .formation-school,
        .formation-accreditation,
        .formation-syndicat {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--color-ivory);
        }
        
        .formation-syndicat {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        
        .formation-details h4 {
          color: var(--color-sage);
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
        }
        
        .formation-details p {
          color: var(--color-text-medium);
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        
        .formation-details a {
          color: var(--color-sage);
          text-decoration: none;
          font-weight: 500;
        }
        
        .formation-details a:hover {
          text-decoration: underline;
        }
        
        .reimbursement-info {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .reimbursement-card {
          background: var(--color-white);
          padding: 3rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          text-align: center;
        }
        
        .reimbursement-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        
        .reimbursement-card h3 {
          color: var(--color-sage);
          margin-bottom: 1.5rem;
        }
        
        .reimbursement-card p {
          color: var(--color-text-medium);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .reimbursement-tip {
          background: var(--color-cream);
          padding: 1.5rem;
          border-radius: var(--border-radius);
          margin-top: 2rem;
        }
        
        .reimbursement-tip p {
          margin: 0;
          color: var(--color-text-dark);
        }
        
        .section-contact {
          background: var(--color-ivory);
        }
        
        .contact-content {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .contact-card {
          background: var(--color-white);
          padding: 3rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          text-align: center;
        }
        
        .contact-card h3 {
          color: var(--color-sage);
          margin-bottom: 2rem;
        }
        
        .contact-info {
          margin-bottom: 2.5rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          text-align: left;
        }
        
        .contact-icon {
          font-size: 1.5rem;
          min-width: 40px;
        }
        
        .contact-details h4 {
          color: var(--color-text-dark);
          margin-bottom: 0.25rem;
          font-size: 1rem;
        }
        
        .contact-details p,
        .contact-details a {
          color: var(--color-text-medium);
          margin: 0;
          font-size: 0.95rem;
        }
        
        .contact-details a {
          text-decoration: none;
          font-weight: 500;
        }
        
        .contact-details a:hover {
          color: var(--color-sage);
          text-decoration: underline;
        }
        
        .contact-message {
          background: var(--color-ivory);
          padding: 2rem;
          border-radius: var(--border-radius);
        }
        
        .contact-message p {
          color: var(--color-text-medium);
          line-height: 1.7;
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
          
          .story-card {
            padding: 2rem;
          }
          
          .mission-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .mission-card {
            padding: 2rem;
          }
          
          .formation-details {
            padding: 2rem;
          }
          
          .contact-card,
          .reimbursement-card {
            padding: 2rem;
          }
          
          .contact-item {
            text-align: center;
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
        }
        
        @media (max-width: 480px) {
          .story-text p {
            font-size: 1rem;
          }
          
          .formation-header {
            padding: 1.5rem;
          }
          
          .formation-details {
            padding: 1.5rem;
          }
          
          .contact-card,
          .reimbursement-card {
            padding: 1.5rem;
          }
          
          .contact-message {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}