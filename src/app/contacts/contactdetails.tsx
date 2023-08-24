

import React from 'react';
import { contact } from '@/Utils/mock';
import Link from 'next/link';

const ContactDetails =()=>{

  return(
<div className='bg-gray-100 p-4'>
<ul className='mx-auto'>
{contact.map((e)=>(
<li className='hover:bg-gray-200 rounded-md my-2 px-2 py-2 
md:w-1/2 lg:w-1/3'>
<Link  href={`/contacts/${e.id}`}>
{e.name}
</Link>
</li>

))}
</ul>

</div>
)};
export default ContactDetails;