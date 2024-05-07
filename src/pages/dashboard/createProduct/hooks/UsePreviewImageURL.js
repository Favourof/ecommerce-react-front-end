// import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

// export const usePreviewImageURl = () => {
//   const [imageSrc, setimageSrc] = useState();
//   const [imageFile, setimageFile] = useState();
//   // const { toast } = useToast()

//   function handleChange(e) {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     console.log(file);
//     if (file) {
//       setimageFile(file);
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         setimageSrc(reader.result);
//       };
//     }
//   }

//   // async function handleImageUpload() {
//   //   const formData = new FormData();
//   //   formData.append("image", imageFile);

//   //   try {
//   //     const response = await fetch("http://localhost:4001/api/v1/uploadImage", {
//   //       method: "POST",
//   //       body: formData,
//   //     });
//   //     if (response.ok) {
//   //       const result = await response.json();
//   //       console.log("Image uploaded successfully:", result);
//   //       toast({
//   //           title: "image",
//   //           description: "Image uploaded successfully",
//   //         })
//   //       return result;
//   //     } else {
//   //       throw new Error("Failed to upload image. Status: " + response.status);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error uploading image:", error);
//   //   }
//   // }

//   return {
//     handleChange,
//     imageSrc,
//     imageFile
//   };
// };
