import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
  
  export function LogInForm({ isVisible, onClose }) {
    const handleClose = (event) => {
      if (event.target.id === "wrapper") onClose(event);
    };
  
    return (
      <div
        className="inset-0 flex justify-center items-center bg-gradient-to-br from-deep-orange-800 to-deep-orange-200 backdrop-blur-sm"
        //   onClick={() => onClose(handleClose)}
      >
        <div className="p-5 w-[600px] h-screen ">
          <Card
            className="flex flex-col w-[565px] h-[500px] sm:w-auto bg-white rounded-2xl z-80"
            shadow={false}
          >
            <Typography className="pl-12 pt-5 text-2xl text-black font-bold font-[Montserrat]">
              Log In
            </Typography>
            <Typography className="text-black mt-0 font-medium font-[Montserrat] pl-12 pt-2">
              To taste the flavors of freshness!
            </Typography>
            <Typography className=" mt-3 w-[475px] h-2 rounded-r-2xl bg-deep-orange-900"></Typography>
            <form className="ml-[50px] mt-5 mb-2 w-80 h-150 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                
                <Typography className="-mb-3 text-black font-semibold font-[Montserrat]">
                 Username / Email
                </Typography>
                <Input
                  type="email"
                  size="md"
                  placeholder="name@mail.com"
                  className="-mb-3 w-[470px] text-black font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-deep-orange-200 rounded-[30px]"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                
                <Typography className="-mb-3 text-black font-semibold font-[Montserrat]">
                  Password
                </Typography>
                <Input
                  type="password"
                  size="md"
                  placeholder="********"
                  className="-mb-3 w-[470px] text-black font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-deep-orange-100 rounded-[30px]"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Link to="/">
                <Button
                  className="w-[300px] ml-20 mt-10 hover:bg-deep-orange-900 bg-deep-orange-500 rounded-3xl text-white text-xl font-[Montserrat]"
                 
                >
                  log in
                </Button>
              </Link>
              <Typography
                color="gray"
                className="ml-20 text-gray font-[Montserrat] mt-8 text-center font-normal"
              >
                Don't have an account?{" "}
                <Link to="/signUp"
                  className=" text-gray font-[Montserrat] font-medium text-gray-900"
                >
                  Sign Up
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    );
  }
  