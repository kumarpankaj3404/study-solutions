import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants/index'

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl ">Popular Companions</h1>
        <section className="home-section">
            <CompanionCard 
              id="123"
              name="Neural the Binary Explorer"
              topic="Neural Network in Brain"
              subject="Science"
              duration={45}
              color="#ffda6e"
            />
            <CompanionCard 
              id="1234"
              name="Countsy the Number Wizard"
              topic="Derivatives & Integrals"
              subject="Math"
              duration={30}
              color="#e5d0ff"
            />
            <CompanionCard 
              id="12345"
              name="Verba the Vocabulary Builder"
              topic="English Literature"
              subject="Language"
              duration={30}
              color="#BDE7FF"
            />
        </section>
        <section className='home-section'>
            <CompanionsList
              title="Recently completed sessions"
              companions={recentSessions}
              classNames="w-2/3 max-lg:w-full"
            />
            <CTA/>
        </section>
    </main>
  )
}

export default Page