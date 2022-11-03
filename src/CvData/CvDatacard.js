import React, {useContext, useEffect} from 'react'

import { UserContext } from '../Context/UserContext';

const CvDatacard =(props) => {

  const {CvMakerData} = useContext(UserContext);


  return (
    <>
<div>

    hhhb
        {/* {CvMakerData.map((user,key) =>
        <ul key={(user._id)}>
            {user.Role}
            </ul>
            )} */}

</div>
        </>


    )
}

export default CvDatacard;