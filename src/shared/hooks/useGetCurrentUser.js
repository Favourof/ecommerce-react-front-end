
// import { useEffect, useState } from "react";
// import axios from "axios"
// export const useGetCurrentUser = () => {

//     const [currentUser, setcurrentUser] = useState();
//     const token = localStorage.getItem("token");
//       console.log(token)
//     const getCurrentUser = async () => {
//         try {
//           const res = await axios.post(
//             "http://localhost:4001/api/v1/auth/checkauth",(
//                 { headers: { Authorization: "Bearer " + token } }

//             )
        
//           );
//           setcurrentUser(res?.data);
//           console.log(res);
//         } catch (error) {
//           console.log(error);
//         }
//       };

//    useEffect(()=>{
//        getCurrentUser()
//    }, [])
//   return {

//   }
// }






import { useEffect, useState } from "react";
import axios from "axios";

export const useGetCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState();
  const token = localStorage.getItem("token");

  const getCurrentUser = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4001/api/v1/auth/checkauth",
        null, // Set body to null since there's no request body
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      );
      setCurrentUser(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []); // Empty dependency array to execute once on component mount

  return {
    currentUser // Return the currentUser state if needed in the component using this hook
  };
};



