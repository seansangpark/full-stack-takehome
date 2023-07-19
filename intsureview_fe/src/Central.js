import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";

const Central = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    email: "",
    isSubscribed: false,
  });
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // handle email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");

    try {
      const response = await fetch("http://localhost:8000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("User registration successful!");
      } else {
        console.error("Failed to register user.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

    console.log({ formData });

    setFormData({
      firstName: "",
      lastName: "",
      birthday: "",
      email: "",
      isSubscribed: false,
    });
  };

  return (
    <Box
      as="form"
      mt={4}
      onSubmit={handleSubmit}
    >
      <Heading
        as="h2"
        size="lg"
        mb={4}
      >
        Registration Form
      </Heading>
      <FormControl mb={4}>
        <FormLabel>First Name</FormLabel>
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          required
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Last Name</FormLabel>
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          required
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Birthday</FormLabel>
        <Input
          type="date"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
          required
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <p className="email-error-message">{emailError}</p>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Want to subscribe?</FormLabel>
        <Select
          name="isSubscribed"
          value={formData.isSubscribed}
          onChange={handleChange}
        >
          <option
            value=""
            disabled
          >
            Select an option
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </Select>
      </FormControl>
      <Button
        type="submit"
        colorScheme="teal"
      >
        Register
      </Button>
    </Box>
  );
};

export default Central;
