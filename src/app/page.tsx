import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="floral-accent">Retrouvez votre équilibre intérieur</h1>
            <p className={styles.heroSubtitle}>
              Découvrez la sophrologie, un ensemble de techniques douces pour mieux vous connaître, 
              vous détendre et retrouver la pleine possession de vos moyens.
            </p>
            <div className={styles.heroActions}>
              <Link href="/prestations" className="btn btn-primary">
                Découvrir mes prestations
              </Link>
              <Link href="/qui-suis-je" className="btn btn-secondary">
                Qui suis-je ?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que la sophrologie */}
      <section className="section">
        <div className="container">
          <div className={styles.contentWrapper}>
            <h2 className="text-center floral-accent fade-in">Qu'est-ce que la sophrologie ?</h2>
            <div className={styles.introContent}>
              <p className={styles.lead}>
                C'est un ensemble de techniques permettant d'acquérir progressivement une perception plus fine 
                de ses ressentis, sensations et émotions. C'est un entraînement dont les effets augmentent 
                au fur et à mesure de la pratique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center fade-in">Les bienfaits de la sophrologie</h2>
          <p className={`text-center ${styles.sectionSubtitle} fade-in`}>
            Les techniques de respiration, de visualisation et les exercices corporels simples vous permettront de :
          </p>
          
          <div className="grid grid-3">
            <div className="card fade-in">
              <h3>Se connaître</h3>
              <ul className={styles.benefitsList}>
                <li>Mieux se connaître</li>
                <li>Prendre conscience de ses capacités</li>
                <li>Favoriser la créativité et l'intuition</li>
              </ul>
            </div>
            
            <div className="card fade-in">
              <h3>Se détendre</h3>
              <ul className={styles.benefitsList}>
                <li>Apprendre à se détendre</li>
                <li>Améliorer sa concentration</li>
                <li>Aider à la récupération physique</li>
              </ul>
            </div>
            
            <div className="card fade-in">
              <h3>S'épanouir</h3>
              <ul className={styles.benefitsList}>
                <li>Accueillir ses émotions pour mieux les gérer</li>
                <li>Rétablir et renforcer la confiance en soi</li>
                <li>Développer l'optimisme</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Séances en groupe */}
      <section className="section">
        <div className="container">
          <h2 className="text-center floral-accent fade-in">Les séances en groupe</h2>
          
          <div className="grid grid-2">
            <div className={styles.contentBlock}>
              <h3>Apprentissage progressif</h3>
              <p>
                L'apprentissage des techniques suit une progression au cours du trimestre. 
                Au fur et à mesure des séances, vous expérimentez différentes techniques, 
                retenez celles qui sont le plus adaptées pour vous et devenez ensuite autonome 
                dans votre pratique.
              </p>
            </div>
            
            <div className={styles.contentBlock}>
              <h3>Dynamique de groupe</h3>
              <p>
                La pratique en groupe permet de bénéficier des effets de l'entraînement, 
                des interactions entre les personnes, du partage d'une expérience commune 
                et d'une ouverture au vécu de l'autre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center fade-in">Comment ça fonctionne ?</h2>
          
          <div className={styles.processCard}>
            <p className={styles.processExplanation}>
              Grâce à la modification de l'état de conscience (état de détente identique à la méditation 
              de pleine conscience), les activations vont être mémorisées par le corps et pourront être 
              refaites facilement en dehors des séances.
            </p>
            <p className={styles.processEffect}>
              Ces activations ont un <strong>effet physiologique</strong> qui se répercute dans toutes 
              les dimensions de la personne : la détente du corps entraîne la détente de l'esprit et vice versa.
            </p>
          </div>
        </div>
      </section>

      {/* Déroulement d'une séance */}
      <section className="section">
        <div className="container">
          <h2 className="text-center floral-accent fade-in">Déroulement d'une séance</h2>
          
          <div className={styles.sessionFlow}>
            <div className={styles.flowSteps}>
              <div className={styles.flowStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h4>Accueil</h4>
                  <p>Accueil des personnes, météo personnelle</p>
                </div>
              </div>
              
              <div className={styles.flowStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h4>Préparation</h4>
                  <p>Rappel du cadre, présentation des techniques, mise en condition</p>
                </div>
              </div>
              
              <div className={styles.flowStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h4>Pratique</h4>
                  <p>Détente du corps, activation des techniques proposées</p>
                </div>
              </div>
              
              <div className={styles.flowStep}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h4>Retour</h4>
                  <p>Reprise de l'état de veille, écriture personnelle, partage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className={`section ${styles.sectionCta}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Prêt(e) à découvrir la sophrologie ?</h2>
            <p>Explorez mes différentes prestations et trouvez la formule qui vous convient.</p>
            <div className={styles.ctaActions}>
              <Link href="/prestations" className="btn btn-primary">
                Voir les prestations
              </Link>
              <Link href="/planning" className="btn btn-secondary">
                Consulter le planning
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}