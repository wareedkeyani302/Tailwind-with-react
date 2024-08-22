import React from 'react'

const Stats = () => {
    const companyStats = [
        {
            id: "1",
            title: '10000+',
            valu: 'Registered Employees world wide',
        },
        {
            id: "2",
            title: '50+',
            valu: 'Offices world wide',
        },
        {
            id: "3",
            title: '5000+',
            valu: 'Happy clients over the world',
        },
    ]
  return (
    <div className="bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {companyStats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.valu}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.title}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Stats;