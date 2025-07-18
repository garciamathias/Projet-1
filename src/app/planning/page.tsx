'use client'

import { useState } from 'react'


export default function Planning() {
  const [calendarVisible, setCalendarVisible] = useState(true)

  // URL SimplyBook.it pour les réservations
  const bookingUrl = "https://csophro.simplybook.it"

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="floral-accent">Planning des Séances</h1>
            <p className="hero-subtitle">
              Consultez mes créneaux disponibles et réservez votre séance de sophrologie. 
              Je vous propose des séances de groupe et individuelles pour adultes et enfants.
            </p>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="section">
        <div className="container">
          <h2 className="text-center fade-in">Comment réserver ?</h2>
          
          <div className="instructions-grid">
            <div className="instruction-card fade-in">
              <div className="instruction-icon">📋</div>
              <h3>1. Choisissez votre séance</h3>
              <p>
                Sélectionnez le type de séance qui vous intéresse : 
                groupe adultes, enfants, individuelle ou parent/enfant.
              </p>
            </div>

            <div className="instruction-card fade-in">
              <div className="instruction-icon">📅</div>
              <h3>2. Réservez en ligne</h3>
              <p>
                Consultez mes créneaux disponibles et réservez directement 
                votre place en ligne. C'est simple et rapide !
              </p>
            </div>

            <div className="instruction-card fade-in">
              <div className="instruction-icon">✅</div>
              <h3>3. Confirmation automatique</h3>
              <p>
                Vous recevez instantanément la confirmation de votre réservation 
                avec toutes les informations pratiques pour nos séances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types de séances */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center fade-in">Types de séances proposées</h2>
          
          <div className="session-types">
            <div className="session-type-card fade-in">
              <h3>👥 Séances de groupe - Adultes</h3>
              <div className="session-details">
                <ul>
                  <li>3 à 10 participants</li>
                  <li>Durée : 1 heure</li>
                  <li>5 thématiques disponibles</li>
                  <li>Enregistrement autorisé</li>
                </ul>
              </div>
            </div>

            <div className="session-type-card fade-in">
              <h3>👤 Séances individuelles - Adultes</h3>
              <div className="session-details">
                <ul>
                  <li>Séance personnalisée</li>
                  <li>Durée : 1h15</li>
                  <li>Accompagnement sur-mesure</li>
                  <li>Progression à votre rythme</li>
                </ul>
              </div>
            </div>

            <div className="session-type-card fade-in">
              <h3>🧒 Séances enfants (6-10 ans)</h3>
              <div className="session-details">
                <ul>
                  <li>4 à 10 participants ou individuel</li>
                  <li>Durée : 40 minutes</li>
                  <li>Approche ludique et créative</li>
                  <li>Dessin et expression</li>
                </ul>
              </div>
            </div>

            <div className="session-type-card fade-in">
              <h3>👨‍👩‍👧‍👦 Séances parent/enfant</h3>
              <div className="session-details">
                <ul>
                  <li>3 à 5 binômes parent/enfant</li>
                  <li>Durée : 50 minutes</li>
                  <li>Moment de partage unique</li>
                  <li>Techniques adaptées à tous</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendrier */}
      <section className="section">
        <div className="container">
          <h2 className="text-center fade-in">Réservation en ligne</h2>
          
          <div className="calendar-container fade-in">
            <div className="calendar-header">
              <p>
                <strong>Réservez directement vos séances</strong> en ligne ! 
                Consultez mes créneaux disponibles et réservez votre place en quelques clics.
              </p>
              <button 
                className="calendar-toggle"
                onClick={() => setCalendarVisible(!calendarVisible)}
              >
                {calendarVisible ? 'Masquer la réservation' : 'Afficher la réservation'}
              </button>
            </div>
            
            {calendarVisible && (
              <div className="calendar-wrapper">
                <div className="booking-info">
                  <div className="booking-intro">
                    <div className="booking-icon">📅</div>
                    <h3>Réservation en ligne</h3>
                    <p>
                      Réservez directement vos séances avec moi en ligne. Choisissez le type de séance 
                      qui vous convient, votre créneau et confirmez votre réservation instantanément.
                    </p>
                  </div>
                </div>
                
                {/* Iframe SimplyBook.it */}
                <iframe 
                  src={bookingUrl}
                  style={{ 
                    border: 0, 
                    width: '100%', 
                    height: '800px',
                    borderRadius: '8px',
                    backgroundColor: '#ffffff'
                  }}
                  frameBorder="0" 
                  scrolling="yes"
                  title="Réservation de séances de sophrologie - SimplyBook.it"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center fade-in">Informations pratiques</h2>
          
          <div className="practical-info">
            <div className="info-card fade-in">
              <h3>📍 Lieu des séances</h3>
              <p>
                Les informations sur le lieu vous seront communiquées lors de la confirmation 
                de votre inscription. Les séances se déroulent dans un environnement calme 
                et propice à la détente.
              </p>
            </div>

            <div className="info-card fade-in">
              <h3>💰 Tarifs</h3>
              <p>
                Les tarifs varient selon le type de séance (groupe ou individuelle). 
                Contactez-moi pour connaître les tarifs détaillés. Certaines mutuelles 
                remboursent les séances de sophrologie.
              </p>
            </div>

            <div className="info-card fade-in">
              <h3>🎒 À prévoir</h3>
              <p>
                Aucun matériel spécifique requis. Venez simplement dans une tenue confortable 
                qui vous permettra de vous mouvoir librement. Pour les enfants, prévoir 
                des vêtements adaptés aux mouvements au sol.
              </p>
            </div>

            <div className="info-card fade-in">
              <h3>⏰ Ponctualité</h3>
              <p>
                La ponctualité est importante pour le bon déroulement des séances de groupe. 
                Merci d'arriver 5 minutes avant le début de la séance pour vous installer 
                sereinement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact direct */}
      <section className="section section-contact">
        <div className="container">
          <div className="contact-cta fade-in">
            <h2>Une question ? Besoin d'aide ?</h2>
            <p>
              Vous pouvez réserver directement en ligne ci-dessus. 
              Pour toute question ou besoin particulier, n'hésitez pas à me contacter.
            </p>
            <div className="contact-actions">
              <a href="mailto:christiane.sophro@gmail.com" className="btn btn-primary">
                📧 Poser une question
              </a>
              <div className="contact-info-inline">
                <span>christiane.sophro@gmail.com</span>
                <span>@christiane.sophro</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, var(--color-ivory) 0%, var(--color-white) 100%);
          padding: 4rem 0;
          text-align: center;
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
        
        .instructions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .instruction-card {
          background: var(--color-white);
          padding: 2.5rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .instruction-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-medium);
        }
        
        .instruction-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        
        .instruction-card h3 {
          color: var(--color-sage);
          margin-bottom: 1rem;
        }
        
        .instruction-card p {
          color: var(--color-text-medium);
          line-height: 1.7;
        }
        
        .session-types {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .session-type-card {
          background: var(--color-white);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .session-type-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
        }
        
        .session-type-card h3 {
          background: var(--color-sage);
          color: white;
          padding: 1.5rem;
          margin: 0;
          font-size: 1.1rem;
        }
        
        .session-details {
          padding: 1.5rem;
        }
        
        .session-details ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .session-details li {
          padding: 0.5rem 0;
          color: var(--color-text-medium);
          position: relative;
          padding-left: 1.5rem;
        }
        
        .session-details li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-sage);
          font-weight: bold;
        }
        
        .calendar-container {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .calendar-header {
          background: var(--color-cream);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .calendar-header p {
          color: var(--color-text-dark);
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
        }
        
        .calendar-toggle {
          background: var(--color-sage);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: var(--border-radius);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .calendar-toggle:hover {
          background: #7A9A83;
          transform: translateY(-2px);
        }
        
        .calendar-wrapper {
          background: var(--color-white);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          overflow: hidden;
        }
        
        .booking-info {
          padding: 2rem;
          text-align: center;
          background: var(--color-cream);
          margin-bottom: 2rem;
        }
        
        .booking-intro {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .booking-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        
        .booking-intro h3 {
          color: var(--color-sage);
          margin-bottom: 1rem;
        }
        
        .booking-intro p {
          color: var(--color-text-dark);
          line-height: 1.7;
          margin: 0;
          font-size: 1.1rem;
        }
        
        .practical-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .info-card {
          background: var(--color-white);
          padding: 2rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-soft);
          transition: all 0.3s ease;
        }
        
        .info-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
        }
        
        .info-card h3 {
          color: var(--color-sage);
          margin-bottom: 1rem;
        }
        
        .info-card p {
          color: var(--color-text-medium);
          line-height: 1.7;
        }
        
        .section-contact {
          background: var(--color-sage);
          color: white;
        }
        
        .contact-cta {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .contact-cta h2 {
          color: white;
          margin-bottom: 1rem;
        }
        
        .contact-cta p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        
        .contact-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        
        .contact-actions .btn-primary {
          background: white;
          color: var(--color-sage);
          font-weight: 600;
        }
        
        .contact-actions .btn-primary:hover {
          background: var(--color-cream);
          color: var(--color-sage);
        }
        
        .contact-info-inline {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.95rem;
        }
        
        .contact-info-inline span {
          color: rgba(255, 255, 255, 0.9);
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
          
          .instructions-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .session-types {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .practical-info {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .instruction-card {
            padding: 2rem;
          }
          
          .calendar-header {
            padding: 1.5rem;
          }
          
          .booking-info {
            padding: 1.5rem;
          }
          
          .contact-actions {
            gap: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .instruction-card {
            padding: 1.5rem;
          }
          
          .session-details {
            padding: 1.25rem;
          }
          
          .info-card {
            padding: 1.5rem;
          }
          
          
          
          .contact-info-inline {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  )
}