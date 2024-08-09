
import MioPic from 'next/image'

const MyProfilePic = () => {
  return (
    <section className='w-52 h-52 mx-auto'>
        <MioPic 
            src="/images/miopic.jpg"
            className='object-cover w-full h-full border-4 border-slate-400 dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
            width={200}
            height={200}

            alt='Mio Imada'
            priority={true}
        />
    </section>
  )
}

export default MyProfilePic


