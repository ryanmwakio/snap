import React from "react";
import RequestsHeader from "./requestsHeader";
import Requests from "./requests";
import ContactsHeader from "./contactsHeader";
import Contacts from "./contacts";

function RightSection() {
  return (
    <div className="border-gray-200 p-6 max-h-screen overflow-y-scroll">
      <RequestsHeader />
      <Requests />
      <ContactsHeader />
      <Contacts />
    </div>
  );
}

export default RightSection;
