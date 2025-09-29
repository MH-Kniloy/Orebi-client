import React from 'react'

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

      const [open, setOpen] = React.useState(0);

      const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
      };

  return (
    <>
      <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl bg-gray-200 shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Dashboard
          </Typography>
        </div>
        <List>
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  E-Commerce
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <NavLink to="/dashboard/createproduct">
                  <ListItem className="hover:bg-black hover:text-white font-bold active:bg-black">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Create Products
                  </ListItem>
                </NavLink>
                <NavLink to="/dashboard/createcategory">
                  <ListItem className="hover:bg-black hover:text-white font-bold">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Create Category
                  </ListItem>
                </NavLink>
                <NavLink to="/dashboard/categorylist">
                  <ListItem className="hover:bg-black hover:text-white font-bold">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Category List
                  </ListItem>
                </NavLink>
              </List>
            </AccordionBody>
          </Accordion>
        </List>
      </Card>
    </>
  );
}

export default Sidebar