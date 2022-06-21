export class About {
  name: string;
  designation: string;
  phoneNumber: string;
  email: string;
  city: string;
  country: string;
  about: string;

  constructor(
    name: string = "Your Name",
    designation: string = "Designation",
    phoneNumber: string = "814682xxx09",
    email: string = "youremail@address.com",
    city: string = "City",
    country: string = "Country",
    about: string = "about"
  ) {
    this.name = name;
    this.designation = designation;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.country = country;
    this.city = city;
    this.about = about;
  }
}
