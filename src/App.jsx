import React from "react";

import Card from "./components/Card";

const App = () => {
  const jobPosts = [
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      companyName: "Meta",
      datePosted: "10 weeks ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Developer (Node.js)",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Chennai, India",
    },
    {
      brandLogo:
        "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Cloud Engineer (Azure)",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hr",
      location: "Delhi, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/888/888835.png",
      companyName: "Adobe",
      datePosted: "8 days ago",
      post: "UI/UX Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Kolkata, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/3840px-Salesforce.com_logo.svg.png",
      companyName: "Salesforce",
      datePosted: "2 days ago",
      post: "CRM Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Gurgaon, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkR3_XutLome56HE-Zh552ZDdVJ_ETq-G3gw&s",
      companyName: "Uber",
      datePosted: "12 days ago",
      post: "Mobile App Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Ahmedabad, India",
    },
  ];

  return (
    <div>
      <div className="parent">
        {jobPosts.map(function (elem) {
          return (
            <Card
              company={elem.companyName}
              date={elem.datePosted}
              post={elem.post}
              pay={elem.pay}
              location={elem.location}
              logo={elem.brandLogo}
              tag1={elem.tag1}
              tag2={elem.tag2}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
