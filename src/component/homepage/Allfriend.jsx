import React, { use } from 'react';
import { Link } from 'react-router';

const friednPromise = fetch("/data.json").then(res => res.json())

const Allfriend = () => {

    const Friends = use(friednPromise)
    console.log(Friends, "friends");

    
const statusStyles = {
    "on track": "badge-neutral",
    "almost due": "badge-warning",
    "overdue": "badge-error",
};

   return (
        <div className='my-20'>

            <h3 className='font-bold text-2xl text-center mb-10'>Your Friend</h3>

            <div className='grid md:grid-cols-3 lg:grid-cols-4 w-10/12 mx-auto gap-5'>

 {
                Friends.map(friend  => {
                    return(

<Link to={`/friendDetails/${friend.id}`} className="card bg-base-100 shadow-sm ">
  <figure className="px-10 pt-10">
    <img
      src={friend.picture}
      alt=""
      className="rounded-xl" />
  </figure>

  <div className="card-body items-center text-center">
    <h2 className="card-title">{friend.name}</h2>
    <p>{friend.days_since_contact}d ago</p>

    <div className='flex gap-5'> 
      { friend.tags.map(tag => (
        (<div className="badge badge-success">{tag}</div>)
      ))}
    </div>

   
    <div className={`badge mt-2 ${statusStyles[friend.status?.toLowerCase()] || "badge-neutral"}`}>
      {friend.status}
    </div>

  </div>
</Link>

                    )
                })
            }

            </div>
            
        </div>
    );
};

export default Allfriend;