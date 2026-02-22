import CompanionForm from '@/components/CompanionForm'
import { auth } from '@clerk/nextjs/server'
import { RedirectToSignIn } from "@clerk/nextjs";
import { newCompanionPermissions } from '@/lib/actions/companions.actions';
import Image from 'next/image';
import Link from 'next/link';

const NewCompanion = async () => {
  const {userId} = await auth();
  if(!userId) return <RedirectToSignIn />;

  const canCreateNew = await newCompanionPermissions();

  return (
    <main className='lg:w-1/3 md:w-2/3 items-center justify-center'>
      {canCreateNew ? (
        <article className='w-full gap-4 flex flex-col'>
          <h1>Companion Builder</h1>
          <CompanionForm/>
        </article>
      ):(
        <article className='companion-limit'>
          <Image src="/images/limit.svg" alt="Comapnion limit" height={230} width={360}/>
          <div className='cta-badge'>Upgrade your plan</div>
          <h1>You have reached your limit</h1>
          <p>You've reached your companion limit. Upgrade to create more companion and premium features.</p>
          
        </article>
      )}
      <Link href="/subscription" className="btn-primary w-full justify-center">
        Upgrade my plan
      </Link>
    </main>
  )
}

export default NewCompanion