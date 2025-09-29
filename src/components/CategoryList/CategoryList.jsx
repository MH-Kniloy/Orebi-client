import { Button, Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryEdit from "../CategoryEdit/CategoryEdit";
import { toast } from "react-toastify";
import CategoryDelete from "../CategoryDelete/CategoryDelete";

const TABLE_HEAD = ["SL NO.", "Name", "Description", "Edit","Delete"];

export default function CategoryList() {

  const [allCategory, setAllcategory] = useState([])
  const [refresh, setRefresh] = useState(false);
  useEffect(()=>{
   axios.get("http://localhost:8000/api/v1/category/showallcategory")
   .then((res)=>setAllcategory(res.data.message))
   
  },[refresh])

   const handleUpdateCategory = (
     categoryName,
     categoryDescription,
     setOpen,
     name
   ) => {
     console.log(categoryName, categoryDescription);
     axios
       .patch(
         `http://localhost:8000/api/v1/category/updatesinglecategory/${name}`,
         { name: categoryName, description: categoryDescription }
       )
       .then((res) => {toast.success(res.data.message) ,setRefresh((prev) => !prev )})
       .catch((error) => toast.error(error.response.data.error));
     
     setOpen((cur) => !cur);
   };
    
   const handleDeleteCategory = (setOpen,name) => {
    axios
      .delete(
        `http://localhost:8000/api/v1/category/deletesinglecategory/${name}`
      )
      .then((res) => {
        toast.success(res.data.message), setRefresh((prev) => !prev);
      })
      .catch((error) => toast.error(error.response.data.error));
     setOpen((open)=>!open);
   };
  return (
    <>
      <div className="w-full p-20 ">
        <h2 className="text-5xl font-bold text-center mb-16">Category List</h2>
        {allCategory == false ? (
          <div className="w-full flex justify-center">
            <Button variant="text" className="text-2xl" loading={true}>
              Loading
            </Button>
          </div>
        ) : (
          <Card className=" h-[95%] w-full overflow-y-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-bold leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allCategory.map(({ name, description }, index) => (
                  <tr key={name} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {description.substring(0, 30)}
                      </Typography>
                    </td>

                    <td className="p-4">
                      <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        <CategoryEdit
                          name={name}
                          handleUpdateCategory={handleUpdateCategory}
                        />
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        <CategoryDelete
                          name={name}
                          handleDeleteCategory={handleDeleteCategory}
                        />
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}
      </div>
    </>
  );
}
