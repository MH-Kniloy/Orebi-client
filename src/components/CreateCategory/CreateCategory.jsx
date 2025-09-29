import { Button, Input, Textarea, Typography } from "@material-tailwind/react"

import axios from 'axios'
import { toast } from "react-toastify"

const CreateCategory = () => {
    const handleCreatecategory = (e)=>{
        e.preventDefault()
        const categoryName = e.target.name.value
        const description = e.target.description.value
        axios.post("http://localhost:8000/api/v1/category/createcategory", {name:categoryName, description:description})
        .then((res)=>toast.success(res.data.message)).catch((error)=>toast.error(error.response.data.error))
    }
  return (
    <>
      <div className="bg-gray-100 w-full py-20 px-[100px]">
        <h2 className="text-5xl font-bold text-center mb-20">
          Create Category
        </h2>

        <form onSubmit={handleCreatecategory}>
          <Typography
            color="blue-gray"
            className="mb-5 text-2xl font-bold "
          >
            Category Name
          </Typography>

          <Input
            maxLength={16}
            label="Category Name"
            name="name"
            placeholder="Category Name"
            className="appearance-none mb-5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Typography
            color="blue-gray"
            className="my-5 text-2xl font-bold "
          >
            Description
          </Typography>

          <Textarea name="description" label="Description"></Textarea>
          <Button size="lg" className="mt-5">

          <input type="submit" value="Create category" className=" text-xl" />
          </Button>
        </form>
      </div>
    </>
  );
}

export default CreateCategory