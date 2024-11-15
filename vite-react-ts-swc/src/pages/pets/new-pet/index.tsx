//import { Suspense } from 'react';

import { NewPetForm } from '../../../forms/new-pet';
//import { Loading } from '../../../components/Loading';

export default function NewPetPage() {
  return (
    <>
    { /* <Suspense fallback={<Loading />}> */ }
      <NewPetForm />
    { /* </Suspense> */ }
    </>
  );
}
