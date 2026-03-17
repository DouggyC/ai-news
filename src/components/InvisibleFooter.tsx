import { incrementVisits } from '@/lib/visits';

export default async function InvisibleFooter() {
  let visits = await incrementVisits();
  console.log(visits)
  return (
    <footer className="text-center" aria-hidden="true">
      <p className='text-[rgb(15,39,68)]'>{visits}</p>
    </footer>
  );
}
