import React, { use } from 'react';




 const friednPromise = fetch("/data.json").then(res => res.json())
    

const Allfriend = () => {

    const Friends = use(friednPromise)
    console.log(Friends, "friends");

   return (
        <div>

            <h3>Your Friend</h3>

            <div className='grid md:grid-cols-3 lg:grid-cols-4 w-11/12 mx-auto'>




 {
                Friends.map(friend  => {
                    return(

                                        <div className="card bg-base-100 shadow-sm">
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
    ) )}
   </div>

  
    <p>{friend.status}</p>
    
  </div>
</div>
                        
           
                        
                    )
                })
            }

            </div>
            
        </div>
    );
};

export default Allfriend;