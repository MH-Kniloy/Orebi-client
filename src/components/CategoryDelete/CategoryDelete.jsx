import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";

export default function CategoryDelete({ name, handleDeleteCategory }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" color="red">
        Delete
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          Are you sure you want to Delete {name} category?
        </DialogHeader>

        <DialogFooter>
          <Button
            variant="gradient"
            color="red"
            onClick={()=>handleDeleteCategory(setOpen,name)}
            className="mr-1"
          >
            <span>Yes</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>No</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
