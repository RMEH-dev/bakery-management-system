import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function SignUpForm({ isVisible, onClose }) {
  const handleClose = (event) => {
    if (event.target.id === "wrapper") onClose(event);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div
      className="inset-0 flex justify-center items-center bg-gradient-to-br from-deep-orange-800 to-deep-orange-200 backdrop-blur-sm"
      //   onClick={() => onClose(handleClose)}
    >
      <div className="p-5 w-[600px] flex flex-col">
        <Card
          className="w-[565px] h-[900px] bg-white rounded-2xl z-80"
          shadow={false}
        >
          <Typography className="pl-12 pt-5 text-2xl text-black font-bold font-[Montserrat]">
            Sign Up
          </Typography>
          <Typography className="text-black mt-0 font-medium font-[Montserrat] pl-12 pt-2">
            Register to explore more!
          </Typography>
          <Typography className=" mt-3 w-[450px] h-2 rounded-r-2xl bg-deep-orange-900"></Typography>
          <form className="ml-[50px] mt-5 mb-2 w-80 h-150 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <div className="grid flex grid-cols-2 gap-5">
                <Typography className="-mb-3 text-black font-semibold font-[Montserrat]">
                  First Name
                </Typography>
                <Typography className="-mb-3 ml-16 text-black font-semibold font-[Montserrat]">
                  Last Name
                </Typography>
                <Input
                  size="md"
                  placeholder="abc"
                  className="-mb-3 text-black font-semibold font-[Montserrat]  border-deep-orange-200 focus:!border-deep-orange-900 bg-deep-orange-100  rounded-[30px]"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Input
                  size="md"
                  placeholder="xyz"
                  className="-mb-3 ml-16 text-black font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-deep-orange-100  rounded-[30px]"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Typography className="-mb-3 text-black font-semibold font-[Montserrat]">
                Username
              </Typography>
              <Input
                size="md"
                placeholder="firstName12"
                className="-mb-3 w-[470px] text-black font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-deep-orange-100 rounded-[30px]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography className="-mb-3 text-black font-semibold font-[Montserrat]">
                Email Address
              </Typography>
              <Input
                type="email"
                size="md"
                placeholder="name@mail.com"
                className="-mb-3 w-[470px] text-black font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-deep-orange-100 rounded-[30px]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography className="-mb-3 text-black font-semibold font-[Montserrat]">
                Contact No.
              </Typography>
              <Input
                type="tel"
                size="md"
                placeholder="077xxxxxxx"
                className="-mb-3 w-[470px] text-black font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-deep-orange-100 rounded-[30px]"
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
              <Typography className="-mb-3 text-black font-semibold font-[Montserrat]">
                Confirm Password
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
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-3 text-gray font-[Montserrat] flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="text-gray font-[Montserrat] flex items-center font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "mt-3 -ml-2.5 " }}
            />
            <Link to="/">
              <Button
                className="ml-10 mt-6 hover:bg-deep-orange-900 bg-deep-orange-500 rounded-3xl text-white text-xl font-[Montserrat]"
                fullWidth
              >
                sign up
              </Button>
            </Link>
            <Typography
              color="gray"
              className=" ml-14 text-gray font-[Montserrat] mt-4 text-center font-normal"
            >
              Already have an account?{" "}
              <Link
                to="/logIn"
                className=" text-gray font-[Montserrat] font-medium text-gray-900"
              >
                Log In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
}
