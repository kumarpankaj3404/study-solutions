import CompanionForm from '@/components/CompanionForm'
import { auth } from '@clerk/nextjs/server'
import { RedirectToSignIn } from "@clerk/nextjs";

const NewCompanion = async () => {
  const {userId} = await auth();
  if(!userId) return <RedirectToSignIn />;
  return (
    <main className='lg:w-1/3 md:w-2/3 items-center justify-center'>
      <article className='w-full gap-4 flex flex-col'>
        <h1>Companion Builder</h1>
        <CompanionForm/>
      </article>
    </main>
  )
}

export default NewCompanion