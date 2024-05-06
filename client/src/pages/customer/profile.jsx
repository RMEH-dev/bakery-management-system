import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/pagelayout";
import { Typography } from "@material-tailwind/react";

export default function CustomerProfile() {
  return (
    <PageLayout>
      <div className="bg-white bg-opacity-30">
      <Typography>
        <div className="flex font-bold font-[Montserrat] text-2xl pl-10 pt-10">
          <Link to="/products">My Profile</Link>
        </div>
      </Typography>
      </div>
    </PageLayout>
  );
}


