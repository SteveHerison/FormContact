export const formFields = [
  {
    id: "firstName",
    label: "First Name *",
    type: "text",
  },
  {
    id: "lastName",
    label: "Last Name *",
    type: "text",
  },
  {
    id: "email",
    label: "Email address *",
    type: "email",
  },
  {
    id: "generalEnquiry",
    label: "General Enquiry",
    name: "enquiryType",
    type: "radio",
  },
  {
    id: "supportRequest",
    label: "Support Request",
    name: "enquiryType",
    type: "radio",
  },
  {
    id: "message",
    label: "Message *",
    rows: 3,
    type: "textarea",
  },
  {
    id: "consent",
    label: "I consent being contacted by the team *",
    type: "checkbox",
  },
];
