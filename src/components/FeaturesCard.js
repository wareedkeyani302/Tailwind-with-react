import React from 'react';
import notification from '../Asset/Images/notification.png';
import ssl from '../Asset/Images/ssl.png';
import backup from '../Asset/Images/backup.png';
import innovation from '../Asset/Images/innovation.png';
import workflow from '../Asset/Images/workflow.png'

const FeaturesCard = () => {
    const CardArray = [
        {
            id: "1",
            title: 'Push to deploy',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
            image: notification,
        },
        {
            id: "2",
            title: 'SSL certificates',
            description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
            image: ssl,
        },
        {
            id: "3",
            title: 'Database backups',
            description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
            image: backup,
        },
        {
            id: "4",
            title: 'A better workflow',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
            image: workflow,
        },
        {
            id: "5",
            title: 'Deploy faster',
            description: 'Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
            image: innovation,
        },
    ]
    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-3xl font-bold mb-4 '>Features</h2>
            <div className='grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 justify-around gap-4 container px-16'>
                {CardArray.map((card, index) => (
                    <div className='flex flex-col items-center mb-10 border-gray-200 border-2 rounded-xl shadow-xl w-[100] h-auto p-3'>
                        <img src={card.image} alt='' className='h-20 w-20' />
                        <p className='text-3xl font-bold text-black'>{card.title}</p>
                        <p className='text-xl  text-gray-500'>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturesCard;