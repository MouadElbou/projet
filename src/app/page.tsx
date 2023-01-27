import Image from 'next/image'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
}from "react-icons/ai";
import deved from "./../../public/dev-ed-wave.png";
import code from "./../../public/code.png";
import design from "./../../public/design.png";
import consulting from "./../../public/consulting.png";
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { BsFillMoonStarsFill } from "react-icons/bs";
import web1 from "./../../public/web1.png";
import web2 from "./../../public/web2.png";
import web3 from "./../../public/web3.png";
import web4 from "./../../public/web4.png";
import web5 from "./../../public/web5.png";
import web6 from "./../../public/web6.png";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <head>
      <title>Mouad's portfolio</title>
      </head>

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl">developedbyed</h1>
        <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://github.com/MouadElbou"
                >
                  Resume
                </a>
              </li>
            </ul>
        </nav>
        <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Mouad Elbouanani
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
             Software Developer 
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            I am a 4th year computer systems engineering student. During my studies, I developed a solid understanding of fundamental computer science concepts, such as operating systems, networks, computer security and databases. I also acquired programming skills using languages such as C++, Java and Python.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle href='https://twitter.com/'/>
              <AiFillLinkedin href='https://linkedin.com/'/>
              <AiFillYoutube href='https://youtube.com/'/>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image alt='avatar' src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
          </section>
          <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image className='center'  src={design} alt='' width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt='' src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt='' src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Some Projects
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
            <p className='text-lg font-medium text-gray-700 leading-relaxed'>project 1</p>
              <Image
                alt=''
                className="rounded-lg object-cover"
                width={'100'}
                height={'100'}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
            <p className='text-lg font-medium text-gray-700 leading-relaxed'>project 2</p>
              <Image
              alt=''
                className="rounded-lg object-cover"
                width={'100'}
                height={'100'}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
            <p className='text-lg font-medium text-gray-700 leading-relaxed'>project 3</p>
              <Image
              alt=''
                className="rounded-lg object-cover"
                width={'100'}
                height={'100'}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
            <p className='text-lg font-medium text-gray-700 leading-relaxed'>project 4</p>
              <Image
              alt=''
                className="rounded-lg object-cover"
                width={'100'}
                height={'100'}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
            <p className='text-lg font-medium text-gray-700 leading-relaxed'>project 5</p>
              <Image
              alt=''
                className="rounded-lg object-cover"
                width={'100'}
                height={'100'}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
            <p className='text-lg font-medium text-gray-700 leading-relaxed'>project 6</p>
              <Image
              alt=''
                className="rounded-lg object-cover"
                width={'100'}
                height={'100'}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
