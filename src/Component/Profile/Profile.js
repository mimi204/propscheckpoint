// import React, { Children } from 'react'
// import user from './user.png'

const Profile = ({data , handleClick ,children}) => {
    return (
        <div>
          
            <div>  {children} </div>
    
            <ul className="list-group">
                <li className="list-group-item" class="list-group-item list-group-item-dark"><h4>Full Name:</h4>{data.Name}</li>
                <li className="list-group-item" class="list-group-item list-group-item-dark"><h4>Bio:</h4>{data.Bio}</li>
                <li className="list-group-item" class="list-group-item list-group-item-dark"><h4>Proffession:</h4>{data.Proffession}</li>
              </ul>
            
            <button className="btn" class="btn btn-outline-dark" onClick={()=>handleClick(data.Name ,data.Bio , data.Proffession)} >Informations</button>
        
            
        </div>
    )
}

export default Profile

