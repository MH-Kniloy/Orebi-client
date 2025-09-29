
import { Button, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [allCategory, setAllcategory] = useState([]);
  const [allSubCategory, setAllSubcategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedSubCategory, setSelectedSubCategory] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/category/showallcategory")
      .then((res) => setAllcategory(res.data.message));
    axios
      .get("http://localhost:8000/api/v1/category/showallsubcategory")
      .then((res) => setAllSubcategory(res.data.message));
  }, []);

const handleCreateProduct = async (e) => {
  e.preventDefault();
  const categoryId = allCategory.find(category=>category.name == selectedCategory)
  const subCategoryId = allSubCategory.find(subcategory=>subcategory.name == selectedSubCategory)

  const formData = new FormData(); 

  formData.append("name", e.target.name.value);
  formData.append("description", e.target.description.value);
  formData.append("price", e.target.price.value);
  formData.append("color", e.target.color.value);
  formData.append("size", e.target.size.value);
  formData.append("ram", e.target.ram.value);
  formData.append("storage", e.target.storage.value);
  formData.append("discount", e.target.discount.value);
  formData.append("category", categoryId._id);
  formData.append("subCategory", subCategoryId._id);

  if (e.target.image.files[0]) {
    formData.append("image", e.target.image.files[0]);
  }

  try {
    const res = await axios.post(
      "http://localhost:8000/api/v1/product/createproduct",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      }
    );
    toast.success(res.data.message);
  } catch (error) {
    toast.error(error.response?.data?.error || "An error occurred");
  }
};
  return (
    <>
      <div className="bg-gray-100 w-full py-20 px-[100px] h-screen overflow-y-scroll">
        <h2 className="text-5xl font-bold text-center mb-20">Create Product</h2>

        <form onSubmit={handleCreateProduct}>
          <Typography color="blue-gray" className="mb-5 text-2xl font-bold ">
            Product Name
          </Typography>

          <Input
            maxLength={16}
            label="Product Name"
            name="name"
            placeholder="Product Name"
            className="appearance-none mb-5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Typography color="blue-gray" className="my-5 text-2xl font-bold ">
            Description
          </Typography>

          <Textarea name="description" label="Description"></Textarea>
          <Typography color="blue-gray" className="my-5 text-2xl font-bold ">
            Price
          </Typography>

          <Input
            maxLength={16}
            label="Price"
            name="price"
            placeholder="Price"
            className="appearance-none mb-5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Typography color="blue-gray" className="my-5 text-2xl font-bold ">
            Color
          </Typography>

          <Input
            maxLength={16}
            label="Color"
            name="color"
            placeholder="Color"
            className="appearance-none mb-5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Typography color="blue-gray" className="my-5 text-2xl font-bold ">
            Size
          </Typography>

          <Input
            maxLength={16}
            label="Size"
            name="size"
            placeholder="Size"
            className="appearance-none mb-5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Typography color="blue-gray" className="my-5 text-2xl font-bold ">
            Ram
          </Typography>

          <Input
            maxLength={16}
            label="Ram"
            name="ram"
            placeholder="Ram"
            className="appearance-none mb-5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Typography color="blue-gray" className="my-5 text-2xl font-bold ">
            Storage
          </Typography>

          <Input
            maxLength={16}
            label="Storage"
            name="storage"
            placeholder="Storage"
            className="appearance-none mb-5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Typography color="blue-gray" className="my-5 text-2xl font-bold ">
            Image
          </Typography>

          <Input
            maxLength={16}
            label="Image"
            name="image"
            type="file"
            accept="image/*"
            placeholder="Image"
            className="appearance-none mb-5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Typography color="blue-gray" className="my-5 text-2xl font-bold ">
            Discount
          </Typography>

          <Input
            maxLength={16}
            label="Discount"
            name="discount"
            placeholder="Discount"
            className="appearance-none mb-5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Typography color="blue-gray" className="my-5 text-2xl font-bold ">
            Category
          </Typography>

          <Select
            onChange={(value) => setSelectedCategory(value)}
            name="category"
            label="Select Category"
          >
            {allCategory.map((category, index) => (
              <Option value={category.name} key={index}>
                {category.name} 
              </Option>
            ))}
          </Select>
          <Typography color="blue-gray" className="my-5 text-2xl font-bold ">
            SubCategory
          </Typography>

          <Select
            onChange={(value) => setSelectedSubCategory(value)}
            name="subcategory"
            label="Select SubCategory"
          >
            {allSubCategory.map((subcategory, index) => (
              <Option value={subcategory.name} key={index}>
                {subcategory.name}
              </Option>
            ))}
          </Select>
          <Button type="submit" size="lg" className="mt-5">
            
            Create Product
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;