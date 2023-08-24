import {contact} from '@/Utils/mock';
import Image, { StaticImageData } from 'next/image';


const getcontacts =(id:number)=>{
    return contact.filter((contact)=> contact.id==id);

};
export default function UseData({params }:{params: {id:number }}) {

const result=getcontacts(params.id);
return(
<div className=' bg-gray-200'>
{result.map((c)=>(
    <div key={c.id} className='grid gap-4 justify-center sm:grid-cols-2 
    md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
    <div className='flex justify-center p-4'>
    <Image src={c.image} alt='contact' className=' 
        w-20 h-20 rounded-full'/>
</div>

        <h2 className=' flex justify-center text-lg font-semibold mt-3'>{c.number}</h2>
        <p className='flex justify-center text-lg mt-3'>{c.email}</p>
        <p className=' flex justify-center text-lg mt-3'>{c.address}</p>
</div>  

))}

</div>

)}; 