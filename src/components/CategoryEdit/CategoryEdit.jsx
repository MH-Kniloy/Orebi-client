import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";


export default function CategoryEdit({ handleUpdateCategory, name }) {
  const [open, setOpen] = React.useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button onClick={handleOpen}>Edit</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Update Category
            </Typography>

            <Typography className="-mb-2" variant="h6">
              Category Name
            </Typography>
            <Input
              onChange={(e) => setCategoryName(e.target.value)}
              value={categoryName}
              label="Name"
              size="lg"
            />
            <Typography className="-mb-2" variant="h6">
              Category Description
            </Typography>
            <Textarea
              name="description"
              onChange={(e) => setCategoryDescription(e.target.value)}
              value={categoryDescription}
              label="Description"
            ></Textarea>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              onClick={() =>
                handleUpdateCategory(categoryName, categoryDescription, setOpen, name)
              }
              fullWidth
            >
              Update
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
